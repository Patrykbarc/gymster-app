import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { useSession } from '../../../utils/hooks/useSession'
import { Card } from '../../components/Card/Card'
import { FormError } from '../../components/Form/FormError/FormError'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { WorkoutFormBody } from './_components/WorkoutFormBody/WorkoutFormBody'
import { WORKOUT_FORM_SCHEMA } from './_constants/workout-form-schema'
import { handleFormReset } from './_helpers/handleFormReset'
import { submitPlannerForm } from './_helpers/submitPlannerForm'
import { useWorkoutFormData } from './_hooks/useWorkoutFormData'
import { SubmitFormWorkout } from './_types/SubmitFormWorkout'

const FormContainer = styled.form`
  display: grid;
  gap: 0;
`

export function WorkoutForm() {
  const { defaultValues } = useWorkoutFormData({ watch: undefined })
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
  const { session } = useSession()
  const dispatch = useAppDispatch()
  useWorkoutFormData({ watch })

  if (!session) return
  const userId = session.user.id

  const onSubmit = async (data: SubmitFormWorkout) => {
    const response = await submitPlannerForm({
      data: { ...data, userId },
      dispatch,
    })

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
        <FormTitle>Workout</FormTitle>
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
