# Cannabis Clinic UK Website

A Vite + React pharmacy website concept built for a modern private pharmacy and wellness brand. The site combines an elegant editorial layout with smooth Framer Motion section transitions and covers:

- prescriptions and repeat support
- same-day consultations
- travel vaccines and prevention
- blood testing and wellness screening
- medical cannabis pathways for THC and CBD-based care
- medical information and FAQs

## Stack

- React 18
- TypeScript
- Vite
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build output is generated in `dist/`.

## Vercel

This repo includes a `vercel.json` file, so Vercel should detect the project cleanly.

Recommended settings:

- Framework: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Project structure

```text
src/
  App.tsx
  main.tsx
  styles.css
public/
  favicon.svg
```

## Notes

- Local secrets in `.env` are ignored by git.
- This project is ready to import directly into Vercel from GitHub.
