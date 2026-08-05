import { Terminal } from "lucide-react";
import { CodeBlock } from "@/components/code/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { codeSamples } from "@/data/code-samples";
import { SectionHeading } from "./SectionHeading";

export function CodePreview() {
  return (
    <section
      id="examples"
      className="relative scroll-mt-24 overflow-hidden border-y border-border/60 bg-muted/20 py-20 md:py-28"
    >
      {/* Aurora glow behind */}
      <div className="pointer-events-none absolute inset-0 -z-10 aurora-glow opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-radial opacity-30" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Examples"
          title="Get going in seconds"
          description="Three snippets that cover the happy path: plain lyrics, AI translation, and synced lyrics with timestamps."
          className="mx-auto mb-14 scroll-reveal"
        />

        <div className="relative mx-auto max-w-3xl scroll-reveal">
          {/* Glow behind tabs */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-rose-300/40 via-violet-300/40 to-sky-300/40 blur-3xl" />

          <Tabs
            defaultValue={codeSamples[0].id}
            className="flex flex-col items-center"
          >
            <TabsList className="mb-6 px-1.5 py-1.5">
              {codeSamples.map((s) => (
                <TabsTrigger key={s.id} value={s.id}>
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {codeSamples.map((s) => (
              <TabsContent key={s.id} value={s.id} className="w-full">
                <CodeBlock
                  code={s.code}
                  lang={s.lang}
                  caption={s.caption}
                  className="w-full ring-gradient shadow-elevated"
                />
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5" />
            <span>
              Run any snippet in Node 18+. No extra setup, no transpile step.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
