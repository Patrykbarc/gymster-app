import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { Button, ButtonProps } from '../../Button/Button'
import { DialogContent } from '../_shared/DialogContent/DialogContent'

type DialogProps = {
  trigger?: {
    text: string | ReactNode
    variant?: ButtonProps['$variant']
    disabled?: boolean
  }
  children: ReactNode
  onClose?: () => void
  defaultOpen?: boolean
}

/**
 * Dialog component that provides a modal dialog with customizable content.
 * It can be triggered by a button or controlled externally.
 *
 * @example
 * // With trigger button
 * <Dialog
 *   trigger={{
 *     text: "Open Dialog",
 *     variant: "primary"
 *   }}
 * >
 *   <DialogHeader>
 *     <DialogTitle>Dialog Title</DialogTitle>
 *     <DialogDescription>Dialog content here</DialogDescription>
 *   </DialogHeader>
 * </Dialog>
 *
 * @example
 * // Controlled externally
 * <Dialog defaultOpen onClose={handleClose}>
 *   <DialogContent>Dialog content here</DialogContent>
 * </Dialog>
 */
export function Dialog({
  trigger,
  children,
  onClose,
  defaultOpen = false,
}: DialogProps) {
  const { isDialogVisible, portalTarget, handleOpen, handleClose } = useDialog({
    defaultOpen,
  })

  const handleCloseDialog = () => {
    handleClose()
    onClose?.()
  }

  return (
    <>
      {trigger && (
        <Button
          $variant={trigger.variant ?? 'primary'}
          disabled={trigger.disabled}
          onClick={handleOpen}
          type="button"
        >
          {trigger.text}
        </Button>
      )}

      {isDialogVisible &&
        portalTarget &&
        createPortal(
          <DialogContent onClose={handleCloseDialog}>{children}</DialogContent>,
          portalTarget
        )}
    </>
  )
}
