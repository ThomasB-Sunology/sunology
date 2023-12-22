const plugin = require('tailwindcss/plugin')

export default [
	require('@tailwindcss/forms'),
	require('@tailwindcss/typography'),
	require('@tailwindcss/aspect-ratio'),
	require('tailwind-scrollbar'),
	plugin(function ({ addUtilities }) {
		addUtilities({
			// https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
			'.horizontal-writing-tb': { 'writing-mode': 'horizontal-tb' },
			'.vertical-writing-rl': { 'writing-mode': 'vertical-rl' },
			'.vertical-writing-lr': { 'writing-mode': 'vertical-lr' },
			// https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
			'.orientation-mixed': { 'text-orientation': 'mixed' },
			'.orientation-upright': { 'text-orientation': 'upright' },
			'.orientation-sideways-right': {
				'text-orientation': 'sideways-right',
			},
			'.orientation-sideways': { 'text-orientation': 'sideways' },
			'.orientation-glyph': {
				'text-orientation': 'use-glyph-orientation',
			},
		})
	}),
	plugin(function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				'text-shadow': (value) => ({
					textShadow: value,
				}),
			},
			{ values: theme('textShadow') }
		)
	}),
]
