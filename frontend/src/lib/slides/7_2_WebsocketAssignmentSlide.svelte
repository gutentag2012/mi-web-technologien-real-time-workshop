<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";
    import * as env from '$env/static/public'
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-between pt-8">
        <h4 class="max-w-2xl" data-id="title">Aufgabe - Websocket Chat</h4>

        <div class="flex flex-col items-center">
            <h5 class="max-w-2xl" style="margin: 0">1. Client (client/index.js)</h5>

            <p class="max-w-7xl text-2xl">Nutze die <strong class="text-rose-600">WebSocket</strong> Browser API um von der URL "{env.PUBLIC_BACKEND_URL.replace("http", "ws").replace(":3000", "")}:8080" chat events zu erhalten und zu senden. Lies folgende Events aus und zeige die Daten im Frontend an und sende Chats an den Server:</p>

            <p class="max-w-7xl text-2xl">Der Server imitiert events in der Kommunikation, von daher sind alle gesendeten und empfangenen Daten im Format <strong>{'{'} "event": "some event", "data": ... {'}'}</strong>. Hier alle events:</p>

            <ol class="text-2xl">
                <li><strong class="text-rose-600">chat.initial</strong>: Hier sind die bisherigen Nachrichten als JSON encoded. Zeige diese im Frontend an.</li>
                <li><strong class="text-rose-600">chat.message</strong>: Eine neue Nachricht wurde gesendet, füge diese dem Frontend hinzu.</li>
                <li><strong class="text-rose-600">chat</strong>: Sende eine neue Nachricht an den Server mit dem <strong>username</strong> und der <strong>message</strong>.</li>
            </ol>


            <p class="max-w-7xl text-2xl">Das UI hat folgende methoden verfügbar</p>

            <ul class="text-2xl max-w-7xl">
                <li><strong class="text-rose-600">setFormDisabledState</strong>: Enabled oder Disabled die Felder im Chat form.</li>
                <li><strong class="text-rose-600">setConnectionStatus</strong>: Setzt den Verbindungsstatus im UI.</li>
                <li><strong class="text-rose-600">appendMessage</strong>: Fügt eine Nachricht unten an den Rest.</li>
                <li><strong class="text-rose-600">setOnSubmit</strong>: Setzt die Funktion die aufgerufen wird wenn das Form gesendet wird.</li>
            </ul>
        </div>

        <div class="flex flex-col items-center mb-24">
            <h5 class="max-w-2xl" style="margin-bottom: 0; margin-top: 16px">2. Server (server/index.js)</h5>

            <p class="max-w-7xl text-2xl">Ändere den Endpunkt im Frontend auf "ws://localhost:8080" und implementiere einen simplen WebSocketServer welcher:</p>

            <ol class="text-2xl">
                <li>Initial eine Liste an Chats als JSON encoded sendet.</li>
                <li>Gesendete Chats empfingt, speichert und an alle Clients weiterleitet.</li>
            </ol>

            <p class="max-w-7xl text-2xl">Eine Chat Message hat folgende Felder:</p>

            <ul class="text-2xl">
                <li><strong class="text-rose-600">username</strong>: Nutzer welche diese gesendet hat.</li>
                <li><strong class="text-rose-600">message</strong>: Die enthaltene Nachricht.</li>
                <li><strong class="text-rose-600">timestamp</strong>: Ein timestamp, welcher vom Server gesetzt werden soll.</li>
            </ul>
        </div>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>