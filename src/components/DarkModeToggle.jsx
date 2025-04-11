import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  // ✅ Default to dark mode if no preference is stored
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" : true
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 dark:text-gray-800 transition"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
