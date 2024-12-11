import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch'
import { useBreakpoint } from '../../../../utils/hooks/useBreakpoint'
import { setIsOpen } from '../../../../utils/redux/slices/sidebar/sidebarSlice'
import { RootState } from '../../../../utils/redux/store'

export function useSidebar() {
  const dispatch = useAppDispatch()
  const { isOpen } = useSelector((state: RootState) => state.sidebar)
  const { isMobile, isDesktop } = useBreakpoint()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    updateOverlayState()
  }, [isDesktop, isMobile, isOpen])

  useEffect(() => {
    if (isMobile && isOpen) {
      addOutsideClickListener()
      return removeOutsideClickListener
    }
  }, [isOpen, isDesktop])

  function updateOverlayState() {
    if (isDesktop) {
      setShowOverlay(false)
    } else if (isMobile && isOpen) {
      setShowOverlay(true)
    } else if (isMobile && !isOpen) {
      const timeout = setTimeout(() => setShowOverlay(false), 100)
      return () => clearTimeout(timeout)
    }
  }

  function addOutsideClickListener() {
    document.addEventListener('mousedown', handleOutsideClick)
  }

  function removeOutsideClickListener() {
    document.removeEventListener('mousedown', handleOutsideClick)
  }

  function handleOutsideClick(event: MouseEvent) {
    if (!sidebarRef.current?.contains(event.target as Node)) {
      dispatch(setIsOpen(false))
    }
  }

  return { isOpen, isMobile, showOverlay, sidebarRef }
}
