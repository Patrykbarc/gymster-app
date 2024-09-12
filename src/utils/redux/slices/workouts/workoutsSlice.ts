import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteWorkout as deleteWorkoutApi } from '../../../../api/plannerData/deleteWorkout'
import { getPlannerData } from '../../../../api/plannerData/fetchWorkouts'
import { Database } from '../../../../types/database.types'

export type PlannedWorkouts =
  Database['public']['Tables']['planned_workouts']['Row']

export type WorkoutsState = {
  workouts: PlannedWorkouts[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}

const initialState: WorkoutsState = {
  workouts: [],
  status: 'idle',
  error: null,
}

export const fetchWorkouts = createAsyncThunk(
  'workouts/fetchWorkouts',
  async (): Promise<PlannedWorkouts[]> => {
    const { data, error } = await getPlannerData()
    if (error) throw new Error(error.message)
    return data || []
  }
)

export const deleteWorkout = createAsyncThunk(
  'workouts/deleteWorkout',
  async (workoutId: string): Promise<string> => {
    const { error } = await deleteWorkoutApi(workoutId)
    if (error) throw new Error(error.message)
    return workoutId
  }
)

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkouts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.workouts = action.payload
      })
      .addCase(fetchWorkouts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        state.workouts = state.workouts.filter(
          (workout) => workout.id !== action.payload
        )
      })
      .addCase(deleteWorkout.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default workoutsSlice.reducer
