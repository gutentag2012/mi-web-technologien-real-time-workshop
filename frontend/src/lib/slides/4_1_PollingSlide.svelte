<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
import VotingButtons from "$lib/components/voting-buttons.svelte";

</script>

<Slide animate className="h-full">
    <Agenda selection={1} />

    <div class="flex flex-col h-full items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Polling</h4>

        <div class="mt-4 max-w-3xl text-xl">
            <ul>
                <li>Reguläre Abfrage einer Ressource</li>
                <li>Client &#8594; Server</li>
                <li>Server reagiert nur</li>
                <li>Nur Near-Realtime</li>
                <li>
                    Daten nicht immer Realtime
                    <ul>
                        <li>eg. Wetterstation updatet alle 3 Stunden die Daten</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</Slide>