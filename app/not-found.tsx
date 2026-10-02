import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-bg text-ink">
      <div className="font-mono text-xs text-accent uppercase tracking-wider mb-2 font-semibold">
        [ 404 // ROUTE NOT FOUND ]
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl font-semibold mb-4">
        Page Not Located
      </h1>
      <p className="text-sm sm:text-base text-ink-muted max-w-md mb-8">
        The requested system coordinate does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-ink text-bg font-sans font-semibold text-sm rounded-sm hover:bg-accent hover:text-white transition-all shadow-sm"
      >
        Return to Home Index
      </Link>
    </div>
  );
}
