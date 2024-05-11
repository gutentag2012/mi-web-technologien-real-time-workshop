<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
</script>

<Slide animate className="h-full">
    <Agenda selection={1}/>

    <VotingButtons poll="long_polling" title="Long Polling" options={votingOptions} />

    <div class="flex flex-col h-full items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

        <div class="flex flex-row gap-8">
            <img src="LongPolling.svg" alt="long-polling" width="400px">
        </div>
    </div>
</Slide>

<Slide animate className="h-full">
    <Agenda selection={1}/>

    <VotingButtons poll="long_polling" title="Long Polling" options={votingOptions} />

    <div class="flex flex-col h-full items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Long Polling</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Erweiter Short Polling</li>
                <li>Server Anpassung</li>
                <li>Stateful Server</li>
            </ul>
        </div>

        <div class="flex flex-row gap-8 max-w-3xl text-xl">
            <img src="LongPolling.svg" alt="long-polling" width="300px">

            <div>
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
    </div>
</Slide>


<!-- TODO Maybe add code -->