import { supabase } from '../../../supabase'
import { printError } from '../../_helpers/printError'

export async function upsertWorkoutBase(
  userId: string,
  workoutName: string,
  workoutDate: string,
  workoutId?: string
) {
  const workoutData = {
    user_id: userId,
    workout_name: workoutName,
    workout_date: workoutDate,
  }

  if (workoutId) {
    Object.assign(workoutData, { workout_id: workoutId })
  }

  const { data, error } = await supabase
    .from('workouts')
    .upsert({
      user_id: userId,
      workout_name: workoutName,
      workout_date: workoutDate,
    })
    .select()

  if (error) {
    printError({ message: 'adding workout', error })
    return { error }
  }

  if (!data || data.length === 0) {
    return { error: new Error('No workout data returned') }
  }

  return { data, workoutId: data[0].id }
}
