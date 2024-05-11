<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
import VotingButtons from "$lib/components/voting-buttons.svelte";

const votingOptions = ["Schon genutzt", "Ich kenne Tools", "Nicht bekannt"]
</script>

<Slide animate className="h-full">
    <Agenda selection={0} />

    <VotingButtons poll="real_time_knowledge" title="Kenntnisstand: Echtzeit im Code" options={votingOptions} />

    <div class="flex flex-col h-full items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Was ist Echtzeit Kommunikation?</h4>

        <div class="mt-4 max-w-3xl text-xl">
            <ul>
                <li>Datenaustausch</li>
                <li>2+ Parteien</li>
                <li>Kommunikation mit absehbarer Latenz</li>
                <li>Reaktion auf Erstellung / Aktualisierung</li>
                <li>
                    Anwendungsbereiche
                    <ul>
                        <li>Chat / Anrufe</li>
                        <li>Benachrichtigungen</li>
                        <li>Multiplayer Spiele</li>
                        <li>Navigations Apps</li>
                        <li>...</li>
                    </ul>
                </li>
                <li>
                    Technologien
                    <ul>
                        <li>Polling</li>
                        <li>Server-Sent Events</li>
                        <li>Websockets</li>
                        <li>WebRTC</li>
                        <li>WebTransport</li>
                        <li>Message Queues</li>
                        <li>...</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</Slide>