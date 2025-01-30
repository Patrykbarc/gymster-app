import { PayloadAction } from '@reduxjs/toolkit'
import { setSuccess } from './reducersHelper'

import { WorkoutsState } from '../_types/types'

type ModifyWorkoutPayload = {
  created_at: string
  id: string
  user_id: string
  workout_date: string
  workout_name: string
}[]

export const handleModifyWorkoutFulfilled = (
  state: WorkoutsState,
  action: PayloadAction<
    ModifyWorkoutPayload,
    string,
    { arg: { workoutId?: string } }
  >
) => {
  setSuccess(state)

  state.workouts = action.payload
  state.status = 'succeeded'
  state.error = null

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
