import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
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
        <NavLink key={link.name} to={link.href}>
          {link.name}
        </NavLink>
      ))}
    </NavigationContainer>
  )
}
