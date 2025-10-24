"use client";

import { useEffect } from "react";
import { Button } from "@/components/shared/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error:", error);
    }
    // In production, log to an error reporting service
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-muted)]">
            <svg
              className="h-10 w-10 text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-[var(--foreground)]">
            Something went wrong
          </h1>
          <p className="text-[var(--foreground-muted)]">
            We encountered an unexpected error. Please try again.
          </p>
          {process.env.NODE_ENV === "development" && (
            <details className="mt-4 rounded-lg bg-[var(--surface-muted)] p-4 text-left">
              <summary className="cursor-pointer font-medium text-[var(--accent)]">
                Error details (dev only)
              </summary>
              <pre className="mt-2 overflow-auto text-xs text-[var(--foreground-muted)]">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button variant="ghost" href="/">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
