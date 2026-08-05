import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  style,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-elevated hover:border-primary/30",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-indigo-500/0 before:via-violet-500/0 before:to-fuchsia-500/0 before:opacity-0 before:transition-opacity before:duration-500 before:group-hover:from-indigo-500/[0.06] before:group-hover:via-violet-500/[0.04] before:group-hover:to-fuchsia-500/[0.06] before:group-hover:opacity-100",
        className,
      )}
      style={style}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-rose-300/0 blur-2xl transition-colors duration-500 group-hover:bg-rose-300/40" />

      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-50 to-violet-50 text-primary ring-1 ring-inset ring-primary/15 transition-all duration-300 group-hover:scale-105 group-hover:from-rose-100 group-hover:to-violet-100 group-hover:shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
