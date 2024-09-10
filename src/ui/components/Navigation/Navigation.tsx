import styled from 'styled-components'
import { handleSignOut } from '../../../api/signOut/handleSignOut'
import { Link } from '../Link/Link'
import { NAVIGATION_LINKS } from './helpers/navigation-links'

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};

  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.secondary};

  text-transform: capitalize;
`

const Signout = styled.a`
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.65;
  }
`

export function Navigation() {
  return (
    <NavigationContainer>
      {NAVIGATION_LINKS.map((link) => (
        <Link key={link.name} to={link.href}>
          {link.name}
        </Link>
      ))}
      <Signout onClick={handleSignOut}>Sign out</Signout>
    </NavigationContainer>
  )
}
