/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { selectTheme } from "./selectors";
import { themeSlice } from "./themeSlice";
import type { ReduxThunkAction } from "@/lib/redux";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loadDarkMode = createAppAsyncThunk(
  "mode/loadDarkModeCSS",
  async () => {
    const darkModeCSSLink = document.createElement("link");
    darkModeCSSLink.rel = "stylesheet";
    darkModeCSSLink.href = "/app/styles/dark-mode.css"; // Path to your dark mode CSS file
    document.head.appendChild(darkModeCSSLink);
  }
);