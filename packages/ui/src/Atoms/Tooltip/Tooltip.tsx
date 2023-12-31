import * as React from 'react'
import { FC } from 'react'
import { type VariantProps } from 'class-variance-authority'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { tooltipVariants } from './props'
import { cn } from '@sunology/utils'

export type TooltipProps = React.HTMLAttributes<HTMLElement> &
	VariantProps<typeof tooltipVariants> & {
		asChild?: boolean
	}

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger: FC<TooltipProps> = ({
	className,
	intent,
	asChild,
	...props
}) => (
	<TooltipPrimitive.Trigger
		className={cn(tooltipVariants({ intent, asChild, className }))}
		asChild={asChild}
		{...props}
	/>
)

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={cn(
			'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 text-sm lg:text-base z-50 inline-block max-w-[18rem] rounded-2xl border-2 border-default-grey bg-hover-grey px-3 py-2 font-inter text-faint-grey shadow-sm dark:bg-hover-grey',
			className
		)}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
