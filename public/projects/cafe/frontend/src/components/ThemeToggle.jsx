import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;