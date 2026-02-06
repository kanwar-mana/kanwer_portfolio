"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  return (
    <Button
      variant="secondary"
      onClick={cycleTheme}
      className="relative overflow-hidden bg-transparent p-0! hover:bg-transparent"
      aria-label="Toggle theme"
    >
      {theme === "system" ? (
        <Monitor className="size-5 transition-transform duration-500 ease-in-out" />
      ) : (
        <>
          <Sun className="size-5 rotate-0 scale-100 transition-transform duration-500 ease-in-out dark:-rotate-180 dark:scale-0" />
          <Moon className="size-5 absolute rotate-180 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
        </>
      )}
    </Button>
  );
}
