import { useContext } from 'react'
import { SessionContext } from '../providers/contexts/SessionContext'

export function useSession() {
  const session = useContext(SessionContext)

  if (!session) {
    throw new Error('useSession hook must be used within SessionProvider')
  }

  return { session }
}
