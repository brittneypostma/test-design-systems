<script>
	import { NavUl, NavLi, Dropdown, DropdownItem, Chevron, Radio } from 'flowbite-svelte';
	let location = 'IL Test Retailer';
	import Location from './Icons/Location.svelte';
	import ChevronDown from './Icons/ChevronDown.svelte';
</script>

<nav class={`block p-0 w-full`}>
	<ul>
		<li class="flex w-full justify-center items-center gap-2 lg:justify-start">
			<!-- Location Icon -->
			<!-- {#if $LayoutStore.isDesktop} -->
			<div class="hidden lg:block">
				<Location />
				<!-- {/if} -->
			</div>
			<div>
				<span class="hidden lg:block text-small">Ordering for</span>
				<p class="font-semibold whitespace-nowrap">{location}</p>
			</div>
			<div>
				<ChevronDown />
			</div>
		</li>
	</ul>
</nav>
<Dropdown offset="4">
	<Radio
		bind:group={location}
		name="location"
		value="IL Test Retailer"
		class="hover:bg-primary-100 pl-2"
	>
		<DropdownItem class="-ml-4 hover:bg-transparent pointer-events-none"
			>IL Test Retailer</DropdownItem
		>
	</Radio>
	<Radio
		bind:group={location}
		name="location"
		value="Denver Test Retailer"
		class="hover:bg-primary-100 pl-2"
	>
		<DropdownItem class="-ml-4 hover:bg-transparent pointer-events-none"
			>Denver Test Retailer</DropdownItem
		>
	</Radio>
	<Radio
		bind:group={location}
		name="location"
		value="NY Test Retailer"
		class="hover:bg-primary-100 pl-2"
	>
		<DropdownItem class="-ml-4 hover:bg-transparent pointer-events-none"
			>NY Test Retailer</DropdownItem
		>
	</Radio>
</Dropdown>
