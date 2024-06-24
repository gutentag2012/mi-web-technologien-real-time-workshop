<script lang="ts">
  import {onMount} from "svelte";
  import {authToken, votesStore} from "$lib";
  import * as env from '$env/static/public'
  import {fetchRetry} from "$lib/fetchRetry";

  export let customContainerStyle: string | undefined = undefined
  export let poll: string
  export let title: string | undefined = undefined
  export let options: string[] = ["Schon genutzt", "Davon gehört", "Noch unbekannt"]

  $: ownVote = $votesStore[poll]?.ownVote ?? -1
  $: votes = $votesStore[poll]?.votes ?? options.map(() => 0)
  $: totalVotes = votes.reduce((a, b) => a + b, 0)
  $: votingPercents = votes.map(vote => vote / Math.max(1, totalVotes) * 100)

  const vote = (voteIndex: number) => () => {
    if (ownVote !== -1) return
    if (!$authToken) {
      votesStore.update(store => {
        if (!store[poll]) {
          store[poll] = {votes}
        }
        store[poll].ownVote = voteIndex
        return store
      })
    }

      fetchRetry(`${env.PUBLIC_BACKEND_URL}/voting/${poll}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({voteIndex}),
    })
  }

  const reset = () => {
      fetchRetry(`${env.PUBLIC_BACKEND_URL}/voting/${poll}/reset`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${$authToken}`,
      },
    })
  }

  const isInPrintMode = window.location.search.includes("print-pdf");
</script>

{#if !isInPrintMode}
<div class={customContainerStyle ?? "fixed top-0 right-0 flex flex-col gap-1 items-end bg-neutral-800 p-4 pr-0 rounded-bl-lg z-50"}>
    {#if title}
        <h6 class="text-lg pl-4 pr-4 max-w-lg" style="margin-bottom: 8px;">{title}</h6>
    {/if}
    {#each options as option, index}
        <div class="h-12 w-full bg-neutral-700 relative flex justify-between items-center py-2 px-4 rounded-l-2xl gap-10">
            <button disabled={ownVote !== -1} class:peer={ownVote !== index} class="absolute inset-0 z-20"
                    on:click={vote(index)}/>
            <span class="text-sm text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">{(votingPercents[index] ?? 0).toFixed(2)}
                %</span>
            <span class="text-sm text-neutral-200 peer-disabled:text-neutral-400 font-semibold z-10">{option}</span>
            <div class="slider absolute right-0 h-full bg-neutral-600 rounded-l-2xl"
                 style="width: {votingPercents[index]}%"/>
        </div>
    {/each}
    {#if $authToken}
        <button on:click={reset} class="px-2 py-1 text-sm border border-neutral-900 hover:bg-neutral-900 rounded-sm">
            Reset
        </button>
    {/if}
</div>

<style>
    .slider {
        transition: width 0.3s cubic-bezier(.25, 1.24, .85, 1.27);
    }
</style>
{/if}