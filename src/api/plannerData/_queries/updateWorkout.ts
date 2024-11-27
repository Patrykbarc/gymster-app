import { supabase } from '../../supabase'
import { printError } from '../_helpers/printError'

export type Field = 'weight' | 'reps'

export type UpdateSetParams = {
  setId: number
  field: {
    name: Field
    value: number
  }
}

export async function updateSet({
  setId,
  field: { name, value },
}: UpdateSetParams) {
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
