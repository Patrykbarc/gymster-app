// ModalTrigger.tsx
import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePortal } from '../../../utils/hooks/usePortal'
import { Button, ButtonProps } from '../Button/Button'
import { ModalBody } from './ModalBody/ModalBody'

type ModalProps = {
  buttonText: string | ReactNode
  children: ReactNode
  buttonVariant?: ButtonProps['$variant']
}

export function Modal({
  buttonText,
  children,
  buttonVariant = 'primary',
}: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const portalTarget = usePortal()

  const handleOpen = () => setIsModalVisible(true)
  const handleClose = () => setIsModalVisible(false)

  return (
    <>
      <Button $variant={buttonVariant} onClick={handleOpen}>
        {buttonText}
      </Button>
      {isModalVisible &&
        createPortal(
          <ModalBody onClose={handleClose}>{children}</ModalBody>,
          portalTarget
        )}
    </>
  )
}
