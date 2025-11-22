import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Outlet, createRootRoute, createRoute } from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})
export const routes = {
  home: '/',
  about: '/about',
}

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
