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

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-8 md:pt-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="animate-fade-up text-balance text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-[4.5rem]">
              Lyrics retrieval,
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient-animated">
                translated & synced.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg [animation-delay:80ms] animate-fade-up">
              {site.tagline} Pluggable caching, synced lyrics, and type-safe
              APIs in a tiny, dependency-light package.
            </p>

            <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row [animation-delay:160ms]">
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

            <div className="mt-10 w-full max-w-sm animate-fade-up [animation-delay:240ms]">
              <InstallCommand />
            </div>
          </div>

          <div className="relative animate-scale-in [animation-delay:200ms]">
            {/* Glow behind code card */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-rose-400/20 via-violet-400/30 to-sky-400/20 blur-2xl" />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-rose-200/40 via-violet-200/40 to-sky-200/30 blur-xl" />

            <div className="animate-float-slow">
              <CodeBlock
                code={codeSamples[0].code}
                lang={codeSamples[0].lang}
                caption={codeSamples[0].caption}
                className="ring-gradient shadow-elevated"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
