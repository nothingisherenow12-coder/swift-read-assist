import { Sparkles, MessageCircle, Search, Bookmark, Heart } from "lucide-react";

export const ChipScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      {/* Mock app behind — looks like a notes/article app */}
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Article</p>
            <h2 className="font-display text-[17px] font-bold text-foreground mt-0.5">The Quiet Web</h2>
          </div>
          <div className="flex items-center gap-1.5">
            <IconBtn><Search className="w-3.5 h-3.5" /></IconBtn>
            <IconBtn><Bookmark className="w-3.5 h-3.5" /></IconBtn>
          </div>
        </div>

        <div className="space-y-2.5 text-[12px] text-foreground/80 leading-[1.7]">
          <p>
            Quantum entanglement is a phenomenon where two particles become linked, so the state of one instantly influences the other—no matter the distance separating them.
          </p>
          <p className="text-foreground/50">
            Einstein famously called this "spooky action at a distance," and it remains one of the most counter-intuitive predictions of quantum mechanics.
          </p>
          <p className="text-foreground/40">
            Today, this principle underpins emerging technologies like quantum computing, quantum cryptography, and ultra-precise sensors.
          </p>
        </div>
      </div>

      {/* Bottom nav of host app */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-surface border-t border-border/60 flex items-center justify-around">
        <MessageCircle className="w-4 h-4 text-muted-foreground" />
        <Search className="w-4 h-4 text-muted-foreground" />
        <Heart className="w-4 h-4 text-muted-foreground" />
        <Bookmark className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Floating chip */}
      <div className="absolute left-1/2 bottom-24 -translate-x-1/2 animate-chip-in">
        <div className="relative">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-accent/30" style={{ animation: 'pulse-ring 1.8s ease-out infinite' }} />
          <button className="relative flex items-center gap-2 pl-3 pr-4 h-10 rounded-full bg-gradient-chip text-primary-foreground shadow-chip">
            <span className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[12px] font-semibold tracking-tight">Explain</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const IconBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
    {children}
  </button>
);
