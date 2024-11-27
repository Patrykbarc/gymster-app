import { setError, setSuccess } from '../_helpers/reducersHelper'
import { WorkoutsState } from '../_types/types'
import { fetchWorkouts } from '../actions/fetchWorkouts'

export const fetchWorkoutsReducer = (builder: any) => {
  builder
    .addCase(fetchWorkouts.fulfilled, (state: WorkoutsState, action: any) => {
      setSuccess(state)
      if (Array.isArray(action.payload)) {
        // Multiple workouts
        state.workouts = action.payload
        state.selectedWorkout = null
      } else {
        // Single workout
        state.selectedWorkout = { data: action.payload }
      }
    })
    .addCase(fetchWorkouts.rejected, (state: WorkoutsState, action: any) => {
      setError(state, action)
      state.selectedWorkout = null
    })
}
