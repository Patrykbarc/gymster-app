import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { ButtonProps, Button as DialogTrigger } from '../../Button/Button'
import { DialogContent } from '../_shared/DialogContent/DialogContent'
import { ActionButtons } from './ActionButtons/ActionButtons'

type AlertProps = {
  buttonText: string | ReactNode
  children: ReactNode
  buttonVariant?: ButtonProps['$variant']
  disabled?: boolean
  actions: {
    onAccept: () => void
  }
}

/**
 * The `Alert` component is a modal dialog that displays a warning and prompts the user to confirm an action.
 * It is triggered by a button, and upon opening, it shows content along with action buttons.
 * @example
 * <Alert
 *   actions={{ onAccept: handleSubmit(handleWorkoutDelete) }}
 *   buttonVariant="danger"
 *   buttonText={<Trash2Icon />}
 * >
 *   <DialogHeader>
 *     <DialogTitle>Are you sure?</DialogTitle>
 *     <DialogDescription>This action cannot be undone.</DialogDescription>
 *   </DialogHeader>
 * </Alert>
 */
export function Alert({
  buttonText,
  children,
  buttonVariant = 'primary',
  disabled,
  actions: { onAccept },
}: AlertProps) {
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
          <DialogContent>
            {children}
            <ActionButtons onAccept={onAccept} onClose={handleClose} />
          </DialogContent>,
          portalTarget
        )}
    </>
  )
}
