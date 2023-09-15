<script>
	import { Label, Input } from 'flowbite-svelte';
	$: innerWidth = 0;
	$: placeholder = innerWidth < 1024 ? 'Search' : 'Search products, brands or distributors';
</script>

<svelte:window bind:innerWidth />
<form class={`relative w-full mt-1`}>
	<Label show={false} for="input-group-1" class="block mb-2" />
	<div class="absolute right-4 top-4 pointer-events-none">
		<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.5 14.5H14.71L14.43 14.23C15.41 13.09 16 11.61 16 10C16 6.41 13.09 3.5 9.5 3.5C5.91 3.5 3 6.41 3 10C3 13.59 5.91 16.5 9.5 16.5C11.11 16.5 12.59 15.91 13.73 14.93L14 15.21V16L19 20.99L20.49 19.5L15.5 14.5V14.5ZM9.5 14.5C7.01 14.5 5 12.49 5 10C5 7.51 7.01 5.5 9.5 5.5C11.99 5.5 14 7.51 14 10C14 12.49 11.99 14.5 9.5 14.5Z"
				fill="#002B48"
			/>
		</svg>
	</div>
	<input
		type="search"
		id="search"
		class="block w-full p-4 text-sm text-gray-900 rounded-medium bg-gray-50 focus:ring-secondary-800 focus:border-secondary-800 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary-800 dark:focus:border-secondary-800 border-none"
		{placeholder}
		required
	/>
</form>
