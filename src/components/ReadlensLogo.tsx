import { cn } from "@/lib/utils";

interface ReadlensLogoProps {
  className?: string;
  /** "light" = white mark on color, "dark" = mark inherits currentColor */
  tone?: "light" | "dark";
}

/**
 * Readlens AI brand mark — original artwork.
 *
 * Concept: a stacked "page R" — two rounded page-cards layered behind
 * a custom geometric letter R cut from negative space, with a single
 * bright focal dot representing the AI "reading point."
 *
 * Reading (pages) + Identity (R for Readlens) + AI (focus dot).
 * Designed from scratch — not derived from any existing icon or wordmark.
 */
export const ReadlensLogo = ({ className, tone = "light" }: ReadlensLogoProps) => {
  const fg = tone === "light" ? "#FFFFFF" : "currentColor";
  // unique mask id per render so multiple instances don't collide
  const maskId = `readlens-r-mask-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Readlens AI logo"
      role="img"
    >
      <defs>
        {/* Mask defines the front "page" with the letter R cut out */}
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          {/* Visible front page area */}
          <rect x="6" y="5" width="20" height="22" rx="3.2" fill="#fff" />
          {/* Cut out the R: vertical stem */}
          <rect x="10" y="9" width="3.2" height="14" rx="0.6" fill="#000" />
          {/* Cut out the R: top bowl (outer) */}
          <path
            d="M13.2 9 H18.5 A4 4 0 0 1 18.5 17 H13.2 Z"
            fill="#000"
          />
          {/* Re-add the inner hole of the bowl (so it looks like a real R) */}
          <path
            d="M14.6 10.6 H18.1 A2.4 2.4 0 0 1 18.1 15.4 H14.6 Z"
            fill="#fff"
          />
          {/* Cut out the R: diagonal leg */}
          <path
            d="M15.4 16.6 L21.2 23 L18.4 23 L13 17.4 Z"
            fill="#000"
          />
        </mask>
      </defs>

      {/* Back page — slightly offset, lower opacity (page stack effect) */}
      <rect
        x="3.5"
        y="7.5"
        width="20"
        height="22"
        rx="3.2"
        fill={fg}
        fillOpacity="0.35"
      />

      {/* Front page with R cut out via mask */}
      <rect
        x="0"
        y="0"
        width="32"
        height="32"
        fill={fg}
        mask={`url(#${maskId})`}
      />

      {/* AI focus dot — sits on top of the R's bowl */}
      <circle cx="22.6" cy="6.4" r="2" fill={fg} />
      <circle cx="22.6" cy="6.4" r="0.9" fill={tone === "light" ? "#000" : "#fff"} fillOpacity="0.25" />
    </svg>
  );
};
