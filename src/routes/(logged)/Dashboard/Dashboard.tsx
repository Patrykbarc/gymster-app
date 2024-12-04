import { Outlet } from 'react-router-dom'
import { Main } from '../../../ui/components/Main/Main'
import { DashboardOverview } from '../../../ui/views/DashboardOverview/DashboardOverview'

export function Dashboard() {
  return (
    <Main>
      <DashboardOverview />
      <Outlet />
    </Main>
  )
}
