
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full relative overflow-hidden transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      <Sun 
        className={`h-5 w-5 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        } absolute`}
      />
      <Moon 
        className={`h-5 w-5 transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        } absolute`}
      />
    </Button>
  );
}
