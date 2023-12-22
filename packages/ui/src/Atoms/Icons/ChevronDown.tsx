import React from 'react'

const ChevronDown = ({
	className,
	...props
}: React.HTMLAttributes<HTMLOrSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
			{...props}
			fill="none"
		>
			<path
				d="M6 9L12 15L18 9"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export default ChevronDown
