import { useEffect } from 'react'
import { useAppDispatch } from './useAppDispatch'

import { supabase } from '../../api/supabase'
import { clearSession, setSession } from '../redux/slices/session/sessionSlice'

export const useSessionListener = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log({ event, session })
        if (event === 'SIGNED_OUT' || !session) {
          dispatch(clearSession())
        } else if (session) {
          dispatch(setSession(session.user))
        }
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [dispatch])
}
