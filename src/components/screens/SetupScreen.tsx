import { Shield, Zap } from "lucide-react";
import { LumenLogo } from "@/components/LumenLogo";

export const SetupScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-gradient-hero">
      <div className="flex-1 flex flex-col items-center justify-center px-7 text-center">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-accent blur-2xl opacity-30 rounded-full" />
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-accent flex items-center justify-center shadow-soft-lg">
            <LumenLogo className="w-11 h-11" />
          </div>
        </div>

        <h1 className="font-display text-[28px] font-bold text-foreground leading-tight mb-3">
          Welcome to Readlens AI
        </h1>
        <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[260px] mb-10">
          An invisible AI layer that helps you understand any text, anywhere.
        </p>

        {/* Features */}
        <div className="w-full space-y-3 mb-10">
          <Feature icon={<Zap className="w-4 h-4" />} title="Instant" desc="Copy text and tap" />
          <Feature icon={<Shield className="w-4 h-4" />} title="Private" desc="Your text stays yours" />
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-8 space-y-2.5">
        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[14px] font-semibold shadow-soft-md active:scale-[0.98] transition-transform">
          Grant overlay permission
        </button>
        <button className="w-full h-12 rounded-2xl bg-secondary text-foreground font-display text-[14px] font-semibold active:scale-[0.98] transition-transform">
          Start assistant
        </button>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card border border-border/60">
    <div className="w-9 h-9 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
      {icon}
    </div>
    <div className="text-left">
      <p className="font-display text-[13px] font-semibold text-foreground">{title}</p>
      <p className="text-[11px] text-muted-foreground">{desc}</p>
    </div>
  </div>
);
