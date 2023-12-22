import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	'inline-flex gap-2.5 items-center font-inter font-semibold rounded-full transition-all ease-in-out',
	{
		variants: {
			intent: {
				primary:
					'bg-electric-blue text-white hover:bg-mid-blue hover:shadow-[0px_2px_6px_0px_#A4A4E4] focus:bg-deep-blue focus:shadow-[0px_2px_6px_0px_#A4A4E4]',
				secondary:
					'bg-energy-yellow text-background-black hover:bg-hover-yellow focus:bg-deep-yellow',
				tertiary:
					'gap-0 bg-transparent text-copy-grey dark:text-energy-yellow hover:border-hover-grey hover:text-hover-grey hover:dark:text-hover-yellow focus:text-hover-grey focus:dark:text-deep-yellow focus:gap-2',
				outline:
					'bg-transparent text-copy-grey border-2 border-copy-grey hover:border-hover-grey hover:text-hover-grey hover:dark:border-light-grey hover:dark:text-light-grey focus:bg-faint-grey focus:border-hover-grey focus:text-hover-grey focus:dark:bg-default-grey focus:dark:border-faded-grey focus:dark:text-faded-grey',
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
