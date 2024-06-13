import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import {Server, WebSocket} from "ws";

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

@WebSocketGateway(8080)
export class WebsocketsGateway implements OnGatewayConnection{
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
}
