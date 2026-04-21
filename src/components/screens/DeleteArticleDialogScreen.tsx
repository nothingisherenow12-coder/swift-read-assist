import { Trash2 } from "lucide-react";

export const DeleteArticleDialogScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 bg-background overflow-hidden">
      <div className="absolute inset-0 pt-10 bg-foreground/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[280px] bg-surface rounded-3xl shadow-sheet p-6 animate-fade-up">
          <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Trash2 className="w-5 h-5 text-destructive" strokeWidth={2.2} />
          </div>
          <h2 className="font-display text-[16px] font-bold text-foreground text-center">
            Remove this read?
          </h2>
          <p className="text-[12px] text-muted-foreground text-center mt-2 leading-relaxed">
            "The art of focus" will be removed from your history. This can't be undone.
          </p>
          <div className="mt-5 space-y-2">
            <button className="w-full h-11 rounded-2xl bg-destructive text-destructive-foreground font-display text-[13px] font-bold">
              Remove
            </button>
            <button className="w-full h-11 rounded-2xl bg-secondary text-foreground font-display text-[13px] font-bold">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};