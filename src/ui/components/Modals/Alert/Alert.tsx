import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useDialog } from '../../../../utils/hooks/useDialog'
import { ButtonProps, Button as DialogTrigger } from '../../Button/Button'
import { DialogContent } from '../_shared/DialogContent/DialogContent'
import { DialogDescription } from '../_shared/DialogContent/DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader } from '../_shared/DialogContent/DialogHeader/DialogHeader'
import { DialogTitle } from '../_shared/DialogContent/DialogHeader/DialogTitle/DialogTitle'
import { ActionButtons } from './ActionButtons/ActionButtons'

type AlertProps = {
  buttonText: string | ReactNode
  title?: string
  description?: string
  buttonVariant?: ButtonProps['$variant']
  disabled?: boolean
  actions: {
    onAccept: () => void
  }
}

/**
 * `Alert` component provides a modal dialog to warn the user and request confirmation.
 * It is triggered by a button click and presents a dialog with title, description, and action buttons.

 * @example
 * // Basic usage with default title and description
 * <Alert
 *   actions={{ onAccept: () => removeExercise(exerciseIndex) }}
 *   disabled={exerciseFields.length === 1}
 *   buttonVariant="danger"
 *   buttonText={<Trash2Icon />}
 * />
 *
 * @example
 * // Usage with custom title and description
 * <Alert
 *   title="Delete Exercise"
 *   description="Are you sure you want to delete this exercise? This action is permanent."
 *   actions={{ onAccept: () => removeExercise(exerciseIndex) }}
 *   disabled={exerciseFields.length === 1}
 *   buttonVariant="danger"
 *   buttonText="Delete"
 * />
 */
export function Alert({
  buttonText,
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
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
        type="button"
      >
        {buttonText}
      </DialogTrigger>

      {isDialogVisible &&
        createPortal(
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <ActionButtons onAccept={onAccept} onClose={handleClose} />
          </DialogContent>,
          portalTarget
        )}
    </>
  )
}
