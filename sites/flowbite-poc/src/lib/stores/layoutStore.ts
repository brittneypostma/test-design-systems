import { writable, derived } from 'svelte/store';

type LayoutName = 'mobile' | 'desktop';

export const layoutStore = writable<LayoutName>('desktop');

// const getLayoutName = (): LayoutName => {
// 	if (!window) return 'desktop';
// 	return window.innerWidth >= 1024 ? 'desktop' : 'mobile';
// };

// const buildLayoutData = (layoutName: LayoutName): LayoutData => ({
// 	layoutName,
// 	isDesktop: layoutName === 'desktop',
// 	isMobile: layoutName === 'mobile'
// });

// const layoutStore = readable(null, (set) => {
// 	let layoutName = getLayoutName();
// 	set(buildLayoutData(layoutName));

// 	const handler = () => {
// 		const newLayoutName = getLayoutName();
// 		if (layoutName !== newLayoutName) {
// 			layoutName = newLayoutName;
// 			set(buildLayoutData(layoutName));
// 		}
// 	};

// 	window.addEventListener('resize', handler);

// 	return function stop() {
// 		window.removeEventListener('resize', handler);
// 	};
// });

// export default layoutStore;
