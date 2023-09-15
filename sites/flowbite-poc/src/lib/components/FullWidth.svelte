<script>
	export let border = false;
	export let gradient = false;
</script>

<div
	class="w-full border-gray-300 mb-6"
	style="grid-column:1/-1"
	class:border-t-2={border}
	class:bg-blue-gradient={gradient}
	class:bg-primary-100={!gradient}
>
	<div class="mx-auto max-w-margin px-4 lg:px-2 py-8">
		<slot />
	</div>
</div>
