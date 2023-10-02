/* Instruments */
import { counterSlice, darkThemeSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  darkTheme: darkThemeSlice.reducer,
};
