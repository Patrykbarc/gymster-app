import { useAppSelector } from './useAppSelector'

export function useSession() {
  const session = useAppSelector((state) => state.session?.session)

  if (session === undefined) {
    throw new Error('useSession hook must be used within Redux provider')
  }

  return { session }
}
