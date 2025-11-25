import type { ReactNode } from "react";

interface GlowPillProps {
  className?: string;
  children: ReactNode;
}

export default function GlowPill({ className = "", children }: GlowPillProps) {
  return (
    <span
      className={`relative isolate inline-block rounded-full bg-pink-400 font-semibold text-white shadow-lg shadow-pink-300/30 ${className}`}
    >
      <span className="absolute inset-0 -m-1 rounded-full bg-pink-300 blur-md opacity-40 animate-glow-pulse pointer-events-none" />
      <span className="relative inline-block">{children}</span>
    </span>
  );
}
