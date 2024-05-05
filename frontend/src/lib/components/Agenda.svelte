<script>
    import TimeBadge from './time-badge.svelte'
    export let big = false
    export let selection = -1
</script>

<ol class={big ? "text-xl" : "fixed top-4 left-4 text-sm"}>
    <li class:text-amber-300={selection === 0} class:opacity-60={!big && selection !== 0}>
        <TimeBadge big={big} time={5} />
        <span>Was ist Echtzeit Kommunikation und wofür braucht man das?</span>
    </li>
    <li class:text-amber-300={selection === 1} class:opacity-60={!big && selection !== 1} class="mt-2">
        <TimeBadge big={big} time={15} />
        <span>Kapitel 1: Short Polling & Long Polling</span>
    </li>
    <li class:text-amber-300={selection === 1} class:opacity-60={!big && selection !== 1}>
        <TimeBadge big={big} time={20} />
        <span>Aufgabe 1</span>
    </li>
    <li class:text-amber-300={selection === 2} class:opacity-60={!big && selection !== 2} class="mt-2">
        <TimeBadge big={big} time={15} />
        <span>Kapitel 2: Server Sent Events</span>
    </li>
    <li class:text-amber-300={selection === 2} class:opacity-60={!big && selection !== 2}>
        <TimeBadge big={big} time={20} />
        <span>Aufgabe 2</span>
    </li>
    <li class:text-amber-300={selection === 3} class:opacity-60={!big && selection !== 3} class="mt-2">
        <TimeBadge big={big} time={15} />
        <span>Kapitel 3: WebSockets</span>
    </li>
    <li class:text-amber-300={selection === 3} class:opacity-60={!big && selection !== 3}>
        <TimeBadge big={big} time={20} />
        <span>Aufgabe 3</span>
    </li>
    <li class:text-amber-300={selection === 4} class:opacity-60={!big && selection !== 4} class="mt-2">
        <TimeBadge big={big} time={10} />
        <span>Andere Technologien (WebRTC, WebTransport)</span>
    </li>
    <li class:text-amber-300={selection === 4} class:opacity-60={!big && selection !== 4}>
        <TimeBadge big={big} time={5} />
        <span>Comparison</span>
    </li>
</ol>