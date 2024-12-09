import { useEffect, useState } from 'react'
import { usePortal } from './usePortal'

type UseDialogProps = {
  defaultOpen?: boolean
}

export function useDialog({ defaultOpen = false }: UseDialogProps = {}) {
  const [isDialogVisible, setIsDialogVisible] = useState(defaultOpen)
  const portalTarget = usePortal()

  const handleOpen = () => setIsDialogVisible(true)
  const handleClose = () => setIsDialogVisible(false)

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
  }
}
