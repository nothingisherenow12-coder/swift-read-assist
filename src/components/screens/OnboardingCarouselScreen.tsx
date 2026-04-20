import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    accent: "from-blue-400 to-indigo-500",
    title: "Read smarter",
    body: "Get instant summaries of anything you copy.",
  },
  {
    accent: "from-violet-400 to-fuchsia-500",
    title: "Understand deeper",
    body: "Switch between Summary, Explain, Study and Deep Dive.",
  },
  {
    accent: "from-amber-400 to-rose-500",
    title: "Stay invisible",
    body: "A subtle chip that never gets in your way.",
  },
];

export const OnboardingCarouselScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      {/* Skip */}
      <div className="flex justify-end px-6 pt-2">
        <button className="text-[12px] font-semibold text-muted-foreground">Skip</button>
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="relative w-44 h-44 mb-8">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-accent blur-2xl opacity-40" />
          <div className="relative w-full h-full rounded-[36px] bg-gradient-accent flex items-center justify-center shadow-soft-lg">
            <Sparkles className="w-14 h-14 text-white" strokeWidth={2} />
          </div>
        </div>
        <h1 className="font-display text-[24px] font-bold text-foreground text-center leading-tight">
          {slides[1].title}
        </h1>
        <p className="text-[13px] text-muted-foreground text-center mt-2 leading-relaxed max-w-[240px]">
          {slides[1].body}
        </p>

        {/* Dots */}
        <div className="flex items-center gap-1.5 mt-8">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
          <span className="w-6 h-1.5 rounded-full bg-foreground" />
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
        </div>
      </div>

      <div className="px-6 pb-8">
        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[14px] font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform">
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
