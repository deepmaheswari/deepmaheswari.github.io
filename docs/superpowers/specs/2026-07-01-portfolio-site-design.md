# Portfolio Website — Design Spec

**Date:** 2026-07-01
**Owner:** Deepkumar Maheswari

## Purpose

A personal portfolio website for Deepkumar Maheswari, a Full-Stack Developer / HMI Engineer, hosted for free on GitHub Pages at `https://deepmaheswari.github.io`. The site showcases his resume content (experience, skills, projects, education, awards) with a dark, technical, HMI-inspired visual style and a 3D hero element that reflects his Three.js/React Three Fiber specialty. It must be easy to extend with new projects over time.

## Tech Stack

- **React + Vite + TypeScript** — fast dev/build, matches resume's core stack.
- **React Three Fiber + Three.js** — 3D hero element.
- **Framer Motion** — scroll/entry animations for 2D sections.
- **Plain CSS (CSS Modules or a single design-tokens stylesheet)** — no heavy UI framework, keeps bundle small and the look custom rather than templated.
- **GitHub Actions** — builds the Vite app and deploys `dist/` to GitHub Pages on every push to `main`.

## Repository & Hosting

- Repo name: **`deepmaheswari.github.io`** (user site — required exact name for GitHub Pages to serve it at the root domain with no sub-path).
- Deployment: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds with Vite and publishes to the `gh-pages` environment via `actions/deploy-pages`. No manual `gh-pages` branch pushing needed.
- Vite `base` set to `/` (root site, not a project subpath).

## Visual Style

- **Dark theme**: near-black background (`#0a0e14`-ish), off-white text.
- Accent color: cyan/teal glow (`#22d3ee` family) for links, highlights, section markers — evokes HMI panel/industrial UI aesthetic.
- Subtle background texture: faint grid or circuit-line pattern (CSS background, low opacity) rather than a busy image.
- Typography: a clean sans-serif for body (e.g. Inter) + a monospace accent font (e.g. JetBrains Mono) used sparingly for labels/tags/section numbers to reinforce the technical feel.
- Section markers styled like HMI status labels (e.g. `// 01 — About`).

## Sections (single-page scroll, sticky nav)

1. **Hero**
   - Name, title line ("Full-Stack Developer & HMI Engineer"), one-line summary.
   - 3D React Three Fiber scene as a visual centerpiece: an abstract rotating geometric object (e.g. wireframe icosahedron / distorted torus with a subtle glow shader) that reacts gently to mouse movement. Kept abstract (not a literal robot model) to stay lightweight and avoid needing 3D asset files.
   - CTA buttons: "Download Resume" (links to the PDF in `/public`), "Contact Me" (scrolls to contact section).
   - Profile photo used here or in About (see About section) — cropped/treated to fit the dark theme (e.g. duotone or simple circular frame with cyan border glow).

2. **About**
   - Resume summary paragraph, condensed for web readability.
   - Education block: ASU MS Information Technology (GPA 3.9, 05/2026) and Kadi Sarva Vishwavidyalaya B.E. Computer Engineering (GPA 3.55, 06/2024).
   - Callout badge for "The Tech Whisperer Award".
   - Profile photo displayed here if not used in Hero.

3. **Skills**
   - Four category groups exactly matching resume structure: Languages & Frontend, HMI & Graphics, Hardware & Connectivity, Practices & Soft Skills.
   - Rendered as tag/pill grids grouped under each category heading.

4. **Experience**
   - Vertical timeline, two entries: Aramark (Analyst/Software Analyst, 08/2025–05/2026) and devx AI Labs (Software Engineer Intern, 01/2024–07/2024).
   - Each entry: role, company, dates, bullet achievements from resume (kept verbatim/close to source for credibility).

5. **Projects**
   - Card grid sourced from `src/data/projects.ts` — a single exported array of project objects (`{ title, description, bullets, tags, links? }`).
   - Seeded with the 3 resume projects: Industrial HMI & Touch-Based Control Interface, 3D Animation & Robotics Visualization Engine, IoT Device Communication & Network Security Platform.
   - Adding a future project = appending one object to the array; no other code changes required. Card layout auto-flows for any array length.

6. **Certifications / Awards**
   - Simple list/badges: AWS Cloud Practitioner (Certificate), AWS Data Engineering (Badge), The Tech Whisperer Award (Aramark).

7. **Contact / Footer**
   - Email (`dmaheswa@asu.edu`), LinkedIn (`linkedin.com/in/deepmaheswari1`), GitHub (`github.com/deepmaheswari`), phone optional.
   - Footer with copyright line.

## Data Flow / Content Source

- All resume-derived text (summary, experience bullets, skills, education, certifications) lives in typed TypeScript data files under `src/data/` (`experience.ts`, `skills.ts`, `projects.ts`, `certifications.ts`), imported into presentational section components. This keeps content edits (e.g. updating a bullet point, adding a project) isolated from layout/styling code.
- Static assets (resume PDF, profile photo) live in `public/` and are referenced by root-relative paths (`/resume.pdf`, `/profile-photo.jpg`) so they work correctly under GitHub Pages' root-site hosting.

## Component Structure (high level)

```
src/
  components/
    Nav.tsx
    Hero.tsx
    HeroScene.tsx        (R3F canvas + abstract 3D object)
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    ProjectCard.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx
  data/
    experience.ts
    skills.ts
    projects.ts
    certifications.ts
  App.tsx
  main.tsx
  index.css              (design tokens: colors, fonts, spacing vars)
public/
  resume.pdf
  profile-photo.jpg
.github/workflows/deploy.yml
```

Each section component takes no props (reads from its corresponding data file directly) except `ProjectCard`, which takes one project object — keeping sections independently understandable and the Projects section trivially extensible.

## Error Handling / Edge Cases

- No backend, no forms with server submission — contact is via `mailto:` and external profile links, so there's no server error handling surface.
- 3D scene: wrap `HeroScene` in a minimal check that falls back to a static gradient div if WebGL isn't available (rare, but avoids a blank hero on unsupported browsers).
- Images (resume PDF, photo) served from `public/`, so a missing file is a build-time-visible 404 rather than a silent runtime failure.

## Testing / Verification

- `npm run build` must succeed locally before pushing (catches TS errors).
- Manual verification: `npm run dev`, check all 7 sections render, nav scroll-links work, resume download works, 3D hero renders and doesn't tank performance (target smooth on a mid-range laptop, no crash on mobile Safari/Chrome).
- After deploy: visit `https://deepmaheswari.github.io` and confirm live site matches local dev.

## Out of Scope (for this iteration)

- CMS or admin UI for editing content — data files are edited directly by hand.
- Blog/articles section.
- Contact form with backend/email service — using `mailto:` link only.
- Multi-page routing — single-page scroll site only.
