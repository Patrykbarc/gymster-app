import { supabase } from '../supabase'

export async function handleDeleteWorkout(workoutId: string) {
  const { data, error } = await supabase
    .from('workouts')
    .delete()
    .eq('id', workoutId)

  return { data, error }
}
