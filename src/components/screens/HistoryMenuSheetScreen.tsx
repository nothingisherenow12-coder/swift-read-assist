import { ArrowDownAZ, Filter, Download, Trash2, CheckSquare } from "lucide-react";

const items = [
  { icon: CheckSquare, label: "Select items", desc: "Pick multiple to delete or move", danger: false },
  { icon: ArrowDownAZ, label: "Sort", desc: "Newest first", danger: false },
  { icon: Filter, label: "Filter", desc: "By date, mode, collection", danger: false },
  { icon: Download, label: "Export history", desc: "Download as PDF or JSON", danger: false },
  { icon: Trash2, label: "Clear all history", desc: "Permanently delete 47 reads", danger: true },
];

export const HistoryMenuSheetScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />
      <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up">
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="px-5 pt-2 pb-6">
          <p className="px-1 pb-2 font-display text-[13px] font-bold text-foreground">History options</p>
          <div className="space-y-1">
            {items.map((a, i) => {
              const Icon = a.icon;
              return (
                <button key={i} className="w-full p-3 rounded-2xl hover:bg-surface-dim flex items-center gap-3 text-left transition-colors">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${a.danger ? "bg-destructive/10 text-destructive" : "bg-secondary text-foreground/80"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-display text-[13px] font-bold ${a.danger ? "text-destructive" : "text-foreground"}`}>{a.label}</p>
                    <p className="text-[10.5px] text-muted-foreground mt-0.5">{a.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};