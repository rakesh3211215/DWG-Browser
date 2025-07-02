import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition hover:opacity-90"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default DarkModeToggle;
