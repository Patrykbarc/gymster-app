import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../api/supabase'
import { useSession } from './useSession'

export function useCheckSession() {
  const { session } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        navigate('/')
      }
    }

    checkSession()
  }, [session])
}
