import { createSlice } from '@reduxjs/toolkit'
import { setError, setPending, setSuccess } from './_helpers/reducersHelper'
import { fetchWorkout } from './actions'
import { deleteWorkoutReducer } from './reducers/deleteWorkoutReducer'
import { fetchWorkoutsReducer } from './reducers/fetchWorkoutsReducer'
import { modifyWorkoutReducer } from './reducers/modifyWorkoutReducer'
import { WorkoutsState } from './types'

const initialState: WorkoutsState = {
  workouts: [],
  selectedWorkout: null,
  status: 'idle',
  error: null,
}

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchWorkoutsReducer(builder)
    modifyWorkoutReducer(builder)
    deleteWorkoutReducer(builder)

    builder
      .addCase(fetchWorkout.pending, setPending)
      .addCase(fetchWorkout.fulfilled, (state, action) => {
        setSuccess(state)
        state.selectedWorkout = { data: action.payload }
      })
      .addCase(fetchWorkout.rejected, setError)
  },
})

export default workoutsSlice.reducer
