import { type BeyondCode } from "@/lib/content";

interface BeyondCodeProps {
  beyondCode: BeyondCode;
}

export function BeyondCodeSection({ beyondCode }: BeyondCodeProps) {
  return (
    <section
      id="beyond-code"
      aria-labelledby="beyond-code-heading"
      className="border-t border-contour pt-8 pb-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <div className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
          [ BEYOND CODE ]
        </div>
        <p className="text-sm text-ink-muted leading-relaxed font-sans max-w-2xl">
          {beyondCode.oneLiner ||
            "Outside the terminal, I practice photography, edit cinematic video reels, and study human-centered interface design."}
        </p>
      </div>
    </section>
  );
}
