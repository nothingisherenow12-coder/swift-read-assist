import { ArrowLeft, Check } from "lucide-react";

const modes = [
  { name: "Summary", desc: "Quick numbered bullets", selected: true },
  { name: "Explain", desc: "Plain language with examples", selected: false },
  { name: "Study", desc: "Definition + key terms", selected: false },
  { name: "Deep Dive", desc: "Long-form context", selected: false },
];

export const DefaultModeScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Default mode</h1>
        <span className="w-9" />
      </div>

      <div className="px-5 pb-3">
        <p className="text-[11.5px] text-muted-foreground leading-relaxed">
          The mode shown first when the AI panel opens. You can always switch tabs.
        </p>
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-2 scroll-hide">
        {modes.map((m) => (
          <button
            key={m.name}
            className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition-colors ${
              m.selected
                ? "bg-accent-soft border-accent/40"
                : "bg-surface-dim border-border/40"
            }`}
          >
            <div className="flex-1 min-w-0">
              <p className="font-display text-[13px] font-bold text-foreground">{m.name}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{m.desc}</p>
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                m.selected ? "bg-accent text-white" : "border-2 border-border"
              }`}
            >
              {m.selected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
