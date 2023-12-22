import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { typographyVariants } from './props'
import { cn } from '@sunology/utils'

type tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type TypographyProps = React.HTMLAttributes<HTMLHeadingElement> &
	VariantProps<typeof typographyVariants> & {
		as?: tags
		intent?: string
	}

const Typography = ({ intent, className, as, ...props }: TypographyProps) => {
	const Tag = as || 'p'

	return (
		<Tag
			className={cn(typographyVariants({ intent, className }))}
			{...props}
		/>
	)
}
Typography.displayName = 'Typography'

export { Typography }
