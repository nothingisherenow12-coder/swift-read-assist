import { Camera, Image as ImageIcon, Smile, Trash2, X } from "lucide-react";

const options = [
  { icon: Camera, label: "Take photo", desc: "Use your camera" },
  { icon: ImageIcon, label: "Choose from library", desc: "Pick an existing photo" },
  { icon: Smile, label: "Use an emoji", desc: "Generate a colorful avatar" },
  { icon: Trash2, label: "Remove current photo", desc: "Reset to initials", danger: true },
];

export const PhotoPickerSheetScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-foreground/40 overflow-hidden">
      <div className="flex-1" />
      <div className="bg-background rounded-t-[28px] pt-3 pb-5 shadow-soft">
        <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mx-auto mb-3" />
        <div className="px-5 flex items-center justify-between mb-4">
          <h1 className="font-display text-[15px] font-bold text-foreground">Profile photo</h1>
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="px-5 space-y-1.5">
          {options.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.label}
                className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border/40"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    o.danger ? "bg-destructive/10 text-destructive" : "bg-accent-soft text-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-[12.5px] font-semibold ${o.danger ? "text-destructive" : "text-foreground"}`}>
                    {o.label}
                  </p>
                  <p className="text-[10.5px] text-muted-foreground">{o.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};