import { useEffect } from 'react'

export function useOutsideClick(
  sidebarRef: React.RefObject<HTMLDivElement>,
  isListening: boolean,
  onClick: () => void
) {
  useEffect(() => {
    if (!isListening) return

    const handleClick = (event: MouseEvent) => {
      if (!sidebarRef.current?.contains(event.target as Node)) {
        onClick()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [sidebarRef, isListening, onClick])
}
