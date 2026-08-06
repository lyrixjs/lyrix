import { Boxes, Database, Plug, Sparkles } from "lucide-react";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Badge } from "@/components/ui/badge";
import { site } from "@/config/site";
import { customProviderExample, providerInterface } from "@/data/code-samples";
import { SectionHeading } from "./SectionHeading";

export function ProvidersSection() {
  return (
    <section id="providers" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Providers"
          title="Bring your own, or use what's built-in"
          description="LRCLIB ships out of the box. Need a different source? Implement a single interface and plug it in. Providers are queried in order and the first hit wins."
          className="mx-auto mb-14 scroll-reveal"
        />

        <div className="space-y-10 md:space-y-14">
          {/* Row 1: Built-in LRCLIB (Text Left, Code Right) */}
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="scroll-reveal flex min-w-0 items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose-50 to-violet-50 text-primary ring-1 ring-inset ring-primary/15">
                <Database className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Built-in: LRCLIB
                  </h3>
                  <Badge variant="primary">default</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Query a community-driven lyrics database with metadata, plain,
                  and synced lyrics, no API key required. Pass it straight to
                  your client config.
                </p>
                <a
                  href={site.lrclib}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn about LRCLIB →
                </a>
              </div>
            </div>

            <div className="scroll-reveal min-w-0">
              <CodeBlock
                code={providerInterface}
                lang="typescript"
                caption="provider.interface.ts"
                className="ring-gradient"
              />
            </div>
          </div>

          {/* Row 2: Bring your own (Code Left, Text Right on desktop) */}
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="scroll-reveal order-2 min-w-0 lg:order-1">
              <CodeBlock
                code={customProviderExample}
                lang="typescript"
                caption="provider.example.ts"
                className="ring-gradient"
              />
            </div>

            <div className="scroll-reveal order-1 flex min-w-0 items-start gap-4 lg:order-2 lg:flex-row-reverse lg:text-right">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-50 to-sky-50 text-primary ring-1 ring-inset ring-primary/15">
                <Plug className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  Bring your own
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Implement the{" "}
                  <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
                    LyricsProvider
                  </code>{" "}
                  interface and pass it to the client. Combine multiple
                  providers for resilient fallback.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl items-center gap-3 rounded-2xl border border-dashed border-primary/25 bg-rose-50/30 p-5 scroll-reveal">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose-100 to-violet-100 text-primary ring-1 ring-inset ring-primary/15">
            <Boxes className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-foreground/90">
              The same pattern powers caching. Implement{" "}
              <code className="rounded-md bg-background/80 px-1.5 py-0.5 font-mono text-[0.85em] ring-1 ring-inset ring-border">
                CacheAdapter
              </code>{" "}
              for disk, memory, or any remote store.
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Pluggable by design. No vendor lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
