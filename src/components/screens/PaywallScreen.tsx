import { Sparkles, Check, X } from "lucide-react";

const features = [
  "Unlimited AI reads per day",
  "All 4 reading modes",
  "Unlimited collections",
  "Export to PDF & Markdown",
  "Priority AI processing",
  "No ads, ever",
];

export const PaywallScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-gradient-hero overflow-hidden">
      <div className="px-5 pt-3 flex justify-end">
        <button className="w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center text-foreground/70">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="px-5 pt-2">
        <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center mb-4 shadow-soft">
          <Sparkles className="w-6 h-6 text-white" strokeWidth={2.4} />
        </div>
        <h1 className="font-display text-[26px] font-bold text-foreground tracking-tight leading-[1.1]">
          Unlock<br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">Lumen Pro.</span>
        </h1>
        <p className="text-[12px] text-muted-foreground mt-2">Read smarter, faster, without limits.</p>
      </div>

      <div className="flex-1 overflow-hidden px-5 mt-4 space-y-1.5">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-accent" strokeWidth={3} />
            </div>
            <p className="text-[12px] text-foreground font-medium">{f}</p>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5 space-y-2">
        <div className="p-3 rounded-2xl bg-card border-2 border-accent flex items-center justify-between">
          <div>
            <p className="font-display text-[13px] font-bold text-foreground">Yearly · Save 40%</p>
            <p className="text-[10.5px] text-muted-foreground">$3.99/mo · billed $47.88/year</p>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[9.5px] font-bold uppercase tracking-wider">
            Best
          </div>
        </div>
        <div className="p-3 rounded-2xl bg-card border border-border/60">
          <p className="font-display text-[13px] font-bold text-foreground">Monthly</p>
          <p className="text-[10.5px] text-muted-foreground">$6.99 · billed monthly</p>
        </div>
        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold mt-2">
          Start 7-day free trial
        </button>
        <p className="text-[9.5px] text-muted-foreground text-center">Cancel anytime · Restore purchase</p>
      </div>
    </div>
  );
};