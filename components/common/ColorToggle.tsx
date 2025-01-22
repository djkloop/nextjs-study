"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  {
    name: "default",
    label: "蓝色",
    activeColor: "#1677ff",
  },
  {
    name: "pink",
    label: "粉色",
    activeColor: "#eb2f96",
  },
  {
    name: "red",
    label: "红色",
    activeColor: "#f5222d",
  },
] as const;

export function ColorToggle() {
  const { theme: mode, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState("default");

  React.useEffect(() => {
    const root = document.documentElement;
    const classList = Array.from(root.classList);
    const activeTheme = themes.find(t => t.name !== "default" && classList.includes(t.name));
    setCurrentTheme(activeTheme?.name || "default");
  }, []);

  const handleThemeChange = (themeName: string) => {
    const root = document.documentElement;
    
    // 移除所有主题色类
    root.classList.remove("pink", "red");
    
    // 设置新的主题色类
    if (themeName !== "default") {
      root.classList.add(themeName);
    }
    
    setCurrentTheme(themeName);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <div 
            className="h-5 w-5 rounded-full"
            style={{ 
              backgroundColor: themes.find(t => t.name === currentTheme)?.activeColor 
            }}
          />
          <span className="sr-only">切换主题色</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem 
            key={t.name} 
            onClick={() => handleThemeChange(t.name)}
            className="cursor-pointer"
          >
            <div 
              className="h-4 w-4 rounded-full mr-2"
              style={{ backgroundColor: t.activeColor }}
            />
            <span>{t.label}</span>
            {currentTheme === t.name && (
              <span className="ml-auto">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 