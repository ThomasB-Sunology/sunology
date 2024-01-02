import { cn } from '@sunology/utils'

import { LogosProps } from '../types'

const Play = ({ className, ...props }: LogosProps) => {
	return (
		<span
			className={cn(
				'font-britanica font-extrabold tracking-wide text-white',
				className
			)}
			{...props}
		>
			PLAY
		</span>
	)
}

export default Play
