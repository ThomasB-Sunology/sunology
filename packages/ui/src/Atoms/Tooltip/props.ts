import { cva } from 'class-variance-authority'

export const tooltipVariants = cva(
	'inline-flex items-center gap-2 text-body-medium',
	{
		variants: {
			intent: {
				dark: 'bg-hover-grey text-light-grey',
				neon: 'bg-energy-yellow text-black',
				white: 'bg-white text-black',
			},
			asChild: {
				true: '',
				false: '',
			},
		},
		compoundVariants: [
			{
				intent: ['dark', 'neon', 'white'],
				asChild: false,
				className: 'rounded-full p-2 font-inter',
			},
			{
				asChild: true,
				className: 'bg-transparent',
			},
		],
		defaultVariants: {
			intent: 'dark',
			asChild: false,
		},
	}
)
