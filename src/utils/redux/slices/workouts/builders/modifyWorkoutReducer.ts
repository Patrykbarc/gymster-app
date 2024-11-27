import { handleModifyWorkoutFulfilled } from '../_helpers/handleModifyWorkoutFulfilled'
import { setError, setPending } from '../_helpers/reducersHelper'
import { modifyWorkout } from '../actions/modifyWorkout'

export const modifyWorkoutReducer = (builder: any) => {
  builder
    .addCase(modifyWorkout.pending, setPending)
    .addCase(modifyWorkout.fulfilled, handleModifyWorkoutFulfilled)
    .addCase(modifyWorkout.rejected, setError)
}
