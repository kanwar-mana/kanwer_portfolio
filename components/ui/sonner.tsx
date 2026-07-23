"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme as ToasterProps["theme"]}
      position="top-right"
      closeButton
      toastOptions={{
        style: {
          background: "var(--card)",
          color: "var(--card-foreground)",
          border: "1px solid var(--border)",
          borderRadius: "calc(var(--radius) + 4px)",
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: "0.875rem",
          boxShadow:
            "0 4px 24px 0 rgb(0 0 0 / 14%), 0 1px 4px 0 rgb(0 0 0 / 08%)",
        },
        classNames: {
          title: "font-semibold text-[var(--card-foreground)]",
          description: "text-[var(--muted-foreground)] text-xs mt-0.5",
          success:
            "border-l-2 border-l-[var(--primary)] [&_[data-icon]]:text-[var(--primary)]",
          error:
            "border-l-2 border-l-[var(--destructive)] [&_[data-icon]]:text-[var(--destructive)]",
          closeButton:
            "!absolute !top-1 !right-1 !left-auto border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--secondary)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors",
        },
      }}
      {...props}
    />
  );
}
