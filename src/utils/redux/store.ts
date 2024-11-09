import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './slices/loading/loadingSlice'
import sessionReducer from './slices/session/sessionSlice'
import {
  default as workoutReducer,
  default as workoutsReducer,
} from './slices/workouts/workoutsSlice'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    workouts: workoutsReducer,
    workout: workoutReducer,
    loading: loadingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
