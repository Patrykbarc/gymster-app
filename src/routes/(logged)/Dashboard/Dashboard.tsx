import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Main } from '../../../ui/components/Main/Main'
import { DashboardOverview } from '../../../ui/views/DashboardOverview/DashboardOverview'

export function Dashboard() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      window.location.href = '/dashboard'
    }
  }, [pathname])

  return (
    <Main>
      <DashboardOverview />
      <Outlet />
    </Main>
  )
}
