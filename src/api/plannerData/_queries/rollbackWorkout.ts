import { supabase } from "../../supabase"

export async function rollbackWorkout(workoutId: string) {
  const { error: deleteError } = await supabase
    .from('planned_workouts')
    .delete()
    .eq('id', workoutId)

  if (deleteError) {
    console.error('rollback workout', deleteError.message)
  }

  return { data: null, error: deleteError }
}
