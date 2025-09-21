<!-- Short, actionable instructions to help AI agents work productively in this repo -->
# Indonesia Answer — Copilot Instructions

These notes describe the minimal, actionable knowledge an AI coding assistant needs to be productive in this repository.

## Big picture
- This is a Next.js 14 app (app-router) that renders a small tourism site for Indonesian destinations. Entry points: `src/app/layout.tsx` and `src/app/page.tsx`.
- Data is file-based and synchronous: `src/data/destinations.js` exports a `destinations` array and helper functions (`getDestinationBySlug`, `getFeaturedDestinations`, etc.). No external APIs or databases are used.
- SEO/structured-data helpers live in `src/utils/seo.js` and are used on destination pages to emit JSON-LD (see `src/app/destination/[slug]/page.tsx`). Keep schema shapes consistent with `generateTourismSchema` and `generateFAQSchema`.

## Files & patterns to reference
- Routing / pages: `src/app/` (app-router). Dynamic route: `src/app/destination/[slug]/page.tsx`.
- Global layout & fonts: `src/app/layout.tsx` (imports `../styles/globals.css`, `Navigation`, `Footer`).
- Data model: `src/data/destinations.js` — canonical shape for a destination (id, slug, name, quick_facts, faqs, top_activities, cost_breakdown, coordinates). New destinations must follow this structure so helpers and pages work without changes.
- SEO utilities: `src/utils/seo.js` — reuse `generateMetaTags`, `generateTourismSchema`, and `generateFAQSchema` when adding pages.
- Components: `src/components/` — `Navigation` and `Footer` are used in `layout.tsx` (case-sensitive import paths).

## Conventions and idioms
- Synchronous, in-memory data source: the app expects `destinations` to be immediately importable (no async fetch required). Use exported helpers from `src/data/destinations.js` when reading or filtering data.
- Structured data is intentionally embedded via `<script type="application/ld+json">` and `dangerouslySetInnerHTML` for SEO and AI crawlers — update JSON-LD only using `src/utils/seo.js` helper functions.
- Metadata generation uses Next.js `generateMetadata` in `src/app/destination/[slug]/page.tsx`. Follow that pattern for any new dynamic pages.
- Styling uses Tailwind classes from `src/styles/globals.css` and `tailwind.config.js`. Keep utility-class usage consistent with existing components.

## Build & developer workflows
- Run locally:

```bash
npm run dev
```

- Production build:

```bash
npm run build
npm run start
```

- Linting:

```bash
npm run lint
```

- Notes: `package.json` contains standard Next.js scripts; there are no test scripts in the repository.

## What to change carefully
- Changing the shape of a destination object (e.g., renaming `quick_facts` fields, removing `faqs`) requires updating `src/app/destination/[slug]/page.tsx` and `src/utils/seo.js` which read those fields directly.
- Avoid converting `src/data/destinations.js` into an async data source without updating `generateStaticParams` and page components — they expect sync imports.

## Examples (copyable patterns)
- Use the existing helper for metadata in a new dynamic page:

```js
import { getDestinationBySlug } from '../../data/destinations'
import { generateMetaTags } from '../../utils/seo'

export async function generateMetadata({ params }) {
  const dest = getDestinationBySlug(params.slug)
  return generateMetaTags(`${dest.name} - Indonesia Answer`, dest.description, `/destinations/${dest.slug}`, dest.image)
}
```

- Emit structured data using helpers:

```tsx
import { generateTourismSchema } from '../../utils/seo'
const schema = generateTourismSchema(destination)
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
```

## Integration & external dependencies
- External assets: images use absolute URLs (Unsplash) in `src/data/destinations.js`. Be mindful of CSP or offline dev if switching to local images.
- No server-side services, auth, or third-party backends are present.

## Quick checks an AI should run before committing
1. Import paths are case-sensitive; verify `../components/Navigation` matches the filename in `src/components/`.
2. When adding fields to `destinations`, update `getDestinationBySlug` usages and SEO helpers.
3. Run `npm run build` locally to catch Next.js/TypeScript issues.

---
If anything above is unclear or you want more detail (tests, CI, deployment), tell me which area to expand and I'll update this file.
