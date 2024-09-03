import styled from 'styled-components'
import { Link } from '../Link/Link'

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};

  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.secondary};

  text-transform: capitalize;
`

const navigationLinks = [
  {
    name: 'dashboard',
    href: '/dashboard',
  },
  {
    name: 'workout',
    href: '/workout',
  },
  {
    name: 'planner',
    href: '/planner',
  },
  {
    name: 'calendar',
    href: '/calendar',
  },
]

export function Navigation() {
  return (
    <NavigationContainer>
      {navigationLinks.map((link) => (
        <Link key={link.name} to={link.href}>
          {link.name}
        </Link>
      ))}
    </NavigationContainer>
  )
}
