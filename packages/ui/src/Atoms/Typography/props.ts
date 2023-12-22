import { cva } from 'class-variance-authority'

export const typographyVariants = cva('', {
	variants: {
		intent: {
			chip: 'font-inter text-chip',
			'body-small': 'font-inter text-body-small',
			'body-medium': 'font-inter text-body-medium',
			'body-large': 'font-inter text-body-large',
			'tiny-title': 'text-tiny-title',
			'small-title': 'text-tiny-title md:text-small-title',
			'medium-title': 'text-small-title md:text-medium-title',
			'large-title': 'text-small-title md:text-large-title',
			'super-title': 'text-medium-title md:text-super-title',
			'mega-title':
				'text-[4rem] font-extrabold leading-none md:text-mega-title',
		},
	},
	defaultVariants: {
		intent: 'body-medium',
	},
})
