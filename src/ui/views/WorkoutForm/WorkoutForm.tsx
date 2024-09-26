import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../utils/hooks/useSession'
import { ErrorProvider } from '../../../utils/providers/ErrorProvider'
import { Card } from '../../components/Card/Card'
import { submitPlannerForm } from './_helpers/submitPlannerForm'
import { WORKOUT_FORM_SCHEMA } from './_helpers/workout-form-schema'
import { useWorkoutFormData } from './_hooks/useWorkoutFormData'
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
  const { defaultValues } = useWorkoutFormData({ watch: undefined })

  useEffect(() => {
    if (session?.id) {
      setUserId({ userId: session?.id })
    }
  }, [])

  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<SubmitFormWorkout>({
    defaultValues,
    resolver: zodResolver(WORKOUT_FORM_SCHEMA),
  })

  useWorkoutFormData({ watch })

  const onSubmit = (data: SubmitFormWorkout) => {    
    const mutatedData = Object.assign(data, userId)
    submitPlannerForm(mutatedData, dispatch)
    localStorage.removeItem('workoutForm')
  }

  return (
    <Card>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <ErrorProvider<SubmitFormWorkout> errors={errors}>
          <WorkoutInfo register={register} />
          <ExerciseFields control={control} register={register} />
        </ErrorProvider>
      </FormContainer>
    </Card>
  )
}
