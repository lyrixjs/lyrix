# lyrix

Marketing website for [lyrix-js](https://github.com/lyrixjs/lyrix-js): multi-provider lyrics retrieval with AI translation.

Built with **React + Vite**, **Tailwind CSS**, **shadcn/ui** patterns, **Biome**, and the **Satoshi** typeface.

## Development

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server |
| `pnpm build` | Typecheck + production build to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run Biome lint |
| `pnpm format` | Format the codebase with Biome |
| `pnpm check` | Run Biome check (lint + format) |
| `pnpm typecheck` | Run `tsc --noEmit` |

## Deployment

The site deploys automatically to **GitHub Pages** at
<https://lyrixjs.github.io/lyrix/> via the `.github/workflows/deploy.yml`
workflow on every push to `main`.

The Vite `base` is set to `/lyrix/`.

## License

MIT © 2026 Debangshu Das