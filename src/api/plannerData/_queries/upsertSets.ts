import { SubmitFormWorkout } from '../../../ui/views/WorkoutForm/_types/SubmitFormWorkout'
import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

type ExeciseDataArgs = {
  id: number
  name: string
  workout_id: string
}[]

type SetDataProps = {
  id?: number
  set: number
  weight: number
  reps: number
  exercise_id: number
  workout_id: string
}

export async function upsertSets(
  workoutId: string,
  sets: SubmitFormWorkout['exercises'],
  exerciseData: ExeciseDataArgs
) {
  const existingSets: SetDataProps[] = []
  const newSets: SetDataProps[] = []
  const existingSetIds = new Set<number>()

  sets.forEach((set, index) => {
    set.sets.forEach((s) => {
      const setData = {
        set: s.set,
        weight: s.weight,
        reps: s.reps,
        exercise_id: exerciseData[index]?.id,
        workout_id: workoutId,
      }

      if (s.id) {
        existingSets.push({ ...setData, id: s.id })
        existingSetIds.add(s.id)
      } else {
        newSets.push(setData)
      }
    })
  })

  const { error: deleteError } = await supabase
    .from('sets')
    .delete()
    .eq('workout_id', workoutId)
    .not('id', 'in', `(${Array.from(existingSetIds).join(',')})`)

  if (deleteError) {
    printError({ message: 'deleting removed sets', error: deleteError })
    return { error: deleteError }
  }

  if (existingSets.length > 0) {
    const { error: upsertError } = await supabase
      .from('sets')
      .upsert(existingSets, { onConflict: 'id' })
      .select()

    if (upsertError) {
      printError({ message: 'updating existing sets', error: upsertError })
      return { error: upsertError }
    }
  }

  if (newSets.length > 0) {
    const { error: insertError } = await supabase
      .from('sets')
      .insert(newSets)
      .select()

    if (insertError) {
      printError({ message: 'inserting new sets', error: insertError })
      return { error: insertError }
    }
  }

  return { error: null }
}
