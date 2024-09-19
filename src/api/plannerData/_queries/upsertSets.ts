import { SubmitFormWorkout } from '../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

type ExeciseDataArgs = {
  id: number
  name: string
  workout_id: string
}[]

export async function upsertSets(
  workoutId: string,
  sets: SubmitFormWorkout['exercises'],
  exerciseData: ExeciseDataArgs
) {
  const mappedSets = sets.flatMap((set, index) =>
    set.sets.map((s) => {
      return {
        set: s.set,
        weight: s.weight,
        reps: s.reps,
        exercise_id: exerciseData[index]?.id,
        workout_id: workoutId,
      }
    })
  )

  const { error } = await supabase.from('sets').upsert(mappedSets).select()

  if (error) {
    printError({ message: 'adding sets', error })
  }

  return { error }
}
