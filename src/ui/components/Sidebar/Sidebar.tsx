import styled, { css } from 'styled-components'
import { DialogOverlay as Overlay } from '../Modals/_shared/DialogOverlay/DialogOverlay'
import { SidebarContent } from './SidebarContent/SidebarContent'
import { SidebarLinks } from './SidebarContent/SidebarLinks/SidebarLinks'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader'
import { useSidebar } from './_hooks/useSiderbar'

type Props = {
  $isMobile: boolean
  $isOpen: boolean
}

const SidebarContainer = styled.aside<Props>`
  ${({ $isMobile }) =>
    $isMobile &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: ${({ theme }) => theme.zIndex.modal};
    `};

  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-width: ${({ $isOpen }) => ($isOpen ? '320px' : '0')};
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  padding: ${({ theme }) => theme.spacing.md};

  ${({ $isMobile }) =>
    $isMobile
      ? css`
          box-shadow: ${({ theme }) => theme.shadows.md};
          transition:
            min-width 0.6s ease-in-out,
            left 0.6s ease-in-out;
        `
      : css`
          transition:
            min-width 0.2s ease-in-out,
            left 0.2s ease-in-out;
        `}

  overflow: hidden;
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

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    min-width: ${({ $isOpen }) => ($isOpen ? '340px' : '0')};
  }
`

export function Sidebar() {
  const { isOpen, showOverlay, sidebarRef, isMobile } = useSidebar()

  return (
    <>
      {showOverlay && <Overlay />}
      <SidebarContainer
        ref={sidebarRef}
        id="sidebar-container"
        $isOpen={isOpen}
        $isMobile={isMobile}
      >
        <SidebarHeader />
        <SidebarContent>
          <SidebarLinks />
        </SidebarContent>
        <SidebarFooter />
      </SidebarContainer>
    </>
  )
}
