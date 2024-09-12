import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormField } from '../../components/Form/FormField/FormField'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { PLANNER_FORM_SCHEMA } from './helpers/planner-form-schema'
import { submitPlannerForm } from './helpers/submitPlannerForm'
import { WorkoutsTitles } from './WorkoutsTitles/WorkoutsTitles'

type SubmitFormWorkout = { workout: string; workoutDate: string }
type PlannerFormProps = {
  userId: string
}

const PlannerFormContainer = styled.div`
  display: grid;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};

  .form-fields {
    display: grid;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  .form-workouts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.small};
  }

  .title {
    text-transform: uppercase;
    font-weight: 600;
  }
`

export function PlannerForm({ userId }: PlannerFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFormWorkout>({
    resolver: zodResolver(PLANNER_FORM_SCHEMA),
    mode: 'onBlur',
    defaultValues: { workout: '', workoutDate: '' },
  })

  const dispatch = useAppDispatch()

  function onSubmit(data: SubmitFormWorkout) {
    submitPlannerForm({
      workout: data.workout,
      workoutDate: data.workoutDate,
      userId,
      dispatch,
    })
  }

  return (
    <PlannerFormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">
          <FormTitle>Workout Planner</FormTitle>
          <FormField
            label="Workout"
            id="workout"
            type="text"
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

          <div>
            <WorkoutsTitles />
            <div className="form-workouts">
              <FormField
                id="workoutDate"
                type="number"
                defaultValue={0}
                min={0}
                inputProps={register('workoutDate')}
                error={errors.workoutDate?.message}
                isError={!!errors.workoutDate}
              />
              <FormField
                id="workoutDate"
                type="number"
                defaultValue={0}
                min={0}
                inputProps={register('workoutDate')}
                error={errors.workoutDate?.message}
                isError={!!errors.workoutDate}
              />
              <FormField
                id="workoutDate"
                type="number"
                defaultValue={0}
                min={0}
                inputProps={register('workoutDate')}
                error={errors.workoutDate?.message}
                isError={!!errors.workoutDate}
              />
            </div>
          </div>
          <Button $variant="outline">Add set</Button>
        </div>

        <Button>Schedule workout</Button>
      </Form>
    </PlannerFormContainer>
  )
}
