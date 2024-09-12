import { supabase } from '../supabase'

export type AddWorkoutArgs = {
  userId: string
  workoutName: string
  workoutDate: string
}

export async function handleAddWorkout({
  userId,
  workoutName,
  workoutDate,
}: AddWorkoutArgs) {
  const { data, error } = await supabase
    .from('planned_workouts')
    .upsert({
      user_id: userId,
      workout_name: workoutName,
      workout_date: workoutDate,
    })
    .select()

  if (error) {
    console.error('Błąd podczas dodawania workout:', error.message)
  }

  return { data, error }
}
