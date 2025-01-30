import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleGetPlannedWorkouts } from '../../../../../api/plannerData/handleGetPlannedWorkouts'
import { handleGetWorkout } from '../../../../../api/plannerData/handleGetWorkout'

type FetchWorkoutsProps = {
  workoutId?: string
}

export const fetchWorkouts = createAsyncThunk(
  'workouts/fetchWorkouts',
  async ({ workoutId }: FetchWorkoutsProps, { rejectWithValue }) => {
    try {
      const result = workoutId
        ? await handleGetWorkout(workoutId)
        : await handleGetPlannedWorkouts()

      if (result.error) {
        return rejectWithValue(result.error)
      }

      return result.data
    } catch (error: unknown) {
      return rejectWithValue(
        (error as Error).message || 'Unknown error occurred'
      )
    }
  }
)
