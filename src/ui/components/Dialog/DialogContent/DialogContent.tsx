import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card } from '../../Card/Card'
import { DialogOverlay } from '../DialogOverlay/DialogOverlay'
import { CloseDialog } from './CloseDialog/CloseDialog'
import { DialogDescription } from './DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader, DialogHeaderProps } from './DialogHeader/DialogHeader'
import { DialogTitle } from './DialogTitle/DialogTitle'

type DialogContentProps = {
  onClose: () => void
  children?: ReactNode
  dialogHeaderProps?: Partial<DialogHeaderProps>
}

const StyledDialogContent = styled(Card)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 500px;
  }
`

const DialogBody = styled.div``

export function DialogContent({
  onClose,
  children,
  dialogHeaderProps,
}: DialogContentProps) {
  return (
    <DialogOverlay>
      <StyledDialogContent onClick={(e) => e.stopPropagation()}>
        <CloseDialog onClose={onClose} />

        {dialogHeaderProps && (
          <DialogHeader {...dialogHeaderProps}>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
        )}

        <DialogBody>{children}</DialogBody>
      </StyledDialogContent>
    </DialogOverlay>
  )
}
