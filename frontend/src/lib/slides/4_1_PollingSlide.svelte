<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
import VotingButtons from "$lib/components/voting-buttons.svelte";

</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 class="max-w-2xl" data-id="title">Polling</h4>

            <div class="mt-4 max-w-3xl text-xl">
                <ul>
                    <li>Reguläre Abfrage einer Ressource</li>
                    <li>Client &#8594; Server</li>
                    <li>Server reagiert nur</li>
                    <li>Nur Near-Realtime</li>
                </ul>
            </div>
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>