import { Bookmark, MoreHorizontal, ArrowLeft, Plus } from "lucide-react";

const collections = [
  { name: "Research", count: 12, tone: "from-blue-500/15 to-indigo-500/5" },
  { name: "Quotes", count: 24, tone: "from-amber-500/15 to-rose-500/5" },
  { name: "Tech reads", count: 8, tone: "from-emerald-500/15 to-teal-500/5" },
  { name: "Saved later", count: 31, tone: "from-violet-500/15 to-fuchsia-500/5" },
];

export const LibraryScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Library</h1>
        <button className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="px-5 pt-4 flex-1 overflow-hidden">
        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">
          Collections
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {collections.map((c) => (
            <div
              key={c.name}
              className={`relative p-3.5 rounded-2xl border border-border/60 bg-gradient-to-br ${c.tone} overflow-hidden h-[88px]`}
            >
              <Bookmark className="w-4 h-4 text-foreground/60" />
              <p className="font-display text-[13px] font-bold text-foreground mt-2.5 leading-tight">
                {c.name}
              </p>
              <p className="text-[10.5px] text-muted-foreground mt-0.5">{c.count} items</p>
            </div>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mt-5 mb-2">
          Recently saved
        </p>
        <div className="space-y-2">
          {[
            ["The art of focus", "Deep work in a noisy world"],
            ["Vector databases", "The new index for AI"],
          ].map(([t, s]) => (
            <div key={t} className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border/40">
              <div className="w-1 h-9 rounded-full bg-accent" />
              <div className="flex-1 min-w-0">
                <p className="font-display text-[12px] font-semibold text-foreground truncate">{t}</p>
                <p className="text-[10.5px] text-muted-foreground truncate">{s}</p>
              </div>
              <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
