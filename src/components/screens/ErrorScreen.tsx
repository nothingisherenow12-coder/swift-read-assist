import { WifiOff, RefreshCw, ArrowLeft } from "lucide-react";

export const ErrorScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Reading</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mb-5">
          <WifiOff className="w-7 h-7" strokeWidth={1.8} />
        </div>
        <h2 className="font-display text-[18px] font-bold text-foreground">Couldn't connect</h2>
        <p className="text-[12.5px] text-muted-foreground mt-2 leading-relaxed max-w-[240px]">
          We couldn't reach the AI. Check your connection and try again.
        </p>

        <button className="mt-6 h-10 px-5 rounded-2xl bg-foreground text-background font-display text-[12.5px] font-semibold flex items-center gap-1.5 active:scale-[0.98] transition-transform">
          <RefreshCw className="w-3.5 h-3.5" /> Try again
        </button>
        <button className="mt-2 h-10 px-5 text-[12px] text-muted-foreground font-medium">
          Use offline summary
        </button>
      </div>
    </div>
  );
};
