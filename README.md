# DebugSavant

AI-powered debugging assistant that explains errors in plain English

## Overview

DebugSavant is a debugging tool that an ai assistant that instantly explains errors, suggests fixes, and learns from your codebase.

**Problem:** Developers spend 50% of debugging time just understanding what went wrong

**Solution:** An AI assistant that instantly explains errors, suggests fixes, and learns from your codebase

**Target Audience:** Software engineers, DevOps teams, Platform engineers

## Features

- Instant error explanations with root cause analysis
- Code context awareness across 50+ languages
- Automated fix suggestions with confidence scores
- Team knowledge base that learns from your fixes
- Privacy-first: all analysis runs locally

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

## Deployment

This project is configured for static export (`output: 'export'`), making it deployable to:

- **Vercel**: Connect repo and deploy
- **Netlify**: Connect repo, build command `npm run build`, publish directory `out`
- **GitHub Pages**: Use GitHub Actions to build and deploy `out/` directory
- **Cloudflare Pages**: Connect repo, build command `npm run build`, output `out`
- **Any static host**: Upload the `out/` directory

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles + Tailwind
│   └── components/     # Page-specific components
├── components/         # Shared components
├── lib/                # Utilities
├── public/             # Static assets
└── ...
```

## Brand

- **Primary Color**: #0d9488
- **Secondary Color**: #14b8a6
- **Background**: #f0fdfa
- **Text**: #134e4a

## License

MIT License - feel free to use for your own projects.

---

Built with ❤️ for developers.