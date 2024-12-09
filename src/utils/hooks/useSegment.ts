import { useLocation } from 'react-router-dom'

export function useSegment() {
  const pathname = useLocation().pathname
  const pathnameSegments = pathname.split('/')
  const currentPath = pathnameSegments[pathnameSegments.length - 1]
  return { currentPath }
}
