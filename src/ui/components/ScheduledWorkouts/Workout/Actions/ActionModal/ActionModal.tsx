import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../../../../utils/hooks/useAppDispatch'
import { deleteWorkout } from '../../../../../../utils/redux/slices/workouts/workoutsSlice'
import { Button } from '../../../../Button/Button'
import { Form } from '../../../../Form/Form/Form'

type ActionModalProps = {
  workoutId: string
}

const ActionModalContainer = styled(Form)`
  display: flex;
`

export function ActionModal({ workoutId }: ActionModalProps) {
  const { handleSubmit } = useForm()
  const dispatch = useAppDispatch()

  async function handleWorkoutDelete() {
    dispatch(deleteWorkout(workoutId))
  }

  return (
    <ActionModalContainer>
      <Button $variant="danger" onClick={handleSubmit(handleWorkoutDelete)}>
        Accept
      </Button>
      <Button $variant="outline">Cancel</Button>
    </ActionModalContainer>
  )
}
