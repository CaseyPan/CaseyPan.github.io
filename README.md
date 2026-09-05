# caseypan.github.io

This is the source for **[caseypan.github.io](https://caseypan.github.io/)** — my personal website. It's where I put my work history, projects, and notes as I grow from a systems-focused software engineer into applied ML and AI infrastructure.

Built with Next.js (App Router), TypeScript, and Tailwind CSS in a "Soft Tech Editorial" visual style, and deployed as a static export via GitHub Pages + GitHub Actions.

## What's on the site

- **Home** — intro, selected engineering impact, featured projects, current learning focus
- **Experience** — professional roles, MediaTek / Zillow / AWS
- **Projects** — shipped systems work plus independent ML/AI projects, each labeled with a real status
- **Notes** — short engineering write-ups (some marked as sample/demo content)
- **About** — background, what I'm working on, how to reach me

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All personal content lives in one place — no need to touch component code to update copy:

- `src/data/profile.ts` — name, tagline, email, social links, résumé path
- `src/data/experience.ts` — professional roles
- `src/data/projects.ts` — project cards and their `SHIPPED` / `BUILDING` / `EXPLORING` status
- `src/data/impact.ts` — the three homepage "engineering impact" stories
- `src/data/skills.ts` — the technical toolkit, grouped by maturity
- `src/data/exploration.ts` — the "currently exploring" fields
- `src/data/education.ts` — schools and degrees
- `src/data/navigation.ts` — header nav items
- `src/content/notes/*.mdx` — engineering notes (Markdown + frontmatter)
- `public/resume.pdf` — auto-generated from résumé content; see below to regenerate
- `public/images/casey-portrait.png` — the portrait shown on Home and About

Search the `src/data` directory for `TODO` to find fields that still need real information (mainly: GitHub links for a few projects, and the "currently reading" field).

## Deployment

Pushing to the `site` branch triggers `.github/workflows/deploy.yml`, which builds the static export (`next build` with `output: "export"`) and publishes it to GitHub Pages. No manual deploy step needed.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build (static export to ./out)
npm run start    # run the production build locally
npm run lint      # eslint
npx tsc --noEmit # type-check only
```
