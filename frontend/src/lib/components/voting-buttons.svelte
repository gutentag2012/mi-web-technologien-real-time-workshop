<script lang="ts">
  import {onMount} from "svelte";
  import {authToken} from "$lib";
  import * as env from '$env/static/public'

  export let poll: string

  let ownVote = -1
  let votes = [0, 0, 0]
  $: totalVotes = votes.reduce((a, b) => a + b, 0)
  $: votingPercents = votes.map(vote => vote / Math.max(1, totalVotes) * 100)

  onMount(() => {
    const eventSource = new EventSource(`${env.PUBLIC_BACKEND_URL}/voting/${poll}`)

    eventSource.addEventListener("votes", e => votes = JSON.parse(e.data))
    eventSource.addEventListener("votes.reset", () => {
        votes = [0, 0, 0]
        ownVote = -1
    })
  })

  const vote = (voteIndex: number) => () => {
    if (ownVote !== -1) return
    if(!$authToken) {
        ownVote = voteIndex
    }

    fetch(`${env.PUBLIC_BACKEND_URL}/voting/${poll}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({voteIndex}),
    })
  }

  const reset = () => {
    fetch(`${env.PUBLIC_BACKEND_URL}/voting/${poll}/reset`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${$authToken}`,
      },
    })
  }
</script>

<div class="fixed top-4 right-4 flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded z-50">
    <div class="h-16 w-full bg-neutral-700 relative flex justify-between items-center py-2 px-4 rounded-l-2xl gap-10">
        <button disabled={ownVote !== -1} class:peer={ownVote !== 0} class="absolute inset-0 z-20" on:click={vote(0)}/>
        <span class="text-base text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">{(votingPercents[0] ?? 0).toFixed(2)}
            %</span>
        <span class="text-base text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">Schon genutzt</span>
        <div class="slider absolute right-0 h-full bg-neutral-600 rounded-l-2xl" style="width: {votingPercents[0]}%"/>
    </div>
    <div class="h-16 w-full bg-neutral-700 relative flex justify-between items-center py-2 px-4 rounded-l-2xl gap-10">
        <button disabled={ownVote !== -1} class:peer={ownVote !== 1} class="absolute inset-0 z-20" on:click={vote(1)}/>
        <span class="text-base text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">{(votingPercents[1] ?? 0).toFixed(2)}
            %</span>
        <span class="text-base text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">Davon gehört</span>
        <div class="slider absolute right-0 h-full bg-neutral-600 rounded-l-2xl" style="width: {votingPercents[1]}%"/>
    </div>
    <div class="h-16 w-full bg-neutral-700 relative flex justify-between items-center py-2 px-4 rounded-l-2xl gap-10">
        <button disabled={ownVote !== -1} class:peer={ownVote !== 2} class="absolute inset-0 z-20" on:click={vote(2)}/>
        <span class="text-base text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">{(votingPercents[2] ?? 0).toFixed(2)}
            %</span>
        <span class="text-base text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">Noch unbekannt</span>
        <div class="slider absolute right-0 h-full bg-neutral-600 rounded-l-2xl" style="width: {votingPercents[2]}%"/>
    </div>
    {#if $authToken}
        <button on:click={reset} class="px-2 py-1 text-sm border border-neutral-900 hover:bg-neutral-900 rounded-sm">Reset</button>
    {/if}
</div>

<style>
    .slider {
        transition: width 0.3s cubic-bezier(.25, 1.24, .85, 1.27);
    }
</style>