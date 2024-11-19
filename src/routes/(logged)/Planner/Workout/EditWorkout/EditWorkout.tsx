import { useForm } from 'react-hook-form'
import { WorkoutFormBody } from '../../../../../ui/views/WorkoutForm/_components/WorkoutFormBody/WorkoutFormBody'
import { SubmitFormWorkout } from '../../../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { ExercisesListProps } from '../ExercisesList/ExercisesList'

export function EditWorkout({ exercises }: ExercisesListProps) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<SubmitFormWorkout>({
    defaultValues: {
      exercises: exercises?.exercises.map((exercise) => ({
        name: exercise.name,
        sets: exercise.sets.map((set) => ({
          reps: set.reps,
          weight: set.weight,
        })),
      })),
    },
  })

  const onSubmit = (data: SubmitFormWorkout) => {
    console.log('Updated workout data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WorkoutFormBody<SubmitFormWorkout>
        errors={errors}
        control={control}
        register={register}
      />
    </form>
  )
}
