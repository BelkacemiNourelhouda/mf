import { Route } from '@tanstack/react-router'
import { AuthenticatedRouteRoute } from '@/pages/_authenticated' // ou rootRoute si public
import DepotDemandPage from './index'

export const formRoute = new Route({
    path: '/form',
    getParentRoute: () => AuthenticatedRouteRoute,
    component: DepotDemandPage,
})
