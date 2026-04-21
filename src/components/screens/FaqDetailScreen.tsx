import { ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react";

export const FaqDetailScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[13px] font-bold text-foreground">Help article</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5 scroll-hide">
        <p className="text-[10.5px] uppercase tracking-wider font-bold text-accent">Getting started</p>
        <h1 className="font-display text-[20px] font-bold text-foreground leading-tight tracking-tight mt-2">
          How does the floating chip work?
        </h1>
        <p className="text-[10.5px] text-muted-foreground mt-2">Updated 2 weeks ago · 1 min read</p>

        <div className="mt-5 space-y-3">
          <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
            Whenever you copy text in any app, Lumen detects the clipboard change and shows a small floating chip near the bottom of your screen.
          </p>
          <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
            Tap the chip to open the AI panel and pick a reading mode — Summary, Explain, Study, or Deep Dive. Ignore it and it disappears in 6 seconds.
          </p>
          <div className="p-3 rounded-2xl bg-accent-soft border border-accent/20">
            <p className="text-[11.5px] text-foreground/85 leading-[1.6]">
              <span className="font-bold text-accent">Tip:</span> long-press the chip to save the text without opening the panel.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-border/60">
          <p className="text-[11px] font-bold text-foreground mb-2">Was this helpful?</p>
          <div className="flex gap-2">
            <button className="flex-1 h-10 rounded-2xl bg-secondary text-foreground text-[11.5px] font-semibold flex items-center justify-center gap-1.5">
              <ThumbsUp className="w-3.5 h-3.5" /> Yes
            </button>
            <button className="flex-1 h-10 rounded-2xl bg-secondary text-foreground text-[11.5px] font-semibold flex items-center justify-center gap-1.5">
              <ThumbsDown className="w-3.5 h-3.5" /> No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};