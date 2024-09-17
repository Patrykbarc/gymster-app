import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch'
import { Button } from '../../components/Button/Button'
import { Form } from '../../components/Form/Form/Form'
import { FormTitle } from '../../components/Form/FormTitle/FormTitle'
import { ExerciseFields } from './ExerciseFields/ExerciseFields'
import { PLANNER_FORM_SCHEMA } from './_helpers/planner-form-schema'
import { submitPlannerForm } from './_helpers/submitPlannerForm'
import { PlannerFormContainer } from './PlannerFormContainer/PlannerFormContainer'
import { PlannerTitleAndDate } from './PlannerTitleAndDate/PlannerTitleAndDate'

export type SubmitFormWorkout = {
  info: {
    workout: string
    workoutDate: string
  }
  exercises: {
    name: string
    sets: {
      set: number
      weight: number
      reps: number
    }[]
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
        workout: '',
        workoutDate: '',
      },
      exercises: [
        {
          name: '',
          sets: [{ set: 1, weight: 1, reps: 1 }],
        },
      ],
    },
  })

  const {
    fields: exerciseFields,
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({
    control,
    name: 'exercises',
  })

  const dispatch = useAppDispatch()

  const onSubmit = (data: SubmitFormWorkout) => {
    submitPlannerForm({
      workout: data.info.workout,
      workoutDate: data.info.workoutDate,
      userId,
      exercises: data.exercises,
      dispatch,
    })
  }

  return (
    <PlannerFormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields">
          <FormTitle>Workout Planner</FormTitle>
          <PlannerTitleAndDate errors={errors} register={register} />

          {exerciseFields.map((exercise, exerciseIndex) => (
            <ExerciseFields
              key={exercise.id}
              control={control}
              register={register}
              exerciseIndex={exerciseIndex}
              errors={errors}
              removeExercise={removeExercise}
            />
          ))}

          <Button
            onClick={() =>
              appendExercise({
                name: '',
                sets: [{ set: 1, weight: 1, reps: 1 }],
              })
            }
          >
            Add new exercise
          </Button>
        </div>
        <Button type="submit">Schedule workout</Button>
      </Form>
    </PlannerFormContainer>
  )
}
