import Suiktheme from '@sunology/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	darkMode: 'class',
	corePlugins: {
		preflight: true,
	},
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	presets: [Suiktheme],
	theme: {},
};
