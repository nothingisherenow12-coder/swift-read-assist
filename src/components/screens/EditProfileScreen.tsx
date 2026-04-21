import { ArrowLeft, Camera, Check } from "lucide-react";

export const EditProfileScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-[15px] font-bold text-foreground">Edit profile</h1>
        <button className="h-9 px-3 rounded-full bg-foreground text-background text-[11px] font-bold flex items-center gap-1">
          <Check className="w-3 h-3" /> Save
        </button>
      </div>

      <div className="flex-1 overflow-hidden px-5">
        <div className="flex flex-col items-center pt-3 pb-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center shadow-soft">
              <span className="font-display text-[28px] font-bold text-white">A</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center border-2 border-background">
              <Camera className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[10.5px] text-muted-foreground mt-2">Tap to change photo</p>
        </div>

        <div className="space-y-3">
          <Field label="Display name" value="Alex Morgan" />
          <Field label="Username" value="@alexm" />
          <Field label="Email" value="alex@lumen.app" muted />
          <Field label="Bio" value="Reading more, scrolling less." multiline />
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  value,
  muted = false,
  multiline = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
  multiline?: boolean;
}) => (
  <div>
    <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-1.5 px-1">{label}</p>
    <div className={`rounded-2xl bg-card border border-border/60 px-3.5 py-2.5 ${multiline ? "min-h-[64px]" : ""}`}>
      <p className={`text-[12.5px] ${muted ? "text-muted-foreground" : "text-foreground"} font-medium`}>{value}</p>
    </div>
  </div>
);