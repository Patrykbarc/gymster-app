import { RefObject, useEffect, useState } from 'react'
import { SidebarState } from './useSiderbar'

export function useSidebarTransition(
  sidebarRef: RefObject<HTMLDivElement>,
  isOpen: boolean
) {
  const [transitionState, setTransitionState] = useState<SidebarState>(
    isOpen ? 'open' : 'closed'
  )

  useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) return

    let transitionCount = 0

    const handleTransitionStart = () => {
      if (++transitionCount === 1) setTransitionState('transitioning')
    }

    const handleTransitionEnd = () => {
      if (--transitionCount === 0)
        setTransitionState(isOpen ? 'open' : 'closed')
    }

    sidebar.addEventListener('transitionstart', handleTransitionStart)
    sidebar.addEventListener('transitionend', handleTransitionEnd)

    return () => {
      sidebar.removeEventListener('transitionstart', handleTransitionStart)
      sidebar.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [isOpen, sidebarRef])

  return transitionState
}
