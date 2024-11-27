import { createAsyncThunk } from '@reduxjs/toolkit'
import { PostgrestError } from '@supabase/supabase-js'
import { handleAddWorkout } from '../../../../../api/plannerData/handleAddWorkout/handleAddWorkout'
import { handleEditWorkout } from '../../../../../api/plannerData/handleEditWorkout/handleEditWorkout'
import { FormWorkout } from '../../../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'

type ModifyWorkoutArgs = {
  workoutData: FormWorkout
  workoutId?: string
}

export const modifyWorkout = createAsyncThunk(
  'workouts/modifyWorkout',
  async (
    { workoutId, workoutData }: ModifyWorkoutArgs,
    { rejectWithValue }
  ) => {
    try {
      const result = workoutId
        ? await handleEditWorkout({ ...workoutData, workoutId })
        : await handleAddWorkout(workoutData)

      if (result.error) {
        throwError(result.error)
      }
      return result.data
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unknown error occurred')
    }
  }
)

function throwError(error: string | PostgrestError | null) {
  const errorMessage =
    typeof error === 'string'
      ? error
      : (error as PostgrestError)?.message || 'Unknown error'

  throw new Error(errorMessage)
}