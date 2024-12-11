import { Menu } from 'lucide-react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { toggleSidebar } from '../../../../utils/redux/slices/sidebar/sidebarSlice'
import { Button } from '../../Button/Button'

const HamburgerMenuContainer = styled.div`
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

  return (
    <HamburgerMenuContainer>
      <Button $variant="link" onClick={() => dispatch(toggleSidebar())}>
        <Menu size={32} className="menu-icon" />
      </Button>
    </HamburgerMenuContainer>
  )
}
