import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: true,
  },
  reducers: {
    isLoadingApp: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { isLoadingApp } = appSlice.actions

export default appSlice.reducer