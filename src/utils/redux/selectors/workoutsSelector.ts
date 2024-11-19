import { createSelector } from 'reselect'
import { RootState } from '../store'

const selectWorkouts = (state: RootState) => state.workouts.workouts
const selectStatus = (state: RootState) => state.workouts.status
const selectError = (state: RootState) => state.workouts.error
const selectUser = (state: RootState) => state.session.session?.user
const selectSelectedWorkout = (state: RootState) =>
  state.workouts.selectedWorkout

export const workoutsSelector = createSelector(
  [
    selectWorkouts,
    selectStatus,
    selectError,
    selectUser,
    selectSelectedWorkout,
  ],
  (workouts, status, error, user, selectedWorkout) => ({
    workouts,
    status,
    error,
    user,
    selectedWorkout,
  })
)
