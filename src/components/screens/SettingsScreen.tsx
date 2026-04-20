import { ChevronRight, Moon, Globe, Bell, Shield, Sparkles, Trash2, Info, Zap, ArrowLeft } from "lucide-react";

export const SettingsScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Settings</h1>
        <span className="w-9" />
      </div>

      <div className="flex-1 overflow-hidden px-5 space-y-4">
        {/* Status card */}
        <div className="p-4 rounded-2xl bg-gradient-hero border border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2.4} />
            </div>
            <div className="flex-1">
              <p className="font-display text-[13px] font-bold text-foreground">Assistant active</p>
              <p className="text-[10.5px] text-muted-foreground mt-0.5">Listening for copied text</p>
            </div>
            <Toggle on />
          </div>
        </div>

        <Group title="General">
          <Item icon={<Zap className="w-3.5 h-3.5" />} label="Auto-detect clipboard" trail={<Toggle on />} />
          <Item icon={<Sparkles className="w-3.5 h-3.5" />} label="Default mode" trail={<Trail value="Summary" />} />
          <Item icon={<Globe className="w-3.5 h-3.5" />} label="Language" trail={<Trail value="English" />} />
        </Group>

        <Group title="Appearance">
          <Item icon={<Moon className="w-3.5 h-3.5" />} label="Theme" trail={<Trail value="System" />} />
          <Item icon={<Bell className="w-3.5 h-3.5" />} label="Notifications" trail={<Toggle on={false} />} />
        </Group>

        <Group title="Privacy">
          <Item icon={<Shield className="w-3.5 h-3.5" />} label="Permissions" trail={<ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />} />
          <Item icon={<Trash2 className="w-3.5 h-3.5" />} label="Clear history" trail={<ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />} danger />
        </Group>
      </div>
    </div>
  );
};

const Group = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5 px-1">
      {title}
    </p>
    <div className="rounded-2xl bg-card border border-border/60 overflow-hidden divide-y divide-border/50">
      {children}
    </div>
  </div>
);

const Item = ({
  icon,
  label,
  trail,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  trail: React.ReactNode;
  danger?: boolean;
}) => (
  <div className="flex items-center gap-3 px-3.5 h-11">
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${danger ? "bg-destructive/10 text-destructive" : "bg-secondary text-foreground/70"}`}>
      {icon}
    </div>
    <p className={`flex-1 text-[12.5px] font-medium ${danger ? "text-destructive" : "text-foreground"}`}>
      {label}
    </p>
    {trail}
  </div>
);

const Trail = ({ value }: { value: string }) => (
  <div className="flex items-center gap-1 text-muted-foreground">
    <span className="text-[11.5px]">{value}</span>
    <ChevronRight className="w-3.5 h-3.5" />
  </div>
);

const Toggle = ({ on }: { on: boolean }) => (
  <div className={`w-9 h-5 rounded-full p-0.5 flex ${on ? "bg-accent justify-end" : "bg-muted-foreground/25 justify-start"}`}>
    <div className="w-4 h-4 rounded-full bg-white shadow-soft-sm" />
  </div>
);
