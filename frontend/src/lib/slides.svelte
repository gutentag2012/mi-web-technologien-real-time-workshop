<script lang="ts">
  import { onMount } from 'svelte'

  import 'reveal.js/dist/reveal.css'
  import 'reveal.js/dist/theme/night.css'
  import 'reveal.js/plugin/highlight/monokai.css'

  import Presentation from './slides/presentation.svelte'
  import Intro from './slides/1_IntroSlide.svelte'
  import Agenda from './slides/2_AgendaSlide.svelte'
  import Overview from './slides/3_OverviewSlide.svelte'

  import {revealSlides} from "$lib/index";
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
      progress: false
    }))

    $revealSlides.initialize()
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
