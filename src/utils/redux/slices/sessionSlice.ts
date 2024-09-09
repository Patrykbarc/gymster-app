import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '@supabase/supabase-js'

type SessionState = {
  user: User | null
}

const initialState: SessionState = {
  user: null,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    clearSession: (state) => {
      state.user = null
    },
  },
})

export const { setSession, clearSession } = sessionSlice.actions
export default sessionSlice.reducer
