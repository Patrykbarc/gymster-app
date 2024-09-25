import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card } from '../../../Card/Card'
import { DialogOverlay } from '../../_shared/DialogOverlay/DialogOverlay'

type DialogBodyProps = {
  children: ReactNode
}

const StyledDialogBody = styled(Card)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.lg};

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
