import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: ReactNode;
  label?: string;
  description?: string;
  className?: string;
}

export const PhoneFrame = ({ children, label, description, className }: PhoneFrameProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-5", className)}>
      <div className="phone-frame relative w-[320px] h-[660px] rounded-[44px] bg-surface overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-24 h-6 rounded-full bg-foreground/95" />
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-10 z-40 flex items-end justify-between px-7 pb-1.5 text-[11px] font-semibold text-foreground/80">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="w-3.5 h-2 rounded-sm border border-foreground/60 relative">
              <span className="absolute inset-0.5 bg-foreground/80 rounded-[1px]" />
            </span>
          </span>
        </div>
        {/* Screen content */}
        <div className="relative w-full h-full pt-10">{children}</div>
      </div>
      {label && (
        <div className="text-center max-w-[280px]">
          <p className="font-display text-sm font-semibold text-foreground">{label}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};
