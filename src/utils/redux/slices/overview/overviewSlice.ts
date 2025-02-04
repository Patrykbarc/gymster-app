import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchOverview } from './actions/fetchOverview'

export type CardOverview = {
  overview: {
    id: string
    title: string
    icon: string
    statistic: number | string
    text: string
  }[]
}

type InitialState = {
  overview: CardOverview['overview']
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: InitialState = {
  overview: [],
  status: 'idle',
}

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    setOverview: (state, action: PayloadAction<CardOverview>) => {
      state.overview = action.payload.overview
      state.status = 'succeeded'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOverview.pending, (state) => {
      state.overview = []
      state.status = 'loading'
    })
    builder.addCase(fetchOverview.fulfilled, (state, action) => {
      state.overview = action.payload.map((item) => ({
        ...item,
        statistic: item.statistic ?? 0,
      }))
      state.status = 'succeeded'
    })
    builder.addCase(fetchOverview.rejected, (state) => {
      state.overview = []
      state.status = 'failed'
    })
  },
})

export const { setOverview } = overviewSlice.actions
export default overviewSlice.reducer
