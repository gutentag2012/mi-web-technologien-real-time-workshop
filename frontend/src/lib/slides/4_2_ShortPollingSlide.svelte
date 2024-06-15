<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
    const isInPrintMode = window.location.search.includes("print-pdf");
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <VotingButtons poll="short_polling" title="Short Polling" options={votingOptions} />

  <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Short Polling</h4>

        <div class="flex flex-row gap-8">
            <img src="ShortPolling.svg" alt="short-polling" width="400px">
        </div>
    </div>

      <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
  </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <VotingButtons poll="short_polling" title="Short Polling" options={votingOptions} />

  <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Short Polling</h4>



        <div class="mt-4 max-w-3xl text-xl">
            <ul>
                <li>Server sendet immer Antwort</li>
                <li>Client hat einen festen Interval</li>
                <li>Datenänderung muss beim Client gecheckt werden</li>
                <li>
                    Anwendung
                    <ul class="list-disc ml-8">
                        <li>Fremder Server</li>
                        <li>100% Echtzeit nicht relevant</li>
                        <li>Bandbreite kein Problem</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="flex flex-row gap-8 max-w-3xl text-xl mt-4">
            <table>
                    <thead>
                    <tr>
                        <th>Pro</th>
                        <th>Contra</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-nowrap">Immer Implementierbar</td>
                        <td class="text-nowrap">Hohe Netzwerkbelastung</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Einfache Implementation</td>
                        <td class="text-nowrap">Interval bestimmt die "Echtzeit"</td>
                    </tr>
                    <tr>
                        <td class="text-nowrap">Rein Client-side</td>
                        <td class="text-nowrap">Schlecht Skalierbar</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="text-nowrap">Potentielles Rate-limiting</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="text-nowrap">Abfrage auch ohne Änderung</td>
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

    <VotingButtons poll="short_polling" title="Short Polling" options={votingOptions} />

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Short Polling</h4>

        <pre style="margin: 0">client.js</pre>
        <pre>
            <code class="h-full language-javascript" data-trim data-noescape data-line-numbers={isInPrintMode ? "" : "|12|2-5|7,8"}>
            {`
            function shortPoll() {
                fetch('/api/data')
                    .then(response => {
                        // Process the received response
                    })

                // Poll every 5 seconds
                setTimeout(shortPoll, 5000);
            }

            // Start Short Polling
            shortPoll();
            `}
            </code>
        </pre>
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>


{#if !isInPrintMode}
<Slide animate className="h-full bg-topography">
    <Agenda selection={1}/>

    <div class="h-full flex flex-col">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Short Polling</h4>

      <VotingButtons customContainerStyle="flex flex-col gap-1 items-end bg-neutral-800 p-4 rounded-bl-lg" poll="short_polling_opinion" title="Meinung zu Short Polling" options={["💪 Sehr nützliches Tool", "🤔 Sicher manchmal nützlich", "💣 Sollte mit Vorsicht genossen werden", "👎 Einfach nicht praktikabel"]} />
    </div>
        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>
{/if}