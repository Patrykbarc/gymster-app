import { SquarePen, Trash2Icon } from 'lucide-react'
import styled from 'styled-components'
import { Icon } from '../../../Icon/Icon'
import { Modal } from '../../../Modal/Modal'
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

      <Modal buttonVariant="danger" buttonText={<Trash2Icon />}>
        <ActionModal workoutId={workoutId} />
      </Modal>
    </ActionsContainer>
  )
}
