import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../utils/hooks/useSession'
import { Card } from '../../components/Card/Card'
import { FormError } from '../../components/Form/FormError/FormError'
import { WorkoutFormBody } from './_components/WorkoutFormBody/WorkoutFormBody'
import { WORKOUT_FORM_SCHEMA } from './_constants/workout-form-schema'
import { handleFormReset } from './_helpers/handleFormReset'
import { submitPlannerForm } from './_helpers/submitPlannerForm'
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
    setError,
    reset,
    formState: { errors },
  } = useForm<SubmitFormWorkout>({
    defaultValues,
    resolver: zodResolver(WORKOUT_FORM_SCHEMA),
  })

  useWorkoutFormData({ watch })

  const onSubmit = async (data: SubmitFormWorkout) => {
    const mutatedData = Object.assign(data, userId)
    const response = await submitPlannerForm(mutatedData, dispatch)

    if (!response?.payload) {
      setError('root.submit', {
        message: 'An error occurred during submission. Please try again.',
      })

      return
    }

    handleFormReset(reset)
  }

  return (
    <Card>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <WorkoutFormBody<SubmitFormWorkout>
          errors={errors}
          control={control}
          register={register}
        />
        <FormError error={errors.root?.submit.message} />
      </FormContainer>
    </Card>
  )
}
