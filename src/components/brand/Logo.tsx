import { cn } from "@/lib/utils";

export function Logo({
  className,
  withWordmark = true,
  size = 28,
}: {
  className?: string;
  withWordmark?: boolean;
  size?: number;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
    >
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-xl shadow-glow"
        style={{
          width: size,
          height: size,
        }}
      >
        <img
          src="/lyrix-logo.png"
          alt="lyrix logo"
          width={size}
          height={size}
          className="h-full w-full rounded-xl object-cover"
          decoding="async"
          loading="eager"
        />
      </span>
      {withWordmark ? (
        <span className="text-xl font-black tracking-tight text-foreground">
          lyrix
          <span className="text-gradient">.js</span>
        </span>
      ) : null}
    </span>
  );
}
