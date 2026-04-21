import { Bookmark } from "lucide-react";

const colors = [
  { name: "blue", cls: "bg-blue-100 dark:bg-blue-950/50", ring: "ring-blue-500" },
  { name: "amber", cls: "bg-amber-100 dark:bg-amber-950/50", ring: "ring-amber-500" },
  { name: "emerald", cls: "bg-emerald-100 dark:bg-emerald-950/50", ring: "ring-emerald-500" },
  { name: "violet", cls: "bg-violet-100 dark:bg-violet-950/50", ring: "ring-violet-500" },
  { name: "rose", cls: "bg-rose-100 dark:bg-rose-950/50", ring: "ring-rose-500" },
  { name: "slate", cls: "bg-slate-200 dark:bg-slate-800", ring: "ring-slate-500" },
];

export const NewCollectionSheetScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />

      <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up">
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        <div className="px-5 pt-3 pb-6">
          <h2 className="font-display text-[16px] font-bold text-foreground">New collection</h2>
          <p className="text-[11px] text-muted-foreground mt-1">Group related saves together.</p>

          {/* Preview */}
          <div className="mt-5 flex items-center gap-3 p-3 rounded-2xl bg-surface-dim border border-border/40">
            <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center">
              <Bookmark className="w-4 h-4 text-violet-600 dark:text-violet-400" strokeWidth={2.2} />
            </div>
            <div>
              <p className="font-display text-[13px] font-bold text-foreground">Design notes</p>
              <p className="text-[10.5px] text-muted-foreground">0 items</p>
            </div>
          </div>

          {/* Name input */}
          <div className="mt-4">
            <label className="text-[10.5px] uppercase tracking-wider font-bold text-muted-foreground">Name</label>
            <div className="mt-1.5 h-11 px-4 rounded-2xl bg-surface-dim border border-border/40 flex items-center">
              <span className="text-[13px] text-foreground">Design notes</span>
              <span className="w-0.5 h-4 bg-accent ml-0.5 animate-pulse" />
            </div>
          </div>

          {/* Color picker */}
          <div className="mt-4">
            <label className="text-[10.5px] uppercase tracking-wider font-bold text-muted-foreground">Color</label>
            <div className="mt-2 flex items-center gap-2">
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  className={`w-9 h-9 rounded-xl ${c.cls} ${i === 3 ? `ring-2 ring-offset-2 ring-offset-surface ${c.ring}` : ""}`}
                />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex gap-2">
            <button className="flex-1 h-12 rounded-2xl bg-secondary text-foreground font-display text-[13px] font-bold">
              Cancel
            </button>
            <button className="flex-1 h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
