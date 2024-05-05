<script lang="ts">
  import { onMount } from 'svelte'

  import 'reveal.js/dist/reveal.css'
  import 'reveal.js/dist/theme/night.css'
  import 'reveal.js/plugin/highlight/monokai.css'

  import Presentation from './slides/presentation.svelte'
  import Intro from './slides/1_IntroSlide.svelte'
  import Agenda from './slides/2_AgendaSlide.svelte'
  import Overview from './slides/3_OverviewSlide.svelte'

  import {authToken, revealSlides} from "$lib/index";
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
      controls: !!$authToken,
      progress: false
    }))

    $revealSlides.initialize()

    if(!$authToken) {
      console.log("Listen to slide change event")
      const slideEventSource = new EventSource(`${env.PUBLIC_BACKEND_URL}/slide-control/listen`)

      slideEventSource.addEventListener("slide.changed", sse => {
        const eventData = JSON.parse(sse.data)
        $revealSlides.slide(eventData.indexH, eventData.indexV)
      })

      return
    }

    $revealSlides.on('slidechanged', (event: {indexh: number; indexv: number}) => {
      fetch(`${env.PUBLIC_BACKEND_URL}/slide-control/jumpTo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            'Authorization': `Bearer ${$authToken}`
        },
        body: JSON.stringify({ indexH: event.indexh, indexV: event.indexv })
      })
    })
  })
</script>

<div class="reveal">
    <div class="slides">
        <Intro />
        <Agenda />
        <Overview />
        <Presentation />
    </div>
</div>
