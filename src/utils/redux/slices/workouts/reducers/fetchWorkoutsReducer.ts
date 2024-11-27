import { setError, setPending, setSuccess } from '../_helpers/reducersHelper'
import { fetchWorkouts } from '../actions'
import { WorkoutsState } from '../types'

export const fetchWorkoutsReducer = (builder: any) => {
  builder
    .addCase(fetchWorkouts.pending, setPending)
    .addCase(fetchWorkouts.fulfilled, (state: WorkoutsState, action: any) => {
      setSuccess(state)
      state.workouts = action.payload
    })
    .addCase(fetchWorkouts.rejected, setError)
}
