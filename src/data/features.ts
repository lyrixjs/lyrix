import {
  Code,
  Database,
  Languages,
  type LucideIcon,
  Music4,
  Plug,
  Timer,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Plug,
    title: "Multi-provider",
    description:
      "Query multiple lyrics sources with automatic fallback. LRCLIB included out of the box. Bring your own providers in seconds.",
  },
  {
    icon: Music4,
    title: "Lyrics & metadata",
    description:
      "Resolve track metadata by title, artist, ISRC, or URL, then fetch plain or synced lyrics in a single call.",
  },
  {
    icon: Languages,
    title: "AI translation",
    description:
      "Translate lyrics into any language using OpenAI-compatible models. Timestamps are preserved across translation.",
  },
  {
    icon: Database,
    title: "Pluggable caching",
    description:
      "Ship with on-disk and in-memory caches, or implement the CacheAdapter interface to bring your own storage.",
  },
  {
    icon: Timer,
    title: "Synced lyrics",
    description:
      "Request timestamped lines for karaoke-grade playback. Translation keeps the original timing automatically.",
  },
  {
    icon: Code,
    title: "TypeScript-first",
    description:
      "Fully typed with .d.ts declarations included. Autocomplete and type-safety from install to production.",
  },
];
