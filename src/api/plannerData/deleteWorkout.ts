import { supabase } from '../supabase'

export async function deleteWorkout(workoutId: string) {
  const { data, error } = await supabase
    .from('planned_workouts')
    .delete()
    .eq('id', workoutId)

  return { data, error }
}
