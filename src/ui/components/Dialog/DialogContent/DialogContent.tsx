import { ReactNode } from 'react'
import { DialogBody } from '../DialogBody/DialogBody'
import { CloseDialog } from './CloseDialog/CloseDialog'
import { DialogDescription } from './DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader, DialogHeaderProps } from './DialogHeader/DialogHeader'
import { DialogTitle } from './DialogTitle/DialogTitle'

type DialogContentProps = {
  onClose: () => void
  children?: ReactNode
  dialogHeaderProps?: Partial<DialogHeaderProps>
}

export function DialogContent({
  onClose,
  children,
  dialogHeaderProps,
}: DialogContentProps) {
  return (
    <DialogBody>
      <CloseDialog onClose={onClose} />

      {dialogHeaderProps && (
        <DialogHeader {...dialogHeaderProps}>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
      )}

      {children}
    </DialogBody>
  )
}
