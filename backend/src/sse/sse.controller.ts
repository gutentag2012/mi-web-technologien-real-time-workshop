import {Controller, Get, Res} from '@nestjs/common';
import {Response} from "express";

@Controller('sse')
export class SseController {
  @Get()
  async sse(@Res() res: Response) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    res.write("retry: 10000\n\n");
    // This is a comment
    res.write(":ok\n\n");
    res.write("data:test\n")
    res.write("data:\\ntest\n\n")
    res.write("data:test\n\n")
    res.write(`data:${JSON.stringify({message: 'Hello World'})}\n\n`)

    res.end()
  }
}
