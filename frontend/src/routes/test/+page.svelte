<script>
    import {onMount} from "svelte";

    onMount(() => {
    fetch("http://localhost:3000/sse").then(async res => {
        if(!res.body) return console.error('No body')
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        while (true) {
            const { done, value } = await reader.read()
            if (done) break
            buffer += decoder.decode(value)

            if(!buffer.includes('\n\n')) continue

            console.log(buffer)
        }
    })
    })
</script>
