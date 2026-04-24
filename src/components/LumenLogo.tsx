import { cn } from "@/lib/utils";

interface LumenLogoProps {
  className?: string;
  /** Stroke/fill color - defaults to currentColor so it inherits text color */
  tone?: "light" | "dark";
}

/**
 * Lumen brand mark — a custom geometric "luminous aperture".
 * An outer ring (the lens), an inner crescent (the light source curving like an "L"),
 * and a single emitted ray. Original artwork — not from any icon set.
 */
export const LumenLogo = ({ className, tone = "light" }: LumenLogoProps) => {
  const fg = tone === "light" ? "#FFFFFF" : "currentColor";
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Lumen logo"
      role="img"
    >
      {/* Outer aperture ring */}
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke={fg}
        strokeWidth="2.2"
        strokeOpacity="0.95"
      />
      {/* Inner crescent — the "light" curving like an L */}
      <path
        d="M21 9.2 A 9 9 0 1 0 21 22.8 A 6.5 6.5 0 1 1 21 9.2 Z"
        fill={fg}
      />
      {/* Emitted ray / spark */}
      <circle cx="24.5" cy="7.5" r="1.6" fill={fg} />
    </svg>
  );
};