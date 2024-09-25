// ModalTrigger.tsx
import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePortal } from '../../../utils/hooks/usePortal'
import { ButtonProps, Button as DialogTrigger } from '../Button/Button'
import { DialogContent } from './DialogContent/DialogContent'

type DialogProps = {
  buttonText: string | ReactNode
  children: ReactNode
  buttonVariant?: ButtonProps['$variant']
  disabled?: boolean
}

export function Dialog({
  buttonText,
  children,
  buttonVariant = 'primary',
  disabled,
}: DialogProps) {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const portalTarget = usePortal()

  const handleOpen = () => setIsDialogVisible(true)
  const handleClose = () => setIsDialogVisible(false)

  return (
    <>
      <DialogTrigger
        $variant={buttonVariant}
        disabled={disabled}
        onClick={handleOpen}
      >
        {buttonText}
      </DialogTrigger>
      {isDialogVisible &&
        createPortal(
          <DialogContent onClose={handleClose}>{children}</DialogContent>,
          portalTarget
        )}
    </>
  )
}
