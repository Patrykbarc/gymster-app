import { useFieldArray, useForm } from 'react-hook-form'
import { PlannerFormContainer } from './PlannerFormContainer/PlannerFormContainer'

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

export function PlannerForm() {
  const { control, handleSubmit, register } = useForm<SubmitFormWorkout>({
    defaultValues: {
      info: {
        workout: '',
        workoutDate: '',
      },
      exercises: [{ name: '', sets: [{ set: 1, weight: 1, reps: 1 }] }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exercises',
  })

  const onSubmit = (data: SubmitFormWorkout) => {
    console.log(data)
  }

  return (
    <PlannerFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Workout Name</label>
          <input {...register('info.workout')} />
        </div>
        <div>
          <label>Workout Date</label>
          <input type="date" {...register('info.workoutDate')} />
        </div>

        <button
          type="button"
          onClick={() =>
            append({ name: '', sets: [{ set: 1, weight: 1, reps: 1 }] })
          }
        >
          Add Exercise
        </button>

        <button type="submit">Submit</button>
      </form>
    </PlannerFormContainer>
  )
}
