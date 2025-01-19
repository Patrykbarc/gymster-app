import { Dumbbell, HomeIcon, UserIcon } from 'lucide-react'
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
        href: '/saved-workouts',
      },
    ],
  },
  {
    name: 'profile',
    href: '/profile',
    icon: UserIcon,
  },
]
