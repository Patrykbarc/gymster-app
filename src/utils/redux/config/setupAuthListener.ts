import { supabase } from '../../../api/supabase'
import { clearSession, setSession } from '../slices/session/sessionSlice'
import { AppDispatch } from '../store'

export async function setupAuthListener(dispatch: AppDispatch) {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    dispatch(setSession(session.user))
  }

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event)
    if (event === 'SIGNED_OUT') {
      dispatch(clearSession())
    } else if (session) {
      dispatch(setSession(session.user))
    }
  })
}
