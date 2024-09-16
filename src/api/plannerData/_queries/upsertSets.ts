import { supabase } from "../../supabase"
import { printError } from "../_helpers/printError"
import { AddWorkoutArgs } from "../handleAddWorkout/handleAddWorkout"

export async function upsertSets(
  sets: AddWorkoutArgs['sets'],
  workoutId: string
) {
  const mappedSets = sets.map((set) => {
    return { ...set, planned_workout_id: workoutId }
  })

  const { error } = await supabase.from('sets').upsert(mappedSets).select()

  if (error) {
    printError({ message: 'adding sets', error })
  }

  return { error }
}
