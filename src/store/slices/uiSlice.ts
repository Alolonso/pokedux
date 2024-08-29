import { createSlice } from '@reduxjs/toolkit'
import { setDarkMode, getInitialDarkMode } from '../../utils/darkMode'

const initialDarkMode = getInitialDarkMode()
setDarkMode(initialDarkMode)

interface UIState {
  darkMode: boolean
}
const initialState: UIState = {
  darkMode: initialDarkMode
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      setDarkMode(state.darkMode)
    }
  }
})

export const { toggleDarkMode } = uiSlice.actions
