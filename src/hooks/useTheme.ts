"use client";
import { useEffect, useState } from "react";
import { ThemesEnum } from "../enums/theme.enum";

export function useTheme() {
  const [theme, setTheme] = useState<ThemesEnum>();

  const updateTheme = (updatedTheme: ThemesEnum) => {
    setTheme(updatedTheme);
    setStorageTheme(updatedTheme);
  };

  useEffect(() => {
    const localStorageTheme = getStorageTheme();
    console.log({ localStorageTheme });
    console.log(localStorageTheme === ThemesEnum.Dark);

    if (
      localStorageTheme === ThemesEnum.Dark ||
      (!localStorageTheme &&
        window.matchMedia("prefer-color-scheme: dark").matches)
    ) {
      const latestTheme = ThemesEnum.Dark;
      return updateTheme(latestTheme);
    }

    updateTheme(ThemesEnum.Light);
  }, []);

  useEffect(() => {
    console.log({ theme });
    updateRootElement(theme);
  }, [theme]);

  return { theme, updateTheme };
}

function setStorageTheme(theme: ThemesEnum) {
  localStorage.setItem("theme", theme);
}

function getStorageTheme() {
  return localStorage.getItem("theme") as ThemesEnum;
}

function updateRootElement(theme: ThemesEnum = ThemesEnum.Dark) {
  const root = window.document.documentElement;
  root.classList.remove(ThemesEnum.Dark, ThemesEnum.Light);
  root.classList.add(theme);

  root.style.backgroundColor = '#091540'
}
