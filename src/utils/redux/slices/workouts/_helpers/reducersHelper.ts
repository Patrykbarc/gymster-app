import { WorkoutsState } from '../_types/types'

export const setPending = (state: WorkoutsState) => {
  state.status = 'loading'
}

export const setError = (
  state: WorkoutsState,
  action: { error: { message?: string } }
) => {
  state.status = 'failed'
  state.error = action.error.message || 'Something went wrong'
}

export const setSuccess = (state: WorkoutsState) => {
  state.status = 'succeeded'
}
