import { createSlice } from '@reduxjs/toolkit'
import { WorkoutsState } from './_types/types'
import { deleteWorkoutReducer } from './builders/deleteWorkoutReducer'
import { fetchWorkoutsReducer } from './builders/fetchWorkoutsReducer'
import { modifyWorkoutReducer } from './builders/modifyWorkoutReducer'

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
