import { ArrowUpRight, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { InstallCommand } from "./InstallCommand";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Soft brand bloom glowing behind the glass */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[26rem] max-w-4xl -translate-y-1/2 rounded-full bg-brand-gradient-3 opacity-25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 px-5 py-14 text-center shadow-elevated backdrop-blur-2xl sm:px-6 sm:py-16 md:px-16 md:py-20">
          {/* Texture + edge highlight */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-violet-300/25 blur-3xl animate-pulse-glow" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
              <Star className="h-3 w-3" />
              Open source · MIT
            </span>

            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Ready to fetch lyrics?
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Install lyrix-js, wire up a provider, and you're shipping lyrics
              with translation in minutes.
            </p>

            <div className="mt-8 w-full max-w-sm">
              <InstallCommand />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.repo}
                target="_blank"
                rel="noreferrer"
                className="contents"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </Button>
              </a>
              <a
                href={site.npm}
                target="_blank"
                rel="noreferrer"
                className="contents"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  View on npm
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
