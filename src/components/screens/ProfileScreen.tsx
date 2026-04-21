import { ArrowLeft, Settings as SettingsIcon, Mail, Calendar, BookOpen, Bookmark, Flame, ChevronRight, LogOut } from "lucide-react";

export const ProfileScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Profile</h1>
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <SettingsIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="px-5 flex-1 overflow-hidden">
        <div className="flex flex-col items-center pt-2 pb-5">
          <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center shadow-soft mb-3">
            <span className="font-display text-[28px] font-bold text-white">A</span>
          </div>
          <p className="font-display text-[18px] font-bold text-foreground">Alex Morgan</p>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <Mail className="w-3 h-3" />
            <p className="text-[11px]">alex@lumen.app</p>
          </div>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <p className="text-[10.5px]">Joined March 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            [BookOpen, "47", "Read"],
            [Bookmark, "23", "Saved"],
            [Flame, "12", "Day streak"],
          ].map(([Icon, n, l], i) => {
            const I = Icon as typeof BookOpen;
            return (
              <div key={i as number} className="rounded-2xl bg-card border border-border/40 p-3 text-center">
                <I className="w-3.5 h-3.5 text-accent mx-auto mb-1" />
                <p className="font-display text-[16px] font-bold text-foreground leading-none">{n as string}</p>
                <p className="text-[9.5px] text-muted-foreground mt-1">{l as string}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-card border border-border/60 overflow-hidden divide-y divide-border/50">
          {["Edit profile", "Notifications", "Privacy", "Subscription"].map((l) => (
            <div key={l} className="flex items-center gap-3 px-3.5 h-11">
              <p className="flex-1 text-[12.5px] font-medium text-foreground">{l}</p>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          ))}
        </div>

        <button className="mt-3 w-full h-11 rounded-2xl bg-destructive/10 text-destructive font-display text-[12.5px] font-bold flex items-center justify-center gap-2">
          <LogOut className="w-3.5 h-3.5" />
          Sign out
        </button>
      </div>
    </div>
  );
};