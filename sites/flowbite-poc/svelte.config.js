import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
    alias: {
			$dev: './src/dev',
			$components: './src/lib/components',
			$internal: './src/internal',
			$shared: './src/lib/shared',
			$utils: './src/lib/utils',
			$types: './src/lib/types'
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
