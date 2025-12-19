import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`
    flex justify-between items-center mb-8 mt-2
    ${
      theme === 2
        ? "text-black"
        : theme === 3
        ? "text-[var(--color-text-eq3-2)]"
        : "text-[var(--color-text-light)]"
    }
  `}
    >
      <h1 className="font-bold text-xl md:text-2xl">calc</h1>

      <div className="flex flex-col items-end gap-1">
        {/* Números 1 2 3 */}
        <div className="flex gap-4 mr-[17px] text-[10px] font-semibold tracking-widest">
          {[1, 2, 3].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Theme + switch */}
        <div className="flex items-end gap-7">
          <span className="text-[12px] tracking-widest">THEME</span>

          <div className="flex items-center gap-2 rounded-full bg-[var(--color-keypad-bg)] p-1">
            {[1, 2, 3].map((n) => (
              <label key={n} className="cursor-pointer">
                <input
                  type="radio"
                  name="theme"
                  checked={theme === n}
                  onChange={() => setTheme(n)}
                  className="sr-only"
                />
                <span
                  className={`block h-5 w-5 rounded-full ${
                    theme === n
                      ? "bg-[var(--color-key-eq-bg)]"
                      : "bg-transparent"
                  }`}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
