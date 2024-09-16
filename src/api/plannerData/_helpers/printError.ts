import { PostgrestError } from '@supabase/supabase-js'

type PrintErrorArgs = {
  message: string
  error: PostgrestError
}

export function printError({ message, error }: PrintErrorArgs) {
  console.error(`An error occured during ${message}:`, error.message)
}
