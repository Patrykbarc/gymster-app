import { PlannedWorkouts } from '../../../../utils/redux/slices/workouts/_types/types'
import { WorkoutContainer } from './WorkoutContainer/WorkoutContainer'

type WorkoutProps = PlannedWorkouts

export function Workout({ ...workout }: WorkoutProps) {
  return (
    <WorkoutContainer id={workout.id}>
      <h3>{workout.workout_name}</h3>
      <h2>{workout.workout_date}</h2>
    </WorkoutContainer>
  )
}
