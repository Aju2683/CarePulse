import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({
  children,
}) {
  const [darkMode, setDarkMode] =
    useState(() => {
      return (
        localStorage.getItem(
          "carepulse-theme",
        ) === "dark"
      );
    });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark",
      );

      localStorage.setItem(
        "carepulse-theme",
        "dark",
      );
    } else {
      document.documentElement.classList.remove(
        "dark",
      );

      localStorage.setItem(
        "carepulse-theme",
        "light",
      );
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}