<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
</script>

<Slide animate className="h-full bg-topography">
    <div class="h-full flex flex-col">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 data-id="title">Agenda</h4>
            <Agenda big={true} />

            <div class="flex flex-col gap-1 bg-sky-300 rounded-lg p-4 text-sky-900 text-base mt-4">
                <div class="flex flex-row gap-1 items-center text-sky-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    <p class="font-semibold" style="margin: 0;">Info</p>
                </div>
                <span class="font-medium">Fragen gerne immer reinrufen, das hier ist kein Monolog.</span>
            </div>
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>