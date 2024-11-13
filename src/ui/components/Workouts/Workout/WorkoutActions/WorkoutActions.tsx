import { SquarePen, Trash2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../../../utils/hooks/useAppDispatch'
import { deleteWorkout } from '../../../../../utils/redux/slices/workouts/actions'
import { Icon } from '../../../Icon/Icon'
import { Alert } from '../../../Modals/Alert/Alert'

type ActionsProps = {
  workoutId: string
}

const ActionsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`

export function WorkoutActions({ workoutId }: ActionsProps) {
  const { handleSubmit } = useForm()
  const dispatch = useAppDispatch()

  async function handleWorkoutDelete() {
    dispatch(deleteWorkout(workoutId))
  }

  return (
    <ActionsContainer>
      <Icon>
        <SquarePen />
      </Icon>
      <Alert
        actions={{ onAccept: handleSubmit(handleWorkoutDelete) }}
        buttonVariant="danger"
        buttonText={<Trash2Icon />}
      />
    </ActionsContainer>
  )
}
