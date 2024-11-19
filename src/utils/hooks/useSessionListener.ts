import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../api/supabase'
import { clearSession, setSession } from '../redux/slices/session/sessionSlice'
import { useAppDispatch } from './useAppDispatch'

export const useSessionListener = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setSession(session))
      } else {
        dispatch(clearSession())
        navigate('/login')
      }
    })

    return () => subscription.unsubscribe()
  }, [])
}
