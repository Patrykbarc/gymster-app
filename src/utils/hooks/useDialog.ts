import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePortal } from './usePortal'

type UseDialogProps = {
  defaultOpen?: boolean
  onClose?: () => void
}

export function useDialog({
  defaultOpen = false,
  onClose,
}: UseDialogProps = {}) {
  const [isDialogVisible, setIsDialogVisible] = useState(defaultOpen)
  const portalTarget = usePortal()
  const navigate = useNavigate()

  const handleOpen = () => setIsDialogVisible(true)
  const handleClose = () => setIsDialogVisible(false)

  function handleCloseDialog() {
    handleClose()
    const pathSegments = location.pathname.split('/')
    pathSegments.pop()
    const newPath = pathSegments.join('/')
    navigate(newPath)
    onClose?.()
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isDialogVisible) {
        handleCloseDialog()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isDialogVisible])

  useEffect(() => {
    const docBodyStyle = document.body.style

    if (isDialogVisible) {
      docBodyStyle.overflowY = 'hidden'
      return () => {
        docBodyStyle.overflowY = 'auto'
      }
    }
  }, [isDialogVisible])

  return {
    isDialogVisible,
    portalTarget,
    handleOpen,
    handleClose,
    handleCloseDialog,
  }
}
