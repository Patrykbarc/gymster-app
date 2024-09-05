import { ReactNode } from 'react'
import { ModalContent } from './ModalContent/ModalContent'
import { ModalOverlay } from './ModalOverlay/ModalOverlay'

type ModalProps = {
  onClose: () => void
  children: ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
