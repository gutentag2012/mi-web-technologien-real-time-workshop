<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
</script>

<Slide animate className="h-full">
    <div class="flex flex-col h-full items-center justify-center">
        <h4 data-id="title">Agenda</h4>
        <Agenda big={true} />
    </div>
</Slide>