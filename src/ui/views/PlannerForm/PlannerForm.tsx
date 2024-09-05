import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'
import { supabase } from '../../../api/supabase'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormField } from '../../components/Form/FormField/FormField'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'

type SubmitFormWorkout = { workout: string; workoutDate: string }
type PlannerFormProps = {
  userId: string
}

const PLANNER_FORM_SCHEMA = z.object({
  workout: z.string().min(3, { message: 'Workout must be named' }),
  workoutDate: z.preprocess(
    (arg) =>
      typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg,
    z.date({ message: 'Pick a date' })
  ),
})

const PlannerFormContainer = styled.div`
  display: grid;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
`

export function PlannerForm({ userId }: PlannerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PLANNER_FORM_SCHEMA),
    mode: 'onBlur',
    defaultValues: { workout: '', workoutDate: '' },
  })

  async function submitForm({ workout, workoutDate }: SubmitFormWorkout) {
    const dateObject = new Date(workoutDate)

    if (isNaN(dateObject.getTime())) {
      console.error('Invalid date format')
      return
    }

    const formattedDate = dateObject.toISOString().split('T')[0]

    const { data, error } = await supabase
      .from('planned_workouts')
      .upsert({
        user_id: userId,
        workout_name: workout,
        workout_date: formattedDate,
      })
      .select()

    console.log(data)
    console.log(error)
  }

  return (
    <PlannerFormContainer>
      <Form onSubmit={handleSubmit(submitForm)}>
        <div>
          <FormTitle>Workout Planner</FormTitle>

          <FormField
            label="Workout"
            id="workout"
            type="workout"
            placeholder="Workout name"
            inputProps={register('workout')}
            error={errors.workout?.message}
            isError={!!errors.workout}
            $direction="horizontal"
            $errorPosition="right"
          />

          <FormField
            label="Date"
            id="workoutDate"
            type="date"
            inputProps={register('workoutDate')}
            error={errors.workoutDate?.message}
            isError={!!errors.workoutDate}
            $direction="horizontal"
            $errorPosition="right"
          />
        </div>

        <Button>Schedule workout</Button>
      </Form>
    </PlannerFormContainer>
  )
}
