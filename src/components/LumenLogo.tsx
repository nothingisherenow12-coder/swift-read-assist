import { cn } from "@/lib/utils";

interface ReadlensLogoProps {
  className?: string;
  /** "light" = white mark on color, "dark" = mark inherits currentColor */
  tone?: "light" | "dark";
}

/**
 * Readlens AI brand mark — original artwork.
 *
 * Concept: a camera/reader lens whose interior holds three justified
 * "text lines" (representing reading) + a tiny AI spark in the corner.
 * The lens = focus & clarity. The lines = a page being read.
 * The spark = AI assistance.
 *
 * Not derived from any icon library.
 */
export const ReadlensLogo = ({ className, tone = "light" }: ReadlensLogoProps) => {
  const fg = tone === "light" ? "#FFFFFF" : "currentColor";
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Readlens AI logo"
      role="img"
    >
      {/* Outer lens ring */}
      <circle
        cx="14"
        cy="16"
        r="10.5"
        stroke={fg}
        strokeWidth="2.2"
      />
      {/* Three "reading" lines inside the lens — a page being read */}
      <rect x="8.5"  y="12.2" width="11" height="1.8" rx="0.9" fill={fg} />
      <rect x="8.5"  y="15.1" width="8"   height="1.8" rx="0.9" fill={fg} fillOpacity="0.85" />
      <rect x="8.5"  y="18"   width="10"  height="1.8" rx="0.9" fill={fg} fillOpacity="0.7" />
      {/* AI spark — a small diamond above the lens */}
      <path
        d="M25 6.5 L26.4 8.6 L28.5 10 L26.4 11.4 L25 13.5 L23.6 11.4 L21.5 10 L23.6 8.6 Z"
        fill={fg}
      />
    </svg>
  );
};

// Backwards-compatible alias so older imports keep working.
export const LumenLogo = ReadlensLogo;