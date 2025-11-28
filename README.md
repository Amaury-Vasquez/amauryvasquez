# Amaury Vasquez - Personal Website

A modern Next.js website built with TypeScript, Tailwind CSS, and the amvasdev-ui component library.

## Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + daisyUI themes
- **UI Components**: amvasdev-ui component library
- **Icons**: Lucide React
- **Development**: Turbopack for fast development builds

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Available Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the project for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with custom import rules

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with amvasdev-ui CSS imports
│   └── page.tsx        # Home page
└── modules/            # Feature-based modules
    ├── Home/           # Home page components
    └── About/          # About page components
```

## Component Library

This project uses the `amvasdev-ui` component library with:
- 14 predefined daisyUI themes
- Modern React components with TypeScript support
- Comprehensive component usage guide in `claude/COMPONENT_USAGE_GUIDE.md`

## Development Guidelines

- Follow the configured ESLint rules for import ordering
- Use standard Tailwind CSS classes (no prefix required)
- Refer to component usage guide for amvasdev-ui best practices
- Maintain TypeScript strict typing throughout the project
