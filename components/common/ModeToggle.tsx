"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const modes = [
  {
    name: "light",
    label: "浅色模式",
    icon: <Sun className="h-4 w-4" />,
  },
  {
    name: "dark",
    label: "深色模式",
    icon: <Moon className="h-4 w-4" />,
  },
  {
    name: "system",
    label: "跟随系统",
    icon: <Monitor className="h-4 w-4" />,
  },
] as const;

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">切换明暗模式</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {modes.map((m) => (
          <DropdownMenuItem 
            key={m.name} 
            onClick={() => setTheme(m.name)}
            className="cursor-pointer"
          >
            <div className="mr-2">
              {m.icon}
            </div>
            <span>{m.label}</span>
            {(theme === m.name || (theme === 'system' && resolvedTheme === m.name)) && (
              <span className="ml-auto">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 