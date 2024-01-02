import { lazy } from 'react'

export const icons = {
	ChevronDown: lazy(() => import('./ChevronDown')),
	ChevronUp: lazy(() => import('./ChevronUp')),
	Info: lazy(() => import('./Info')),
	Profile: lazy(() => import('./Profile')),
}
