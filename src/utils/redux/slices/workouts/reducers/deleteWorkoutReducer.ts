import { setError } from '../_helpers/reducersHelper'
import { deleteWorkout } from '../actions'
import { WorkoutsState } from '../types'

export const deleteWorkoutReducer = (builder: any) => {
  builder
    .addCase(deleteWorkout.fulfilled, (state: WorkoutsState, action: any) => {
      state.workouts = state.workouts.filter(
        (workout) => workout.id !== action.payload
      )

      if (state.selectedWorkout?.data?.id === action.payload) {
        state.selectedWorkout = null
      }
    })
    .addCase(deleteWorkout.rejected, setError)
}
