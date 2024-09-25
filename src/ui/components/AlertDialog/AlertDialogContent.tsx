import { ReactNode } from 'react'
import { DialogBody } from '../Dialog/DialogBody/DialogBody'
import { DialogDescription } from '../Dialog/DialogContent/DialogHeader/DialogDescription/DialogDescription'
import {
  DialogHeader,
  DialogHeaderProps,
} from '../Dialog/DialogContent/DialogHeader/DialogHeader'
import { DialogTitle } from '../Dialog/DialogContent/DialogTitle/DialogTitle'

type DialogContentProps = {
  children?: ReactNode
  dialogHeaderProps?: Partial<DialogHeaderProps>
}

export function DialogContent({
  children,
  dialogHeaderProps,
}: DialogContentProps) {
  return (
    <DialogBody>
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
