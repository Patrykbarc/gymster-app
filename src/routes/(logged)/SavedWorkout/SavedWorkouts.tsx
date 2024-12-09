import { Outlet } from 'react-router-dom'
import { Main } from '../../../ui/components/Main/Main'
import { WorkoutsList } from '../../../ui/views/WorkoutsList/WorkoutsList'

export function SavedWorkouts() {
  return (
    <Main>
      <WorkoutsList />
      <Outlet />
    </Main>
  )
}
