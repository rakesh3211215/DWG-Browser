import { Menu, ArrowLeft } from "lucide-react";
import DarkModeToggle from "../Dark-Light-Mode/DarkModeToggle";
import logo from "../../assets/react.svg";

const Topbar = ({ isOpen, setIsOpen, onMobileToggle }) => {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      {/* === Left: Sidebar toggle + Logo === */}
      <div className="flex items-center gap-4">
        {/* Desktop sidebar toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:inline-flex p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-transparent hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <ArrowLeft className="w-5 h-5 text-gray-800 dark:text-white" />
          ) : (
            <Menu className="w-5 h-5 text-gray-800 dark:text-white" />
          )}
        </button>

        {/* Mobile drawer toggle */}
        <button
          onClick={onMobileToggle}
          className="inline-flex md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-transparent hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors"
          aria-label="Open mobile drawer"
        >
          <Menu className="w-5 h-5 text-gray-800 dark:text-white" />
        </button>

        {/* Logo */}
        <img src={logo} alt="logo" className="h-9 w-auto rounded-md" />
      </div>

      {/* === Center: Search (desktop only) === */}
      <div className="hidden lg:block flex-1 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search or type command..."
          className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
          text-sm text-gray-900 dark:text-white px-4 py-2 rounded-lg focus:outline-none 
          focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
      </div>

      {/* === Right: Theme toggle === */}
      <div className="flex items-center gap-4">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Topbar;
