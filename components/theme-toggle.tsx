"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle visual theme"
        className="px-2.5 py-1 text-xs font-mono border border-contour bg-surface text-ink rounded-sm opacity-0 transition-opacity"
        disabled
      >
        THEME: LIGHT
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="px-2.5 py-1 text-xs font-mono border border-contour bg-surface text-ink hover:border-ink rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
    >
      THEME: {isDark ? "DARK" : "LIGHT"}
    </button>
  );
}
