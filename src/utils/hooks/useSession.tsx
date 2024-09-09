import { useAppSelector } from './useAppSelector'

export function useSession() {
  const session = useAppSelector((state) => state.session)
  if (!session) {
    throw new Error('useSession hook must be used within SessionProvider')
  }
  return { session }
}
