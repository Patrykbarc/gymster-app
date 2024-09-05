import { useEffect, useRef } from 'react'

export function usePortal() {
  const portalRootRef = useRef(document.getElementById('portal-root'))
  const elementRef = useRef(document.createElement('div'))

  useEffect(() => {
    const currentElement = elementRef.current
    portalRootRef.current?.appendChild(currentElement)

    return () => {
      portalRootRef.current?.removeChild(currentElement)
    }
  }, [])

  return elementRef.current
}
