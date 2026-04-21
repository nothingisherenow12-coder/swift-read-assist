import { ArrowLeft, Check, Moon, Sun, Smartphone } from "lucide-react";

const themes = [
  { name: "System", desc: "Match device setting", icon: Smartphone, selected: true },
  { name: "Light", desc: "Always bright", icon: Sun, selected: false },
  { name: "Dark", desc: "Easy on the eyes", icon: Moon, selected: false },
];

export const ThemeScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Theme</h1>
        <span className="w-9" />
      </div>

      {/* Preview */}
      <div className="px-5 pb-4">
        <div className="rounded-2xl overflow-hidden border border-border/60 grid grid-cols-2 h-28">
          <div className="bg-white p-3 flex flex-col justify-between">
            <div className="w-8 h-1.5 rounded-full bg-zinc-900" />
            <div className="space-y-1">
              <div className="w-full h-1 rounded-full bg-zinc-200" />
              <div className="w-3/4 h-1 rounded-full bg-zinc-200" />
            </div>
          </div>
          <div className="bg-zinc-900 p-3 flex flex-col justify-between">
            <div className="w-8 h-1.5 rounded-full bg-white" />
            <div className="space-y-1">
              <div className="w-full h-1 rounded-full bg-zinc-700" />
              <div className="w-3/4 h-1 rounded-full bg-zinc-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-2 scroll-hide">
        {themes.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.name}
              className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition-colors ${
                t.selected
                  ? "bg-accent-soft border-accent/40"
                  : "bg-surface-dim border-border/40"
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-foreground/80 shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-[13px] font-bold text-foreground">{t.name}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{t.desc}</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  t.selected ? "bg-accent text-white" : "border-2 border-border"
                }`}
              >
                {t.selected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
