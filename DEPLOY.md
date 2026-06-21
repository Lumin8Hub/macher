# GitHub Pages Deploy

This project ships a separate static SPA build for GitHub Pages alongside the
TanStack Start build used by the Lovable preview / production deploy.

## How it works

- `vite.gh-pages.config.ts` — standalone Vite config that bundles
  `src/gh-pages-entry.tsx` as a plain SPA (no SSR, no server functions).
- `gh-pages/index.html` — entry HTML for the static build.
- `src/gh-pages-entry.tsx` — mounts the same React components used by the
  TanStack Start route at `/`, so both builds render identical UI.
- `scripts/fetch-lovable-assets.mjs` — downloads Lovable-hosted asset
  binaries described by `src/assets/*.asset.json` into
  `.lovable-asset-cache/` so they can be bundled with content hashes.
- `.github/workflows/deploy.yml` — builds and publishes to GitHub Pages on
  every push to `main`.

The signup form posts directly to Lovable Cloud (Supabase) via the
publishable key + an `INSERT`-only RLS policy on `email_signups`, so it
works on both the Lovable preview and GitHub Pages with no server.

## One-time GitHub setup

1. Push the project to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. (Optional) If your repo lives at a custom domain or is a user/org site
   (`<user>.github.io`), the workflow detects it and uses `/` as the base.
   Otherwise the base is `/<repo>/`.

The Supabase publishable URL/key are public values and are baked into the
workflow as defaults; override them via repo `Variables` if needed
(`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`).

## Local preview of the static build

```sh
node scripts/fetch-lovable-assets.mjs
BASE_PATH=/ bunx vite build --config vite.gh-pages.config.ts
bunx serve dist-gh-pages
```
