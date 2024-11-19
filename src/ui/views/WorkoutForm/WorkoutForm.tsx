import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../utils/hooks/useSession'
import { Card } from '../../components/Card/Card'
import { WorkoutFormBody } from './_components/WorkoutFormBody/WorkoutFormBody'
import { submitPlannerForm } from './_helpers/submitPlannerForm'
import { WORKOUT_FORM_SCHEMA } from './_helpers/workout-form-schema'
import { useWorkoutFormData } from './_hooks/useWorkoutFormData'
import { SubmitFormWorkout } from './_types/SubmitFormWorkout'

type UserSessionState = { userId: string } | undefined

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
    if (session?.user !== undefined) {
      setUserId({ userId: session?.user.id })
    }
  }, [session])

  const {
    control,
    handleSubmit,
    register,
    watch,
    reset,
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
    reset()
  }

  return (
    <Card>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <WorkoutFormBody<SubmitFormWorkout>
          errors={errors}
          control={control}
          register={register}
        />
      </FormContainer>
    </Card>
  )
}
