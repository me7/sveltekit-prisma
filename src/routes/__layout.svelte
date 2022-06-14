<script lang="ts">
	import Header from "$comp/Header.svelte";
	import Sidebar from "$comp/Sidebar.svelte";
	import Footer from "$comp/Footer.svelte";
	// import 'milligram'
	// import "../milligram.css";
	// import "../tacit.css";
	// import "../app.css";
	import "uno.css";
</script>

<!-- docs on css grid https://developer.chrome.com/docs/devtools/css/grid/ -->
<div id="main" class="flex flex-col min-h-screen items-stretch">
	<div class="text-center bg-cyan"><Header /></div>
	<div id="content" class="flex grow">
		<Sidebar />
		<div class="p-1"><slot /></div>
	</div>
	<div class="text-center bg-lime"><Footer /></div>
</div>

<style>
</style>
