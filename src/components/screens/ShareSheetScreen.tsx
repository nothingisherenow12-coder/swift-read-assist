import { Copy, MessageCircle, Mail, Twitter, Link2, FileText, MoreHorizontal } from "lucide-react";

export const ShareSheetScreen = () => {
  const apps = [
    { icon: MessageCircle, label: "Messages", color: "bg-emerald-500" },
    { icon: Mail, label: "Mail", color: "bg-sky-500" },
    { icon: Twitter, label: "X", color: "bg-foreground" },
    { icon: MessageCircle, label: "WhatsApp", color: "bg-green-600" },
    { icon: FileText, label: "Notes", color: "bg-amber-500" },
    { icon: MoreHorizontal, label: "More", color: "bg-secondary text-foreground" },
  ];
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />
      <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up">
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="px-5 pt-2 pb-6">
          <div className="px-1 pb-3 border-b border-border/40">
            <p className="font-display text-[13px] font-bold text-foreground truncate">The art of focus</p>
            <p className="text-[10.5px] text-muted-foreground mt-0.5">lumen.app/r/abc123</p>
          </div>

          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mt-3 mb-2">Share via</p>
          <div className="grid grid-cols-4 gap-2">
            {apps.map((a) => {
              const Icon = a.icon;
              return (
                <button key={a.label} className="flex flex-col items-center gap-1.5">
                  <div className={`w-12 h-12 rounded-2xl ${a.color} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${a.color.includes("secondary") ? "" : "text-white"}`} />
                  </div>
                  <span className="text-[10px] font-medium text-foreground">{a.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 space-y-1">
            {[
              [Copy, "Copy text"],
              [Link2, "Copy link"],
              [FileText, "Export as PDF"],
            ].map(([Icon, label], i) => {
              const I = Icon as typeof Copy;
              return (
                <button key={i as number} className="w-full p-3 rounded-2xl hover:bg-surface-dim flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-secondary text-foreground/80 flex items-center justify-center shrink-0">
                    <I className="w-4 h-4" />
                  </div>
                  <p className="flex-1 font-display text-[13px] font-bold text-foreground">{label as string}</p>
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