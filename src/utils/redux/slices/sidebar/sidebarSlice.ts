import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { toggleSidebar, setIsOpen } = sidebarSlice.actions
export default sidebarSlice.reducer
