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

  @Get("listen")
  listenToSlide(@Res() response: Response) {
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive"
    });
    response.flushHeaders()

    const listener = (slide: {indexH: number, indexV: number}) => {
      response.write(`event: slide.changed\ndata: ${JSON.stringify(slide)}\n\n`);
    }
    this.eventEmitter.on("jumpToSlide", listener);

    response.on("close", () => {
      this.eventEmitter.off("jumpToSlide", listener);
    })
  }

}
