<svelte:head>
	<title>OP4 Home</title>
	<meta name="description" content="Home page" />
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
	</ul>

	<p>Reference</p>
	<ul>
		<li><a href="https://svelte.dev/docs" target="_blank">Svelte Docs</a></li>
		<li><a href="https://kit.svelte.dev/docs/" target="_blank">SvelteKit Docs</a></li>
		<li><a href="https://www.prisma.io/docs/concepts/overview/what-is-prisma" target="_blank">Prisma Doc</a></li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
