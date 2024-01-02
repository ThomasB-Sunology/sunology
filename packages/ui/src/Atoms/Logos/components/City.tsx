import { cn } from '@sunology/utils'

import { LogosProps } from '../types'

const City = ({ className, ...props }: LogosProps) => {
	return (
		<span
			className={cn(
				'font-britanica font-extrabold tracking-wide text-white',
				className
			)}
			{...props}
		>
			CITY
		</span>
	)
}

export default City
