import * as React from "react";
import { Prism } from "@/lib/prism-init";
import { cn } from "@/lib/utils";
import { CopyButton } from "./CopyButton";

export type Lang = "typescript" | "bash";

const langMap: Record<Lang, string> = {
  typescript: "typescript",
  bash: "bash",
};

function highlight(code: string, lang: Lang): string {
  const grammarName = langMap[lang];
  const grammar = (Prism.languages as Record<string, Prism.Grammar>)[
    grammarName
  ];
  if (!grammar) {
    return escapeHtml(code);
  }
  return Prism.highlight(code, grammar, grammarName);
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function CodeBlock({
  code,
  lang = "typescript",
  caption,
  className,
}: {
  code: string;
  lang?: Lang;
  caption?: string;
  className?: string;
}) {
  const html = React.useMemo(() => highlight(code, lang), [code, lang]);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        {caption ? (
          <span className="ml-1 font-mono text-xs text-muted-foreground">
            {caption}
          </span>
        ) : null}
      </div>
      <div className="relative">
        <div className="absolute right-3 top-3 z-10">
          <CopyButton value={code} />
        </div>
        <pre className="code-host overflow-x-auto p-4">
          <code
            className={`language-${langMap[lang]}`}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: highlighted by prism
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </div>
    </div>
  );
}
