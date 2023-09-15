<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider
	} from 'flowbite-svelte';
	import ProviLogo from './ProviLogo.svelte';
	import SearchBar from './SearchBar.svelte';
	import Location from './Location.svelte';
	import Notification from './Icons/Notification.svelte';
	import Cart from './Icons/Cart.svelte';
	import ChevronDown from './Icons/ChevronDown.svelte';

	const links = [
		{ name: 'Beer & Hard Seltzer', href: '#' },
		{ name: 'Wine', href: '#' },
		{ name: 'Spirits', href: '#' },
		{ name: 'Non-Alcoholic', href: '#' },
		{ name: 'Distributors', href: '#' }
	];
</script>

<header class="grid gap-2">
	<div
		class="nav-wrapper grid grid-rows-3 md:grid-rows-2 [grid-template-columns:auto_1fr_auto] lg:grid-rows-2 lg:[grid-template-columns:auto_1fr_auto_auto] gap-x-4 items-center"
	>
		<div class="flex items-center gap-4 [grid-area:left]">
			<NavHamburger on:click={toggle} btnClass="md:visible" />
			<NavBrand href="/">
				<ProviLogo />
			</NavBrand>
		</div>
		<!-- SearchBar -->
		<div class="[grid-area:search]">
			<SearchBar />
		</div>
		<div class="[grid-area:user] md:justify-self-end">
			<Location />
		</div>
		<div class="flex items-center gap-4 [grid-area:right]">
			<!-- <div class="absolute h-5 w-5 rounded-full p-1 bg-secondary-800 text-white leading-3">
						6
					</div> -->
			<button class="flex items-center">
				<Notification />
			</button>

			<button class="flex items-center gap-2 rounded-xlarge px-3 py-2 bg-secondary-800 text-white">
				<Cart /> 9
			</button>
		</div>
		<Navbar let:hidden let:toggle class="hidden lg:block lg:[grid-column:1/_-1]">
			<NavUl {hidden} class="justify-evenly mx-auto">
				{#each links as link}
					<NavLi
						href={link.href}
						class="flex gap-2 items-center font-semibold border-bottom-1 border-transparent hover:border-primary-800"
						>{link.name}<ChevronDown /></NavLi
					>
				{/each}
			</NavUl>
		</Navbar>
	</div>
</header>

<style>
	.nav-wrapper {
		grid-template-areas:
			'left . . right'
			'user user user user'
			'search search search search';
	}
	@media (min-width: 700px) {
		.nav-wrapper {
			grid-template-areas:
				'left . user right'
				'search search search search'
				'nav nav nav nav';
		}
	}
	@media (min-width: 1024px) {
		.nav-wrapper {
			grid-template-areas:
				'left search user right'
				'nav nav nav nav';
		}
	}
</style>
