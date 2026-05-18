# Abhinav Bohra — Portfolio Website

A modern, minimal portfolio website built with React 18, TypeScript, Tailwind CSS, and Vite. Features a clean design with dark mode support, responsive layout, and comprehensive project showcase.

## Tech Stack

- **React 18** + TypeScript
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v3** — Utility-first styling
- **React Router v6** — HashRouter for GitHub Pages
- **Lucide React** — Minimal icon library
- **@fontsource/inter** — Self-hosted Inter font

## Features

- ✨ Clean, minimal design with generous whitespace
- 🌙 Dark mode with system preference detection
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance (Core Web Vitals optimized)
- 🎨 Indigo accent color, neutral palette
- 🔗 HashRouter for GitHub Pages deployment
- ♿ Semantic HTML, accessible components

## Pages

- **Home** — Profile, bio, interests
- **Experience** — Internship timeline
- **ML Projects** — Research projects with descriptions
- **SDE Projects** — Software projects with screenshot galleries
- **Other Projects** — Academic and misc projects grid
- **Case Studies** — Business case competition entries
- **Skills** — Technical skills, achievements, teaching, coursework

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
Output is in `dist/` folder.

## Project Structure

```
src/
├── App.tsx                 # Routes and layout
├── main.tsx               # Entry point
├── index.css              # Tailwind + Inter font
├── data/                  # Content (profile, projects, skills, etc.)
├── components/
│   ├── layout/           # Header, Footer
│   └── ui/               # Tag, ThemeToggle, ImageSlider
└── pages/                # 7 main pages
public/
├── images/               # Project images, logos
└── files/                # PDF case studies, resume
```

## Deployment

The site uses HashRouter for GitHub Pages compatibility (no server config needed).

### Deploy to GitHub Pages
1. Build: `npm run build`
2. Copy contents of `dist/` to your repository root (or configure repo to serve from a branch)
3. Push to GitHub

The site will be available at `https://your-username.github.io/#/`

## Customization

### Colors
Edit `tailwind.config.js` to change the accent color from indigo to another color (e.g., blue, slate, purple).

### Font
The site uses Inter font from `@fontsource/inter`. To change, install another font package and update `src/index.css`.

### Content
All content lives in `src/data/` as TypeScript objects. Update these files to customize your portfolio.

## License

© 2026 Abhinav Bohra. All rights reserved.
