import { supabase } from '../supabase'

export async function handleGetPlannedWorkouts() {
  const { data, error } = await supabase.from('planned_workouts').select()

  return { data, error }
}
