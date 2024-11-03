import { useState } from 'react'
import { usePortal } from './usePortal'

export function useDialog() {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const portalTarget = usePortal()

  const handleOpen = () => setIsDialogVisible(true)
  const handleClose = () => setIsDialogVisible(false)

  //  disabled because of the escape key, which does not remove the url parameter
  // useEffect(() => {
  //   function handleEscape(event: KeyboardEvent) {
  //     if (event.key === 'Escape') {
  //       handleClose()
  //     }
  //   }

  //   window.addEventListener('keydown', handleEscape)

  //   return () => {
  //     window.removeEventListener('keydown', handleClose)
  //   }
  // }, [])

  return { isDialogVisible, portalTarget, handleOpen, handleClose }
}
