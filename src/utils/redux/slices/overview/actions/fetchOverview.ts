import { createAsyncThunk } from '@reduxjs/toolkit'
import { handleGetOverview } from '../../../../../api/overview/handleGetOverview'

export const fetchOverview = createAsyncThunk(
  'overview/fetchOverview',
  async (_, { rejectWithValue }) => {
    try {
      const data = await handleGetOverview()
      return data
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unknown error occurred')
    }
  }
)
