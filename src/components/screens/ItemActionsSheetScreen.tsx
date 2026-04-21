import { BookOpen, FolderInput, Share2, Trash2 } from "lucide-react";

const actions = [
  { icon: BookOpen, label: "Open", desc: "Read full article", danger: false },
  { icon: FolderInput, label: "Move to collection", desc: "Currently in Tech reads", danger: false },
  { icon: Share2, label: "Share", desc: "Send link or text", danger: false },
  { icon: Trash2, label: "Delete", desc: "Remove from history", danger: true },
];

export const ItemActionsSheetScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />

      <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up">
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        <div className="px-5 pt-2 pb-6">
          {/* Item preview */}
          <div className="px-1 pb-3 border-b border-border/40">
            <p className="font-display text-[13px] font-bold text-foreground truncate">The art of focus</p>
            <p className="text-[10.5px] text-muted-foreground mt-0.5">Deep work in a noisy world · 3 days ago</p>
          </div>

          <div className="mt-2 space-y-1">
            {actions.map((a, i) => {
              const Icon = a.icon;
              return (
                <button
                  key={i}
                  className="w-full p-3 rounded-2xl hover:bg-surface-dim flex items-center gap-3 text-left transition-colors"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      a.danger ? "bg-destructive/10 text-destructive" : "bg-secondary text-foreground/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-display text-[13px] font-bold ${
                        a.danger ? "text-destructive" : "text-foreground"
                      }`}
                    >
                      {a.label}
                    </p>
                    <p className="text-[10.5px] text-muted-foreground mt-0.5">{a.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <button className="mt-3 w-full h-12 rounded-2xl bg-secondary text-foreground font-display text-[13px] font-bold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
