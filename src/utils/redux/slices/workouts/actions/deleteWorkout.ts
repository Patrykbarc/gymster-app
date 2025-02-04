import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleDeleteWorkout } from '../../../../../api/plannerData/handleDeleteWorkout'
import { fetchOverview } from '../../overview/actions/fetchOverview'

export const deleteWorkout = createAsyncThunk(
  'workouts/deleteWorkout',
  async (workoutId: string, { dispatch }): Promise<string> => {
    const { error } = await handleDeleteWorkout(workoutId)
    if (error) throw new Error(error.message)

    dispatch(fetchOverview())

    return workoutId
  }
)
