import { Github, X } from "lucide-react";
import { useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

export function MobileMenu({
  open,
  onOpenChange,
  links,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: NavLink[];
}) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 md:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 h-full w-full cursor-default bg-foreground/20 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-[84%] max-w-xs flex-col gap-2 border-l border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out sm:w-[78%]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => onOpenChange(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => onOpenChange(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-muted/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted/80"
          >
            Docs
          </a>
        </nav>
        <div className="mt-auto flex flex-col gap-2.5 pb-2">
          <a
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            className="contents"
          >
            <Button variant="outline" className="w-full justify-center">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>
          <Button
            type="button"
            className="w-full justify-center"
            onClick={() => {
              onOpenChange(false);
              window.location.hash = "#examples";
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
