<script lang="ts">
  import '../app.pcss'
  import Slides from '../lib/slides.svelte'
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/atom-one-dark.min.css"
    >
    <title>Presentation</title>
</svelte:head>

<Slides />