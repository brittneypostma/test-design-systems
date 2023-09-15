<script>
	import ActionBar from '$components/ActionBar.svelte';
	import Container from '$components/Container.svelte';
	import FullWidth from '$components/FullWidth.svelte';
	import StockHeader from '$lib/components/StockHeader.svelte';
	import { Card, Button, Carousel } from 'flowbite-svelte';
	import drinks from '$lib/assets/drinks.png';
	import agave from '$lib/assets/agave.png';
	import rose from '$lib/assets/rose.png';
	import rtd from '$lib/assets/rtd.png';
	import QuickOrderList from '$components/QuickOrderList.svelte';
	import ListItems from '$components/ListItems.svelte';
	import ProductCard from '$components/ProductCard.svelte';
	import one from '$lib/assets/1.jpg';
	import two from '$lib/assets/2.jpg';
	import three from '$lib/assets/3.png';
	import four from '$lib/assets/4.png';
	import five from '$lib/assets/5.jpg';
	import cans from '$lib/assets/cans.jpg';
	import mugs from '$lib/assets/mugs.jpg';
	import wine from '$lib/assets/wine.jpg';
	import spirits from '$lib/assets/spirits.jpg';
	import nonAlcoholic from '$lib/assets/non-alcoholic.jpg';
	import BrowseLink from '$components/BrowseLink.svelte';

	let vCard = false;

	const links = [
		{
			title: 'Beer',
			component: mugs
		},
		{
			title: 'Cans',
			component: cans
		},
		{
			title: 'Wine',
			component: wine
		},
		{
			title: 'Spirits',
			component: spirits
		},
		{
			title: 'Non-Alcoholic',
			component: nonAlcoholic
		}
	];

	const cards = [
		{
			deal: true,
			image: one,
			title: 'Michelob Ultra',
			alt: 'Michelob Ultra'
		},
		{
			deal: true,
			image: two,
			title: 'Bud Light',
			alt: 'Bud Light'
		},
		{
			deal: false,
			image: three,
			title: 'Pabst Blue Ribbon',
			alt: 'Pabst Blue Ribbon'
		},
		{
			deal: true,
			image: four,
			title: 'Budweiser',
			alt: 'Budweiser'
		},
		{
			deal: false,
			image: five,
			title: 'Stella Artois',
			alt: 'Stella Artois'
		}
	];
</script>

<Container>
	<StockHeader />
</Container>
<FullWidth border gradient>
	<div class="grid gap-10">
		<ActionBar />
		<div class="flex gap-2">
			<Card class="w-1/3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-12 h-12 mb-2text-gray-500 dark:text-gray-400"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
					/></svg
				>
				<a href="/">
					<h4 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						New features on Provi
					</h4>
				</a>
				<p class="mb-6 font-normal text-gray-500 dark:text-gray-400">
					Go to this step by step guideline process on how to certify for your weekly benefits:
				</p>
				<a href="/" class="inline-flex items-center hover:underline">
					See what's new
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 ml-2"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/></svg
					>
				</a>
			</Card>
			<!-- Card -->
			<div
				class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col-reverse p-4 w-1/3"
			>
				<img class="rounded-b-lg" src={drinks} alt="" />
				<div class="pt-3 flex-[auto]">
					<div class="flex-auto">
						<a href="/"
							><h4 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
								Easily order again
							</h4></a
						>
					</div>
				</div>
			</div>

			<Card class="w-1/3 text-primary-800">
				<a href="/" class="mb-2">
					<h4 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						My distributor catalogs
					</h4>
				</a>
				<ListItems wrap />
			</Card>
		</div>
	</div>
</FullWidth>
<FullWidth>
	<h3 class="text-heading-2 font-semibold mb-6 text-center">Discover</h3>
	<div class="flex gap-4">
		<Card img={agave} reverse={vCard}>
			<h5 class="font-semibold text-primary-800 mb-2">Now Trending: Agave!</h5>
			<p class="mb-6 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
			<Button class="bg-primary-800" size="sm">
				Learn more <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 ml-2"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/></svg
				>
			</Button>
		</Card>
		<Card img={rose} reverse={vCard}>
			<h5 class="font-semibold text-primary-800 mb-2">Now Trending: Agave!</h5>
			<p class="mb-6 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
			<Button class="bg-primary-800" size="sm">
				Learn more <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 ml-2"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/></svg
				>
			</Button>
		</Card>
		<Card img={rtd} reverse={vCard}>
			<h5 class="font-semibold text-primary-800 mb-2">Now Trending: Agave!</h5>
			<p class="mb-6 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
			<Button class="bg-primary-800" size="sm">
				Learn more <svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 ml-2"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/></svg
				>
			</Button>
		</Card>
	</div>
</FullWidth>
<!-- Carousel -->
<Container>
	<h3 class="text-heading-2 font-semibold my-6">Best Sellers</h3>
	<div class="carousel-container relative flex flex-wrap gap-2 justify-between pb-6">
		{#each cards as card}
			<div class="carousel-item relative w-64 h-64 snap-start">
				<ProductCard {...card} />
			</div>
		{/each}
	</div>
</Container>
<!-- Browse by -->
<FullWidth>
	<h3 class="text-heading-2 font-semibold my-6 text-center">Browse by</h3>
	<div class="flex flex-wrap justify-center gap-16">
		{#each links as { component, title }}
			<BrowseLink {component} {title} />
		{/each}
	</div>
</FullWidth>
<!-- Grid -->
<Container>
	<div class="grid grid-cols-4 flex-wrap w-[1200px] mx-auto gap-4 justify-center pb-6 mt-6">
		{#each cards as card}
			<ProductCard {...card} />
		{/each}
		{#each cards as card}
			<ProductCard {...card} />
		{/each}
		{#each cards as card}
			<ProductCard {...card} />
		{/each}
		{#each cards as card}
			<ProductCard {...card} />
		{/each}
	</div>
</Container>
