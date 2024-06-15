<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
    const isInPrintMode = window.location.search.includes("print-pdf");
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <VotingButtons poll="websockets" title="WebSockets" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Eigenes Protocol (ws:// | wss://)</li>
                <li>2008 vorgestellt in HTML5 Spezifikation</li>
                <li>Seit ca. 2010 in meisten Browsern</li>
                <li>Seit 2024 nativ in NodeJS (v22)</li>
            </ul>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <VotingButtons poll="websockets" title="WebSockets" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets</h4>

        <div class="flex flex-row gap-8">
            <img src="WebSockets.svg" alt="websockets" width="400px">
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <VotingButtons poll="websockets" title="WebSockets" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Bidirektionale Kommunikation</li>
                <li>Client schickt 1 Request + weitere Events</li>
                <li>Server antwortet X mal</li>
                <li>Keine Header oder Cookies*</li>
                <li>1 eigene TCP Connection</li>
                <li>
                    Anwendung
                    <ul class="list-disc ml-8">
                        <li>Eigener Server</li>
                        <li>Echtzeit ist wichtig</li>
                        <li>Bidirectionale Kommunikation erforderlich</li>
                        <li>HTTP Overhead ist nicht erwünscht</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="flex flex-row gap-8 max-w-3xl text-xl">
            <table>
                    <thead>
                    <tr>
                        <th>Pro</th>
                        <th>Contra</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-nowrap">Echtzeit Kommunikation</td>
                        <td class="text-nowrap">Anderes Protocol</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Geringere Latency für Client -> Server</td>
                        <td class="text-nowrap">Nicht überall verfügbar (bsp. Firewall oder Proxy)</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Eine einzige Connection</td>
                        <td class="text-nowrap">Limitiert Verfügbar in älteren Browsern</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Bidirektional</td>
                        <td class="text-nowrap">Events nicht default</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <VotingButtons poll="websockets" title="WebSockets" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets<br>Pitfalls</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>HTTP Header oder Cookie Auth nur bei initialem UPGRADE Request möglich</li>
                <li>HTTP Spezifische Logik kann nicht wiederverwendet werden (Middlewares, Context, etc)</li>
                <li>Socket.IO ist extrem beliebt aber nur innerhalb von Socket.IO nutzbar</li>
            </ul>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <VotingButtons poll="websockets" title="WebSockets" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets<br>Client</h4>

        <pre style="margin: 0">client.js</pre>
        <pre>
            <code class="language-javascript" data-trim data-noescape data-line-numbers={isInPrintMode ? "" : "|1-2|4-7|9-12|14-17|19-22"} style="max-height: unset;">
              {`
                // Open new WebSocket connection
                const ws = new WebSocket('ws://localhost:8080');

                // Event listener for when the connection is opened
                ws.onopen = () => {
                    console.log('Connected to WebSocket server');
                };

                // Event listener for when the connection is closed
                ws.onmessage = (event) => {
                    console.log('Message from server:', event.data);
                };

                // Event listener for when the connection is closed
                ws.onclose = () => {
                    console.log('Disconnected from WebSocket server');
                };

                // Send a message to the server
                function sendMessage() {
                    ws.send('Hello, server!');
                }
              `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <VotingButtons poll="websockets" title="WebSockets" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets<br>Server</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Auch mit default <strong>http</strong> module möglich (UPGRADE handler)</li>
            </ul>
        </div>

        <pre style="margin: 0">server.js</pre>
        <pre>
            <code class="language-javascript" data-trim data-noescape data-line-numbers={isInPrintMode ? "" : "|1-2|3-4|6-9|11-13,27|15-18|20-23|25-26"} style="max-height: unset">
              {`
                // Using the 'ws' package, this could also be done with socket.io
                import {WebSocketServer} from 'ws';
                // Create a new WebSocket server
                const server = new WebSocketServer({ port: 8080 });

                // Event listener for when the server is up and running
                server.on('listening', () => {
                    console.log('Server is listening on port 8080')
                });

                // Event listener for when a client connects
                server.on('connection', (ws) => {
                    console.log('Client connected');

                    // Event listener for when a client sends a message
                    ws.on('message', (message) => {
                        console.log('Received:', message);
                    });

                    // Event listener for when a client disconnects
                    ws.on('close', () => {
                        console.log('Client disconnected');
                    });

                    // Send a message to the client
                    ws.send(\`Hello, welcome to the WebSocket server!\`);
                });
              `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

{#if !isInPrintMode}
<Slide animate className="h-full bg-topography">
    <Agenda selection={4}/>

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebSockets<br>Meinung</h4>

      <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="websocket_opinion" title="Meinung zu Websockets" options={["💪 Sehr nützliches Tool", "🤔 Sicher manchmal nützlich", "🙃 Zumindest besser als SSE", "💣 Sollte mit Vorsicht genossen werden", "👎 Einfach nicht praktikabel"]} />
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>
{/if}