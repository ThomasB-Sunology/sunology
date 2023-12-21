import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "./props"
import { cn } from "@sunology/utils"


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & 
    {
        asChild?: boolean
    }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, intent, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ intent, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
