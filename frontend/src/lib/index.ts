// place files you want to import through the `$lib` alias in this folder.
import {writable} from "svelte/store";
import {type Api} from "reveal.js";
import * as env from '$env/static/public'

export const pausedTime = writable<Date | null>(null)
export const revealSlides = writable<Api>()
export const authToken = writable<string>()
export const votesStore = writable<Record<string, { votes: number[], ownVote?: number }>>({})

const websocket = new WebSocket(`${env.PUBLIC_BACKEND_URL}:8080`)

websocket.onmessage = e => {
  const message = JSON.parse(e.data)
  switch (message.event) {
    case "votes.init":
      votesStore.set(
        Object.fromEntries(Object.entries(message.data as Record<string, number[]>).map(([poll, votes]) => [poll, {votes}]))
      )
      break
    case "votes.changed":
      const voteData = message.data as {poll: string, votes: number[] }
      votesStore.update(v => {
        if(!(voteData.poll in v)) {
          v[voteData.poll] = {votes: []}
        }

        v[voteData.poll].votes = voteData.votes
        return v
      })
      break
    case "votes.reset":
      const resetData = message.data as {poll: string}
      votesStore.update(v => {
        if(!(resetData.poll in v)) {
          v[resetData.poll] = {votes: []}
        }

        v[resetData.poll].votes = v[resetData.poll].votes?.map(() => 0) ?? []
        v[resetData.poll].ownVote = -1
        return v
      })
      break
    case "slide.changed":
      revealSlides.update(r => {
        r.slide(message.data.indexH, message.data.indexV)
        return r
      })
      break
    case "paused":
      pausedTime.set(new Date(message.data))
      break
  }

}
websocket.onopen = () => {
  websocket.send(JSON.stringify({event: "slides"}))
  websocket.send(JSON.stringify({event: "votes"}))
}

export function changeSlide(indexH: number, indexV: number) {
  websocket.send(JSON.stringify({event: "slides.jumpTo", data: {indexH, indexV}}))
}

export function pauseSlides(timeStarted: number) {
  websocket.send(JSON.stringify({event: "slides.pause", data: {timeStarted}}))
}

export function votePoll(poll: string, voteIndex: number) {
  websocket.send(JSON.stringify({event: "vote", data: {poll, voteIndex}}))
}

export function resetVotes(poll: string) {
  websocket.send(JSON.stringify({event: "votes.reset", data: poll}))
}