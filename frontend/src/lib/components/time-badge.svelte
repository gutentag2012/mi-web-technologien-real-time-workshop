<script lang="ts">
    export let time: number
    export let big: boolean = false
</script>

<span class:py-0.5={big} class:text-sm={big} class:text-xs={!big} class="px-1 bg-gray-600 text-gray-50 rounded mr-1">{time} min</span>