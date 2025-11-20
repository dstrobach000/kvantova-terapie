import type { ReactNode } from "react";

interface GlowPillProps {
  className?: string;
  children: ReactNode;
}

export default function GlowPill({ className = "", children }: GlowPillProps) {
  return (
    <span
      className={`relative isolate inline-block rounded-full bg-sky-500/90 font-semibold text-slate-950 shadow-lg shadow-sky-500/40 ${className}`}
    >
      <span className="absolute inset-0 -m-1 rounded-full bg-sky-400 blur-md opacity-75 animate-glow-pulse pointer-events-none" />
      <span className="relative inline-block">{children}</span>
    </span>
  );
}
