import styled from 'styled-components'
import { SidebarContent } from './SidebarContent/SidebarContent'
import { SidebarLinks } from './SidebarContent/SidebarLinks/SidebarLinks'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader'

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-width: 15rem;

  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray['100']};
  border-right: 1px solid ${({ theme }) => theme.colors.gray['300']};

  text-transform: capitalize;

  p,
  a {
    color: ${({ theme }) => theme.colors.gray['500']};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.gray['600']};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    display: none;
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
