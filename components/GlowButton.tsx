import type { ReactNode } from "react";

interface GlowButtonProps {
  link: string;
  className?: string;
  children: ReactNode;
  smallGlow?: boolean;
  color?: "pink" | "green";
}

export default function GlowButton({ link, className = "", children, smallGlow = false, color = "pink" }: GlowButtonProps) {
  const isGreen = color === "green";
  const bgColor = isGreen ? "bg-green-400" : "bg-pink-400";
  const hoverColor = isGreen ? "hover:bg-green-500" : "hover:bg-pink-500";
  const shadowColor = isGreen ? "shadow-green-300/30" : "shadow-pink-300/30";
  const glowColor = isGreen ? "bg-green-300" : "bg-pink-200";
  
  const glowClasses = smallGlow
    ? `absolute inset-0 -m-1 rounded-full ${glowColor} blur-md opacity-40 animate-glow-pulse pointer-events-none`
    : `absolute inset-0 -m-2 rounded-full ${glowColor} blur-xl opacity-40 animate-glow-pulse pointer-events-none`;
  
  return (
    <a
      href={link}
      className={`relative isolate inline-block rounded-full ${bgColor} font-semibold text-white shadow-lg ${shadowColor} ${hoverColor} transition-colors animate-button-pulse ${className}`}
    >
      <span className={glowClasses} />
      <span className="relative inline-block">{children}</span>
    </a>
  );
}

