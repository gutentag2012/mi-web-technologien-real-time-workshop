import {Body, Controller, Delete, Get, Param, Post, Res, UseGuards} from '@nestjs/common';
import {EventEmitter2} from '@nestjs/event-emitter';
import {VotingService} from "./voting.service";
import {Response} from "express";
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('voting')
export class VotingController {
  constructor(private readonly votingService: VotingService, private readonly eventEmitter: EventEmitter2) {
  }

  @Post(':poll')
  public voteForOption(@Param("poll") poll: string, @Body() vote: { voteIndex: number }) {
    this.votingService.voteForOption(poll, vote.voteIndex);
  }

  @Get(':poll')
  public getVotesForOption(@Param("poll") poll: string, @Res() response: Response) {
    response.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    response.flushHeaders()

    response.write(`event: votes\ndata: ${JSON.stringify(this.votingService.getVotesForOption(poll))}\n\n`);

    const ChangeListener = ({poll: changedPoll, votes}: {poll: string, votes: number[]}) => {
      if (poll !== changedPoll) {
        return;
      }
      response.write(`event: votes\ndata: ${JSON.stringify(votes)}\n\n`);
    }
    this.eventEmitter.on('votes.changed', ChangeListener);

    const ResetListener = ({poll: changedPoll}: {poll: string}) => {
      if (poll !== changedPoll) {
        return;
      }
      response.write(`event: votes.reset\ndata:\n\n`);
    }
    this.eventEmitter.on('votes.reset', ResetListener);

    response.on('close', () => {
      console.log("Closed client")
      this.eventEmitter.off('votes.changed', ChangeListener);
      this.eventEmitter.off('votes.reset', ResetListener);
    });
  }

  @UseGuards(AuthGuard)
  @Delete("/:poll/reset")
  public resetVotes(@Param("poll") poll: string) {
    this.votingService.resetVotes(poll);
  }
}
