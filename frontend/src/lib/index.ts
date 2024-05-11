// place files you want to import through the `$lib` alias in this folder.
import {writable} from "svelte/store";
import {type Api} from "reveal.js";
import * as env from '$env/static/public'

export const revealSlides = writable<Api>()
export const authToken = writable<string>()
export const votesStore = writable<Record<string, { votes: number[], ownVote?: number }>>({})

const eventSource = new EventSource(`${env.PUBLIC_BACKEND_URL}/voting`)
eventSource.addEventListener("votes.init", e => {
  const voteData = JSON.parse(e.data) as Record<string, number[]>
  votesStore.set(
    Object.fromEntries(Object.entries(voteData).map(([poll, votes]) => [poll, {votes}]))
  )
})
eventSource.addEventListener("votes.changed", e => {
  const voteData = JSON.parse(e.data) as {poll: string, votes: number[] }
  votesStore.update(v => {
    if(!(voteData.poll in v)) {
      v[voteData.poll] = {votes: []}
    }

    v[voteData.poll].votes = voteData.votes
    return v
  })
})
eventSource.addEventListener("votes.reset", e => {
  const eventData = JSON.parse(e.data) as {poll: string}
  votesStore.update(v => {
    if(!(eventData.poll in v)) {
      v[eventData.poll] = {votes: []}
    }

    v[eventData.poll].votes = v[eventData.poll].votes?.map(() => 0) ?? []
    v[eventData.poll].ownVote = -1
    return v
  })
})

votesStore.subscribe((data) => {
  console.log(data)
})