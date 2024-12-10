import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './slices/loading/loadingSlice'
import sessionReducer from './slices/session/sessionSlice'
import sidebarReducer from './slices/sidebar/sidebarSlice'
import workoutsReducer from './slices/workouts/workoutsSlice'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    workouts: workoutsReducer,
    loading: loadingReducer,
    sidebar: sidebarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
