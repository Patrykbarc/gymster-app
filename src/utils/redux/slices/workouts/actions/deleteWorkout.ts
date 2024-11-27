import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleDeleteWorkout } from '../../../../../api/plannerData/handleDeleteWorkout'

export const deleteWorkout = createAsyncThunk(
  'workouts/deleteWorkout',
  async (workoutId: string): Promise<string> => {
    const { error } = await handleDeleteWorkout(workoutId)
    if (error) throw new Error(error.message)
    return workoutId
  }
)
