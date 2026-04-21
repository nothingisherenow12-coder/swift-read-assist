import { ArrowLeft, Bookmark, MoreHorizontal, Search } from "lucide-react";

const items = [
  { title: "Attention is all you need", meta: "Paper · 8 min read", tag: "AI" },
  { title: "The bitter lesson", meta: "Essay · 4 min read", tag: "AI" },
  { title: "Vector databases explained", meta: "Article · 6 min read", tag: "Infra" },
  { title: "Embeddings from scratch", meta: "Tutorial · 12 min read", tag: "ML" },
  { title: "Why transformers won", meta: "Blog · 5 min read", tag: "AI" },
  { title: "RAG patterns in 2025", meta: "Guide · 9 min read", tag: "Infra" },
];

export const CollectionDetailScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* Cover */}
      <div className="px-5 pt-2 pb-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center mb-3">
          <Bookmark className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={2.2} />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">Tech reads</h1>
        <p className="text-[11.5px] text-muted-foreground mt-1">8 items · Updated 2h ago</p>
      </div>

      {/* List */}
      <div className="flex-1 overflow-hidden px-5 pb-6 space-y-2 scroll-hide">
        {items.map((it, i) => (
          <div
            key={i}
            className="p-3 rounded-2xl bg-surface-dim border border-border/40 flex items-start gap-3"
          >
            <div className="w-1 self-stretch rounded-full bg-accent/70 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-display text-[13px] font-semibold text-foreground truncate">{it.title}</p>
              <p className="text-[10.5px] text-muted-foreground mt-0.5">{it.meta}</p>
            </div>
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-accent bg-accent-soft px-2 py-1 rounded-full">
              {it.tag}
            </span>
            <button className="text-muted-foreground">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
