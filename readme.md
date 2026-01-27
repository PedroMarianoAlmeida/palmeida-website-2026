# Pedro Almeida's Portfolio Website

My personal portfolio showcasing professional work, LinkedIn content, and open-source contributions. Built with React Page Lite and deployed via GitHub Pages.

## 🌐 Live Site

Visit via [GitHub Pages](https://pedromarianoalmeida.github.io/palmeida-website-2026/)

## 📋 About This Project

This is a static-first marketing site featuring:
- **Homepage**: Hero section with CTAs, bento grid showcasing projects and skills
- **About Page**: Professional background and experience
- **Insights Page**: Curated LinkedIn posts with filtering by topic
- **Open Source Page**: Contributions and projects

All pages are pre-rendered to static HTML for optimal SEO and performance.

## 🛠️ Built With React Page Lite

This site is built using **React Page Lite**, a lightweight static site generator with islands architecture that I created.

**Why I built it:**
- Static-first approach for optimal SEO and performance
- Islands architecture for selective interactivity when needed
- Simple TypeScript + Tailwind + React setup with zero config
- Perfect for marketing sites and portfolios

**Want to try it?** You can scaffold a new project in seconds:

```bash
npx react-page-lite my-app
cd my-app
npm run buildAndWatch
```

Learn more: [React Page Lite on GitHub](https://github.com/PedroMarianoAlmeida/react-page-lite)

## 🏗️ Project Structure

```
src/
├── pages/              # Site pages
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── insights.tsx    # LinkedIn posts showcase
│   └── open-source.tsx # Open source contributions
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Hero section
│   ├── BentoGrid.tsx   # Feature grid
│   ├── Footer.tsx      # Footer
│   ├── SearchableContentWithFilter.tsx  # Interactive filtering
│   └── LinkedinPostCard.tsx             # Post card component
└── data/
    └── linkedinPosts.tsx  # LinkedIn post data

docs/                   # Build output (GitHub Pages)
```

## 🚀 Development

**Start development server:**
```bash
npm run buildAndWatch
```

This watches for file changes and automatically:
1. Compiles Tailwind CSS with purging
2. Auto-discovers and bundles components
3. Renders pages to static HTML

**One-time build:**
```bash
node _internal/build.js
```

## 🎨 Design System

Custom color scheme defined in `tailwind.config.js`:
- **Primary**: `#4DFFA5` (bright green) - CTAs and highlights
- **Secondary**: `#C4F0FF` (light blue) - Accents
- **Accent**: `#FFE975` (yellow) - Social proof elements
- **Background**: `#030712` (dark) - Base background

Uses Tailwind CSS with `@tailwindcss/typography` plugin.

## 📝 Content Management

### Adding LinkedIn Posts

Edit `src/data/linkedinPosts.tsx`:

```typescript
{
  title: "Your Post Title",
  url: "https://www.linkedin.com/...",
  tags: ["AI", "Code"], // Available: AI, Career, SaaS, Open Source, etc.
  createdAt: "2026-1-26"
}
```

### Adding New Pages

1. Create `.tsx` file in `src/pages/`
2. Export default function returning complete `<html>` document
3. Include stylesheet: `<link rel="stylesheet" href="./styles.css" />`

## 🏝️ Islands Architecture (Available but Currently Unused)

All components are currently static. To add interactivity:

```tsx
import { Island } from "@/Island";
import { Counter } from "@/components/Counter";

<Island>
  <Counter initialValue={0} />
</Island>
```

The component will automatically hydrate on the client with React hooks support.

## 📦 Deployment

Deployed to GitHub Pages using the `docs/` folder. Any push to main automatically deploys via GitHub Pages.

## 🔧 Configuration

`config.json`:
```json
{
  "outputDir": "docs",  // GitHub Pages compatible
  "buildOptions": {
    "minify": true,
    "sourcemap": false
  }
}
```

## 📄 License

This is a personal portfolio project. Feel free to fork and adapt for your own use.

---

Built with ❤️ by [Pedro Almeida](https://www.linkedin.com/in/palmeida-dev/)
