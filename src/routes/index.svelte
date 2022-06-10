<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<div class="content">
	<h1>SvelteKit-Prisma App</h1>

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
		<li><a href="https://kit.svelte.dev/docs/">SvelteKit Docs</a></li>
		<li><a href="https://www.prisma.io/docs/concepts/overview/what-is-prisma">Prisma Doc</a></li>
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
