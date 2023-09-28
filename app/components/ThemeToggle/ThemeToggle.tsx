import { useState } from "react";
import { themeSlice, useSelector, useDispatch, selectTheme } from "@/lib/redux";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  return (
    <button
      className={styles[`button-${currentTheme}`]}
      aria-label="Toggle Dark Mode"
      onClick={() => dispatch(themeSlice.actions.toggleTheme())}
    >
      <p className="txt-">{currentTheme}</p>
    </button>
  );
};
