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

const DialogContainer = styled.div`
  overflow: hidden;
`

export function DialogContent({
  onClose,
  children,
  dialogHeaderProps,
}: DialogContentProps) {
  return (
    <div>
      {dialogHeaderProps && (
        <DialogHeader {...dialogHeaderProps}>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
      )}
      <DialogBody>
        {onClose && <CloseDialog onClose={onClose} />}
        <DialogContainer>{children}</DialogContainer>
      </DialogBody>
    </div>
  )
}
