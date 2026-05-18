import { jsx as _jsx } from "react/jsx-runtime";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (_jsx("button", { onClick: toggleTheme, className: "grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-600 transition-colors hover:text-neutral-950 dark:border-sonic-border/80 dark:bg-sonic-panel dark:text-neutral-300 dark:hover:bg-sonic-elevated dark:hover:text-white", "aria-label": "Toggle theme", children: theme === "light" ? (_jsx(Moon, { className: "h-4 w-4" })) : (_jsx(Sun, { className: "h-4 w-4" })) }));
}
