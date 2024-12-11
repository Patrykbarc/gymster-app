import { useEffect, useState } from 'react'
import { theme } from '../../styles/theme/theme'

function getBreakpoint(value: string): number {
  return +value.split('px')[0]
}

const MOBILE_BREAKPOINT = getBreakpoint(theme['breakPoints']['md'])
const TABLET_BREAKPOINT = getBreakpoint(theme['breakPoints']['lg'])
const DESKTOP_BREAKPOINT = getBreakpoint(theme['breakPoints']['xl'])

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
