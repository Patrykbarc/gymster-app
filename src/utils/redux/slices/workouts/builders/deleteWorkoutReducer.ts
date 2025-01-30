import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { setError } from '../_helpers/reducersHelper'
import { WorkoutsState } from '../_types/types'
import { deleteWorkout } from '../actions/deleteWorkout'

export const deleteWorkoutReducer = (
  builder: ActionReducerMapBuilder<WorkoutsState>
) => {
  builder
    .addCase(deleteWorkout.fulfilled, (state, action) => {
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== action.payload
      )

      if (state.selectedWorkout?.data?.id === action.payload) {
        state.selectedWorkout = null
      }
    })
    .addCase(deleteWorkout.rejected, setError)
}
