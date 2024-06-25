import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {Server, WebSocket} from "ws";
import {VotingService} from "../voting/voting.service";
import {EventEmitter2} from "@nestjs/event-emitter";

const newTimeStamp = () => {
  const date = new Date()
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()
  const hour = date.getHours().toString().padStart(2, "0")
  const minute = date.getMinutes().toString().padStart(2, "0")
  const seconds = date.getSeconds().toString().padStart(2, "0")

  return `${day}.${month}.${year} ${hour}:${minute}:${seconds}`
}

@WebSocketGateway(0)
export class WebsocketsGateway implements OnGatewayConnection{

  constructor(private readonly votingService: VotingService, private readonly eventEmitter: EventEmitter2) {
  }
  handleConnection(client: WebSocket) {
    client.send(JSON.stringify({event: "chat.initial", data: this.chatMessages}))
  }

  private chatMessages: {username: string, message: string}[] = []

  @WebSocketServer()
  server: Server

  @SubscribeMessage('chat')
  handleMessage(@MessageBody() data: { username: string, message: string, timestamp?: string },) {
    if(!data.username || !data.message) return
    if(data.username.length > 20 || data.message.length > 200) return

    data.timestamp = newTimeStamp()

    this.chatMessages.push(data)
    this.server.clients.forEach(client => client.send(JSON.stringify({event: "chat.message", data})))
  }

  @SubscribeMessage('slides')
  handleSlides(@ConnectedSocket() client: WebSocket) {
    const listenerSlides = (slide: {indexH: number, indexV: number}) => {
      client.send(JSON.stringify({event: "slide.changed", data: slide}))
    }
    this.eventEmitter.on("jumpToSlide", listenerSlides);
    const listenerPause = (pausedAt: number) => {
      client.send(JSON.stringify({event: "paused", data: pausedAt}))
    }
    this.eventEmitter.on("pause", listenerPause);

    client.on("close", () => {
      this.eventEmitter.off("jumpToSlide", listenerSlides);
      this.eventEmitter.off("pause", listenerPause);
    })
  }

  @SubscribeMessage('slides.jumpTo')
  handleSlidesJump(@MessageBody() slide: {indexH: number, indexV: number}) {
    this.eventEmitter.emit("jumpToSlide", slide);
  }

  @SubscribeMessage('slides.pause')
  handleSlidesPause(@MessageBody() pausedAt: { timeStarted: number }) {
    this.eventEmitter.emit("pause", pausedAt.timeStarted);
  }

  @SubscribeMessage('votes')
  handleVotes(@ConnectedSocket() client: WebSocket) {
    client.send(JSON.stringify({event: "votes.init", data: this.votingService.getAllVotes()}))

    const ChangeListener = (data: {poll: string, votes: number[]}) => {
      client.send(JSON.stringify({event: "votes.changed", data}))
    }
    this.eventEmitter.on('votes.changed', ChangeListener);

    const ResetListener = (data: {poll: string}) => {
      client.send(JSON.stringify({event: "votes.reset", data}))
    }
    this.eventEmitter.on('votes.reset', ResetListener);

    client.on('close', () => {
      this.eventEmitter.off('votes.changed', ChangeListener);
      this.eventEmitter.off('votes.reset', ResetListener);
    });
  }

  @SubscribeMessage('vote')
  handleVote(@MessageBody() data: {poll: string, voteIndex: number}) {
    this.votingService.voteForOption(data.poll, data.voteIndex);
  }

  @SubscribeMessage('votes.reset')
  handleVotesReset(@MessageBody() poll: string) {
    this.votingService.resetVotes(poll);
  }
}
