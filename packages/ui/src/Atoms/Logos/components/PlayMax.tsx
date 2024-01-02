import { cn } from '@sunology/utils'

import { LogosProps } from '../types'

export const PlayMax = ({ className, ...props }: LogosProps) => {
	return (
		<span
			className={cn(
				'font-britanica font-extrabold tracking-wide text-white',
				className
			)}
			{...props}
		>
			PLAY&nbsp;
			<span className="text-energy-yellow text-shadow-logo">Max</span>
		</span>
	)
}

export default PlayMax
