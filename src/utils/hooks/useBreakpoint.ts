import { useEffect, useState } from 'react'
import { theme } from '../../styles/theme/theme'

function getBreakpoint(value: string): number {
  return +value.split('px')[0]
}

const MOBILE_BREAKPOINT = getBreakpoint(theme['breakPoints']['lg'])

export function useBreakpoint() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < MOBILE_BREAKPOINT)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    isMobile,
    isDesktop: !isMobile,
  }
}
