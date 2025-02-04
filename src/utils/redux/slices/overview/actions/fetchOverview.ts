import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleGetOverview } from '../../../../../api/overview/handleGetOverview'
import { setOverview } from '../overviewSlice'

export const fetchOverview = createAsyncThunk(
  'overview/fetchOverview',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await handleGetOverview()

      dispatch(setOverview({ overview: data }))

      return data
    } catch (error: unknown) {
      return rejectWithValue(
        (error as Error).message || 'Unknown error occurred'
      )
    }
  }
)
