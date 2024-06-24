import {Controller, Get, Req, Res} from '@nestjs/common';
import {Response} from "express";
import {EventEmitter2} from "@nestjs/event-emitter";

let idGenerator = 0
const previousNotifications = [
  {
    id: idGenerator++,
    time: "12.06.2024 13:20:00.000",
    title: "Initial Message",
    message: "This is the initial message of this exercise",
  },
  {
    id: idGenerator++,
    time: "12.06.2024 13:25:00.000",
    title: "Important Message",
    message: "DO NOT PANIC! This is just a test message",
  },
  {
    id: idGenerator++,
    time: "13.06.2024 14:33:00.000",
    title: "GOOD JOB!",
    message: "You have successfully implemented the SSE endpoint... At least the initial data part :D",
  }
]

const newTimeStamp = () => {
  const date = new Date()
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()
  const hour = date.getHours().toString().padStart(2, "0")
  const minute = date.getMinutes().toString().padStart(2, "0")
  const seconds = date.getSeconds().toString().padStart(2, "0")
  const milliSeconds = date.getMilliseconds().toString().padStart(3, "0")

  return `${day}.${month}.${year} ${hour}:${minute}:${seconds}.${milliSeconds}`
}

@Controller('sse')
export class SseController {
  constructor(private readonly eventEmitter: EventEmitter2) {
  }
  @Get()
  async sse(@Res() res: Response, @Req() req: Request) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      // Cors headers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    });

    let messagesReceived = 0
    const messageGoal = 10
    const progressMessageId = idGenerator++

    const makeProgressNotification = () => {
      res.write(`event: ${messagesReceived ? "notification-update" : "notification"}\n`)
      res.write(`data:${JSON.stringify({id: progressMessageId, type: "progress", duration: 3, title: `Mission: Receive Notifications`, message: `Receive ${messageGoal} Notifications to close out this one.`, progress: messagesReceived / messageGoal * 100})}\n\n`)
    }
    makeProgressNotification()

    this.eventEmitter.emit("join", {
      id: idGenerator++,
      time: newTimeStamp(),
      title: "Welcome",
      message: "A new user has joined the SSE endpoint with the user agent " + (req.headers as any)["user-agent"],
      duration: 2,
    })

    res.write("event: initial\n")
    res.write(`data:${JSON.stringify(previousNotifications)}\n\n`)

    messagesReceived++
    makeProgressNotification()

    setTimeout(() => {
      const timedNotification = {
        id: idGenerator++,
        time: newTimeStamp(),
        title: "Timed Message",
        message: "This message was sent after 1 seconds of the initial data",
        duration: 2,
      }

      res.write("event: notification\n")
      res.write(`data:${JSON.stringify(timedNotification)}\n\n`)

      messagesReceived++
      makeProgressNotification()
    }, 1000)

    const onEvent = (data: unknown) => {
      res.write("event: notification\n")
      res.write(`data:${JSON.stringify(data)}\n\n`)

      messagesReceived++
      makeProgressNotification()
    }
    this.eventEmitter.on("join", onEvent)
    this.eventEmitter.on("leave", onEvent)

    res.on("close", () => {
      this.eventEmitter.off("join", onEvent)
      this.eventEmitter.off("leave", onEvent)
      this.eventEmitter.emit("leave", {
        id: idGenerator++,
        time: newTimeStamp(),
        title: "Goodbye",
        message: "A user has left the SSE endpoint",
        duration: 2,
      })
    })
  }
}
