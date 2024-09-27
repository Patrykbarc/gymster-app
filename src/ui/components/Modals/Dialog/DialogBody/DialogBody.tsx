import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card } from '../../../Card/Card'
import { DialogOverlay } from '../../_shared/DialogOverlay/DialogOverlay'

type DialogBodyProps = {
  children: ReactNode
}

const StyledDialogBody = styled(motion.create(Card)).attrs(() => ({
  initial: { scale: 0.8 },
  animate: { scale: 1 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}))`
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  z-index: ${({ theme }) => theme.zIndex.modal};
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 500px;
  }
`

export function DialogBody({ children }: DialogBodyProps) {
  return (
    <DialogOverlay>
      <StyledDialogBody>{children}</StyledDialogBody>
    </DialogOverlay>
  )
}
