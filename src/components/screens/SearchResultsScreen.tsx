import { Search, ArrowLeft, BookOpen } from "lucide-react";

const results = [
  { title: "The art of focus", snippet: "…deep work in a noisy world requires…", tag: "Article" },
  { title: "Focus vs flow states", snippet: "…focus is the door, flow is the room…", tag: "Note" },
  { title: "Cal Newport on focus", snippet: "…the ability to focus is the new IQ…", tag: "Quote" },
  { title: "Why we lose focus", snippet: "…dopamine loops break attention every…", tag: "Article" },
];

export const SearchResultsScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-4 pt-3 pb-3 flex items-center gap-2">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70 shrink-0">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 h-10 rounded-full bg-secondary flex items-center gap-2 px-3.5">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <p className="flex-1 text-[12.5px] text-foreground">focus</p>
        </div>
      </div>

      <div className="px-5 pb-2">
        <p className="text-[11px] text-muted-foreground">
          <span className="font-bold text-foreground">12</span> results for "focus"
        </p>
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-2">
        {results.map((r, i) => (
          <div key={i} className="p-3 rounded-2xl bg-card border border-border/60">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <BookOpen className="w-3 h-3" />
              </div>
              <p className="font-display text-[12.5px] font-bold text-foreground flex-1 truncate">
                The art of <span className="bg-accent/20 text-accent px-0.5 rounded">{r.title.includes("focus") ? "focus" : ""}</span>{r.title.replace(/focus/i, "")}
              </p>
              <span className="text-[9.5px] font-semibold text-muted-foreground uppercase tracking-wider">{r.tag}</span>
            </div>
            <p className="text-[10.5px] text-muted-foreground leading-relaxed pl-8">{r.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};