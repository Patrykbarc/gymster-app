import { Dumbbell, HomeIcon } from 'lucide-react'
import { ElementType } from 'react'

type NavigationLink = {
  name: string
  href: string
  icon?: ElementType
  children?: NavigationLink[]
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: 'dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'workout',
    href: '/workout',
    icon: Dumbbell,
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
