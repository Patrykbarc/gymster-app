import { ReactNode } from 'react'
import { PlannedWorkouts } from '../../../../utils/redux/slices/workouts/workoutsSlice'
import { Link } from '../../Link/Link'
import { WorkoutContainer } from './WorkoutContainer/WorkoutContainer'

type WorkoutProps = {
  children: ReactNode
} & PlannedWorkouts

export function Workout({ children, ...workout }: WorkoutProps) {
  return (
    <WorkoutContainer id={workout.id}>
      <div>
        <Link to={workout.id}>
          <h3>{workout.workout_name}</h3>
        </Link>
        <h2>{workout.workout_date}</h2>
      </div>
      {children}
    </WorkoutContainer>
  )
}
