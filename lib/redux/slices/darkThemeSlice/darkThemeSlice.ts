/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: DarkThemeSliceState = {
  isActive: true,
};

export const darkThemeSlice = createSlice({
  name: "theme",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggle: (state) => {
      state.isActive = state.isActive = true ? false : true;
    },
  },
});

/* Types */
export interface DarkThemeSliceState {
  isActive: boolean;
}
