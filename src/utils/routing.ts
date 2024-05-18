import type { Icons } from '#/components/icon'

export type Route = {
  label: string
  path: string
  icon: Icons
}

export type AppRoutes = Array<Route>

export const routes: AppRoutes = [
  {
    label: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    label: 'About',
    path: '/about',
    icon: 'user',
  },
  {
    label: 'Blog',
    path: '/blog',
    icon: 'blog',
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: 'send',
  },
]
