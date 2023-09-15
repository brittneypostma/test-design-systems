<script>
	import '../app.postcss';
	import Container from '$components/Container.svelte';
	import FullWidth from '$components/FullWidth.svelte';
	import '../app.postcss';
</script>

<div class="grid grid-rows-page grid-cols-page items-start wrapper min-h-screen">
	<slot />
</div>
<footer class="w-full bg-gray-700 text-white flex">
	<nav class="w-margin mx-auto px-4 lg:px-2 py-8 grid grid-cols-[150px_85px_75px] divide-x-2">
		<p class="text-white">&#xa9; 2023 Provi, Inc.</p>
		<a href="/" class="text-white px-3">Custom</a>
		<a href="/stock" class="text-white pl-3">Stock</a>
	</nav>
</footer>
