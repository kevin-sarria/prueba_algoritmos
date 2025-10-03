import { createSlice } from '@reduxjs/toolkit'
import type { TokenDecodeInformation } from '../../../modules/auth/types/auth';

interface AppState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: TokenDecodeInformation | null;
}

const initialState: AppState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    isLoadingApp: (state, action) => {
      state.isLoading = action.payload
    },
    setUser: (state, action) => {
      state.isAuthenticated = true
      state.isLoading = false
      state.user = action.payload
    },
    resetUser: (state) => {
      state.isAuthenticated = false
      state.isLoading = false
      state.user = null
    }
  },
})

export const { isLoadingApp, setUser, resetUser } = appSlice.actions

export default appSlice.reducer