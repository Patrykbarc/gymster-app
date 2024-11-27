import { createSlice } from '@reduxjs/toolkit'
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
  },
})

export default workoutsSlice.reducer
