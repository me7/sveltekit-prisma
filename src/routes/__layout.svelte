<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import 'uno.css'
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p><a href="/">Home</a></p>
</footer>

<style>
</style>
