---
name: aone-frontend
description: Project skill for the aone-frontend Next.js application. Use when working on any code within this repo to follow conventions and understand the stack.
---

# aone-frontend Project Skill

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16.2.9** (App Router) |
| React | **React 19.2.4** |
| Language | **TypeScript ^5** (strict mode) |
| Styling | **Tailwind CSS v4** + `tw-animate-css` + `shadcn` themes |
| Icons | **Lucide React** |
| UI Primitives | **Radix UI** + **shadcn** components |
| Utilities | `clsx`, `tailwind-merge`, `class-variance-authority` (CVA) |
| Testing | **Vitest** + **React Testing Library** + **jsdom** |

## Path Aliases

- `@/*` maps to `./src/*` (configured in `tsconfig.json`)

## Code Conventions

### Components
- Use `"use client"` directive for client components
- Use `function` declarations (not arrow functions) for components
- Use `React.ComponentProps<"element">` for component props extending native elements
- Use `cva` from `class-variance-authority` for variant-based styling
- Use `cn()` from `@/lib/utils` for class merging (clsx + tailwind-merge)
- Use `data-slot` attributes on root elements
- Export components as named exports

### Styling
- Tailwind CSS v4 with `@theme inline` for design tokens
- OKLCH color space for theme variables
- Dark mode via `.dark` class with `@custom-variant dark`
- Use `cn()` utility for conditional classes

### File Structure
- `src/app/` — Next.js App Router pages and layouts
- `src/components/ui/` — Reusable UI primitives (shadcn-style)
- `src/components/chat/` — Chat-specific components
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utilities and API clients
- `src/services/` — API service classes
- `src/store/` — State management

## Testing Conventions

### Running Tests
```bash
npm run test        # Run tests in watch mode
npm run test:run    # Run tests once (CI)
npm run test:coverage  # Run with coverage
```

### Test File Location
- Tests are placed in `src/__tests__/` directory
- Test files follow the pattern `*.test.ts` or `*.test.tsx`

### Writing Tests
- Use `describe`/`it`/`expect` from Vitest
- Use `render`, `screen` from `@testing-library/react`
- Use `@testing-library/jest-dom` matchers (e.g., `toBeInTheDocument()`)
- Mock Next.js modules (e.g., `next/navigation`, `next/image`) using `vi.mock`

## Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "test": "vitest",
  "test:run": "vitest run",
  "test:coverage": "vitest run --coverage"
}
```
