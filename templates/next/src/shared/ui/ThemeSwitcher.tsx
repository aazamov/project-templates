"use client";
import { useTheme } from "next-themes";
import { useMounted } from "../hooks/useMounted";

const ThemeSwitcher = () => {
  const mounted = useMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = resolvedTheme || theme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="19"
        viewBox="0 0 38 19"
        fill="none"
        className="transition-all duration-300 ease-in-out"
      >
        <rect
          width="38"
          height="19"
          rx="9.5"
          fill={isDark ? "#323232" : "#EFEFEF"}
          className="transition-all duration-300 ease-in-out"
        />

        <circle
          cx="3.4207"
          cy="10.45"
          r="0.95"
          fill="#EFEFEF"
          className={`transition-all duration-300 ease-in-out ${
            isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />

        <circle
          cx={isDark ? "28.5938" : "9.5957"}
          cy="9.59521"
          r="7.125"
          fill="#FBAF1D"
          className="transition-all duration-300 ease-in-out"
        />

        <circle
          cx={isDark ? "23.2734" : "9.5957"}
          cy="9.40491"
          r="7.125"
          fill="#323232"
          className={`transition-all duration-300 ease-in-out ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
