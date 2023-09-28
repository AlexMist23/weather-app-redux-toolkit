/* Instruments */
import { counterSlice, themeSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
}
