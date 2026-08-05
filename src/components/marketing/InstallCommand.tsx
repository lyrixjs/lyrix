import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { installCommand } from "@/data/code-samples";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = installCommand;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        // ignore
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="group relative mx-auto flex w-full max-w-sm items-center justify-between gap-3 rounded-2xl ring-gradient px-4 py-3 shadow-soft transition-all hover:shadow-elevated"
      aria-label={`Copy install command: ${installCommand}`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground font-mono text-xs">
          $
        </span>
        <code className="truncate font-mono text-sm text-foreground md:text-[0.95rem]">
          {installCommand}
        </code>
      </div>
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </span>
    </button>
  );
}
