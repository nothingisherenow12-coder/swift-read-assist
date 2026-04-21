import { ArrowLeft, Sparkles, CreditCard, Calendar, Download, ChevronRight } from "lucide-react";

export const SubscriptionScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Subscription</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-4">
        <div className="p-4 rounded-2xl bg-gradient-hero border border-border/60">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-accent flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2.4} />
            </div>
            <p className="font-display text-[11.5px] font-bold text-foreground/80 uppercase tracking-wide">
              Lumen Pro · Active
            </p>
          </div>
          <p className="font-display text-[18px] font-bold text-foreground leading-snug">Yearly plan</p>
          <p className="text-[11px] text-muted-foreground mt-1">Renews March 14, 2026</p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5 px-1">Plan</p>
          <div className="rounded-2xl bg-card border border-border/60 overflow-hidden divide-y divide-border/50">
            <Row icon={<CreditCard className="w-3.5 h-3.5" />} label="Payment method" trail="•••• 4242" />
            <Row icon={<Calendar className="w-3.5 h-3.5" />} label="Next billing" trail="$47.88" />
            <Row icon={<Download className="w-3.5 h-3.5" />} label="Invoices & receipts" />
          </div>
        </div>

        <button className="w-full h-11 rounded-2xl bg-secondary text-foreground font-display text-[12.5px] font-bold">
          Switch to monthly
        </button>
        <button className="w-full h-11 rounded-2xl text-destructive font-display text-[12.5px] font-bold">
          Cancel subscription
        </button>
      </div>
    </div>
  );
};

const Row = ({ icon, label, trail }: { icon: React.ReactNode; label: string; trail?: string }) => (
  <div className="flex items-center gap-3 px-3.5 h-12">
    <div className="w-7 h-7 rounded-lg bg-secondary text-foreground/70 flex items-center justify-center">
      {icon}
    </div>
    <p className="flex-1 text-[12.5px] font-medium text-foreground">{label}</p>
    {trail && <span className="text-[11.5px] text-muted-foreground">{trail}</span>}
    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
  </div>
);