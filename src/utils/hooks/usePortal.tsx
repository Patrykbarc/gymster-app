import { useEffect, useRef } from 'react'

export function usePortal() {
  const portalRootRef = useRef(document.getElementById('portal-root'))
  const elementRef = useRef(document.createElement('div'))

  useEffect(() => {
    const currentElement = elementRef.current
    const portalRoot = portalRootRef.current
    portalRoot?.appendChild(currentElement)

    return () => {
      portalRoot?.removeChild(currentElement)
    }
  }, [])

  return elementRef.current
}
