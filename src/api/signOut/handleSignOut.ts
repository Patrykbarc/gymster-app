import { supabase } from '../supabase'

export async function handleSignOut() {
  const { error } = await supabase.auth.signOut()
  console.log(error)

  if (!error) {
    window.location.href = '/login'
  }
}
