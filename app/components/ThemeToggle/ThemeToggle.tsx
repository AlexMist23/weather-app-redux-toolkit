import { useState } from "react";
import {
  themeSlice,
  useSelector,
  useDispatch,
  selectTheme,
  loadDarkMode,
} from "@/lib/redux";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  const handleToggleMode = () => {
    dispatch(themeSlice.actions.toggleTheme());
    if (currentTheme === "light") {
      dispatch(loadDarkMode());
    } else {
      const darkModeCSSLink = document.querySelector(
        'link[href="/dark-mode.css"]'
      );
      if (darkModeCSSLink) {
        darkModeCSSLink.remove();
      }
    }
  };

  return (
    <button
      className={styles[`button-${currentTheme}`]}
      aria-label="Toggle Dark Mode"
      onClick={handleToggleMode}
    >
      <p className="txt-">{currentTheme}</p>
    </button>
  );
};
