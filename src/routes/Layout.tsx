import { Children } from '../types/Children'

type LayoutProps = Children

export function Layout({ children }: LayoutProps) {
  return <>{children}</>
}
