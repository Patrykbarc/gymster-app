import { useEffect, useState } from 'react'
import { usePortal } from './usePortal'

export function useDialog() {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const portalTarget = usePortal()

  const handleOpen = () => setIsDialogVisible(true)
  const handleClose = () => setIsDialogVisible(false)

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleClose)
    }
  }, [])

  return { isDialogVisible, portalTarget, handleOpen, handleClose }
}
