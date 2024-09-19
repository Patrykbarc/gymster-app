import { supabase } from '../supabase'

export async function handleGetPlannedWorkouts() {
  const { data, error } = await supabase.from('workouts').select()

  return { data, error }
}
