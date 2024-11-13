import { createSlice } from '@reduxjs/toolkit'
import { WorkoutData } from '../../../../api/plannerData/handleGetWorkout'
import {
  addWorkout,
  deleteWorkout,
  fetchWorkout,
  fetchWorkouts,
} from './actions'
import { WorkoutsState } from './types'

const initialState: WorkoutsState = {
  workouts: [],
  selectedWorkout: null,
  status: 'idle',
  error: null,
}

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
