import { Check, Undo2, Home, Bookmark, Clock, Settings as SettingsIcon } from "lucide-react";

export const ToastScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      {/* Faux home behind */}
      <div className="px-5 pt-4 pb-3">
        <p className="font-display text-[20px] font-bold text-foreground">Good evening</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">3 reads waiting in your library</p>
      </div>
      <div className="px-5 space-y-2 opacity-60">
        <div className="h-20 rounded-2xl bg-card border border-border/60" />
        <div className="h-16 rounded-2xl bg-card border border-border/60" />
        <div className="h-16 rounded-2xl bg-card border border-border/60" />
      </div>

      {/* Snackbar */}
      <div className="absolute left-4 right-4 bottom-24 animate-fade-up">
        <div className="bg-foreground text-background rounded-2xl shadow-sheet px-4 h-12 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </div>
          <p className="flex-1 text-[12.5px] font-medium">Saved to <span className="font-bold">Tech reads</span></p>
          <button className="flex items-center gap-1 text-accent text-[11.5px] font-bold uppercase tracking-wider">
            <Undo2 className="w-3 h-3" />
            Undo
          </button>
        </div>
      </div>

      {/* Bottom nav hint */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-surface border-t border-border/60 flex items-center justify-around px-6">
        {[Home, Bookmark, Clock, SettingsIcon].map((Icon, i) => (
          <Icon key={i} className={`w-4 h-4 ${i === 0 ? "text-accent" : "text-muted-foreground"}`} />
        ))}
      </div>
    </div>
  );
};