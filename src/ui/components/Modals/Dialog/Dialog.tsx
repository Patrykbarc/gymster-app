import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { ButtonProps, Button as DialogTrigger } from '../../Button/Button'
import { DialogContent } from '../_shared/DialogContent/DialogContent'

type DialogProps = {
  buttonText: string | ReactNode
  children: ReactNode
  buttonVariant?: ButtonProps['$variant']
  disabled?: boolean
}

/**
 * The `Dialog` component provides a modal dialog that can be opened with a trigger button.
 * It allows for customizable content to be displayed inside the dialog, with an option to close the modal.
 * @example
 * <Dialog
 *   buttonText="Open Dialog"
 *   buttonVariant="primary"
 * >
 *   <DialogHeader>
 *     <DialogTitle>Dialog Title</DialogTitle>
 *     <DialogDescription>Some description inside the dialog.</DialogDescription>
 *   </DialogHeader>
 * </Dialog>
 */
export function Dialog({
  buttonText,
  children,
  buttonVariant = 'primary',
  disabled,
}: DialogProps) {
  const { isDialogVisible, portalTarget, handleOpen, handleClose } = useDialog()

  return (
    <>
      <DialogTrigger
        $variant={buttonVariant}
        disabled={disabled}
        onClick={handleOpen}
      >
        {buttonText}
      </DialogTrigger>
      {isDialogVisible &&
        createPortal(
          <DialogContent onClose={handleClose}>{children}</DialogContent>,
          portalTarget
        )}
    </>
  )
}
