import { useEffect, useState } from 'react'

export function useOverlayState(
  isMobile: boolean,
  isDesktop: boolean,
  isOpen: boolean
) {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    if (isDesktop) {
      setShowOverlay(false)
      return
    }

    setShowOverlay(isOpen)

    if (!isOpen) {
      const timeout = setTimeout(() => setShowOverlay(false), 100)
      return () => clearTimeout(timeout)
    }
  }, [isMobile, isDesktop, isOpen])

  return showOverlay
}
