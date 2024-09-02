import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setDarkMode, getInitialDarkMode } from '../../utils/darkMode'

const initialDarkMode = getInitialDarkMode()
setDarkMode(initialDarkMode)

interface UIState {
  darkMode: boolean
  loading: boolean
  error: string | null
}

const initialState: UIState = {
  darkMode: initialDarkMode,
  loading: false,
  error: null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      setDarkMode(state.darkMode)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const { toggleDarkMode, setLoading, setError } = uiSlice.actions
