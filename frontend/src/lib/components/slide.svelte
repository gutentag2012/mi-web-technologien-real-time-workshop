<script lang="ts">
  import {onMount} from "svelte";

  export let id: string | null = null
  export let animate = false
  export let restart = false

  export let className = ''

  onMount(() => {
    const header = document.getElementById('slide-header')
    if(!header) return


  })
</script>


<section
        class={className}
        data-auto-animate-id={id}
        data-auto-animate={animate || null}
        data-auto-animate-restart={restart || null}
>
    <slot />
</section>
