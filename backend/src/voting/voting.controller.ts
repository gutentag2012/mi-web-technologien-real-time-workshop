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

  @Get()
  public getVotesForOption(@Res() response: Response) {
    response.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      //Cors headers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    response.flushHeaders()

    response.write(`event: votes.init\ndata: ${JSON.stringify(this.votingService.getAllVotes())}\n\n`);

    const ChangeListener = (data: {poll: string, votes: number[]}) => {
      response.write(`event: votes.changed\ndata: ${JSON.stringify(data)}\n\n`);
    }
    this.eventEmitter.on('votes.changed', ChangeListener);

    const ResetListener = (data: {poll: string}) => {
      response.write(`event: votes.reset\ndata: ${JSON.stringify(data)}\n\n`);
    }
    this.eventEmitter.on('votes.reset', ResetListener);

    response.on('close', () => {
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
