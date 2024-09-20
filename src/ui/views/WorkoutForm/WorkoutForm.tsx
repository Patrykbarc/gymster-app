import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../utils/hooks/useSession'
import { Card } from '../../components/Card/Card'
import { submitPlannerForm } from './_helpers/submitPlannerForm'
import { SubmitFormWorkout } from './_types/SubmitFormWorkout'
import { ExerciseFields } from './ExerciseFields/ExerciseFields'
import { WorkoutInfo } from './WorkoutInfo/WorkoutInfo'

type UserSessionState = undefined | { userId: string }

const FormContainer = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`

export function WorkoutForm() {
  const { session } = useSession()
  const [userId, setUserId] = useState<UserSessionState>(undefined)
  const dispatch = useAppDispatch()

  useEffect(() => {
    session?.id && setUserId({ userId: session?.id })
  }, [])

  const { control, handleSubmit, register } = useForm<SubmitFormWorkout>({
    defaultValues: {
      info: {
        workout: 'Workout name placeholder',
        workoutDate: '',
      },
      exercises: [
        {
          name: 'Exercise placeholder',
          sets: [{ set: 1, weight: 1, reps: 1 }],
        },
      ],
    },
  })

  const onSubmit = (data: SubmitFormWorkout) => {
    const mutatedData = Object.assign(data, userId)
    submitPlannerForm(mutatedData, dispatch)
  }

  return (
    <Card>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <WorkoutInfo register={register} />
        <ExerciseFields control={control} register={register} />
      </FormContainer>
    </Card>
  )
}
