<script>
	export let component, title, description, color;
</script>

<figure class="flex items-center gap-4">
	<div class="p-2 rounded-sm" style={`background-color:${color}`}>
		<svelte:component this={component} {...$$restProps} />
	</div>
	<figcaption>
		<h3 class="font-semibold">{title}</h3>
		<p>{description}</p>
	</figcaption>
</figure>
