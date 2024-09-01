import { createSlice } from '@reduxjs/toolkit'
import { setDarkMode, getInitialDarkMode } from '../../utils/darkMode'

const initialDarkMode = getInitialDarkMode()
setDarkMode(initialDarkMode)

interface UIState {
  darkMode: boolean
  loading: boolean
  error: string
}
const initialState: UIState = {
  darkMode: initialDarkMode,
  loading: false,
  error: ''
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      setDarkMode(state.darkMode)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { toggleDarkMode, setLoading, setError } = uiSlice.actions
