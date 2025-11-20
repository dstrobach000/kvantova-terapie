import type { ReactNode } from "react";

interface GlowButtonProps {
  link: string;
  className?: string;
  children: ReactNode;
  smallGlow?: boolean;
}

export default function GlowButton({ link, className = "", children, smallGlow = false }: GlowButtonProps) {
  const glowClasses = smallGlow
    ? "absolute inset-0 -m-1 rounded-full bg-sky-400 blur-md opacity-75 animate-glow-pulse pointer-events-none"
    : "absolute inset-0 -m-2 rounded-full bg-sky-400 blur-xl opacity-75 animate-glow-pulse pointer-events-none";
  
  return (
    <a
      href={link}
      className={`relative isolate inline-block rounded-full bg-sky-500/90 font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors animate-button-pulse ${className}`}
    >
      <span className={glowClasses} />
      <span className="relative inline-block">{children}</span>
    </a>
  );
}

