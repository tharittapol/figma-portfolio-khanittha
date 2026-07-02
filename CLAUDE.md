# Portfolio — Khanittha Hemsamak

UX/UI Designer portfolio, rebuilt from the **Port-2026** Figma design
(file `K9cE8R2EIOy6NQgVzVhkEu`). Multi-page site with a reusable design-system component
library and 3 responsive breakpoints.

## Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Routing**: react-router-dom 7 (`BrowserRouter`)
- **Styling**: Tailwind CSS 3 (Simple Design System tokens)
- **Fonts**: Inter (400/500/600/700) + Poppins Bold — Google Fonts in `index.html`
- **Deployment**: Vercel (`vercel.json` → `outputDirectory: dist`, `framework: vite`)

## Responsive breakpoints (Tailwind `screens`, mobile-first)

Matches the 3 designed Figma frame sets:

| Tier | Range | Figma frame | Tailwind |
|------|-------|-------------|----------|
| Mobile | `< 768px` | `Mobile_*` (390) | base |
| Tablet | `≥ 768px` | `iPad_*` (834) | `tablet:` |
| Desktop | `≥ 1280px` | `Desktop-*` (1440) | `desktop:` |

Content max-width is `1120px` centered (`max-w-content`) → yields the Figma 160px desktop gutter.

## Routes

- `/` — Home (Hero, About, Projects, Skills, Process, Contact CTA)
- `/contact` — "Let's Work Together" (profile + message form)
- `/work` — All Projects index
- `/work/:slug` — Case study (`kfc`, `student-attendance`, `rubber-dryer`, `borot`, `gophin`)

Header nav (About/Work/Skills/Process/Contact) smooth-scrolls to home sections; from a
sub-page it navigates to `/#section` (handled by `ScrollToTop.tsx`).

## Project structure

```
src/
  components/
    ui/            — design system: Button, NavigationPill, Tag, Badge, Card,
                     IconButton, Input, Section, SectionLabel, GridBackground,
                     Avatar, ProjectCard, icons.tsx
    layout/        — Header (+ MobileMenu), Footer
    sections/      — Home sections: Hero, About, Projects, Skills, Process, ContactCTA
    ScrollToTop.tsx
  pages/
    Home.tsx, Contact.tsx
    work/ — WorkIndex.tsx, CaseStudy.tsx (data-driven)
  data/
    projects.ts    — 5 projects (cards + routing, single source of truth)
    caseStudies.ts — case-study content (text + exported image blocks)
    profile.ts     — owner contact details
  lib/cn.ts        — className joiner
  App.tsx          — routes ·  main.tsx — BrowserRouter entry ·  index.css — utilities
public/assets/
  home/ projects/ tools/ casestudy/<slug>/   — exported, local (no expiring URLs)
  favicon.svg
```

## Design tokens (Simple Design System → tailwind.config.js)

Colors: bg `#f8f8f6` · dark/brand `#2c2c2c` · surface `#f5f5f5` · text `#1e1e1e` /
secondary `#757575` / tertiary `#b3b3b3` · border `#d9d9d9` / neutral `#767676` /
dark `#383838` · positive `#009951`. Type sizes: `hero` 72 · `title-page` 48 · `heading`
24 · `subheading` 20 · `body` 16 · `body-sm` 14. Radius `sds` 8 / `sds-lg` 16 / `24px`
cards / pill. Shadow `card` (sds Drop Shadow/400). Each project has a brand accent used on
its case-study "Overview" heading.

## Case studies

`caseStudies.ts` holds authored text; complex visual blocks (device mockups, IA trees,
user-flow charts, wireframes, prototype screens, design-system sheets) are **exported PNGs**
in `public/assets/casestudy/<slug>/` for exact Figma fidelity. KFC is the most complete;
BOROT & GOPHIN are marked "in process". To refresh an image, re-export the Figma node and
overwrite the PNG.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build → dist/
npm run preview
```

## Open items for owner

1. **Resume PDF** — `/assets/resume.pdf` is linked (Hero, Footer) but not yet added.
2. **LinkedIn URL** — placeholder `https://www.linkedin.com/` in `src/data/profile.ts`.
3. Contact form is front-end only (opens a `mailto:`); wire a backend if real submissions
   are needed.

## Figma to Web Rules

You are implementing Figma designs into this web project.

Required workflow:
1. Use Figma MCP get_design_context for the exact frame/node link.
2. Use get_screenshot as the visual reference.
3. Use get_variable_defs for colors, spacing, radius, and typography.
4. Download/use Figma assets when provided. Do not replace with random icons/images.
5. Match the Figma design as closely as possible: layout, spacing, font size, color, radius, shadows, alignment.
6. Reuse existing components from src/components when possible.
7. Use responsive CSS. Match desktop and mobile frames separately.
8. After implementation, run the app locally and compare the browser screenshot with the Figma screenshot.
9. Fix visual differences until close to pixel-perfect.
10. Do not create placeholder UI if real Figma assets exist.