import { useAppSelector } from './useAppSelector'

export function useSession() {
  const userSession = useAppSelector((state) => state.session)

  if (!userSession) {
    throw new Error('useSession hook must be used within Redux provider')
  }

  const session = userSession.user

  return { session }
}
