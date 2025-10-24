"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: "1rem",
          background: "var(--surface-elevated)",
          color: "var(--foreground)",
          border: "1px solid var(--border-muted)",
        },
      }}
    />
  );
}
