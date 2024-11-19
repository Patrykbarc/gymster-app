import { useSession } from './useSession'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useCheckSession() {
  const { session } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    if (session) {
      navigate('/')
    }
  }, [session])
}
