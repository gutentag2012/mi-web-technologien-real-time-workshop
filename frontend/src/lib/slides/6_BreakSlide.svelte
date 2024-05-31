<script lang="ts">
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";
    import {authToken, pausedTime} from "$lib";
    import * as env from '$env/static/public'

    const BREAK_DURATION = 10 * 60 * 1000

    let currentTime = new Date()

    const startBreak = () => {
        if (!$authToken) {
            return
        }

        const timeStarted = new Date()
        pausedTime.set(timeStarted)

        fetch(`${env.PUBLIC_BACKEND_URL}/slide-control/pause`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${$authToken}`
            },
            body: JSON.stringify({timeStarted: timeStarted.getTime()})
        })
    }

    $: {
        if($pausedTime) {
            currentTime = new Date()
            setInterval(() => {
                currentTime = new Date()
            }, 500)
        }
    }

    $: timeLeft = $pausedTime ? Math.max(0, BREAK_DURATION - (currentTime.getTime() - $pausedTime.getTime())) : BREAK_DURATION
    $: timeLeftMinutes = Math.floor(timeLeft / 1000 / 60)
    $: timeLeftSeconds = Math.floor(timeLeft / 1000) % 60
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={3}/>

    <VotingButtons poll="break" title="Wollt ihr eine Pause" options={["👍 Ja bitte", "👎 Ne ich mach immer durch"]} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center" on:click={startBreak}>
            <p class="text-8xl font-bold">{("0" + timeLeftMinutes).slice(-2)}:{("0" + timeLeftSeconds).slice(-2)}</p>
            <h4 class="max-w-2xl" data-id="title">Pause</h4>
        </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>