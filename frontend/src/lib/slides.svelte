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

  import {authToken, pausedTime, revealSlides} from "$lib/index";
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  import * as env from '$env/static/public'

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
      const slideEventSource = new EventSource(`${env.PUBLIC_BACKEND_URL}/slide-control/listen`)

      slideEventSource.addEventListener("slide.changed", sse => {
        const eventData = JSON.parse(sse.data)
        $revealSlides.slide(eventData.indexH, eventData.indexV)
      })

      slideEventSource.addEventListener("paused", sse => {
        const eventData = JSON.parse(sse.data)
        pausedTime.set(new Date(eventData as number))
      })

      return
    }

    $revealSlides.on('slidechanged', (event: { indexh: number; indexv: number }) => {
      return fetch(`${env.PUBLIC_BACKEND_URL}/slide-control/jumpTo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$authToken}`
        },
        body: JSON.stringify({indexH: event.indexh, indexV: event.indexv})
      })
    })
  })
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

        <Break />

        <Slide animate>
            <WebSocket />
        </Slide>
    </div>
</div>
