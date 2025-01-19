import { supabase } from '../supabase'

export async function handleSignOut() {
  const { error } = await supabase.auth.signOut()

  if (!error) {
    window.location.href = '/login'
  }
}
