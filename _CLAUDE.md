# CLAUDE.md — AI Assistant Guide for MammadyarJvd.github.io

This file provides context for AI assistants working on this repository.

## Project Overview

A static personal portfolio website for **Mammadyar Javadlı**, an OSCP & BSCP certified
Penetration Tester and AppSec Engineer. The site is hosted on GitHub Pages with the custom
domain `closecall.dev` (configured via `CNAME`).

**Technology:** Pure vanilla HTML5, CSS3, and JavaScript — no frameworks, no build tools,
no package manager, no dependencies.

## File Structure

```
/
├── index.html    # Single-page layout (107 lines) — the entire site
├── style.css     # All styles (302 lines)
├── scripts.js    # All JavaScript (48 lines)
├── CNAME         # Custom domain: closecall.dev
└── README.md     # Minimal placeholder
```

## Known Issues

- **Script filename mismatch:** `index.html` references `script.js` (line 105) but the actual
  file is named `scripts.js`. JavaScript does not load until this is corrected.
- **Unused CSS class:** `.glitch-text` is applied to the `<h1>` in `index.html` but has no
  corresponding CSS rule.
- **Placeholder blog links:** All blog card "Read Entry_" links point to `#` — no actual
  articles exist yet.

## Deployment

There is no build process. Changes pushed to the `master` branch are served directly by
GitHub Pages. No compilation, bundling, or transpilation steps are needed.

To preview locally, serve the repo root with any static file server, e.g.:
```
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## CSS Conventions

All CSS variables are defined at `:root` in `style.css`. Always use these variables instead
of hardcoded values:

| Variable         | Value                                | Usage                        |
|------------------|--------------------------------------|------------------------------|
| `--bg-color`     | `#0a0a0a`                            | Main page background         |
| `--card-bg`      | `#141414`                            | Cards, footer section bg     |
| `--text-main`    | `#ffffff`                            | Primary text                 |
| `--text-muted`   | `#a0a0a0`                            | Secondary/subdued text       |
| `--accent`       | `#ff6b00`                            | Orange accent (primary CTA)  |
| `--accent-hover` | `#e65100`                            | Darker orange on hover       |
| `--font-mono`    | `'Courier New', Courier, monospace`  | Code/hacker aesthetic text   |
| `--font-sans`    | `'Helvetica Neue', Helvetica, Arial` | Body/prose text              |

**Responsive breakpoint:** `@media (max-width: 768px)` — one breakpoint only.

**Transition standard:** `0.3s ease` for hover animations.

## HTML Conventions

The site is a single `index.html` with four logical sections using anchor IDs:

| ID        | Role                          |
|-----------|-------------------------------|
| `#home`   | Hero / landing section        |
| `#blog`   | Blog card grid                |
| `#contact` | Contact links + footer       |

- The fixed navbar uses `.navbar` and links to these section anchors.
- Blog posts are `<article class="card">` elements inside `.blog-grid`.
- Section headings use `.section-header` with an `<h3>` and a decorative `.line` div.
- Certification badges use `<span class="badge">` inside `.badges`.

## JavaScript Conventions

`scripts.js` runs a single `DOMContentLoaded` listener containing three features:

1. **Dynamic year** — writes `new Date().getFullYear()` into `#year` in the footer.
2. **Typewriter effect** — clears `.bio` text content on load and re-types it character by
   character at 20 ms/char with a 500 ms initial delay.
3. **Smooth scroll with offset** — intercepts all `a[href^="#"]` clicks and applies an 80 px
   offset to account for the fixed navbar height.

Keep JavaScript minimal and vanilla. Do not introduce frameworks or npm dependencies.

## Design Aesthetic

The site intentionally uses a **dark, hacker/terminal aesthetic**:
- Near-black backgrounds with orange `#ff6b00` as the sole accent color.
- Monospace font (`--font-mono`) for UI labels, badges, tags, logos, and code-style text.
- Sans-serif (`--font-sans`) for body copy only.
- All borders use `#222` or `#333` at rest, transitioning to `--accent` on hover.
- Hover interactions use `translateY(-5px)` lifts on cards.
- No images — the site is entirely text-based.
- Left-aligned hero content (not centered).

Do not introduce light themes, color changes, or fonts that break this aesthetic.

## Content Sections

**Hero:** Name, role ("Penetration Tester & AppSec Engineer"), certification badges (OSCP,
BSCP), bio text, and a "Get in Touch" CTA button.

**Blog:** Three placeholder article cards — Cloud Security, Operations, AppSec. Each has a
`.tag`, `<h4>` title, `<p>` description, and a "Read Entry_" link.

**Contact:** Email (`mammadyarjavadli@gmail.com`) and LinkedIn
(`linkedin.com/in/mammadyarjavadli`), plus a footer with dynamic copyright year.

## Git Workflow

- The production branch is `master` — pushes here deploy to GitHub Pages automatically.
- AI-assisted changes should be made on a `claude/...` branch and pushed there.
- There are no pre-commit hooks, linters, or CI pipelines configured.
- Commit messages should be descriptive (e.g., `Fix script.js filename reference in index.html`).
