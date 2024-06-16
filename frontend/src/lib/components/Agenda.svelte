<script>
    import TimeBadge from './time-badge.svelte'
    export let big = false
    export let selection = -1

    const isInPrintMode = window.location.search.includes("print-pdf");
</script>

{#if !isInPrintMode || big}
<ol class={big ? "text-xl" : "fixed top-4 left-4 text-sm"}>
    <li class:text-amber-300={selection === 0} class:opacity-60={!big && selection !== 0}>
        <TimeBadge big={big} time={5} />
        <span>Warum Echtzeit Kommunikation?</span>
    </li>
    <li class:text-amber-300={selection === 0} class:opacity-60={!big && selection !== 0}>
        <TimeBadge big={big} time={5} />
        <span>Stimmungsbild</span>
    </li>
    <li class:text-amber-300={selection === 1} class:opacity-60={!big && selection !== 1} class="mt-2">
        <TimeBadge big={big} time={10} />
        <span>Kapitel 1: Short Polling & Long Polling</span>
    </li>
    <!-- TODO If there is time, also add an assignment here -->
    <li class:text-amber-300={selection === 2} class:opacity-60={!big && selection !== 2} class="mt-2">
        <TimeBadge big={big} time={15} />
        <span>Kapitel 2: Server-Sent Events</span>
    </li>
    <li class:text-amber-300={selection === 2} class:opacity-60={!big && selection !== 2}>
        <TimeBadge big={big} time={25} />
        <span>Aufgabe: Benachrichtigungen</span>
    </li>
    <li class:text-amber-300={selection === 3} class:opacity-60={!big && selection !== 3} class="mt-2">
        <TimeBadge big={big} time={10} />
        <span>Pause</span>
    </li>
    <li class:text-amber-300={selection === 4} class:opacity-60={!big && selection !== 4} class="mt-2">
        <TimeBadge big={big} time={15} />
        <span>Kapitel 3: WebSockets</span>
    </li>
    <li class:text-amber-300={selection === 4} class:opacity-60={!big && selection !== 4}>
        <TimeBadge big={big} time={25} />
        <span>Aufgabe: Live-Chat</span>
    </li>
    <li class:text-amber-300={selection === 5} class:opacity-60={!big && selection !== 5} class="mt-2">
        <TimeBadge big={big} time={10} />
        <span>Andere Technologien</span>
    </li>
    <li class:text-amber-300={selection === 6} class:opacity-60={!big && selection !== 6} class="mt-2">
        <TimeBadge big={big} time={5} />
        <span>Zusammenfassung</span>
    </li>
</ol>
{/if}