import { X, Maximize2 } from "lucide-react";
import { LumenLogo } from "@/components/LumenLogo";
import { cn } from "@/lib/utils";

const tabs = ["Summary", "Explain", "Study", "Deep Dive"];

interface PanelScreenProps {
  variant?: "default" | "expanded" | "loading";
  activeTab?: number;
}

export const PanelScreen = ({ variant = "default", activeTab = 0 }: PanelScreenProps) => {
  const expanded = variant === "expanded";
  const loading = variant === "loading";
  const sheetHeight = expanded ? "h-[88%]" : "h-[75%]";

  return (
    <div className="absolute inset-0 pt-10 bg-surface-dim overflow-hidden">
      {/* Dimmed background */}
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />

      {/* Bottom sheet */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-surface rounded-t-[28px] shadow-sheet animate-sheet-up flex flex-col",
          sheetHeight
        )}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        {/* Header */}
        <div className="px-5 pt-2 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0">
              <LumenLogo className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-[14px] font-bold text-foreground leading-tight truncate">
                {loading ? "Analyzing…" : "Quantum Entanglement"}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {loading ? "Reading 412 characters" : "AI Reading Assistant"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-5 pb-3">
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-secondary">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={cn(
                  "flex-1 h-8 rounded-xl text-[11px] font-display font-semibold transition-all",
                  i === activeTab
                    ? "bg-surface text-foreground shadow-soft-sm"
                    : "text-muted-foreground"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden px-5 pb-6 scroll-hide">
          {loading ? <LoadingContent /> : <ContentByTab tab={activeTab} expanded={expanded} />}
        </div>
      </div>
    </div>
  );
};

const ContentByTab = ({ tab, expanded }: { tab: number; expanded: boolean }) => {
  if (tab === 0) return <SummaryContent />;
  if (tab === 1) return <ExplainContent />;
  if (tab === 2) return <StudyContent />;
  return <DeepDiveContent expanded={expanded} />;
};

const SummaryContent = () => (
  <div className="space-y-2.5 animate-fade-up">
    {[
      "Two particles become permanently linked through entanglement.",
      "A measurement on one instantly affects the other.",
      "Distance does not weaken the connection.",
      "Foundation for quantum computing and cryptography.",
    ].map((b, i) => (
      <div
        key={i}
        className="flex gap-3 p-3 rounded-2xl bg-surface-dim border border-border/40"
        style={{ animation: `fade-up 0.4s var(--ease-out) ${i * 80}ms both` }}
      >
        <div className="w-5 h-5 rounded-full bg-accent-soft text-accent flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
          {i + 1}
        </div>
        <p className="text-[12px] text-foreground/85 leading-[1.55]">{b}</p>
      </div>
    ))}
  </div>
);

const ExplainContent = () => (
  <div className="space-y-3 animate-fade-up">
    <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
      Imagine two coins that always land on opposite sides—even when flipped on different planets.
    </p>
    <p className="text-[12.5px] text-foreground/85 leading-[1.7]">
      That's entanglement. Two particles share one fate. Measure one, and you instantly know the other.
    </p>
    <div className="p-3 rounded-2xl bg-accent-soft border border-accent/20">
      <p className="text-[10px] uppercase tracking-wider font-bold text-accent mb-1">Why it matters</p>
      <p className="text-[11.5px] text-foreground/80 leading-relaxed">
        It powers tomorrow's secure messaging and ultra-fast computing.
      </p>
    </div>
  </div>
);

const StudyContent = () => (
  <div className="space-y-4 animate-fade-up">
    <Section title="Definition">
      A correlation between particles where measurement of one instantly determines the state of the other.
    </Section>
    <Section title="Key Terms">
      <div className="space-y-2 mt-1.5">
        {[
          ["Superposition", "Existing in multiple states at once"],
          ["Wavefunction", "Mathematical description of quantum state"],
          ["Decoherence", "Loss of quantum behavior"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 text-[11.5px]">
            <span className="font-semibold text-foreground">{k}</span>
            <span className="text-muted-foreground text-right">{v}</span>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5">{title}</p>
    <div className="text-[12px] text-foreground/85 leading-[1.6]">{children}</div>
  </div>
);

const DeepDiveContent = ({ expanded }: { expanded: boolean }) => (
  <div className="space-y-3 animate-fade-up">
    <p className="text-[12px] text-foreground/85 leading-[1.7]">
      Quantum entanglement was first proposed in 1935 by Einstein, Podolsky, and Rosen as a thought experiment intended to show that quantum mechanics was incomplete.
    </p>
    <p className="text-[12px] text-foreground/85 leading-[1.7]">
      Decades later, John Bell formalized a test that experiments could perform—and reality, surprisingly, sided with quantum theory.
    </p>
    {expanded && (
      <>
        <p className="text-[12px] text-foreground/85 leading-[1.7]">
          Today, entanglement is harnessed in commercial photonic chips, satellite quantum key distribution, and laboratory teleportation experiments stretching across continents.
        </p>
        <div className="p-3 rounded-2xl bg-surface-dim border border-border/40">
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1">Example</p>
          <p className="text-[11.5px] text-foreground/80 leading-relaxed">
            China's Micius satellite distributed entangled photon pairs to ground stations 1,200 km apart in 2017.
          </p>
        </div>
      </>
    )}
  </div>
);

const LoadingContent = () => (
  <div className="space-y-3">
    <div className="h-3 w-3/4 rounded-full shimmer" />
    <div className="h-3 w-full rounded-full shimmer" />
    <div className="h-3 w-5/6 rounded-full shimmer" />
    <div className="h-20 w-full rounded-2xl shimmer mt-4" />
    <div className="h-3 w-2/3 rounded-full shimmer mt-2" />
    <div className="h-3 w-full rounded-full shimmer" />
  </div>
);
