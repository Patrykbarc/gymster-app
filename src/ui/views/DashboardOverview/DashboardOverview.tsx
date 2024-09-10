import { PlannedWorkouts } from './PlannedWorkouts/PlannedWorkouts'
import { TotalProgressOverview } from './TotalProgressOverview/TotalProgressOverview'

export function DashboardOverview() {
  return (
    <div>
      <TotalProgressOverview />
      <PlannedWorkouts />
    </div>
  )
}
