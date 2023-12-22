const sizes = {};

for (let i = 0; i < 500; i++) {
	sizes[i] = `${i / 4}rem`;
	sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

export default {
	colors: {
		black: '#0C0C0C',
		white: '#FFFFFF',

		'hover-grey': '#2C2B2B',
		'default-grey': '#666363',
		'copy-grey': '#9C9C9C',
		'light-grey': '#CFCFCF',
		'faint-grey': '#EDEDED',
		'faded-grey': '#F8F8F8',

		'energy-yellow': '#EDFF00',
		'hover-yellow': '#C3D100',
		'deep-yellow': '#7C8600',

		'electric-blue': '#0000FF',
		'mid-blue': '#0000DA',
		'deep-blue': '#0000B6',

		'background-black': '#1D1D1D',
		'dark-grey': '#404040',

		'dark-green': '#23251F',
		'medium-green': '#3B3F35',
		'lighter-green': '#474B3F',
		'faded-green': '#939A92',
	},
	fontSize: {
		chip: [
			'0.75rem',
			{
				lineHeight: '1.375rem',
				fontWeight: '600',
				letterSpacing: '.05em',
			},
		],
		'body-small': [
			'0.875rem',
			{
				lineHeight: '1.25rem',
				fontWeight: '400',
			},
		],
		'body-medium': [
			'1rem',
			{
				lineHeight: '1.25rem',
				fontWeight: '400',
			},
		],
		'body-large': [
			'1.125rem',
			{
				lineHeight: '1.5rem',
				fontWeight: '500',
			},
		],
		'tiny-title': [
			'2rem',
			{
				lineHeight: '1',
				fontWeight: '800',
			},
		],
		'small-title': [
			'2.5rem',
			{
				lineHeight: '1',
				fontWeight: '800',
			},
		],
		'medium-title': [
			'3.5rem',
			{
				lineHeight: '1',
				fontWeight: '800',
			},
		],
		'large-title': [
			'4.5rem',
			{
				lineHeight: '1',
				fontWeight: '800',
			},
		],
		'super-title': [
			'6rem',
			{
				lineHeight: '1',
				fontWeight: '800',
			},
		],
		'mega-title': [
			'7.875rem',
			{
				lineHeight: '1',
				fontWeight: '900',
			},
		],
	},
	extend: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			britanica: ['Britanica', 'sans-serif'],
		},
		aspectRatio: {
			square: '1 / 1',
		},
		spacing: {
			...sizes,
		},
		width: {
			...sizes,
		},
		minWidth: {
			...sizes,
		},
		height: {
			...sizes,
		},
		textShadow: {
			logo: '0 4px 20px rgba(237, 255, 0, 0.65)',
		},
	},
};
