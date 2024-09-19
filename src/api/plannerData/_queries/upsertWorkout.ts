import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

export async function upsertWorkout(
  userId: string,
  workoutName: string,
  workoutDate: string
) {
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
    return undefined
  }

  if (!data || data.length === 0) {
    return undefined
  }

  const workoutId: string = data[0].id
  return { data, workoutId }
}
