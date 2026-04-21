import { Search, ArrowLeft, Clock, X, TrendingUp } from "lucide-react";

const recent = ["focus deep work", "vector databases", "stoic philosophy", "rust async"];
const trending = ["AI agents", "minimalism", "neural nets", "writing tips"];

export const SearchScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-4 pt-3 pb-3 flex items-center gap-2">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70 shrink-0">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1 h-10 rounded-full bg-secondary flex items-center gap-2 px-3.5">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <input
            placeholder="Search reads, terms, ideas…"
            className="flex-1 bg-transparent text-[12.5px] outline-none text-foreground placeholder:text-muted-foreground"
            autoFocus
          />
          <span className="w-1 h-4 bg-accent animate-pulse" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-5 pt-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Recent</p>
          <button className="text-[10.5px] text-accent font-semibold">Clear</button>
        </div>
        <div className="space-y-0.5 mb-5">
          {recent.map((q) => (
            <div key={q} className="flex items-center gap-3 h-10 px-2 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <p className="flex-1 text-[12.5px] text-foreground">{q}</p>
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Trending</p>
        <div className="flex flex-wrap gap-1.5">
          {trending.map((t) => (
            <div key={t} className="px-3 h-7 rounded-full bg-secondary flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-medium text-foreground">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};