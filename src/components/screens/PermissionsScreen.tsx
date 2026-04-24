import { Shield, Bell, Layers, Check } from "lucide-react";

export const PermissionsScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background">
      <div className="px-6 pt-6">
        <p className="text-[10px] uppercase tracking-wider font-bold text-accent mb-2">Step 2 of 3</p>
        <h1 className="font-display text-[22px] font-bold text-foreground leading-tight">
          A couple of permissions
        </h1>
        <p className="text-[12.5px] text-muted-foreground mt-1.5 leading-relaxed">
          Readlens AI needs these to appear above other apps. Your text is never stored.
        </p>
      </div>

      <div className="px-5 mt-6 space-y-2.5 flex-1">
        <PermissionRow
          icon={<Layers className="w-4 h-4" />}
          title="Display over other apps"
          desc="Show the chip and reading panel"
          granted
        />
        <PermissionRow
          icon={<Bell className="w-4 h-4" />}
          title="Notifications"
          desc="Run quietly in the background"
        />
        <PermissionRow
          icon={<Shield className="w-4 h-4" />}
          title="Background access"
          desc="Detect copies while other apps are open"
        />
      </div>

      <div className="px-6 pb-8 space-y-2">
        <button className="w-full h-12 rounded-2xl bg-foreground text-background font-display text-[14px] font-semibold active:scale-[0.98] transition-transform">
          Continue
        </button>
        <p className="text-[10.5px] text-center text-muted-foreground">
          You can change these anytime in Settings
        </p>
      </div>
    </div>
  );
};

const PermissionRow = ({
  icon,
  title,
  desc,
  granted = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  granted?: boolean;
}) => (
  <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-card border border-border/60">
    <div className="w-9 h-9 rounded-xl bg-secondary text-foreground/70 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-display text-[12.5px] font-semibold text-foreground leading-tight">
        {title}
      </p>
      <p className="text-[10.5px] text-muted-foreground mt-0.5">{desc}</p>
    </div>
    {granted ? (
      <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0">
        <Check className="w-3.5 h-3.5" strokeWidth={3} />
      </div>
    ) : (
      <button className="h-7 px-3 rounded-full bg-foreground text-background text-[10.5px] font-semibold shrink-0">
        Allow
      </button>
    )}
  </div>
);
