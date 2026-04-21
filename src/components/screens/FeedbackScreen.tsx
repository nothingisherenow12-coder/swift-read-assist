import { ArrowLeft, Smile, Meh, Frown, Bug, Lightbulb, Heart, Send } from "lucide-react";

const types = [
  { icon: Lightbulb, label: "Idea", active: true },
  { icon: Bug, label: "Bug" },
  { icon: Heart, label: "Praise" },
];

export const FeedbackScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Feedback</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">How's Lumen?</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              [Frown, "Bad"],
              [Meh, "Okay"],
              [Smile, "Love it"],
            ].map(([Icon, l], i) => {
              const I = Icon as typeof Smile;
              const active = i === 2;
              return (
                <button key={i as number} className={`h-16 rounded-2xl flex flex-col items-center justify-center gap-1 ${active ? "bg-accent/15 border-2 border-accent" : "bg-card border border-border/60"}`}>
                  <I className={`w-5 h-5 ${active ? "text-accent" : "text-muted-foreground"}`} />
                  <span className={`text-[10.5px] font-semibold ${active ? "text-accent" : "text-foreground"}`}>{l as string}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Type</p>
          <div className="flex gap-1.5">
            {types.map((t) => {
              const Icon = t.icon;
              return (
                <button key={t.label} className={`flex-1 h-9 rounded-xl flex items-center justify-center gap-1.5 text-[11.5px] font-semibold ${t.active ? "bg-foreground text-background" : "bg-secondary text-foreground/80"}`}>
                  <Icon className="w-3.5 h-3.5" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Tell us more</p>
          <div className="rounded-2xl bg-card border border-border/60 p-3.5 h-28">
            <p className="text-[12px] text-foreground/85 leading-[1.6]">
              Would love a "highlight to save quote" gesture inside the panel<span className="inline-block w-0.5 h-3 bg-accent animate-pulse align-middle ml-0.5" />
            </p>
          </div>
          <p className="text-[10px] text-muted-foreground text-right mt-1">68 / 500</p>
        </div>

        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold flex items-center justify-center gap-2">
          <Send className="w-3.5 h-3.5" />
          Send feedback
        </button>
      </div>
    </div>
  );
};