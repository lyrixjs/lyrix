import { ArrowRight, Github } from "lucide-react";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { codeSamples } from "@/data/code-samples";
import { InstallCommand } from "./InstallCommand";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-gradient" />
      {/* Dotted grid, masked */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial opacity-50" />
      {/* Subtle floating orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl animate-pulse-glow [animation-delay:1.5s]" />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 md:px-8 md:pt-24 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="animate-fade-up text-balance text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-[4.5rem]">
              Lyrics retrieval,
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-animated">
                translated & synced.
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg [animation-delay:80ms] animate-fade-up">
              {site.tagline} Pluggable caching, synced lyrics, and type-safe
              APIs in a tiny, dependency-light package.
            </p>

            <div className="mt-6 sm:mt-8 flex w-full max-w-xs sm:max-w-none animate-fade-up flex-col gap-2.5 sm:flex-row [animation-delay:160ms]">
              <a href="#examples" className="contents">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a
                href={site.repo}
                target="_blank"
                rel="noreferrer"
                className="contents"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
            </div>

            <div className="mt-8 sm:mt-10 w-full max-w-sm animate-fade-up [animation-delay:240ms]">
              <InstallCommand />
            </div>
          </div>

          <div className="relative animate-scale-in w-full min-w-0 [animation-delay:200ms]">
            {/* Glow behind code card, sized to match the card radius on all screens */}
            <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-tr from-rose-300/40 via-violet-300/40 to-sky-300/40 blur-2xl" />

            <CodeBlock
              code={codeSamples[0].code}
              lang={codeSamples[0].lang}
              caption={codeSamples[0].caption}
              className="ring-gradient shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
