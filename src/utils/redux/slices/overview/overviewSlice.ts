import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchOverview } from './actions/fetchOverview'

type OverviewState = {
  overview: {
    title: string
    icon: string
    statistic: number | string
    text: string
  }[]
}

const initialState: OverviewState = {
  overview: [],
}

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    setOverview: (state, action: PayloadAction<OverviewState>) => {
      state.overview = action.payload.overview
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOverview.pending, (state) => {
      state.overview = []
    })
    builder.addCase(fetchOverview.fulfilled, (state, action) => {
      state.overview = action.payload.map((item) => ({
        ...item,
        statistic: item.statistic ?? 0,
      }))
    })
    builder.addCase(fetchOverview.rejected, (state) => {
      state.overview = []
    })
  },
})

export const { setOverview } = overviewSlice.actions
export default overviewSlice.reducer
