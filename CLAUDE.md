# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Pedro Almeida's personal portfolio website - a static marketing site showcasing professional work, LinkedIn content, and open-source contributions. Built with React Page Lite (a static site generator with islands architecture) and deployed via GitHub Pages.

**Key characteristics:**
- Static-first: All pages are pre-rendered HTML for optimal SEO and performance
- Output directory: `docs/` (configured for GitHub Pages deployment)
- No server-side logic or authentication needed
- Islands architecture available but currently unused (all components are static)

## Commands

### Development
- `npm run buildAndWatch` - Start development with file watching and auto-rebuild (recommended for active development)
- `node _internal/build.js` - One-time build without watch mode
- `npm run update-template` - Update internal React Page Lite build system (safe, never touches src/)

### Configuration
- **`config.json`**: Build configuration
  - `outputDir`: Set to `"docs"` for GitHub Pages deployment
  - `buildOptions.minify`: Minifies output (currently `true`)
  - `buildOptions.sourcemap`: Generate sourcemaps (currently `false`)

### Build Process
On file changes, the build automatically:
1. Compiles Tailwind CSS to `docs/styles.css` (purged based on src/ usage)
2. Auto-discovers components in `src/components/` and generates `docs/islandRender.js`
3. Renders all pages from `src/pages/` to static HTML in `docs/`

## Site Structure

### Pages (`src/pages/`)
- `index.tsx` - Homepage with hero, bento grid, and footer
- `about.tsx` - About page with professional background
- `insights.tsx` - LinkedIn posts showcase (WIP)
- `open-source.tsx` - Open source contributions page

All pages must export a default function returning a complete `<html>` document.

### Components (`src/components/`)
All components are currently **static** (no client-side JavaScript):
- `Header.tsx` - Navigation bar with logo and links
- `Hero.tsx` - Hero section with CTAs and social proof
- `BentoGrid.tsx` - Feature grid showcasing skills/projects
- `Footer.tsx` - Footer with links and contact info
- `LinkedinPostCard.tsx` - Card component for displaying LinkedIn posts (empty file, WIP)

### Data (`src/data/`)
- `linkedinPosts.tsx` - Structured data for LinkedIn posts with title, URL, tags, and dates
  - Type: `LinkedinPostsItem[]` with fields: `title`, `url`, `tags`, `createdAt`
  - Tags include: AI, Career, SaaS, Open Source, Code, etc.

### Styling
- Tailwind CSS with `@tailwindcss/typography` plugin
- Custom color scheme defined in `tailwind.config.js`:
  - `primary`: #4DFFA5 (bright green)
  - `secondary`: #C4F0FF (light blue)
  - `accent`: #FFE975 (yellow)
  - `background`: #030712 (dark)
- Scans `src/**/*` for used classes and purges unused ones

## Content Management

### Adding LinkedIn Posts
Edit `src/data/linkedinPosts.tsx` to add new posts to the `linkedinPostList` array:
```typescript
{
  title: "Your Post Title",
  url: "https://www.linkedin.com/...",
  tags: ["AI", "Code"], // Available tags defined in LinkedinPostTags type
  createdAt: new Date("2026-1-26")
}
```

### Adding New Pages
1. Create `.tsx` file in `src/pages/` (e.g., `blog.tsx` → `docs/blog.html`)
2. Export default function returning complete `<html>` document
3. Include stylesheet: `<link rel="stylesheet" href="./styles.css" />`
4. Import and use existing components from `@/components/`

### Modifying Components
All current components are static (no client-side JavaScript). To add interactivity:
1. Wrap component with `<Island>` in the page file
2. Add interactive React hooks (useState, useEffect, etc.) to the component
3. Component will automatically hydrate on the client

## React Page Lite Framework Details

### Islands Architecture (Currently Unused)
This site is built on React Page Lite, which supports islands architecture for selective client-side interactivity:

**Island Component** (`_internal/components/Island.tsx`):
- Wrap any component with `<Island>` to make it interactive
- Props are automatically serialized for client-side hydration
- Multiple instances of the same component are supported

**Usage example:**
```tsx
import { Island } from "@/Island";
import { Counter } from "@/components/Counter";

<Island>
  <Counter initialValue={0} />
</Island>
```

### Build System Architecture
- **Page Generation**: `_internal/generateShell.tsx` renders pages to static HTML
- **CSS Processing**: Tailwind with automatic purging via `nodemon.json`
- **Component Bundling**: esbuild bundles all components into `docs/islandRender.js`
- **File Watching**: nodemon watches `src/` for changes and rebuilds automatically
- **Auto-Discovery**: All components in `src/components/` are automatically discovered and bundled

### TypeScript Configuration
- **Path Mappings**:
  - `@/components/*` → `src/components/*`
  - `@/Island` → `_internal/components/Island`
  - `@/*` → `src/*`
- **JSX**: React 19 with automatic JSX transform
- **Module System**: ESNext with Node resolution

### Framework Updates
To update the React Page Lite build system:
```bash
npm run update-template
```

**Safe updates:**
- `_internal/` - entire build system
- Config files (`tailwind.config.js`, `tsconfig.json`, `nodemon.json`)

**Never touched:**
- `src/pages/`, `src/components/`, `src/data/` - all content files
- `docs/` - build output
