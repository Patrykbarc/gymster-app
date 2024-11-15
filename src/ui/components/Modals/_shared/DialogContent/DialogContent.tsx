import { ReactNode } from 'react'
import styled from 'styled-components'
import { CloseDialog } from '../../Dialog/CloseDialog/CloseDialog'
import { DialogBody } from '../../Dialog/DialogBody/DialogBody'
import { DialogDescription } from './DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader, DialogHeaderProps } from './DialogHeader/DialogHeader'
import { DialogTitle } from './DialogHeader/DialogTitle/DialogTitle'

type DialogContentProps = {
  onClose?: () => void
  children?: ReactNode
  dialogHeaderProps?: Partial<DialogHeaderProps>
}

const DialogContentContainer = styled.div`
  padding-right: ${({ theme }) => theme.spacing.lg};
  overflow: auto;
`

export function DialogContent({
  onClose,
  children,
  dialogHeaderProps,
}: DialogContentProps) {
  return (
    <DialogBody>
      <DialogContentContainer>
        {onClose && <CloseDialog onClose={onClose} />}
        {dialogHeaderProps && (
          <DialogHeader {...dialogHeaderProps}>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
        )}

        {children}
      </DialogContentContainer>
    </DialogBody>
  )
}
