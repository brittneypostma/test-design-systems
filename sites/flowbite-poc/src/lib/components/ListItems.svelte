<script>
	import Distributors from './Icons/Distributors.svelte';
	import Lists from './Icons/Lists.svelte';
	import OrderHistory from './Icons/OrderHistory.svelte';
	import ProviPay from './Icons/ProviPay.svelte';
	import QuickOrderList from './QuickOrderList.svelte';
	let component, title, description, color;
	export let wrap = false;
	const list = [
		{
			component: OrderHistory,
			color: '#CDECF5',
			title: 'Order History',
			description: '41 orders sent'
		},
		{
			component: Lists,
			color: '#FFF6D1',
			title: 'Lists',
			description: '25 lists'
		},
		{
			component: ProviPay,
			color: '#D4EEE2',
			title: 'ProviPay',
			description: '4 unpaid invoices'
		},
		{
			component: Distributors,
			color: '#CEDDFF',
			title: 'My distributors',
			description: '127 distributors'
		}
	];
</script>

<div class="items-center gap-8" class:grid-cols-2={wrap} class:grid={wrap} class:flex={!wrap}>
	{#each list as { component, title, description, color }}
		<QuickOrderList {color} {component} {title} {description} />
	{/each}
</div>
