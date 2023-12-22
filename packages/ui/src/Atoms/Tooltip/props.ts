import { cva } from 'class-variance-authority'

export const tooltipVariants = cva(
	'inline-flex gap-2 items-center text-body-medium',
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
				className: 'p-2 rounded-full font-inter',
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
