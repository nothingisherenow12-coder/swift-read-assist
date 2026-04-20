import { Search, Clock, Bookmark, MoreHorizontal, ArrowLeft } from "lucide-react";

const items = [
  { title: "Quantum Entanglement", excerpt: "Two particles linked across distance...", time: "2m ago", saved: true },
  { title: "The history of HTTP/3", excerpt: "Built on QUIC, designed to reduce...", time: "1h ago", saved: false },
  { title: "What is RAG?", excerpt: "Retrieval-augmented generation combines...", time: "Yesterday", saved: true },
  { title: "CSS Container Queries", excerpt: "Style elements based on parent size...", time: "Yesterday", saved: false },
  { title: "Stoic philosophy basics", excerpt: "Focus on what you can control...", time: "Mon", saved: false },
];

export const HistoryScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      {/* App bar */}
      <div className="px-5 pt-3 pb-4">
        <div className="flex items-center justify-between mb-4">
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="font-display text-[15px] font-bold text-foreground">History</h1>
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 px-3.5 h-10 rounded-2xl bg-secondary">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[12px] text-muted-foreground">Search readings</span>
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto scroll-hide">
          {["All", "Saved", "Today", "This week"].map((c, i) => (
            <button
              key={c}
              className={
                i === 0
                  ? "h-7 px-3 rounded-full bg-foreground text-background text-[11px] font-semibold whitespace-nowrap"
                  : "h-7 px-3 rounded-full bg-secondary text-foreground/70 text-[11px] font-semibold whitespace-nowrap"
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Section */}
      <div className="px-5 flex-1 overflow-hidden">
        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">
          Today
        </p>
        <div className="space-y-2">
          {items.slice(0, 2).map((it) => (
            <Row key={it.title} {...it} />
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mt-4 mb-2">
          Earlier
        </p>
        <div className="space-y-2">
          {items.slice(2).map((it) => (
            <Row key={it.title} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Row = ({
  title,
  excerpt,
  time,
  saved,
}: {
  title: string;
  excerpt: string;
  time: string;
  saved: boolean;
}) => (
  <div className="flex items-start gap-3 p-3 rounded-2xl bg-card border border-border/40">
    <div className="w-9 h-9 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
      <Clock className="w-3.5 h-3.5" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2">
        <p className="font-display text-[12px] font-semibold text-foreground truncate">{title}</p>
        {saved && <Bookmark className="w-3 h-3 fill-accent text-accent shrink-0" />}
      </div>
      <p className="text-[10.5px] text-muted-foreground truncate mt-0.5">{excerpt}</p>
      <p className="text-[10px] text-muted-foreground/70 mt-1">{time}</p>
    </div>
  </div>
);
