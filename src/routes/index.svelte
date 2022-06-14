<script>
</script>

<svelte:head>
	<title>OP4 Home</title>
</svelte:head>

<div class="content">
	<h1 class="text-blue m3">SvelteKit-Prisma App</h1>

	<p>
		This app is for tutorial, each folder will include each knowledge bits I've learn so far
	</p>
	<ul>
		<li><a href="/counter">Counter - hello world for reactive app</a></li>
		<li><a href="/todos">Todo - save to SQLite DB using prisma</a></li>
		<li><a href="/form">Form - Send data to server using FormData and JSON</a></li>
		<li><a href="/milligram">MilliGram.css - </a></li>
	</ul>
	<button class="btn">Demo button</button>
	<p>Reference</p>
	<ul>
		<li><a href="https://kit.svelte.dev/docs/" target="_blank">SvelteKit Docs</a></li>
		<li><a href="https://svelte.dev/docs" target="_blank">Svelte Docs</a></li>
		<li><a href="https://www.prisma.io/docs/concepts/overview/what-is-prisma" target="_blank">Prisma Doc</a></li>
		<li><a href="https://uno.antfu.me/" target="_blank">Unocss Interactive Docs</a></li>
		<li><a href="https://tailwindcss.com/docs" target="_blank">Tailwind Docs</a></li>
		<li><a href="https://tailwindui.com/components" target="_blank">Tailwind UI</a></li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
