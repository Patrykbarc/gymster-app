import { ReactNode } from 'react'
import { ModalContent } from '../ModalContent/ModalContent'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay'

type ModalBodyProps = {
  onClose: () => void
  children: ReactNode
}

export function ModalBody({ onClose, children }: ModalBodyProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
