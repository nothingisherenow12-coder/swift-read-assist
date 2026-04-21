import { Plus, Check, X } from "lucide-react";

const collections = [
  { name: "Tech reads", color: "bg-blue-500", count: 12, selected: true },
  { name: "Inspiration", color: "bg-amber-500", count: 8 },
  { name: "Recipes", color: "bg-emerald-500", count: 5 },
  { name: "Work notes", color: "bg-violet-500", count: 21 },
  { name: "To revisit", color: "bg-rose-500", count: 3 },
];

export const SaveToCollectionSheetScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-foreground/40 overflow-hidden">
      <div className="flex-1" />
      <div className="bg-background rounded-t-[28px] pt-3 pb-5 shadow-soft">
        <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto mb-3" />
        <div className="px-5 flex items-center justify-between mb-4">
          <h1 className="font-display text-[15px] font-bold text-foreground">Save to collection</h1>
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="px-5 space-y-1.5 max-h-[280px] overflow-hidden">
          {collections.map((c) => (
            <div
              key={c.name}
              className={`flex items-center gap-3 p-2.5 rounded-2xl ${
                c.selected ? "bg-accent-soft border border-accent/30" : "bg-card border border-border/40"
              }`}
            >
              <div className={`w-8 h-8 rounded-xl ${c.color}`} />
              <div className="flex-1 min-w-0">
                <p className="font-display text-[12.5px] font-semibold text-foreground truncate">{c.name}</p>
                <p className="text-[10px] text-muted-foreground">{c.count} items</p>
              </div>
              {c.selected ? (
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
              )}
            </div>
          ))}
        </div>

        <div className="px-5 mt-3 space-y-2">
          <button className="w-full h-11 rounded-2xl border border-dashed border-border text-foreground/70 text-[12px] font-semibold flex items-center justify-center gap-1.5">
            <Plus className="w-3.5 h-3.5" /> New collection
          </button>
          <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};