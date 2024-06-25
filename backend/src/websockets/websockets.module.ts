import { Module } from '@nestjs/common';
import { WebsocketsGateway } from './websockets.gateway';
import {VotingModule} from "../voting/voting.module";

@Module({
  providers: [WebsocketsGateway],
  imports: [VotingModule]
})
export class WebsocketsModule {}
