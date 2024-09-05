import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../../api/supabase'
import { Children } from '../../types/Children'
import { SessionContext } from './contexts/SessionContext'

export function SessionProvider({ children }: Children) {
  const [session, setSession] = useState<null | User>(null)

  useEffect(() => {
    async function getUserSession() {
      console.log('Fetching session data...')
      const { data, error } = await supabase.auth.getUser()

      data && setSession(data.user)
      error && console.log('Error during fetching user session')
    }

    getUserSession()
  }, [])

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}
