import { PhoneFrame } from "@/components/PhoneFrame";
import { SetupScreen } from "@/components/screens/SetupScreen";
import { ChipScreen } from "@/components/screens/ChipScreen";
import { PanelScreen } from "@/components/screens/PanelScreen";
import { Sparkles, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 glass border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2.4} />
            </div>
            <div>
              <p className="font-display text-[15px] font-bold text-foreground leading-none">Lumen</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">UI / UX Preview</p>
            </div>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full bg-secondary text-foreground flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border/60 text-[11px] font-semibold text-muted-foreground mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Design preview · Material 3 inspired
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
            Copy. Tap.<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Understand.</span>
          </h1>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed">
            An invisible AI reading layer for Android. Below: every screen, exactly as it would feel in your hand.
          </p>
        </div>
      </section>

      {/* Screens grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <SectionLabel n="01" title="Onboarding" />
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          <PhoneFrame
            label="Setup"
            description="A focused welcome with two clear actions. No clutter."
          >
            <SetupScreen />
          </PhoneFrame>

          <PhoneFrame
            label="Floating chip"
            description="Appears after copy. Subtle pulse, auto-dismiss, never in the way."
          >
            <ChipScreen />
          </PhoneFrame>

          <PhoneFrame
            label="Loading state"
            description="Skeleton shimmer. Never a blank screen."
          >
            <PanelScreen variant="loading" />
          </PhoneFrame>
        </div>

        <SectionLabel n="02" title="Reading panel · Tabs" className="mt-24" />
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10">
          <PhoneFrame label="Summary" description="4 quick bullets for instant grasp.">
            <PanelScreen activeTab={0} />
          </PhoneFrame>
          <PhoneFrame label="Explain" description="Plain-language paragraphs anyone can read.">
            <PanelScreen activeTab={1} />
          </PhoneFrame>
          <PhoneFrame label="Study" description="Definitions and key terms, structured.">
            <PanelScreen activeTab={2} />
          </PhoneFrame>
          <PhoneFrame label="Deep Dive" description="Long-form context with examples.">
            <PanelScreen activeTab={3} />
          </PhoneFrame>
        </div>

        <SectionLabel n="03" title="Expanded reading mode" className="mt-24" />
        <div className="grid place-items-center md:grid-cols-2 gap-12 mt-10 max-w-3xl mx-auto">
          <PhoneFrame
            label="Default · 75%"
            description="Quick reading. Swipe down to dismiss."
          >
            <PanelScreen activeTab={3} />
          </PhoneFrame>
          <PhoneFrame
            label="Expanded · Full"
            description="Swipe up for deep reading. Scroll position preserved."
          >
            <PanelScreen variant="expanded" activeTab={3} />
          </PhoneFrame>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-[12px] text-muted-foreground">
        Lumen — visual mockup · Built with Material 3 principles
      </footer>
    </div>
  );
};

const SectionLabel = ({ n, title, className = "" }: { n: string; title: string; className?: string }) => (
  <div className={`flex items-baseline gap-3 ${className}`}>
    <span className="font-display text-[11px] font-bold text-accent tracking-widest">{n}</span>
    <div className="h-px flex-1 bg-border" />
    <h2 className="font-display text-[15px] font-semibold text-foreground">{title}</h2>
  </div>
);

export default Index;
