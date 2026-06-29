# Deep Platform Notes

A personal technical website built from [Astro Micro](https://github.com/trevortylerlee/astro-micro) for long-running engineering writing.

It is set up for:

- AI drug discovery platform engineering notes
- RDKit and PostgreSQL technical posts
- Personal project write-ups
- Online resume
- MDX, Tailwind CSS, Pagefind search, Giscus comments, RSS, sitemap, and Vercel deployment

## Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Content

- Blog posts live in `src/content/posts`.
- Projects live in `src/content/portfolio`.
- Site metadata lives in `src/consts.ts`.
- The online resume page is `src/pages/resume.astro`.

## Deployment

Deploy to Vercel with the included `vercel.json`.

Set `SITE` to your production origin, for example:

```sh
SITE=https://your-domain.com
```

To enable Giscus comments, add these public environment variables in Vercel:

```sh
PUBLIC_GISCUS_REPO=owner/repo
PUBLIC_GISCUS_REPO_ID=...
PUBLIC_GISCUS_CATEGORY=Announcements
PUBLIC_GISCUS_CATEGORY_ID=...
PUBLIC_GISCUS_LANG=zh-CN
```
