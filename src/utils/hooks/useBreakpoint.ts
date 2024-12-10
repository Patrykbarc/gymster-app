import { useEffect, useState } from 'react'
import { theme } from '../../styles/theme/theme'

const MOBILE_BREAKPOINT = +theme['breakPoints']['md']
const TABLET_BREAKPOINT = +theme['breakPoints']['lg']
const DESKTOP_BREAKPOINT = +theme['breakPoints']['xl']

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < MOBILE_BREAKPOINT) {
        setBreakpoint({ isMobile: true, isTablet: false, isDesktop: false })
      } else if (width < TABLET_BREAKPOINT) {
        setBreakpoint({ isMobile: false, isTablet: true, isDesktop: false })
      } else if (width < DESKTOP_BREAKPOINT) {
        setBreakpoint({ isMobile: false, isTablet: false, isDesktop: true })
      } else {
        setBreakpoint({ isMobile: false, isTablet: false, isDesktop: true })
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return breakpoint
}
