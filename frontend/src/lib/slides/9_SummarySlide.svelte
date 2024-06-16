<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={6}/>

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Zusammenfassung</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Viele Technologien für Echtzeitkommunikation</li>
                <li>Unterschiedliche Directions (Uni-, Bi-)</li>
                <li>Verschiedene Technologien für verschiedene Anwendungsfälle</li>
            </ul>
        </div>

        <div class="flex flex-row gap-8">
            <img src="decision.svg" alt="decisions" width="1200px">
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>