import { Home, Clock, Bookmark, Settings, Plus } from "lucide-react";
import { ReadlensLogo } from "@/components/ReadlensLogo";

export const HomeScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      {/* Top */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-muted-foreground">Good morning</p>
          <h1 className="font-display text-[20px] font-bold text-foreground leading-tight">Alex</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
          <span className="font-display text-[13px] font-bold text-white">A</span>
        </div>
      </div>

      {/* Hero card */}
      <div className="mx-5 p-4 rounded-2xl bg-gradient-hero border border-border/60">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-xl bg-gradient-accent flex items-center justify-center">
            <ReadlensLogo className="w-4 h-4" />
          </div>
          <p className="font-display text-[11.5px] font-bold text-foreground/80 uppercase tracking-wide">
            Assistant ready
          </p>
        </div>
        <p className="font-display text-[16px] font-bold text-foreground leading-snug">
          Copy any text — I'll be right there.
        </p>
        <button className="mt-4 h-9 px-4 rounded-full bg-foreground text-background text-[11.5px] font-semibold inline-flex items-center gap-1.5">
          <Plus className="w-3 h-3" /> Try with my own text
        </button>
      </div>

      {/* Stats */}
      <div className="px-5 mt-5 grid grid-cols-3 gap-2">
        {[
          ["14", "Read"],
          ["7", "Saved"],
          ["3.2k", "Words"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl bg-card border border-border/40 p-3 text-center">
            <p className="font-display text-[18px] font-bold text-foreground leading-none">{n}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{l}</p>
          </div>
        ))}
      </div>

      {/* Recent */}
      <div className="px-5 mt-5 flex-1 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Recent</p>
          <span className="text-[10.5px] font-semibold text-accent">See all</span>
        </div>
        <div className="space-y-2">
          {[
            ["Quantum entanglement", "Summary"],
            ["The art of focus", "Deep Dive"],
          ].map(([t, m]) => (
            <div key={t} className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border/40">
              <div className="w-8 h-8 rounded-xl bg-accent-soft text-accent flex items-center justify-center text-[10px] font-bold">
                {m[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-[12px] font-semibold text-foreground truncate">{t}</p>
                <p className="text-[10px] text-muted-foreground">{m}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-14 bg-surface border-t border-border/60 flex items-center justify-around">
        <Tab icon={<Home className="w-4 h-4" />} label="Home" active />
        <Tab icon={<Clock className="w-4 h-4" />} label="History" />
        <Tab icon={<Bookmark className="w-4 h-4" />} label="Library" />
        <Tab icon={<Settings className="w-4 h-4" />} label="Settings" />
      </div>
    </div>
  );
};

const Tab = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <div className={`flex flex-col items-center gap-0.5 ${active ? "text-foreground" : "text-muted-foreground"}`}>
    {icon}
    <span className="text-[9px] font-semibold">{label}</span>
  </div>
);
