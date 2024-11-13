import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { handleAddWorkout } from '../../../../api/plannerData/handleAddWorkout/handleAddWorkout'
import { handleDeleteWorkout } from '../../../../api/plannerData/handleDeleteWorkout'
import { handleGetPlannedWorkouts } from '../../../../api/plannerData/handleGetPlannedWorkouts'
import {
  handleGetWorkout,
  WorkoutData,
} from '../../../../api/plannerData/handleGetWorkout'
import { Database } from '../../../../types/database.types'
import { FormWorkout } from '../../../../ui/views/WorkoutForm/_helpers/submitPlannerForm'

export type PlannedWorkouts = Database['public']['Tables']['workouts']['Row']

export type WorkoutsState = {
  workouts: PlannedWorkouts[]
  selectedWorkout: WorkoutData | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}

const initialState: WorkoutsState = {
  workouts: [],
  selectedWorkout: null,
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

export const fetchWorkout = createAsyncThunk(
  'workouts/fetchWorkout',
  async (workoutId: string) => {
    const { data, error } = await handleGetWorkout(workoutId)
    if (error) throw new Error(error.message)
    return data || null
  }
)

export const addWorkout = createAsyncThunk(
  'workouts/addWorkout',
  async (workoutData: FormWorkout) => {
    const result = await handleAddWorkout(workoutData)

    if (!result) {
      throw new Error('No response from handleAddWorkout')
    }

    const { data, error } = result

    if (error) {
      throw new Error(error.message)
    }

    return data && data.length > 0 ? data[0] : null
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

const setPending = (state: WorkoutsState) => {
  state.status = 'loading'
}

const setError = (state: WorkoutsState, action: any) => {
  state.status = 'failed'
  state.error = action.error.message
}

const setSuccess = (state: WorkoutsState) => {
  state.status = 'succeeded'
}

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Workouts
      .addCase(fetchWorkouts.pending, setPending)
      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        setSuccess(state)
        state.workouts = action.payload
      })
      .addCase(fetchWorkouts.rejected, setError)

      // Add Workout
      .addCase(addWorkout.fulfilled, (state, action) => {
        setSuccess(state)
        if (action.payload) {
          state.workouts.push(action.payload)
        }
      })
      .addCase(addWorkout.rejected, setError)

      // Delete Workout
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        state.workouts = state.workouts.filter(
          (workout) => workout.id !== action.payload
        )
      })
      .addCase(deleteWorkout.rejected, setError)

      // Fetch Single Workout
      .addCase(fetchWorkout.pending, setPending)
      .addCase(fetchWorkout.fulfilled, (state, action) => {
        setSuccess(state)
        state.selectedWorkout = { data: action.payload } as WorkoutData
      })
      .addCase(fetchWorkout.rejected, setError)
  },
})

export default workoutsSlice.reducer
