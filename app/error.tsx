"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-zinc-400 mb-8">
          We apologize for the inconvenience. An error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="premium-button"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
