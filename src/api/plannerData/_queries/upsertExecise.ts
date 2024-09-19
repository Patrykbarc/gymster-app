import { SubmitFormWorkout } from '../../../ui/views/PlannerForm/PlannerForm'
import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

export async function upsertExecise(
  workoutId: string,
  exercises: SubmitFormWorkout['exercises']
) {
  const mappedExercises = exercises.map((exercise) => {
    const { sets, ...rest } = exercise
    return { ...rest, planned_workout_id: workoutId }
  })

  const { data, error } = await supabase
    .from('exercises')
    .upsert(mappedExercises)
    .select()

  if (error) {
    printError({ message: 'adding workout', error })
  }

  return { data, error }
}
