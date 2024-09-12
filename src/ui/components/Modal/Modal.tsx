// ModalTrigger.tsx
import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePortal } from '../../../utils/hooks/usePortal'
import { Button } from '../Button/Button'
import { ModalBody } from './ModalBody/ModalBody'

type ModalProps = {
  buttonText: string
  children: ReactNode
}

export function Modal({ buttonText, children }: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const portalTarget = usePortal()

  const handleOpen = () => setIsModalVisible(true)
  const handleClose = () => setIsModalVisible(false)

  return (
    <>
      <Button onClick={handleOpen}>{buttonText}</Button>
      {isModalVisible &&
        createPortal(
          <ModalBody onClose={handleClose}>{children}</ModalBody>,
          portalTarget
        )}
    </>
  )
}
