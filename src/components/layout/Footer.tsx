import { Github } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/config/site";

const columns = [
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: site.repo },
      { label: "npm", href: site.npm },
      { label: "LRCLIB", href: site.lrclib },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Issues", href: `${site.repo}/issues` },
      { label: "Discussions", href: `${site.repo}/discussions` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-muted/20">
      {/* Top gradient accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <a
              href={site.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              {site.repo.replace("https://", "")}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/80">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("#") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {site.year} Lyrix.js</p>
        </div>
      </div>
    </footer>
  );
}
