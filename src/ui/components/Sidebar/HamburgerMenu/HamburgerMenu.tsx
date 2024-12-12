import { Menu } from 'lucide-react'
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import {
  setIsOpen,
  toggleSidebar,
} from '../../../../utils/redux/slices/sidebar/sidebarSlice'
import { Button } from '../../Button/Button'
import { useSidebar } from '../_hooks/useSiderbar'

type Props = {
  $isOpen: boolean
}

const HamburgerMenuContainer = styled.div<Props>`
  opacity: ${({ $isOpen }) => ($isOpen ? css`0` : css`100`)};
  transition: opacity 0.3s 0.2s ease-in-out;

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: 1rem 0.6rem;

  .menu-icon {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`

export function HamburgerMenu() {
  const dispatch = useAppDispatch()
  const { isOpen, isMobile, isDesktop } = useSidebar()

  useEffect(() => {
    if (isDesktop) {
      dispatch(setIsOpen(true))
    }
  }, [isDesktop])

  return (
    isMobile && (
      <HamburgerMenuContainer $isOpen={isOpen}>
        <Button $variant="link" onClick={() => dispatch(toggleSidebar())}>
          <Menu size={32} className="menu-icon" />
        </Button>
      </HamburgerMenuContainer>
    )
  )
}
