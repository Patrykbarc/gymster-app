import { PostgrestError } from '@supabase/supabase-js'

export function throwError(error: string | PostgrestError | null) {
  const errorMessage =
    typeof error === 'string'
      ? error
      : (error as PostgrestError)?.message || 'Unknown error'

  throw new Error(errorMessage)
}
