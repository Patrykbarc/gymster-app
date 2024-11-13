import { PostgrestError } from '@supabase/supabase-js'
import { Database } from '../../types/database.types'
import { supabase } from '../supabase'

type Workout = Database['public']['Tables']
type Exercise = Workout['exercises']['Row']
type Set = Workout['sets']['Row']

export type WorkoutData = {
  data:
    | (Workout['workouts']['Row'] & {
        exercises: (Exercise & {
          sets: Set[]
        })[]
      })
    | null
}

type ReturnType = {
  data: WorkoutData['data']
  error: PostgrestError | null
}

export async function handleGetWorkout(workoutId: string): Promise<ReturnType> {
  const { data, error } = await supabase
    .from('workouts')
    .select(
      `
      *,
      exercises!workout_id (
        id,
        name,
        workout_id,
        sets!exercise_id (
          id,
          set,
          weight,
          reps,
          exercise_id,
          workout_id
        )
      )
    `
    )
    .eq('id', workoutId)
    .single()

  return { data, error }
}
