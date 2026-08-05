import { ArrowRight, Github, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "#features", label: "Features" },
  { href: "#examples", label: "Examples" },
  { href: "#providers", label: "Providers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8">
        <a
          href={import.meta.env.BASE_URL}
          aria-label="lyrix home"
          className="group justify-self-start"
          onClick={(e) => {
            if (
              window.location.pathname === import.meta.env.BASE_URL &&
              !window.location.hash
            ) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 justify-self-center md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            className="ml-1 rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
        </nav>

        <div className="hidden items-center gap-2 justify-self-end md:flex">
          <a
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            className="contents"
          >
            <Button size="sm" variant="ghost">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>
          <a href="#examples" className="contents">
            <Button size="sm">
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted justify-self-end md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} links={links} />
    </header>
  );
}
