export const themes = [
  {
    name: "blue",
    label: "蓝色",
    activeColor: "#1677ff",
    theme: {
      "--primary": "217.2 91.2% 59.8%",
      "--primary-foreground": "210 40% 98%",
    },
  },
  {
    name: "pink",
    label: "粉色",
    activeColor: "#eb2f96",
    theme: {
      "--primary": "336 80% 58%",
      "--primary-foreground": "210 40% 98%",
    },
  },
  {
    name: "red",
    label: "红色",
    activeColor: "#f5222d",
    theme: {
      "--primary": "0 84% 60%",
      "--primary-foreground": "210 40% 98%",
    },
  },
] as const;

export type Theme = typeof themes[number]; 