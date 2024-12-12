import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useBreakpoint } from '../../../../utils/hooks/useBreakpoint'
import { setIsOpen } from '../../../../utils/redux/slices/sidebar/sidebarSlice'
import { RootState } from '../../../../utils/redux/store'
import { useOutsideClick } from './useOutsideClick'
import { useOverlayState } from './useOverlayState'
import { useSidebarTransition } from './useSidebarTransition'

export type SidebarState = 'open' | 'closed' | 'transitioning'

export function useSidebar() {
  const dispatch = useAppDispatch()
  const { isOpen } = useSelector((state: RootState) => state.sidebar)
  const { isMobile, isDesktop } = useBreakpoint()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const transitionState = useSidebarTransition(sidebarRef, isOpen)
  const showOverlay = useOverlayState(isMobile, isDesktop, isOpen)

  useEffect(() => {
    if (isMobile) {
      dispatch(setIsOpen(false))
    }
  }, [isMobile, dispatch])

  useOutsideClick(sidebarRef, isMobile && isOpen, () => {
    dispatch(setIsOpen(false))
  })

  return {
    isOpen,
    isMobile,
    isDesktop,
    showOverlay,
    sidebarRef,
    transitionState,
  }
}
