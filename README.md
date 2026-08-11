# Personal Website

Single-page personal site — Next.js 15 (App Router), TypeScript, Tailwind CSS v4.
Statically prerendered, no CMS, no database, no UI library.

## Running

Requires Node 18.18+ (20 LTS recommended).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Don't run `npm run build` while `npm run dev` is live — they share `.next` and the
build clobbers the dev chunks. If you see `Cannot find module './xxx.js'`, that's
why: `rm -rf .next` and restart.

## Structure

```
app/
  page.tsx          Hero → Portfolio → Resume → Contact
  layout.tsx        Nav + Footer shell
  globals.css       Theme tokens, keyframes
components/
  Hero.tsx          Headline, intro, waveform backdrop
  Typewriter.tsx    Cycling headline (the only client component)
  Waveform.tsx      Animated EEG-style SVG background
  ProjectCard.tsx   Project card with tags and source badge
  Resume.tsx        Embedded PDF
  Contact.tsx       Social icon row
  Nav.tsx  Footer.tsx  Container.tsx  TagList.tsx  Icons.tsx
content/
  site.ts           Name, headlines, intro, socials, resume path
  projects.ts       Portfolio entries
  tags.ts           Tag color map
public/
  jacob-quion-resume.pdf
```

## Editing content

Everything editable lives in `content/` — no JSX required.

- **Bio** — `site.ts`. The `intro` string supports two markers: `*` renders a
  superscript, and `[bracketed text]` becomes a link to `introLink`.
- **Headlines** — `site.headlines` cycles in the typewriter. The CSS assumes
  three; the delay math adapts, but the visible window in `globals.css` is tuned
  for that count.
- **Projects** — add an object to `projects`. Set `image: "/file.png"` to replace
  the placeholder thumbnail. `source: "open" | "closed"` drives the badge.
- **Tags** — colors come from an override map in `tags.ts`, falling back to a
  hash of the label so new tags get a stable color automatically.
- **Résumé** — replace `public/jacob-quion-resume.pdf`, or point `site.resume`
  elsewhere.

## Theme

Colors are CSS variables in the `@theme` block of `app/globals.css`. All text
colors are checked against WCAG AA on both the page and card backgrounds.

## Deploying

Import the repo at [vercel.com/new](https://vercel.com/new). Zero config.
Set `site.url` to the real domain first — it powers the Open Graph tags.
