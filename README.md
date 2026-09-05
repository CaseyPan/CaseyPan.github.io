# Casey — Personal Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS, using a "Soft Tech Editorial" visual style.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All personal content lives in one place — no need to touch component code to update copy:

- `src/data/profile.ts` — name, tagline, email, social links, résumé path
- `src/data/experience.ts` — professional roles (has `TODO` placeholders — replace with real, verified details)
- `src/data/projects.ts` — project cards and their `SHIPPED` / `BUILDING` / `EXPLORING` status
- `src/data/impact.ts` — the three homepage "engineering impact" stories
- `src/data/skills.ts` — the technical toolkit, grouped by maturity
- `src/data/exploration.ts` — the "currently exploring" fields
- `src/data/navigation.ts` — header nav items
- `src/content/notes/*.mdx` — engineering notes (Markdown + frontmatter)
- `public/resume.pdf` — replace this placeholder with your real résumé PDF

Search the `src/data` directory for `TODO` to find every field that still needs real information.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build locally
npm run lint      # eslint
npx tsc --noEmit # type-check only
```
