import {Body, Controller, Get, Post, Req, Res, UseGuards} from '@nestjs/common';
import {EventEmitter2} from "@nestjs/event-emitter";
import {Response} from "express";
import {AuthGuard} from "../auth/auth.guard";

@Controller('slide-control')
export class SlideControlController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @UseGuards(AuthGuard)
  @Post("jumpTo")
  jumpToSlide(@Body() slide: {indexH: number, indexV: number}) {
    this.eventEmitter.emit("jumpToSlide", slide);
  }

  @UseGuards(AuthGuard)
  @Post("pause")
  pause(@Body() pausedAt: { timeStarted: number }) {
    this.eventEmitter.emit("pause", pausedAt.timeStarted);
  }

  @Get("listen")
  listenToSlide(@Res() response: Response) {
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      // Cors headers
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.flushHeaders()

    const listenerSlides = (slide: {indexH: number, indexV: number}) => {
      response.write(`event: slide.changed\ndata: ${JSON.stringify(slide)}\n\n`);
    }
    this.eventEmitter.on("jumpToSlide", listenerSlides);
    const listenerPause = (pausedAt: number) => {
      response.write(`event: paused\ndata:${pausedAt}\n\n`);
    }
    this.eventEmitter.on("pause", listenerPause);

    response.on("close", () => {
      this.eventEmitter.off("jumpToSlide", listenerSlides);
      this.eventEmitter.off("pause", listenerPause);
    })
  }

}
