import { useState } from 'react'
import { usePortal } from './usePortal'

export function useDialog() {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const portalTarget = usePortal()

  const handleOpen = () => setIsDialogVisible(true)
  const handleClose = () => setIsDialogVisible(false)

  return { isDialogVisible, portalTarget, handleOpen, handleClose }
}
