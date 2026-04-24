import { cn } from "@/lib/utils";

interface ReadlensLogoProps {
  className?: string;
  /** "light" = white mark on color, "dark" = mark inherits currentColor */
  tone?: "light" | "dark";
}

/**
 * Readlens AI brand mark — original artwork.
 *
 * Concept: a bold capital "R" whose right leg unfurls into the
 * open pages of a book. The vertical stem and bowl form the letter;
 * the diagonal leg becomes the book's spine, splaying into two
 * angled page-faces. Wordmark + symbol fused into a single confident
 * silhouette. Designed from scratch — not derived from any existing
 * mark.
 */
export const ReadlensLogo = ({ className, tone = "light" }: ReadlensLogoProps) => {
  const fg = tone === "light" ? "#FFFFFF" : "currentColor";
  const dim = tone === "light" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.18)";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Readlens AI logo"
      role="img"
    >
      {/* === Letter R === */}

      {/* Vertical stem of the R */}
      <rect x="5" y="4" width="4.6" height="24" rx="1.4" fill={fg} />

      {/* Top bowl of the R — solid filled D-shape */}
      <path
        d="M9.6 4
           H16.4
           A7.6 7.6 0 0 1 16.4 18.2
           H9.6
           Z"
        fill={fg}
      />

      {/* Inner counter (the hole inside the bowl) — punched out */}
      <path
        d="M11.6 7.6
           H15.6
           A4 4 0 0 1 15.6 14.6
           H11.6
           Z"
        fill={tone === "light" ? "transparent" : "transparent"}
      />
      {/* Use a real cutout via even-odd: redo bowl as a single path with hole */}
      <path
        d="M9.6 4
           H16.4
           A7.6 7.6 0 0 1 16.4 18.2
           H9.6
           Z
           M11.6 7.6
           H15.6
           A4 4 0 0 0 15.6 14.6
           H11.6
           Z"
        fill={fg}
        fillRule="evenodd"
      />

      {/* === Right leg unfurling into an open book === */}

      {/* Book spine — the diagonal "leg" of the R */}
      <path
        d="M14.4 17.4
           L17.6 21
           L17.6 28
           L14.4 28
           Z"
        fill={fg}
      />

      {/* Left page of the book (front-facing leaf) */}
      <path
        d="M17.6 21
           L24 19.4
           L26 27
           L17.6 28
           Z"
        fill={fg}
      />

      {/* Right page of the book — slightly dimmed for depth */}
      <path
        d="M24 19.4
           L28.5 22
           L28.5 28
           L26 27
           Z"
        fill={dim}
      />

      {/* Page crease line for definition */}
      <rect
        x="17.2"
        y="20.8"
        width="0.9"
        height="7.2"
        rx="0.45"
        fill={tone === "light" ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.25)"}
      />
    </svg>
  );
};
