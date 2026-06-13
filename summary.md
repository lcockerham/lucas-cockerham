# lucascockerham.com — Project Summary

Personal professional website for Lucas Cockerham, Director of Engineering.
Last verified working: 2026-06-12.

## Architecture

- **Stack:** Astro (static output) + Tailwind CSS v4
- **Platform:** Cloudflare Workers + static assets
- **Worker name:** `lucas-cockerham`
- **Account ID:** `b4ea0223b90bf66e759dedecd0ce0aaf`
- **Live domain:** https://lucascockerham.com
- **Workers.dev URL:** https://lucas-cockerham.lcockerham.workers.dev
- **GitHub repo:** https://github.com/lcockerham/lucas-cockerham
- **Dashboard:** https://dash.cloudflare.com/b4ea0223b90bf66e759dedecd0ce0aaf/workers/services/view/lucas-cockerham/production

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` — hero, core competencies |
| `/about` | `src/pages/about.astro` — bio, education, certs, skills |
| `/experience` | `src/pages/experience.astro` — work history, ventures |
| `/contact` | `src/pages/contact.astro` — LinkedIn + GitHub links |

Shared layout: `src/layouts/BaseLayout.astro` (nav, footer, Google Fonts).

## How a deploy works

Push to `master` → Workers Builds runs two commands:

1. **Build command:** `npm run build` → Astro generates static site into `./dist`
2. **Deploy command:** `npx wrangler deploy` → uploads `./dist` and promotes to production

Build trigger config (Settings → Build):

| Trigger | Branch | Build command | Deploy command |
|---|---|---|---|
| Production | `master` | `npm run build` | `npx wrangler deploy` |
| Non-production | `*` except `master` | `npm run build` | `npx wrangler versions upload` |

## Manual deploy (if CI is broken)

```powershell
npm run build
npx wrangler deploy
```

If wrangler isn't authenticated: `npx wrangler login` first (opens browser).

## Domain

`lucascockerham.com` is registered through Cloudflare Registrar — DNS is automatic.
Custom domain is wired directly to the Worker (Settings → Domains).
Update `astro.config.mjs` → `site` if the domain ever changes.

## Headshot

`public/lucas-cockerham.jpg` — compressed from original 15MB RAW to ~160KB JPEG (800×1200).
Homepage hero uses `object-top` to keep the full head visible in the circular crop.

## Origin

Rebuilt from the Replit-hosted site at `lucas-cockerham.replit.app` to eliminate the
monthly Replit fee. Same tech stack as `the-giantsbane` (same Cloudflare account).
