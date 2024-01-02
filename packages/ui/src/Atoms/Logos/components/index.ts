import { lazy } from 'react'

export const logos = {
	Play: lazy(() => import('./Play')),
	PlayMax: lazy(() => import('./PlayMax')),
	PlayGo: lazy(() => import('./PlayGo')),
	City: lazy(() => import('./City')),
}
