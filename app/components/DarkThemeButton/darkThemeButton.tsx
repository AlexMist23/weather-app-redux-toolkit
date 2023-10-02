"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  darkThemeSlice,
  useSelector,
  useDispatch,
  selectDarkTheme,
} from "@/lib/redux";
import styles from "./darkThemeButton.module.css";

export const DarkThemeButton = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectDarkTheme);

  const clickHandler = () => {
    dispatch(darkThemeSlice.actions.toggle());
    document.querySelector('body')?.classList.toggle('dark')
  };

  return (
    <button onClick={clickHandler}>
      {darkTheme == true ? "Dark Mode" : "Light mode"}
    </button>
  );
};
