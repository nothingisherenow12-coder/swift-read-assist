import { ArrowLeft, Search, ChevronRight, MessageCircle, Mail, BookOpen, Lightbulb, Shield, Zap } from "lucide-react";

const topics = [
  { icon: Zap, label: "Getting started", count: 8 },
  { icon: BookOpen, label: "Reading modes explained", count: 4 },
  { icon: Lightbulb, label: "Tips & tricks", count: 12 },
  { icon: Shield, label: "Privacy & data", count: 6 },
];

const faqs = [
  "How does Lumen detect copied text?",
  "Why does it need accessibility access?",
  "Can I use Lumen offline?",
  "How do I cancel my subscription?",
];

export const HelpScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Help</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-4">
        <div className="flex items-center gap-2 px-3.5 h-10 rounded-2xl bg-secondary">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[12px] text-muted-foreground">Search help articles</span>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Topics</p>
          <div className="grid grid-cols-2 gap-2">
            {topics.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="p-3 rounded-2xl bg-card border border-border/60">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="font-display text-[12px] font-bold text-foreground leading-tight">{t.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{t.count} articles</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5">Popular</p>
          <div className="rounded-2xl bg-card border border-border/60 overflow-hidden divide-y divide-border/50">
            {faqs.map((q) => (
              <div key={q} className="flex items-center gap-2 px-3.5 h-11">
                <p className="flex-1 text-[12px] text-foreground truncate">{q}</p>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button className="h-11 rounded-2xl bg-foreground text-background font-display text-[12px] font-bold flex items-center justify-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" /> Live chat
          </button>
          <button className="h-11 rounded-2xl bg-secondary text-foreground font-display text-[12px] font-bold flex items-center justify-center gap-1.5">
            <Mail className="w-3.5 h-3.5" /> Email us
          </button>
        </div>
      </div>
    </div>
  );
};