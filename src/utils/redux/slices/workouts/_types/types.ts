import { WorkoutData } from '../../../../../api/plannerData/handleGetWorkout'
import { Database } from '../../../../../types/database.types'

export type PlannedWorkouts = Database['public']['Tables']['workouts']['Row']

export type WorkoutsState = {
  workouts: PlannedWorkouts[]
  selectedWorkout: WorkoutData | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}
