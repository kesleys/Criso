import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Wraps the app with theme handling. `defaultTheme="system"` makes Criso adapt
 * to the user's browser/OS preference, while still allowing a manual override
 * via <ThemeToggle /> (persisted to localStorage by next-themes).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
