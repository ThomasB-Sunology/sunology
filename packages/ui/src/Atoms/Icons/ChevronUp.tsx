import React from 'react'

const ChevronUp = ({
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
				d="M18 15L12 9L6 15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default ChevronUp
