import { Check } from "lucide-react";

export const FilterSheetScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />
      <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up">
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="px-5 pt-2 pb-6">
          <div className="flex items-center justify-between pb-3">
            <p className="font-display text-[14px] font-bold text-foreground">Filter</p>
            <button className="text-[11px] font-semibold text-accent">Reset</button>
          </div>

          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Date range</p>
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {["Today", "This week", "This month", "All time"].map((d, i) => (
              <button key={d} className={`h-9 rounded-xl text-[11.5px] font-semibold ${i === 1 ? "bg-foreground text-background" : "bg-secondary text-foreground/80"}`}>
                {d}
              </button>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Reading mode</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {["Summary", "Explain", "Study", "Deep Dive"].map((m, i) => (
              <button key={m} className={`h-8 px-3 rounded-full flex items-center gap-1 text-[11px] font-semibold ${i === 0 || i === 3 ? "bg-accent/15 text-accent border border-accent/30" : "bg-secondary text-foreground/70 border border-transparent"}`}>
                {(i === 0 || i === 3) && <Check className="w-3 h-3" strokeWidth={3} />}
                {m}
              </button>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Collection</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["Research", "Quotes", "Tech reads", "Saved later"].map((c) => (
              <button key={c} className="h-8 px-3 rounded-full bg-secondary text-foreground/70 text-[11px] font-semibold">
                {c}
              </button>
            ))}
          </div>

          <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold">
            Show 18 results
          </button>
        </div>
      </div>
    </div>
  );
};