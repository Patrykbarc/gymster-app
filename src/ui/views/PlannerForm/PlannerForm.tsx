import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'
import { Form } from '../../components/Form/Form/Form'
import { FormField } from '../../components/Form/FormField/FormField'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { ScheduledWorkouts } from '../../components/ScheduledWorkouts/ScheduledWorkouts'

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
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
`

export function PlannerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PLANNER_FORM_SCHEMA),
    mode: 'onBlur',
    defaultValues: { workout: '', workoutDate: '' },
  })

  function submitForm(e) {
    console.log(e)
  }

  console.log(errors)
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
      </Form>

      <ScheduledWorkouts />
    </PlannerFormContainer>
  )
}
