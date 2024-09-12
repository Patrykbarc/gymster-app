import { supabase } from '../supabase'

export async function getPlannerData() {
  const { data, error } = await supabase.from('planned_workouts').select()

  return { data, error }
}
