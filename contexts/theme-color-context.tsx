"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeColor = "blue" | "pink" | "red";

interface ThemeColorContextType {
  color: ThemeColor;
  setColor: (color: ThemeColor) => void;
}

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

export function ThemeColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<ThemeColor>("blue");

  useEffect(() => {
    // 移除所有主题色类名
    document.documentElement.classList.remove("theme-blue", "theme-pink", "theme-red");
    // 添加新的主题色类名
    document.documentElement.classList.add(`theme-${color}`);
  }, [color]);

  return (
    <ThemeColorContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColor() {
  const context = useContext(ThemeColorContext);
  if (context === undefined) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
} 