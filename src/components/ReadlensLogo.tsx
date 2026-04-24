import { cn } from "@/lib/utils";

interface ReadlensLogoProps {
  className?: string;
  /** "light" = white mark on color, "dark" = mark inherits currentColor */
  tone?: "light" | "dark";
}

/**
 * Readlens AI brand mark — original artwork.
 *
 * Concept: a single sheet of paper with a crisp folded corner,
 * forming a confident triangular silhouette (suggests forward motion
 * and "next page"). A solid AI spark sits in the upper-right where
 * the fold lifts — representing AI assistance arriving on the page.
 *
 * Bold, geometric, single-color — designed to read at any size,
 * from a 16px favicon to a hero mark. Not derived from any existing
 * icon library or brand.
 */
export const ReadlensLogo = ({ className, tone = "light" }: ReadlensLogoProps) => {
  const fg = tone === "light" ? "#FFFFFF" : "currentColor";
  const shadow = tone === "light" ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0.12)";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Readlens AI logo"
      role="img"
    >
      {/* Main folded page — solid shape with the top-right corner clipped */}
      <path
        d="M7 4
           H19.5
           L26 10.5
           V26
           A2.5 2.5 0 0 1 23.5 28.5
           H7
           A2.5 2.5 0 0 1 4.5 26
           V6.5
           A2.5 2.5 0 0 1 7 4
           Z"
        fill={fg}
      />

      {/* The folded corner — a darker triangular flap that reads as depth */}
      <path
        d="M19.5 4 L26 10.5 H21.5 A2 2 0 0 1 19.5 8.5 Z"
        fill={shadow}
      />

      {/* AI spark — a bold 4-point star sitting on the page */}
      <path
        d="M14 14
           L15.6 17.4
           L19 19
           L15.6 20.6
           L14 24
           L12.4 20.6
           L9 19
           L12.4 17.4
           Z"
        fill={tone === "light" ? "#0F172A" : "currentColor"}
        fillOpacity={tone === "light" ? 1 : 0.92}
      />
    </svg>
  );
};
