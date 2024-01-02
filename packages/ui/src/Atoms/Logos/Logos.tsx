import { HTMLAttributes, useMemo } from 'react'
import { Suspense } from 'react'

import { logos } from './components'

export type LogoName = keyof typeof logos

type LogosProps = HTMLAttributes<HTMLSpanElement> & {
	logo: LogoName
}

export const Logos = ({ logo = 'Play', ...props }: LogosProps) => {
	const Logo = useMemo(() => logos[logo], [logo])

	if (!Logo) return null

	return (
		<Suspense fallback={null}>
			<Logo {...props} />
		</Suspense>
	)
}
