import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow = ({ title = "terminal", children, className = "" }: TerminalWindowProps) => (
  <div className={`terminal-card transition-all duration-300 ${className}`}>
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-terminal-red/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-terminal-amber/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/70" />
      </div>
      <span className="text-[11px] font-mono text-muted-foreground ml-2">{title}</span>
    </div>
    {/* Content */}
    <div className="p-4 md:p-5 font-mono text-sm">
      {children}
    </div>
  </div>
);

export default TerminalWindow;
