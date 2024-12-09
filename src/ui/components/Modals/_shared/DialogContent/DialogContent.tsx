import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { CloseDialog } from '../../Dialog/CloseDialog/CloseDialog'
import { DialogOverlay } from '../DialogOverlay/DialogOverlay'

type DialogContentProps = {
  onClose?: () => void
  children?: ReactNode
}

export function DialogContent({ onClose, children }: DialogContentProps) {
  return (
    <DialogOverlay>
      <DialogContainer>
        {onClose && <CloseDialog onClose={onClose} />}
        {children}
      </DialogContainer>
    </DialogOverlay>
  )
}

const DialogContainer = styled(motion.div).attrs(() => ({
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}))`
  background: ${({ theme }) => theme.colors.gray['50']};
  border: 1px solid ${({ theme }) => theme.colors.gray['200']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  margin: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  position: relative;

  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
  min-height: 100px;

  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray['100']};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray['300']};
    border-radius: ${({ theme }) => theme.borderRadius.round};
  }
`
