import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './slices/session/sessionSlice'
import workoutsReducer from './slices/workouts/workoutsSlice'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    workouts: workoutsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
