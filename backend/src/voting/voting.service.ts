import { Injectable } from '@nestjs/common';
import {EventEmitter2} from "@nestjs/event-emitter";

@Injectable()
export class VotingService {
  private _votes: Record<string, number[]> = {};

  constructor(private readonly eventEmitter: EventEmitter2) {
  }

  public voteForOption(poll: string, voteIndex: number) {
    if (!this._votes[poll]) {
      this._votes[poll] = [];
    }
    if(!(voteIndex in this._votes[poll])) {
      this._votes[poll][voteIndex] = 0;
    }

    this._votes[poll][voteIndex]++;
    this.eventEmitter.emit('votes.changed', {poll, votes: this._votes[poll]});
  }

  public getVotesForOption(optionId: string) {
    return this._votes[optionId] ?? [];
  }

  public resetVotes(poll: string) {
    this._votes[poll] = [];
    this.eventEmitter.emit('votes.reset', {poll});
  }
}
