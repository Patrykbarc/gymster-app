import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../../../../utils/hooks/useAppDispatch'
import { deleteWorkout } from '../../../../../../utils/redux/slices/workouts/workoutsSlice'
import { Button } from '../../../../Button/Button'

type ActionModalProps = {
  workoutId: string
}

const ActionModalContainer = styled.form`
  display: flex;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing.md};
`

export function ActionModal({ workoutId }: ActionModalProps) {
  const { handleSubmit } = useForm()
  const dispatch = useAppDispatch()

  async function handleWorkoutDelete() {
    dispatch(deleteWorkout(workoutId))
  }

  return (
    <ActionModalContainer>
      <Button $variant="outline">Cancel</Button>
      <Button $variant="danger" onClick={handleSubmit(handleWorkoutDelete)}>
        Accept
      </Button>
    </ActionModalContainer>
  )
}
