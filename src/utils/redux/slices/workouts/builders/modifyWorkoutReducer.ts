import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { handleModifyWorkoutFulfilled } from '../_helpers/handleModifyWorkoutFulfilled'
import { setError, setPending } from '../_helpers/reducersHelper'
import { WorkoutsState } from '../_types/types'
import { modifyWorkout } from '../actions/modifyWorkout'

export const modifyWorkoutReducer = (
  builder: ActionReducerMapBuilder<WorkoutsState>
) => {
  builder
    .addCase(modifyWorkout.pending, setPending)
    .addCase(modifyWorkout.fulfilled, handleModifyWorkoutFulfilled)
    .addCase(modifyWorkout.rejected, setError)
}
