import { X } from 'lucide-react'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { ModalContent } from '../ModalContent/ModalContent'
import { ModalOverlay } from '../ModalOverlay/ModalOverlay'

type ModalBodyProps = {
  onClose: () => void
  children: ReactNode
}

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  font-size: 2em;

  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
`

export function ModalBody({ onClose, children }: ModalBodyProps) {
  function handleOnClose() {
    const confirmed = confirm('Are you sure? This action cannot be undone')
    confirmed && onClose()
  }

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleOnClose}>
          <X />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
