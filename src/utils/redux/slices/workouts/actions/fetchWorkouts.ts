import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleGetPlannedWorkouts } from '../../../../../api/plannerData/handleGetPlannedWorkouts'
import { handleGetWorkout } from '../../../../../api/plannerData/handleGetWorkout'
import { throwError } from './_helper/throwError'

export const fetchWorkouts = createAsyncThunk(
  'workouts/fetchWorkouts',
  async (workoutId?: string) => {
    try {
      const result = workoutId
        ? await handleGetWorkout(workoutId)
        : await handleGetPlannedWorkouts()

      if (result.error) {
        throwError(result.error)
      }
      return result.data
    } catch (error: any) {
      return error.message || 'Unknown error occurred'
    }
  }
)
