import { ArrowLeft, FileText, Shield, Cookie, Scale, ChevronRight } from "lucide-react";

export const LegalScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Legal</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-4">
        <p className="text-[12px] text-muted-foreground leading-relaxed">
          The boring but important stuff. Tap any item to read in full.
        </p>

        <div className="rounded-2xl bg-card border border-border/60 overflow-hidden divide-y divide-border/50">
          <Row icon={<FileText className="w-3.5 h-3.5" />} label="Terms of service" />
          <Row icon={<Shield className="w-3.5 h-3.5" />} label="Privacy policy" />
          <Row icon={<Cookie className="w-3.5 h-3.5" />} label="Cookie policy" />
          <Row icon={<Scale className="w-3.5 h-3.5" />} label="Open-source licenses" />
        </div>

        <div className="p-4 rounded-2xl bg-secondary/50 border border-border/40">
          <p className="text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
            Data & you
          </p>
          <p className="text-[11.5px] text-foreground/80 leading-relaxed">
            We process copied text on-device whenever possible. AI calls are encrypted in transit and never used for training.
          </p>
        </div>

        <p className="text-[10px] text-muted-foreground text-center">
          Last updated · Mar 14, 2026
        </p>
      </div>
    </div>
  );
};

const Row = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 px-3.5 h-12">
    <div className="w-7 h-7 rounded-lg bg-secondary text-foreground/70 flex items-center justify-center">
      {icon}
    </div>
    <p className="flex-1 text-[12.5px] font-medium text-foreground">{label}</p>
    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
  </div>
);