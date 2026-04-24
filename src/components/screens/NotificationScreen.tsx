import { Sparkles, Pause, X } from "lucide-react";

export const NotificationScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-gradient-to-b from-foreground/85 to-foreground/95 overflow-hidden">
      {/* Status header text */}
      <div className="px-6 pt-2 flex items-center justify-between text-background/80 text-[10px]">
        <span>Today · 9:41 AM</span>
        <span>Notifications</span>
      </div>

      {/* Notification card */}
      <div className="mx-3 mt-4 p-3.5 rounded-2xl bg-surface/95 backdrop-blur-md shadow-soft-lg animate-fade-up">
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
            <LumenLogo className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10.5px] font-semibold text-foreground/70 uppercase tracking-wide">Lumen</p>
              <p className="text-[10px] text-muted-foreground">now</p>
            </div>
            <p className="font-display text-[12.5px] font-semibold text-foreground mt-0.5 leading-tight">
              Reading assistant is active
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
              Copy any text to see a quick chip appear
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-1.5 mt-3 pt-3 border-t border-border/50">
          <button className="flex-1 h-8 rounded-xl bg-secondary text-foreground text-[11px] font-semibold flex items-center justify-center gap-1">
            <Pause className="w-3 h-3" /> Pause
          </button>
          <button className="flex-1 h-8 rounded-xl bg-secondary text-foreground text-[11px] font-semibold flex items-center justify-center gap-1">
            <X className="w-3 h-3" /> Dismiss
          </button>
        </div>
      </div>

      {/* Older notification */}
      <div className="mx-3 mt-2 p-3.5 rounded-2xl bg-surface/70 backdrop-blur-md">
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-accent-soft flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-accent" strokeWidth={2.4} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10.5px] font-semibold text-foreground/70 uppercase tracking-wide">Lumen · 2h ago</p>
            <p className="font-display text-[12px] font-semibold text-foreground mt-0.5 leading-tight">
              You read 14 things this week
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">View your weekly digest</p>
          </div>
        </div>
      </div>

      {/* Glassy bottom hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-background/15 text-background/80 text-[10.5px] font-medium backdrop-blur-md">
        Swipe down to dismiss
      </div>
    </div>
  );
};
