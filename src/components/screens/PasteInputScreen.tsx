import { ArrowLeft, Sparkles, ClipboardPaste, X } from "lucide-react";

export const PasteInputScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Paste text</h1>
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-hidden px-5 flex flex-col">
        <div className="flex-1 rounded-2xl bg-card border border-border/60 p-3.5 relative">
          <p className="text-[12.5px] text-foreground/85 leading-[1.6]">
            Quantum entanglement is a phenomenon in which two or more particles become connected in such a way that the state of one instantly influences the state of the other, regardless of the distance separating them…
          </p>
          <span className="absolute bottom-3 right-3 text-[10px] text-muted-foreground">412 / 5000</span>
        </div>

        <button className="mt-3 h-11 rounded-2xl bg-secondary text-foreground font-display text-[12.5px] font-bold flex items-center justify-center gap-2">
          <ClipboardPaste className="w-3.5 h-3.5" />
          Paste from clipboard
        </button>

        <button className="mt-2 h-12 rounded-2xl bg-foreground text-background font-display text-[13px] font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          Read with Readlens AI
        </button>
        <p className="text-[10px] text-muted-foreground text-center mt-2 mb-3">
          Choose a mode after analysis
        </p>
      </div>
    </div>
  );
};