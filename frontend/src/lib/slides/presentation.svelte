<script lang="ts">
  import Slide from '../components/slide.svelte'
  import Code from '../components/code.svelte'
  import Markdown from '../components/markdown.svelte'
  import Agenda from '../components/Agenda.svelte'
</script>


<Slide>
    <Slide animate>
        <Agenda selection={1} />
        <h3>Vertical Slide 1</h3>
    </Slide>
    <Slide animate>
        <Agenda selection={1} />
        <h3>Vertical Slide 2</h3>
    </Slide>
</Slide>

<Slide animate>
    <ul>
        <li>React</li>
        <li>Solid</li>
        <li>Svelte</li>
        <li>Vue</li>
    </ul>
</Slide>

<Slide animate>
    <ul>
        <li>Svelte ❤️</li>
        <li>React</li>
        <li>Solid</li>
        <li>Vue</li>
    </ul>
</Slide>

<Slide animate>
    <Code id="code" lines>
        {`
			function love() {
			}
	 `}
    </Code>
</Slide>

<Slide animate>
    <Code id="code" lines="2|1-3">
        {`
			function love() {
				console.log('Svelte')
			}
	 `}
    </Code>
</Slide>

<Markdown>
    {`
		## Markdown ❤️
		You can use **HTML** or **Markdown** for slides.
	`}
</Markdown>