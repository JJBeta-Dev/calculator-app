import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = Number(localStorage.getItem("theme"));
    return savedTheme ? Number(savedTheme) : 1;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme2", "theme3");
    if (theme === 2) root.classList.add("theme2");
    if (theme === 3) root.classList.add("theme3");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};
