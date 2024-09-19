import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { handleAddWorkout } from '../../../../api/plannerData/handleAddWorkout/handleAddWorkout'
import { handleDeleteWorkout } from '../../../../api/plannerData/handleDeleteWorkout'
import { handleGetPlannedWorkouts } from '../../../../api/plannerData/handleGetPlannedWorkouts'
import { Database } from '../../../../types/database.types'
import { FormWorkout } from '../../../../ui/views/PlannerForm/_helpers/submitPlannerForm'

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
    const { data, error } = await handleGetPlannedWorkouts()
    if (error) throw new Error(error.message)
    return data || []
  }
)

export const addWorkout = createAsyncThunk(
  'workouts/addWorkout',
  async (workoutData: FormWorkout) => {    
    const { data, error } = await handleAddWorkout(workoutData)
    if (error) throw new Error(error.message)
    return data ? data[0] : null
  }
)

export const deleteWorkout = createAsyncThunk(
  'workouts/deleteWorkout',
  async (workoutId: string): Promise<string> => {
    const { error } = await handleDeleteWorkout(workoutId)
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
      .addCase(addWorkout.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (action.payload) {
          state.workouts.push(action.payload)
        }
      })
      .addCase(addWorkout.rejected, (state, action) => {
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
