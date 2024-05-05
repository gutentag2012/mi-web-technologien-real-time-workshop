import { Module } from '@nestjs/common';
import { SlideControlController } from './slide-control.controller';

@Module({
  controllers: [SlideControlController]
})
export class SlideControlModule {}
