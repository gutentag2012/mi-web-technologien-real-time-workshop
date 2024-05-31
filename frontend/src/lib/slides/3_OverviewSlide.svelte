<script>
import Slide from "$lib/components/slide.svelte";
import Agenda from "$lib/components/Agenda.svelte";
import VotingButtons from "$lib/components/voting-buttons.svelte";
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={0} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 class="max-w-2xl" data-id="title">Warum Echtzeit Kommunikation?</h4>

            <div class="mt-4 max-w-3xl text-xl">
                <ul>
                    <li>Datenaustausch von 2+ Parteien</li>
                    <li>Kommunikation mit absehbarer Latenz</li>
                    <li>Reaktion auf Erstellung / Aktualisierung von Resources</li>
                    <li>
                        Anwendungsbereiche
                        <ul>
                            <li>Chat / Anrufe</li>
                            <li>Benachrichtigungen</li>
                            <li>Multiplayer Spiele</li>
                            <li>Navigations Apps</li>
                            <li>Vieles mehr</li>
                        </ul>
                    </li>
                    <li>Verbesserte UX</li>
                    <li>Erhöhte Produktivität</li>
                    <li>Manches völlig unmöglich ohne</li>
                </ul>
            </div>
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>

    <aside class="notes">
        <ul>
            <li>Zu verbesserte UX: GitHub hat real-time communication in PRs -> GitLab auch, aber unreliable</li>
        </ul>
    </aside>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={0} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 class="max-w-2xl" data-id="title">Stimmungsbild</h4>

            <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="real_time_known" title="Hast du schonmal Echtzeitkommunikation im Web beobachtet (abseits von Chats)?" options={["👍 Ja klar!", "🤔 Ich denke nicht", "🤷‍ Keine Ahnung"]} />
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={0} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 class="max-w-2xl" data-id="title">Stimmungsbild</h4>

            <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="real_time_self_build" title="Hast du schonmal Echtzeitkommunikation selber eingebaut?" options={["🧰 Wann nicht?", "🤏 Ich habs zumindest mal im Code gesehen", "🤷‍ Ich wüsste nicht wie", "🤩 Nein, würde ich aber mal gerne"]} />
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={0} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 class="max-w-2xl" data-id="title">Stimmungsbild</h4>

            <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="real_time_feedback" title="Gab es schonmal Situationen wo du dir Echtzeit-Feedback gewünscht hättest wo es keins gab?" options={["👍 Hier und da schonmal, ja", "🤏 Vielleicht einmal oder so", "👎‍ Eigentlich nicht"]} />
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={0} />

    <div class="flex flex-col h-full">
        <div class="flex flex-col flex-1 items-center justify-center">
            <h4 class="max-w-2xl" data-id="title">Stimmungsbild</h4>

            <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="real_time_feedback" title="Was erwartet ihr aus dem Workshop mitzunehmen?" options={["Ich bin danach Profi für Echtzeitkommunikation", "Ich wüsste wo ich anfangen kann wenn ich was entwickel", "So einen groben Überblick ins Thema", "Och, da bin ich ganz offen"]} />

            <div class="text-base fragment">
                <p class="text-lg font-semibold">Meine Erwartung</p>
                <ul>
                    <li>Überblick auf most common Technologien</li>
                    <li>Startpunkt fürs Treffen von Entscheidungen</li>
                    <li>Startpunkt fürs Entwickeln von <code>Polling</code>, <code>SSE</code> und <code>WebSockets</code></li>
                </ul>
            </div>
        </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>