import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useBreakpoint } from '../../../utils/hooks/useBreakpoint'
import { setIsOpen } from '../../../utils/redux/slices/sidebar/sidebarSlice'
import { RootState } from '../../../utils/redux/store'
import { DialogOverlay as Overlay } from '../Modals/_shared/DialogOverlay/DialogOverlay'
import { SidebarContent } from './SidebarContent/SidebarContent'
import { SidebarLinks } from './SidebarContent/SidebarLinks/SidebarLinks'
import { SidebarFooter } from './SidebarFooter/SidebarFooter'
import { SidebarHeader } from './SidebarHeader/SidebarHeader'

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
  width: ${({ $isOpen }) => ($isOpen ? '320px' : '0')};
  padding: ${({ $isOpen, theme }) => ($isOpen ? `0 ${theme.spacing.md}` : '0')};

  transition:
    width 0.2s ease-in-out,
    padding 0.2s ease-in-out;
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

  @media (max-width: ${({ theme }) => theme.breakPoints.md}) {
    min-width: ${({ $isOpen }) => ($isOpen ? '15rem' : '0')};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.sm}) {
    min-width: ${({ $isOpen }) => ($isOpen ? '10rem' : '0')};
  }
`

export function Sidebar() {
  const dispatch = useAppDispatch()
  const { isOpen } = useSelector((state: RootState) => state.sidebar)
  const breakpoint = useBreakpoint()
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (breakpoint.isDesktop) {
      dispatch(setIsOpen(false))
    }
  }, [breakpoint])

  useEffect(() => {
    if (!breakpoint.isMobile) return

    function handleClickOutside(event: MouseEvent) {
      if (!sidebarRef?.current?.contains(event.target as Node)) {
        dispatch(setIsOpen(false))
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {isOpen && breakpoint.isMobile && <Overlay />}
      <SidebarContainer
        ref={sidebarRef}
        id="sidebar-container"
        $isOpen={isOpen}
        $isMobile={breakpoint.isMobile}
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
