import { createSelector } from 'reselect'
import { RootState } from '../store'

const selectWorkouts = (state: RootState) => state.workouts.workouts
const selectStatus = (state: RootState) => state.workouts.status
const selectError = (state: RootState) => state.workouts.error
const selectUser = (state: RootState) => state.session.user

export const workoutsSelector = createSelector(
  [selectWorkouts, selectStatus, selectError, selectUser],
  (workouts, status, error, user) => ({
    workouts,
    status,
    error,
    user,
  })
)
