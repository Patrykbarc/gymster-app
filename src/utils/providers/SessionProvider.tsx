// SessionProvider.tsx
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Children } from '../../types/Children'
import { setupAuthListener } from '../redux/config/setupAuthListener'
import { SessionContext } from './contexts/SessionContext'

export function SessionProvider({ children }: Children) {
  const dispatch = useDispatch()

  useEffect(() => {
    setupAuthListener(dispatch)
  }, [dispatch])

  return (
    <SessionContext.Provider value={null}>{children}</SessionContext.Provider>
  )
}
