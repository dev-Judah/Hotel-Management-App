/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();
const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("prefers-color-scheme: dark").matches,
    "isDarkMode",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("white-mode");
    } else {
      document.documentElement.classList.add("white-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const darkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <DarkModeContext.Provider value={{ isDarkMode, darkModeToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkMode Context is used outside provider");

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
