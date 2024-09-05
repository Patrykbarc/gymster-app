import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'
import { supabase } from '../../../api/supabase'
import { useSession } from '../../../utils/hooks/useSession'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormField } from '../../components/Form/FormField/FormField'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'

type SubmitFormWorkout = z.infer<typeof PLANNER_FORM_SCHEMA>

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

export function PlannerForm() {
  const { session } = useSession()

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
    const { data, error } = await supabase
      .from('planned_workouts')
      .upsert({
        user_id: session.id,
        workout_name: workout,
        workout_date: workoutDate,
      })
      .select()

    console.log(data)
    console.log(error)
  }

  console.log(session.id)
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
