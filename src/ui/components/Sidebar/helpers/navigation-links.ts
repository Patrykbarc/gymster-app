type NavigationLink = {
  name: string
  href: string
  children?: NavigationLink[]
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: 'dashboard',
    href: '/dashboard',
  },
  {
    name: 'workout',
    href: '/workout',
    children: [
      {
        name: 'Saved workouts',
        href: '/dashboard/saved-workouts',
      },
      {
        name: 'Saved workouts2',
        href: '/dashboard/saved-workouts2',
      },
      {
        name: 'Saved workouts3',
        href: '/dashboard/saved-workouts3',
      },
    ],
  },
]
