import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

export type Field = 'weight' | 'reps'

export type UpdateWorkoutParams = {
  setId: number
  field: {
    name: Field
    value: number
  }
}

export async function updateWorkout({
  setId,
  field: { name, value },
}: UpdateWorkoutParams) {
  const { data, error } = await supabase
    .from('sets')
    .update({
      [name]: value,
    })
    .eq('id', setId)

  if (error) {
    printError({ message: 'adding workout', error })
    return undefined
  }

  if (data) {
    return { data }
  }
}
