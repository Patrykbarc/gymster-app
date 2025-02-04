import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleAddWorkout } from '../../../../../api/plannerData/handleAddWorkout/handleAddWorkout'
import { handleEditWorkout } from '../../../../../api/plannerData/handleEditWorkout/handleEditWorkout'
import { FormWorkout } from '../../../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'
import { fetchOverview } from '../../overview/actions/fetchOverview'
import { throwError } from './_helper/throwError'

type ModifyWorkoutArgs = {
  workoutData: FormWorkout
  workoutId?: string
}

export const modifyWorkout = createAsyncThunk(
  'workouts/modifyWorkout',
  async (
    { workoutId, workoutData }: ModifyWorkoutArgs,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const result = workoutId
        ? await handleEditWorkout({ ...workoutData, workoutId })
        : await handleAddWorkout(workoutData)

      if (result.error) {
        throwError(result.error)
      }

      dispatch(fetchOverview())

      return result.data
    } catch (error: unknown) {
      return rejectWithValue(
        (error as Error).message || 'Unknown error occurred'
      )
    }
  }
)
