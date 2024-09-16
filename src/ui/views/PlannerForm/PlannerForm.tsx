import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { PLANNER_FORM_SCHEMA } from './helpers/planner-form-schema'
import { renderField } from './helpers/renderField'
import { submitPlannerForm } from './helpers/submitPlannerForm'
import { PlannerFormContainer } from './PlannerFormContainer/PlannerFormContainer'
import { RenderFields } from './RenderFields/RenderFields'
import { WorkoutsTitles } from './WorkoutsTitles/WorkoutsTitles'

export type SubmitFormWorkout = {
  info: {
    workout: string
    workoutDate: string
  }
  sets: {
    set: number
    weight: number
    reps: number
  }[]
}

type PlannerFormProps = {
  userId: string
}

export function PlannerForm({ userId }: PlannerFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SubmitFormWorkout>({
    resolver: zodResolver(PLANNER_FORM_SCHEMA),
    mode: 'onBlur',
    defaultValues: {
      info: {
        workout: 'Test workout',
        workoutDate: '2024-09-24T00:00:00.000Z',
      },
      sets: [{ set: 1, weight: 0, reps: 0 }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sets',
  })

  const dispatch = useAppDispatch()

  const onSubmit = (data: SubmitFormWorkout) => {
    submitPlannerForm({
      workout: data.info.workout,
      workoutDate: data.info.workoutDate,
      userId,
      sets: data.sets,
      dispatch,
    })
  }

  return (
    <PlannerFormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">
          <FormTitle>Workout Planner</FormTitle>

          <div className="form-main-info ">
            {renderField({
              id: 'info.workout',
              label: 'Workout',
              type: 'text',
              registerName: 'info.workout',
              error: errors.info?.workout?.message,
              register,
            })}
            {renderField({
              id: 'info.workoutDate',
              label: 'Date',
              type: 'date',
              registerName: 'info.workoutDate',
              error: errors.info?.workoutDate?.message,
              register,
            })}
          </div>

          <div>
            <WorkoutsTitles />
            <RenderFields
              fields={fields}
              register={register}
              errors={errors}
              remove={remove}
            />
          </div>

          <Button
            type="button"
            onClick={() =>
              append({ set: fields.length + 1, weight: 0, reps: 0 })
            }
          >
            Add set
          </Button>
        </div>
        <Button type="submit">Schedule workout</Button>
      </Form>
    </PlannerFormContainer>
  )
}
