import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleTheme = () => {
    console.log("Theme toggle clicked! Current mode:", isDarkMode ? "dark" : "light");
    
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      console.log("Switched to light mode");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      console.log("Switched to dark mode");
    }
  };
  
  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }
  
  return (
    <motion.button 
      onClick={toggleTheme} 
      className={cn(
        "fixed top-5 right-5 z-[100] p-3 rounded-full transition-all duration-300 cursor-pointer",
        "bg-card border-2 border-border shadow-lg hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-primary",
        isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
      )}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <motion.div
        key={isDarkMode ? "dark" : "light"}
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
