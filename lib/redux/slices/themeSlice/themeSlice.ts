/* Core */
import { createSlice } from '@reduxjs/toolkit'

enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: Theme.Light } as ThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;
      console.log(state.theme)
    },
  },
})

/* Types */
export interface ThemeState {
  theme: Theme
}
