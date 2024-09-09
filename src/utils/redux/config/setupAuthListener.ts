import { supabase } from '../../../api/supabase'
import { clearSession, setSession } from '../slices/sessionSlice'
import { AppDispatch } from '../store'

export function setupAuthListener(dispatch: AppDispatch) {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event)
    if (event === 'SIGNED_OUT') {
      dispatch(clearSession())
    } else if (session) {
      dispatch(setSession(session.user))
    }
  })
}
