<script>
	import { Card, Button, Badge } from 'flowbite-svelte';
	import Deal from './Icons/Deal.svelte';
	import Integrated from './Icons/Integrated.svelte';
	export let image, alt, title, deal;
</script>

<Card padding="none" class="relative">
	<div class="absolute left-4 top-2">
		{#if deal}
			<Badge color="green" rounded class="!p-1 !font-semibold">
				<Deal />
				<span class="sr-only">Deal</span>
			</Badge>
		{/if}
	</div>
	<a href="/">
		<img class="p-8 rounded-t-lg" src={image} {alt} />
	</a>
	<div class="px-5 pb-5 grid gap-2">
		<a href="/">
			<h5 class="text-heading-4 font-semibold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
		</a>
		<div class="flex items-center gap-2">
			<Integrated />
			<p class="text-small font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Distributor name
			</p>
		</div>
	</div>
</Card>
