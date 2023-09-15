<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		CloseButton,
		Input,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider,
		Sidebar,
		SidebarItem,
		SidebarWrapper,
		SidebarGroup,
		MegaMenu,
		Avatar
	} from 'flowbite-svelte';
	export let visible = false;
	import ProviLogo from './ProviLogo.svelte';
	import Location from './Location.svelte';
	import Notification from './Icons/Notification.svelte';
	import ChevronDown from './Icons/ChevronDown.svelte';
	import Cart from './Icons/Cart.svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	export let openMenu = false;
	const links = [
		{ name: 'Beer & Hard Seltzer', href: '#' },
		{ name: 'Wine', href: '#' },
		{ name: 'Spirits', href: '#' },
		{ name: 'Non-Alcoholic', href: '#' },
		{ name: 'Distributors', href: '#' }
	];

	let menu = [
		{ name: 'About us', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact us', href: '/contact' },
		{ name: 'Library', href: '/library' },
		{ name: 'Newsletter', href: '/news' },
		{ name: 'Support Center', href: '/support' },
		{ name: 'Resources', href: '/resource' },
		{ name: 'Playground', href: '/play' },
		{ name: 'Terms', href: '/tersm' },
		{ name: 'Pro Version', href: '/pro' },
		{ name: 'License', href: '/license' }
	];
</script>

{#if visible}
	<Sidebar>
		<div class="absolute inset-0 min-h-screen z-drawer bg-gray-900/50">
			<SidebarWrapper class="bg-white w-[350px] min-h-screen">
				<div class="relative">
					<div>
						<SidebarGroup class="bg-white p-2">
							<div class="grid justify-items-start gap-4">
								<Button size="sm" color="alternative">Go to Provi admin</Button>
								<div class="flex gap-4 items-center">
									<Avatar class="bg-secondary-800 text-white">B</Avatar>
									<div>
										<p class="font-semibold">Hi, Brittney!</p>
										<a href="#" class="text-medium">View your profile</a>
									</div>
								</div>
							</div>
						</SidebarGroup>
						<SidebarGroup border>
							<SidebarItem label="Dashboard">
								<svelte:fragment slot="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
										/><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
										/></svg
									>
								</svelte:fragment>
							</SidebarItem>
							<SidebarItem label="Kanban" {spanClass}>
								<svelte:fragment slot="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
										/></svg
									>
								</svelte:fragment>
								<svelte:fragment slot="subtext">
									<span
										class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
										>Pro</span
									>
								</svelte:fragment>
							</SidebarItem>
							<SidebarItem label="Inbox" {spanClass}>
								<svelte:fragment slot="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
										/></svg
									>
								</svelte:fragment>
								<svelte:fragment slot="subtext">
									<span
										class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
										>3</span
									>
								</svelte:fragment>
							</SidebarItem>
							<SidebarItem label="Sidebar" href="/docs/components/sidebar">
								<svelte:fragment slot="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
										/></svg
									>
								</svelte:fragment>
							</SidebarItem>
							<SidebarItem label="Sign In">
								<svelte:fragment slot="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
										/></svg
									>
								</svelte:fragment>
							</SidebarItem>
							<SidebarItem label="Sign Up">
								<svelte:fragment slot="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
										/></svg
									>
								</svelte:fragment>
							</SidebarItem>
						</SidebarGroup>
					</div>
					<CloseButton on:click={() => (visible = false)} class="absolute right-2 top-2" />
				</div>
			</SidebarWrapper>
		</div>
	</Sidebar>
{/if}
<header>
	<div
		class="nav-wrapper grid grid-rows-3 md:grid-rows-2 [grid-template-columns:auto_1fr_auto] lg:grid-rows-2 lg:[grid-template-columns:auto_1fr_auto_auto] gap-x-4 items-center"
	>
		<div class="flex items-center gap-4 [grid-area:left]">
			<NavHamburger on:click={() => (visible = true)} btnClass="md:visible" />
			<NavBrand href="/">
				<ProviLogo />
			</NavBrand>
		</div>
		<!-- SearchBar -->
		<div class="[grid-area:search] hidden relative md:block">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 dark:text-white"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/></svg
				>
			</div>
			<input
				type="text"
				id="search-navbar"
				class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-secondary-800 focus:border-secondary-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white dark:focus:ring-secondary-800 dark:focus:border-secondary-800 hover:border-secondary-800"
				placeholder="Search..."
			/>
		</div>

		<div class="[grid-area:user] md:justify-self-end">
			<Location />
		</div>
		<div class="flex items-center gap-4 [grid-area:right]">
			<Button pill class="!p-2 bg-transparent hover:bg-transparent ring-secondary-900">
				<Notification class="text-primary-800" />
			</Button>
			<Button
				size="md"
				class="bg-secondary-800 text-white flex gap-2 hover:bg-secondary-800 ring-secondary-900"
			>
				<Cart class="text-white" />
				9
			</Button>
		</div>
		<!-- Navbar -->
		<Navbar class="hidden lg:block lg:[grid-column:1/_-1]">
			<NavUl class="justify-evenly mx-auto gap-8">
				{#each links as link, index}
					<NavLi
						href={link.href}
						class="flex gap-2 items-center font-semibold border-bottom-4 md:border-b-4 border-transparent hover:border-secondary-800 rounded-none"
					>
						<Chevron aligned>{link.name}</Chevron>
					</NavLi>
					<MegaMenu open={openMenu} full items={menu} let:item class="px-[20vw]">
						<a
							href={item.href}
							class="hover:underline hover:text-primary-600 dark:hover:text-primary-500"
							>{item.name}</a
						>
						<div slot="extra" class="">
							<h2 class="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
							<p class="mb-2 p-0 text-sm font-light text-gray-500 dark:text-gray-300">
								At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
							</p>
							<a
								href="/"
								class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
							>
								Explore our brands
								<span class="sr-only">Explore our brands </span>
								<svg
									class="ml-1 w-4 h-4"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</div>
					</MegaMenu>
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
