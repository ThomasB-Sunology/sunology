import { HTMLAttributes, Suspense, useMemo } from 'react'

import { icons } from './components'

export type IconName = keyof typeof icons

type IconsProps = HTMLAttributes<HTMLSpanElement> & {
	icon: IconName
}

export const Icons = ({ icon, ...props }: IconsProps) => {
	const Icon = useMemo(() => icons[icon], [icon])

	if (!Icon) return null

	return (
		<Suspense fallback={null}>
			<Icon {...props} />
		</Suspense>
	)
}
