export interface CodeSample {
  id: string;
  label: string;
  caption: string;
  lang: "typescript" | "bash";
  code: string;
}

export const installCommand = "npm install lyrix-js";

export const codeSamples: CodeSample[] = [
  {
    id: "quick-start",
    label: "Quick Start",
    caption: "quick-start.ts",
    lang: "typescript",
    code: `import { LyrixClient, lrclibProvider } from "lyrix-js";

const client = new LyrixClient({
  providers: [lrclibProvider],
  cache: true,
});

const { lyrics } = await client.getLyrics({
  trackName: "Perfect",
  artistName: "Ed Sheeran",
});

console.log(lyrics.join("\\n"));`,
  },
  {
    id: "translation",
    label: "Translation",
    caption: "translation.ts",
    lang: "typescript",
    code: `const result = await client.getLyrics(
  { trackName: "Usseewa", artistName: "Ado" },
  {
    translateTo: "English",
    translation: {
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-4o",
    },
  }
);

// Original
console.log(result.lyrics.join("\\n"));

// Translated
console.log(result.translatedLyrics!.join("\\n"));`,
  },
  {
    id: "synced",
    label: "Synced Lyrics",
    caption: "synced.ts",
    lang: "typescript",
    code: `const result = await client.getLyrics(
  { trackName: "Blinding Lights", artistName: "The Weeknd" },
  { sync: true }
);

for (const line of result.syncedLyrics!) {
  console.log(\`[\${line.startTime}s] \${line.text}\`);
}`,
  },
];

export const providerInterface = `interface LyricsProvider {
  name: string;
  fetchLyrics(
    metadata: TrackMetadata,
    options?: LyricsOptions
  ): Promise<LyricsResult | null>;
}`;

export const customProviderExample = `const myProvider: LyricsProvider = {
  name: "my-service",
  async fetchLyrics(metadata, options) {
    // fetch lyrics from your source
    return {
      track: metadata,
      lyricsProvider: this.name,
      lyrics: ["line 1", "line 2"],
    };
  },
};

const client = new LyrixClient({
  providers: [myProvider, lrclibProvider],
});`;
