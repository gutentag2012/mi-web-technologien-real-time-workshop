<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
</script>

<Slide animate className="h-full">
    <Agenda selection={1}/>

    <VotingButtons poll="short_polling" title="Short Polling" options={votingOptions} />

    <div class="flex flex-col h-full items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Short Polling</h4>

        <div class="flex flex-row gap-8">
            <img src="ShortPolling.svg" alt="short-polling" width="400px">
        </div>
    </div>
</Slide>

<Slide animate className="h-full">
    <Agenda selection={1}/>

    <VotingButtons poll="short_polling" title="Short Polling" options={votingOptions} />

    <div class="flex flex-col h-full items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">Short Polling</h4>

        <div class="flex flex-row gap-8 max-w-3xl text-xl">
            <img src="ShortPolling.svg" alt="short-polling" width="300px">

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
    </div>
</Slide>