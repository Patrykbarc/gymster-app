import { UseFormReset } from 'react-hook-form'
import { WORKOUT_DEFAULT_VALUES } from '../_constants/workout-default-values'
import { SubmitFormWorkout } from '../_types/SubmitFormWorkout'

export function handleFormReset(reset: UseFormReset<SubmitFormWorkout>) {
  localStorage.removeItem('workoutForm')
  reset({
    exercises: WORKOUT_DEFAULT_VALUES.defaultValues.exercises,
    info: WORKOUT_DEFAULT_VALUES.defaultValues.info,
  })
}
