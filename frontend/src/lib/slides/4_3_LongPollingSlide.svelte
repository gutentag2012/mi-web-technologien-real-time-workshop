<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <VotingButtons poll="long_polling" title="Long Polling" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

        <div class="flex flex-row gap-8">
            <img src="LongPolling.svg" alt="long-polling" width="400px">
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <VotingButtons poll="long_polling" title="Long Polling" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Auch regelmäßige Anfrage an Ressource</li>
                <li>Erst Antwort wenn neue Daten da sind</li>
                <li>In der Regel neue Anfrage nach Antwort</li>
                <li>Server Anpassung</li>
                <li>
                    Anwendung
                    <ul class="list-disc ml-8">
                        <li>Eigener Server</li>
                        <li>Echtzeit ist relevanter</li>
                        <li>Kurze Entwicklungszeit</li>
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
                        <td class="text-nowrap">Näher an Echtzeit als Short Polling</td>
                        <td class="text-nowrap">Nur eine Ressource pro Request</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Reduziert Netzwerkbelastung</td>
                        <td class="text-nowrap">Overhead durch Anzahl der Requests</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Simple auf Server zu implementieren</td>
                        <td class="text-nowrap">Nicht geeignet für "schnelle" Daten</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="text-nowrap">Stateverlust durch mehrere Requests</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <VotingButtons poll="long_polling" title="Long Polling" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

        <pre>
          client.js
            <code class="language-javascript" data-trim data-noescape data-line-numbers>
              {`
                function longPolling() {
                  fetch('https://api.example.com/updates')
                    .then(response => response.json())
                    .then(data => {
                      // do something with data
                      longPolling();
                    });
                }

                longPolling();
              `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <VotingButtons poll="long_polling" title="Long Polling" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

        <pre>
          server.js
            <code class="language-javascript" data-trim data-noescape data-line-numbers style="max-height: unset">
              {`
                function handleLongPollingRequest(req, res) {
                  // wait for new data
                  const unsubscribe = addEventListener('newData', data => {
                    res.json(data);
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
    <Agenda selection={1}/>

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

      <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="long_polling_opinion" title="Meinung zu Long Polling" options={["💪 Sehr nützliches Tool", "🤔 Sicher manchmal nützlich", "🙃 Zumindest besser als Short Polling", "💣 Sollte mit Vorsicht genossen werden", "👎 Einfach nicht praktikabel"]} />
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>
