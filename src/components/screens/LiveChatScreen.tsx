import { ArrowLeft, Send, Paperclip, MoreHorizontal } from "lucide-react";

const messages = [
  { from: "agent", text: "Hi Alex 👋 I'm Maya from support. How can I help today?", time: "10:42" },
  { from: "me", text: "The chip doesn't appear when I copy text in Safari.", time: "10:43" },
  { from: "agent", text: "Got it. Could you check Settings → Permissions → Accessibility is on?", time: "10:43" },
  { from: "me", text: "Yes, it's on.", time: "10:44" },
  { from: "agent", text: "Try toggling it off and back on. That re-registers the listener.", time: "10:44" },
];

export const LiveChatScreen = () => {
  return (
    <div className="absolute inset-0 pt-10 flex flex-col bg-background overflow-hidden">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between border-b border-border/60">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
              <span className="font-display text-[11px] font-bold text-white">M</span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-background" />
          </div>
          <div>
            <p className="font-display text-[12.5px] font-bold text-foreground leading-tight">Maya · Support</p>
            <p className="text-[9.5px] text-emerald-600 font-semibold">Online</p>
          </div>
        </div>
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-hidden px-4 py-3 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[78%] px-3 py-2 rounded-2xl ${
                m.from === "me"
                  ? "bg-foreground text-background rounded-br-md"
                  : "bg-card border border-border/40 text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-[12px] leading-snug">{m.text}</p>
              <p className={`text-[9px] mt-1 ${m.from === "me" ? "text-background/60" : "text-muted-foreground"}`}>
                {m.time}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-start">
          <div className="bg-card border border-border/40 rounded-2xl rounded-bl-md px-3 py-2.5 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 pt-2 border-t border-border/60 flex items-center gap-2">
        <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground/70 shrink-0">
          <Paperclip className="w-4 h-4" />
        </button>
        <div className="flex-1 h-10 px-3.5 rounded-2xl bg-secondary flex items-center">
          <span className="text-[12px] text-muted-foreground">Type a message…</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};