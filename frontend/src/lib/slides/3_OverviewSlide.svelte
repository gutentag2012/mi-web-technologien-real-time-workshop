<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
import VotingButtons from "$lib/components/voting-buttons.svelte";
</script>

<Slide animate className="h-full">
    <Agenda selection={0} />
    <VotingButtons poll="test" />
    <div class="flex justify-center mt-2">
        <h3 class="max-w-4xl">Was ist Echtzeit Kommunikation und wofür braucht man das?</h3>
    </div>
</Slide>