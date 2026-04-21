import { ArrowLeft, Share2, Bookmark, Sparkles, MoreHorizontal } from "lucide-react";

export const ArticleDetailScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <Bookmark className="w-4 h-4" fill="currentColor" />
          </button>
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden px-5 pb-24 scroll-hide">
        <p className="text-[10.5px] uppercase tracking-wider font-bold text-accent">Tech reads</p>
        <h1 className="font-display text-[22px] font-bold text-foreground leading-tight tracking-tight mt-2">
          The art of focus: deep work in a noisy world
        </h1>
        <p className="text-[11px] text-muted-foreground mt-2">Saved 3 days ago · 412 characters</p>

        <div className="mt-5 space-y-3">
          <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
            Quantum entanglement is a phenomenon where two particles become permanently linked, sharing one wavefunction even when separated by enormous distances.
          </p>
          <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
            Measuring one instantly determines the state of the other — a result Einstein famously dismissed as "spooky action at a distance."
          </p>
          <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
            Today this principle powers experiments in quantum computing, satellite-based cryptography, and the search for a unified theory of physics.
          </p>
        </div>
      </div>

      {/* Floating re-open AI button */}
      <div className="absolute bottom-5 left-5 right-5">
        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold flex items-center justify-center gap-2 shadow-chip">
          <Sparkles className="w-4 h-4" strokeWidth={2.4} />
          Re-open AI assistant
        </button>
      </div>
    </div>
  );
};
