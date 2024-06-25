<script lang="ts">
  import {onMount} from 'svelte'

  import 'reveal.js/dist/reveal.css'
  import 'reveal.js/dist/theme/night.css'
  // import 'reveal.js/plugin/highlight/monokai.css'

  import Slide from "$lib/components/slide.svelte";
  import Intro from './slides/1_IntroSlide.svelte'
  import Agenda from './slides/2_AgendaSlide.svelte'
  import Overview from './slides/3_OverviewSlide.svelte'
  import Polling from './slides/4_1_PollingSlide.svelte'
  import ShortPolling from './slides/4_2_ShortPollingSlide.svelte'
  import LongPolling from './slides/4_3_LongPollingSlide.svelte'
  import SSE from './slides/5_1_ServerSentEventsSlide.svelte'
  import SSEAssignment from './slides/5_2_ServerSentEventsAssignmentSlide.svelte'
  import Break from './slides/6_BreakSlide.svelte'
  import WebSocket from './slides/7_1_WebsocketSlide.svelte'
  import WebSocketAssignment from './slides/7_2_WebsocketAssignmentSlide.svelte'
  import Other from './slides/8_OtherSlide.svelte'
  import Summary from './slides/9_SummarySlide.svelte'
  import Thanks from './slides/10_ThanksSlide.svelte'

  import {authToken, changeSlide, revealSlides} from "$lib/index";
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";

  onMount(() => {
    revealSlides.set(new Reveal({
      plugins: [Markdown, Highlight, Notes],
      autoAnimateEasing: 'ease',
      autoAnimateDuration: 1,
      hash: true,
      disableLayout: true,
      controlsTutorial: false,
      controls: true,
      progress: false
    }))

    $revealSlides.initialize()

    if (!$authToken) {
      return
    }

    $revealSlides.on('slidechanged', (event: { indexh: number; indexv: number }) => {
        changeSlide(event.indexh, event.indexv)
    })
  })

  const isInPrintMode = window.location.search.includes("print-pdf");
</script>

<div class="reveal">
    <div class="slides">
        <Intro/>
        <Agenda/>

        <Slide animate>
            <Overview/>
        </Slide>

        <Slide animate>
            <Polling/>
            <ShortPolling/>
            <LongPolling/>
        </Slide>

        <Slide animate>
            <SSE />
        </Slide>
        <SSEAssignment />

        {#if !isInPrintMode}
            <Break />
        {/if}

        <Slide animate>
            <WebSocket />
        </Slide>
        <WebSocketAssignment />

        <Slide animate>
            <Other />
        </Slide>

        <Summary />

        {#if !isInPrintMode}
            <Thanks />
        {/if}
    </div>
</div>
