import { ArrowLeft, Sparkles, Star, FileText, Shield, Mail, Github, Heart } from "lucide-react";

export const AboutScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">About</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5">
        <div className="flex flex-col items-center pt-2 pb-5">
          <div className="w-16 h-16 rounded-3xl bg-gradient-accent flex items-center justify-center shadow-soft mb-3">
            <Sparkles className="w-7 h-7 text-white" strokeWidth={2.4} />
          </div>
          <p className="font-display text-[18px] font-bold text-foreground">Lumen</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">Version 1.4.2 (build 218)</p>
        </div>

        <div className="rounded-2xl bg-card border border-border/60 overflow-hidden divide-y divide-border/50">
          {[
            { icon: Star, label: "Rate Lumen", trail: "★★★★★" },
            { icon: FileText, label: "Terms of service", trail: "" },
            { icon: Shield, label: "Privacy policy", trail: "" },
            { icon: Mail, label: "Contact support", trail: "" },
            { icon: Github, label: "Open source licenses", trail: "" },
          ].map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.label} className="flex items-center gap-3 px-3.5 h-11">
                <div className="w-7 h-7 rounded-lg bg-secondary text-foreground/70 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <p className="flex-1 text-[12.5px] font-medium text-foreground">{it.label}</p>
                <span className="text-[11px] text-muted-foreground">{it.trail}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-center text-[10.5px] text-muted-foreground">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> in Bengaluru
          </p>
          <p className="mt-0.5">© 2026 Lumen Labs</p>
        </div>
      </div>
    </div>
  );
};