import styled from 'styled-components'
import { handleSignOut } from '../../../../api/signOut/handleSignOut'

const Signout = styled.a`
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray['800']};

  &:hover {
    opacity: 0.65;
  }
`

export function SidebarFooter() {
  return (
    <div>
      <Signout onClick={handleSignOut}>Sign out</Signout>
    </div>
  )
}
