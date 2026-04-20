import { Inbox, Sparkles, Copy } from "lucide-react";

export const EmptyStateScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      <div className="px-5 pt-3 pb-3 flex items-center justify-center">
        <h1 className="font-display text-[15px] font-bold text-foreground">History</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-accent blur-2xl opacity-20 rounded-full" />
          <div className="relative w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center">
            <Inbox className="w-8 h-8 text-muted-foreground" strokeWidth={1.6} />
          </div>
        </div>
        <h2 className="font-display text-[18px] font-bold text-foreground">Nothing here yet</h2>
        <p className="text-[12.5px] text-muted-foreground mt-2 leading-relaxed max-w-[230px]">
          Copy any text in any app and a chip will appear. Tap it to read here.
        </p>

        <div className="mt-7 flex items-center gap-2 px-3.5 h-9 rounded-full bg-secondary text-[11.5px] font-medium text-foreground/80">
          <Copy className="w-3 h-3" /> Try copying a sentence
        </div>
      </div>

      <div className="px-6 pb-8">
        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[14px] font-semibold flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Show me a demo
        </button>
      </div>
    </div>
  );
};
