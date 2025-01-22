"use client";

import { useThemeColor } from "@/contexts/theme-color-context"

export function ColorToggle() {
  const { color, setColor } = useThemeColor()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setColor("blue")}
        className={`w-6 h-6 rounded-full bg-[hsl(217,91%,60%)] ${
          color === "blue" ? "ring-2 ring-white" : ""
        }`}
      />
      <button
        onClick={() => setColor("pink")}
        className={`w-6 h-6 rounded-full bg-[hsl(336,80%,58%)] ${
          color === "pink" ? "ring-2 ring-white" : ""
        }`}
      />
      <button
        onClick={() => setColor("red")}
        className={`w-6 h-6 rounded-full bg-[hsl(0,84%,60%)] ${
          color === "red" ? "ring-2 ring-white" : ""
        }`}
      />
    </div>
  )
} 