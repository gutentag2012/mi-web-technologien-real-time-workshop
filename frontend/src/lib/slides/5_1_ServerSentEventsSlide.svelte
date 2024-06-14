<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>2006 eingeführt in "WHATWG Web Applications 1.0"</li>
                <li>Ursprünglich Server-sent DOM events</li>
                <li>Seit ca. 2010 in meisten Browsern</li>
                <li>HTTP/1.1 -> Limitierte Anzahl an Connections</li>
                <li>HTTP/2 (2015) -> Connection Multiplexing</li>
            </ul>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)</h4>

        <div class="flex flex-row gap-8">
            <img src="ServerSentEvents.svg" alt="server-sent-events" width="400px">
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Regulärer HTTP-Request</li>
                <li>Client schickt 1 Request</li>
                <li>Server antwortet X mal</li>
                <li>Unidirektional (Server &#8594; Client)</li>
                <li>Text basierend</li>
                <li>1 kontinuierlicher Stream</li>
                <li>
                    Anwendung
                    <ul class="list-disc ml-8">
                        <li>Eigener Server</li>
                        <li>Echtzeit ist wichtig</li>
                        <li>Kurze Entwicklungszeit</li>
                        <li>Bidirectionale Kommunikation nicht gefordert</li>
                        <li>Only HTTP allowed</li>
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
                        <td class="text-nowrap">Nur Unidirektional</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Reduziert Netzwerkbelastung</td>
                        <td class="text-nowrap">Limitierte Anzahl an HTTP Connection auf HTTP/1.1</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Eine einzige Connection</td>
                        <td class="text-nowrap">Limitiert Verfügbar in älteren Browsern</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Einfach zu Entwickeln</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)<br>Message Pattern</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Felder separiert durch 1 <code>\n</code></li>
                <li>Messages separiert durch 2 <code>\n</code></li>
                <li>Erstes Leerzeichen wird ignoriert</li>
            </ul>
        </div>

      <pre class="max-w-4xl"><code class="language-markdown" data-trim data-noescape data-line-numbers="|1|2|3|4|5-6|7">{`
      : Comment (can be used for keep alive)
      retry: 10000
      id: 1234
      event: custom-event
      data:some data here
      data: Data in a new line
      \\n
      `}</code></pre>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)<br>Pitfalls</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Compression könnte messages buffern</li>
                <li>Reverse Proxy braucht extra config</li>
                <li>Unbrauchbar bei HTTP/1.1</li>
            </ul>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)<br>Client</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Automatischer reconnect</li>
                <li>Message parsing</li>
                <li>Chrome Devtools</li>
                <li>Authentication nicht über header</li>
                <li>Nur im Browser</li>
                <li>Kann nur GET schicken</li>
            </ul>
        </div>

        <pre style="margin: 0">client.js</pre>
        <pre>
            <code class="language-javascript" data-trim data-noescape data-line-numbers="|1|3-6|7-10">
              {`
                const eventSource = new EventSource('/events');

                // Listen for messages without event type
                eventSource.onmessage = (event) => {
                  console.log(event.data);
                };
                // Listen for messages with event type
                eventSource.addEventListener('custom-event', (event) => {
                  console.log(event.data);
                });
              `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)<br>Client (fetch)</h4>

        <pre style="margin: 0">client-with-fetch.js</pre>
        <pre>
            <code class="language-javascript" data-trim data-noescape data-line-numbers="|1|2-3|4|5|9-10|11|13|15-16" style="max-height: unset;">
              {`
                fetch("/events").then(async res => {
                    if(!res.body) return console.error('No body')
                    ir(!res.headers.get('content-type').includes('text/event-stream')) return console.error('No SSE')
                    const reader = res.body.getReader()
                    const decoder = new TextDecoder()
                    let buffer = ''

                    while (true) {
                        const { done, value } = await reader.read()
                        if (done) break
                        buffer += decoder.decode(value)

                        if(!buffer.includes('\\n\\n')) continue

                        const [messages, restBuffer] = parseMessages(buffer)
                        buffer = restBuffer
                        // do something with messages
                    }
                })
              `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <VotingButtons poll="sse" title="Server Sent Events" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)<br>Server</h4>

        <pre style="margin: 0">server.js</pre>
        <pre>
            <code class="language-javascript" data-trim data-noescape data-line-numbers="|2-6|8-12|14-19|21-24" style="max-height: unset">
              {`
                async function handleSSERequest(req, res) {
                  res.writeHead(200, {
                    'Content-Type': 'text/event-stream', // Tell Client to expect SSE
                    'Cache-Control': 'no-cache', // Disable caching
                    'Connection': 'keep-alive' // Tell Client to keep connection open
                  });

                  // send initial data
                  const currentData = await getData();
                  res.write(\`event:initial\\n\`)
                  res.write(\`data:\${JSON.stringify(currentData)}\\n\`);
                  res.write('\\n\\n');

                  // wait for new data
                  const unsubscribe = addEventListener('newData', data => {
                    res.write('event:change\\n');
                    res.write(\`data:\${JSON.stringify(data)}\\n\`);
                    res.write('\\n\\n');
                  });

                  // cleanup state when client closes connection
                  req.on('close', () => {
                    unsubscribe();
                  });
                }
              `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={2}/>

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Server Sent Events (SSE)<br>Meinung</h4>

      <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="sse_opinion" title="Meinung zu Server Sent Events" options={["💪 Sehr nützliches Tool", "🤔 Sicher manchmal nützlich", "🙃 Zumindest besser als Long Polling", "💣 Sollte mit Vorsicht genossen werden", "👎 Einfach nicht praktikabel"]} />
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>