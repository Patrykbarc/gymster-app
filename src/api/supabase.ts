import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types'

const SUPABASE_API_URL = import.meta.env.VITE_SUPABASE_API_URL
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY

if (!SUPABASE_API_URL || !SUPABASE_API_KEY) {
  throw new Error('Missing Supabase API URL or API key')
}

export const supabase = createClient<Database>(
  SUPABASE_API_URL,
  SUPABASE_API_KEY
)
