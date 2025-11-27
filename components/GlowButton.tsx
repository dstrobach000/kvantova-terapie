import type { ReactNode } from "react";

interface GlowButtonProps {
  link: string;
  className?: string;
  children: ReactNode;
  smallGlow?: boolean;
  color?: "pink" | "green";
}

export default function GlowButton({ link, className = "", children, smallGlow = false, color = "pink" }: GlowButtonProps) {
  const buttonColor = "#88798a";
  const glowColor = "rgba(136, 121, 138, 0.4)";
  
  const glowClasses = smallGlow
    ? `absolute inset-0 -m-1 rounded-full blur-md opacity-40 animate-glow-pulse pointer-events-none`
    : `absolute inset-0 -m-2 rounded-full blur-xl opacity-40 animate-glow-pulse pointer-events-none`;
  
  return (
    <a
      href={link}
      className={`relative isolate inline-block rounded-full font-semibold text-white shadow-lg transition-colors animate-button-pulse ${className}`}
      style={{ 
        backgroundColor: buttonColor,
        boxShadow: `0 10px 15px -3px ${glowColor}, 0 4px 6px -2px ${glowColor}`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#7a6b7d";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = buttonColor;
      }}
    >
      <span className={glowClasses} style={{ backgroundColor: glowColor }} />
      <span className="relative inline-block">{children}</span>
    </a>
  );
}

