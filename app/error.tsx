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
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-bg text-ink">
      <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 font-semibold">
        [ SYSTEM ERROR ]
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
        An Unexpected Issue Occurred
      </h1>
      <p className="text-sm text-ink-muted max-w-md mb-8">
        The application encountered an unhandled exception.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 bg-ink text-bg font-sans font-semibold text-sm rounded-sm hover:bg-accent hover:text-white transition-all shadow-sm"
      >
        Retry System State
      </button>
    </div>
  );
}
