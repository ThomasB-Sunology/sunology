import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	'inline-flex items-center gap-2.5 rounded-full font-inter font-semibold transition-all ease-in-out',
	{
		variants: {
			intent: {
				primary:
					'bg-electric-blue text-white hover:bg-mid-blue hover:shadow-[0px_2px_6px_0px_#A4A4E4] focus:bg-deep-blue focus:shadow-[0px_2px_6px_0px_#A4A4E4]',
				secondary:
					'bg-energy-yellow text-background-black hover:bg-hover-yellow focus:bg-deep-yellow',
				tertiary:
					'bg-transparent gap-0 text-copy-grey hover:border-hover-grey hover:text-hover-grey focus:gap-2 focus:text-hover-grey dark:text-energy-yellow hover:dark:text-hover-yellow focus:dark:text-deep-yellow',
				outline:
					'bg-transparent border-2 border-copy-grey text-copy-grey hover:border-hover-grey hover:text-hover-grey focus:border-hover-grey focus:bg-faint-grey focus:text-hover-grey hover:dark:border-light-grey hover:dark:text-light-grey focus:dark:border-faded-grey focus:dark:bg-default-grey focus:dark:text-faded-grey',
			},
			size: {
				md: 'px-4 py-2',
				lg: 'px-8 py-4',
			},
		},
		defaultVariants: {
			intent: 'primary',
			size: 'md',
		},
	}
)
