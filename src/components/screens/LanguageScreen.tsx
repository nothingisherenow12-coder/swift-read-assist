import { Search, Check, ArrowLeft } from "lucide-react";

const langs = [
  { code: "EN", name: "English", region: "United States", selected: true },
  { code: "ES", name: "Spanish", region: "Español" },
  { code: "FR", name: "French", region: "Français" },
  { code: "DE", name: "German", region: "Deutsch" },
  { code: "JA", name: "Japanese", region: "日本語" },
  { code: "HI", name: "Hindi", region: "हिन्दी" },
  { code: "AR", name: "Arabic", region: "العربية" },
  { code: "PT", name: "Portuguese", region: "Português" },
];

export const LanguageScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Language</h1>
        <span className="w-9" />
      </div>

      <div className="px-5 pb-3">
        <div className="flex items-center gap-2 px-3.5 h-10 rounded-2xl bg-secondary">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-[12px] text-muted-foreground">Search 40+ languages</span>
        </div>
      </div>

      <div className="px-5 flex-1 overflow-hidden">
        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5">
          Selected
        </p>
        <div className="rounded-2xl bg-card border border-border/60 mb-4">
          <Row {...langs[0]} />
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5">
          All languages
        </p>
        <div className="rounded-2xl bg-card border border-border/60 divide-y divide-border/50 overflow-hidden">
          {langs.slice(1, 7).map((l) => (
            <Row key={l.code} {...l} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Row = ({
  code,
  name,
  region,
  selected = false,
}: {
  code: string;
  name: string;
  region: string;
  selected?: boolean;
}) => (
  <div className="flex items-center gap-3 px-3.5 h-12">
    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-display text-[10.5px] font-bold text-foreground/70">
      {code}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[12.5px] font-semibold text-foreground leading-tight">{name}</p>
      <p className="text-[10.5px] text-muted-foreground">{region}</p>
    </div>
    {selected && (
      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </div>
    )}
  </div>
);
