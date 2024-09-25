import { SquarePen, Trash2Icon } from 'lucide-react'
import styled from 'styled-components'
import { AlertDialog } from '../../../AlertDialog/AlertDialog'
import { DialogDescription } from '../../../Dialog/DialogContent/DialogHeader/DialogDescription/DialogDescription'
import { DialogHeader } from '../../../Dialog/DialogContent/DialogHeader/DialogHeader'
import { DialogTitle } from '../../../Dialog/DialogContent/DialogTitle/DialogTitle'
import { Icon } from '../../../Icon/Icon'
import { ActionModal } from './ActionModal/ActionModal'

type ActionsProps = {
  workoutId: string
}

const ActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

export function Actions({ workoutId }: ActionsProps) {
  return (
    <ActionsContainer>
      <Icon>
        <SquarePen />
      </Icon>

      <AlertDialog buttonVariant="danger" buttonText={<Trash2Icon />}>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <ActionModal workoutId={workoutId} />
      </AlertDialog>
    </ActionsContainer>
  )
}
