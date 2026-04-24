import { Sparkles, BookOpen, GraduationCap, BookMarked, Languages, Copy, Share2 } from "lucide-react";
import { LumenLogo } from "@/components/LumenLogo";

const actions = [
  { icon: <Sparkles className="w-4 h-4" />, label: "Summary", desc: "Quick bullets", primary: true },
  { icon: <BookOpen className="w-4 h-4" />, label: "Explain", desc: "Plain language" },
  { icon: <GraduationCap className="w-4 h-4" />, label: "Study", desc: "Key terms" },
  { icon: <BookMarked className="w-4 h-4" />, label: "Deep Dive", desc: "Long-form" },
  { icon: <Languages className="w-4 h-4" />, label: "Translate", desc: "Auto detect" },
];

export const QuickActionsScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      {/* Faded host app */}
      <div className="px-5 pt-4 opacity-50">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Article</p>
        <h2 className="font-display text-[16px] font-bold text-foreground mt-0.5">The Quiet Web</h2>
        <p className="text-[12px] text-foreground/60 leading-[1.7] mt-3">
          Quantum entanglement is a phenomenon where two particles become linked...
        </p>
      </div>

      {/* Dim */}
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />

      {/* Quick action sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up p-4 pb-6">
        <div className="flex justify-center pb-3">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        <div className="flex items-center gap-2 mb-4 px-1">
          <div className="w-7 h-7 rounded-xl bg-gradient-accent flex items-center justify-center">
            <LumenLogo className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-[12.5px] font-bold text-foreground leading-tight">
              How would you like to read this?
            </p>
            <p className="text-[10.5px] text-muted-foreground mt-0.5">412 characters · ~2 min</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {actions.map((a) => (
            <button
              key={a.label}
              className={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-colors ${
                a.primary
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-foreground border-border/60"
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${a.primary ? "bg-background/15" : "bg-secondary"}`}>
                {a.icon}
              </div>
              <div>
                <p className="font-display text-[12px] font-semibold leading-tight">{a.label}</p>
                <p className={`text-[10px] mt-0.5 ${a.primary ? "text-background/60" : "text-muted-foreground"}`}>
                  {a.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <button className="flex-1 h-10 rounded-2xl bg-secondary text-foreground text-[11.5px] font-semibold flex items-center justify-center gap-1.5">
            <Copy className="w-3.5 h-3.5" /> Copy result
          </button>
          <button className="flex-1 h-10 rounded-2xl bg-secondary text-foreground text-[11.5px] font-semibold flex items-center justify-center gap-1.5">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};
