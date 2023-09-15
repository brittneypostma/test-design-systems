<script>
	export let component, title;
</script>

<a href="#" class="grid gap-2 text-center">
	<img src={component} alt={title} class="rounded-full w-48" />
	<span class="text-primary-800 hover:underline cursor-pointer">{title}</span>
</a>
