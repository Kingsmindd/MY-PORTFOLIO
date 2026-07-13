// ThemeToggle.tsx
import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={() => setIsDark(!isDark)}
      className={`relative h-7 w-12 z-60 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] ${
        isDark ? "bg-slate-600" : "bg-amber-400"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <IoMoon className="text-sm text-slate-700" />
        ) : (
          <IoSunny className="text-sm text-amber-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
