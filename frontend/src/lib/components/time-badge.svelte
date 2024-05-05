<script>
    export let big = false
    export let selection = -1
</script>

<ol class={big ? "text-xl" : "fixed top-4 left-4 text-sm"}>
    <li class:text-amber-300={selection === 0} class:opacity-60={!big && selection !== 0}>
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span>Was ist Echtzeit Kommunikation und wofür braucht man das?</span>
    </li>
    <li class:text-amber-300={selection === 1} class:opacity-60={!big && selection !== 1} class="mt-2">
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span>Kapitel 1: Short Polling & Long Polling</span>
    </li>
    <li class:text-amber-300={selection === 1} class:opacity-60={!big && selection !== 1}>
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span class="italic font-semibold">Aufgabe 1 (20 min)</span>
    </li>
    <li class:text-amber-300={selection === 2} class:opacity-60={!big && selection !== 2} class="mt-2">
        <span class="px-2 py-1 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span>Kapitel 2: Server Sent Events</span>
    </li>
    <li class:text-amber-300={selection === 2} class:opacity-60={!big && selection !== 2}>
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span class="italic font-semibold">Aufgabe 2 (20 min)</span>
    </li>
    <li class:text-amber-300={selection === 3} class:opacity-60={!big && selection !== 3} class="mt-2">
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span>Kapitel 3: WebSockets</span>
    </li>
    <li class:text-amber-300={selection === 3} class:opacity-60={!big && selection !== 3}>
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span class="italic font-semibold">Aufgabe 3 (20 min)</span>
    </li>
    <li class:text-amber-300={selection === 4} class:opacity-60={!big && selection !== 4} class="mt-2">
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span>Andere Technologien (WebRTC, WebTransport)</span>
    </li>
    <li class:text-amber-300={selection === 4} class:opacity-60={!big && selection !== 4}>
        <span class="px-2 py-0.5 text-sm bg-gray-600 text-gray-50 rounded mr-2">5 min</span>
        <span>Comparison</span>
    </li>
</ol>