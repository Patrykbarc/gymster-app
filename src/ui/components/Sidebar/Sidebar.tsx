import styled from 'styled-components'
import { SidebarContent } from './SidebarContent/SidebarContent'
import { SidebarLinks } from './SidebarContent/SidebarLinks/SidebarLinks'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader'

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-width: 15rem;

  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray['700']};

  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.lg};

  p,
  a {
    color: ${({ theme }) => theme.colors.gray['100']};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
  }

  // debug
  div {
    border: 1px solid tomato;
    padding: ${({ theme }) => theme.spacing.md} 0;
  }
`

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SidebarContent>
        <SidebarLinks />
      </SidebarContent>
      <SidebarFooter />
    </SidebarContainer>
  )
}
