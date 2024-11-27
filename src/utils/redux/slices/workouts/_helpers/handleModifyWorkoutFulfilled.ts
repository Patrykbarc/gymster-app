import { setSuccess } from './reducersHelper'

import { WorkoutsState } from '../types'

export const handleModifyWorkoutFulfilled = (
  state: WorkoutsState,
  action: any
) => {
  setSuccess(state)

  if (action.payload && Array.isArray(action.payload)) {
    const updatedWorkout = {
      ...action.payload[0],
      exercises: [],
    }

    const { workoutId } = action.meta.arg

    if (workoutId) {
      const index = state.workouts.findIndex(
        (workout) => workout.id === workoutId
      )
      if (index !== -1) {
        state.workouts[index] = updatedWorkout
      }

      if (
        state.selectedWorkout &&
        state.selectedWorkout?.data?.id === workoutId
      ) {
        state.selectedWorkout.data = updatedWorkout
      }
    } else {
      state.workouts.push(updatedWorkout)
    }
  }
}
