<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";
    import * as env from '$env/static/public'
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-between pt-8">
        <h4 class="max-w-2xl" data-id="title">Aufgabe - SSE Notifications</h4>

        <div class="flex flex-col items-center">
            <h5 class="max-w-2xl" style="margin: 0">1. Client (client/index.js)</h5>

            <p class="max-w-7xl text-2xl">Nutze die <strong class="text-rose-600">EventSource</strong> Browser API um von dem Endpunkt "{env.PUBLIC_BACKEND_URL}/sse" notification events zu erhalten. Lies folgende Events aus und zeige die Daten im Frontend an:</p>

            <ol class="text-2xl">
                <li><strong class="text-rose-600">initial</strong>: Hier sind die bisherigen Daten als JSON encoded. Zeige diese in der Tabelle an.</li>
                <li><strong class="text-rose-600">notification</strong>: Eine neue Notification wurde gesendet, füge diese der Tabelle hinzu und flash die Nachricht.</li>
                <li><strong>BONUS</strong> <strong class="text-rose-600">notification-update</strong>: Es wurde vorher eine Notification gesendet die einen progress anzeigt, update diese mit den neuen informationen.</li>
            </ol>

            <p class="max-w-7xl text-2xl">Das UI hat folgende methoden verfügbar</p>

            <ul class="text-2xl">
                <li><strong class="text-rose-600">resetTable</strong>: Löscht alle Notifications im Table.</li>
                <li><strong class="text-rose-600">addToTable</strong>: Fügt eine Notification zum Table hinzu.</li>
                <li><strong class="text-rose-600">resetTable</strong>: Löscht alle Notifications im Table.</li>
                <li><strong class="text-rose-600">flashNotification</strong>: Flashed eine notification in einem toast.</li>
                <li><strong class="text-rose-600">updateFlashNotification</strong>: Updated eine notification in einem toast.</li>
            </ul>
        </div>

        <div class="flex flex-col items-center mb-24">
            <h5 class="max-w-2xl" style="margin-bottom: 0; margin-top: 16px">2. Server (server/sse-route.js)</h5>

            <p class="max-w-7xl text-2xl">Ändere den Endpunkt im Frontend auf "http://localhost:4000/sse" und implementiere einen simplen Server Sent Events Endpunkt welcher:</p>

            <ol class="text-2xl">
                <li>Initial eine Liste an Notifications als JSON encoded sendet.</li>
                <li>In einem random Interval eine neue Notification als notification event sendet.</li>
                <li><strong>BONUS</strong> Sende eine Progress Nachricht.</li>
            </ol>

            <p class="max-w-7xl text-2xl">Eine Notification hat folgende Felder:</p>

            <ul class="text-2xl">
                <li><strong class="text-rose-600">id</strong>: Einzigartige Zahl oder String.</li>
                <li><strong class="text-rose-600">title</strong>: Zusammenfassung der Nachricht.</li>
                <li><strong class="text-rose-600">message</strong>: Die gesamte Nachricht.</li>
                <li><strong class="text-rose-600">time</strong>: Der string timestamp der Nachricht.</li>
                <li><strong class="text-rose-600">type</strong> (optional): Kann "progress" sein um eine Progress Nachricht anzugeben.</li>
                <li><strong class="text-rose-600">progress</strong> (optional): Prozentualer Fortschritt einer Progress Nachricht.</li>
            </ul>
        </div>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>