<script>
    import Slide from "$lib/components/slide.svelte";
    import Agenda from "$lib/components/Agenda.svelte";
    import VotingButtons from "$lib/components/voting-buttons.svelte";

    const votingOptions = ["Schon genutzt", "Mal gesehen", "Nicht bekannt"]
    const isInPrintMode = window.location.search.includes("print-pdf");
</script>

<Slide animate className="h-full bg-topography">
    <Agenda selection={5}/>

    <VotingButtons poll="webtransport" title="WebTransport" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebTransport</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>"New and improved WebSockets"</li>
                <li>Multiple Streams over one HTTP/3 Connection</li>
                <li>Gibt auch HTTP/2 Support (geringere Performance)</li>
                <li>
                    3 Transports:
                    <ul>
                        <li>Unidirection Stream (Server -> Client, Client -> Server)</li>
                        <li>Bidirectional Stream</li>
                        <li>Datagrams ("unreliable")</li>
                    </ul>
                </li>
                <li>
                    Use Cases:
                    <ul>
                        <li>Low Latency Games</li>
                        <li>Out-of-order Media Dateien</li>
                        <li>Server Push Benachrichtigungen</li>
                    </ul>
                </li>
                <li>Working Draft -> Neuer Standard entwickelt von IETF</li>
                <li>Media Over QUIC (moq) in Arbeit für Mediastreams</li>
                <li>Bis auf Safari Support seit 2022</li>
                <li>Socket.IO supports WebTransport</li>
            </ul>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>

<Slide animate className="h-full bg-topography">
    <Agenda selection={5}/>

    <VotingButtons poll="webrtc" title="WebRTC" options={votingOptions} />

    <div class="flex flex-col h-full">
    <div class="flex flex-col flex-1 items-center justify-center">
        <h4 class="max-w-2xl" data-id="title">WebRTC</h4>

        <div class="text-xl mb-4">
            <ul>
                <li>Peer to Peer Kommunikation</li>
                <li>Audio, Video und Data Channels</li>
                <li>
                    Protokolle:
                    <ul>
                        <li>Interactive Connectivity Establishment (ICE) für NAT Traversal</li>
                        <li>Session Traverse Utilities for NAT (STUN) für IP Adressen</li>
                        <li>Network Address Translation (NAT) für öffentliche IP Adressen</li>
                        <li>Traversing NATs and Firewalls (TURN) für Daten (Umgeht Symmetric NAT)</li>
                        <li>Session Description Protocol (SDP) für Media Streams</li>
                    </ul>
                </li>
                <li>Signaling Server für Verbindungsaufbau</li>
                <li>Für die meisten Conference Calls und Videokonferenzen genutzt</li>
                <li>
                    Use Cases:
                    <ul>
                        <li>Video Calls</li>
                        <li>File Sharing</li>
                        <li>Screen Sharing</li>
                        <li>Live Streaming</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

        <p data-id="footer" class="mt-auto text-lg">TH Köln - Webtechnologien - Joshua Gawenda</p>
    </div>
</Slide>