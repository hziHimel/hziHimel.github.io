# hzihimel.github.io

Personal academic site of Hasan Zohirul Islam (Himel), built with [Astro](https://astro.build).

## Edit content

Almost all text lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, links, bio stats, research interests, news |
| `publications.ts` | Papers, BibTeX, in-preparation work |
| `experience.ts` | Jobs, education, skills |
| `projects.ts` | Project cards (add `image` to show a picture) |
| `awards.ts` | Honors and competitions |
| `beyond.ts` | Hobbies and leadership |

The longer bio paragraphs are in `src/pages/index.astro`, and the thesis summary is in `src/pages/research.astro`.
Replace `public/cv.pdf` to update the CV. Put new images in `src/assets/`; Astro optimizes them at build time.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: in the repository on GitHub, open Settings → Pages and set **Source** to **GitHub Actions**.
