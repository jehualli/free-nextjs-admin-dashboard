# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server on :3000
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

No test suite is configured in this project.

## Tech Stack

- **Next.js 16** with App Router, TypeScript (strict), Tailwind CSS v4
- **Charts**: ApexCharts via `react-apexcharts` (always dynamically imported with `ssr: false`)
- **Date picker**: flatpickr (CSS imported globally in `src/app/layout.tsx`)
- **Calendar**: FullCalendar
- **Map**: `@react-jvectormap`
- **Drag & drop**: `react-dnd` with html5 backend
- **SVGs**: imported as React components via `@svgr/webpack`; configured in `next.config.ts` for both webpack and turbopack

## Architecture

### Route Groups

The app uses two Next.js route groups under `src/app/`:

- **`(admin)/`** — dashboard pages with the sidebar/header shell. Layout is a client component that reads `SidebarContext` to compute the main content margin. All dashboard pages live here.
- **`(full-width-pages)/`** — auth pages (signin, signup) and error pages that render without the sidebar shell.

### Global Providers

`src/app/layout.tsx` wraps everything in two context providers (order matters — ThemeProvider is outer):

1. **`ThemeProvider`** (`src/context/ThemeContext.tsx`) — persists `light`/`dark` to `localStorage`, applies `dark` class to `<html>`. Access with `useTheme()`.
2. **`SidebarProvider`** (`src/context/SidebarContext.tsx`) — tracks expanded/collapsed/hover/mobile states and active nav item. Access with `useSidebar()`.

### Layout Shell (`src/layout/`)

- `AppSidebar.tsx` — renders `navItems` array with optional submenus; nav structure is defined inline in this file. To add a nav item, edit the `navItems` array here.
- `AppHeader.tsx` — search bar (`Cmd+K` shortcut), notification dropdown, user dropdown, theme toggle.
- `Backdrop.tsx` — overlay shown when mobile sidebar is open.

### Component Organization (`src/components/`)

| Directory | Contents |
|-----------|----------|
| `ecommerce/` | Dashboard widgets: metrics, charts, orders table, map |
| `charts/bar/`, `charts/line/` | Standalone chart page components |
| `calendar/` | FullCalendar wrapper |
| `form/` | Form element components |
| `tables/` | Table components |
| `header/` | NotificationDropdown, UserDropdown |
| `auth/` | SignIn/SignUp forms |
| `ui/` | Primitive UI components (alert, avatar, badge, button, dropdown, modal, table, video) |
| `common/` | Shared utilities: `ComponentCard`, `PageBreadCrumb`, `ThemeToggleButton`, `ChartTab`, `GridShape` |
| `user-profile/` | Profile page sections |

### Icons (`src/icons/`)

All SVG icons live in `src/icons/` as `.svg` files and are re-exported from `src/icons/index.tsx`. Import icons from `@/icons` — never import an SVG file directly from `src/icons/` in a component.

### Path Alias

`@/*` resolves to `src/*` (configured in `tsconfig.json`).

## Key Patterns

- Chart components use `dynamic(() => import("react-apexcharts"), { ssr: false })` — required for all ApexCharts usage.
- Dark mode is class-based (`dark:` Tailwind prefix). The `dark` class is toggled on `<html>` by `ThemeProvider`.
- Sidebar width shifts the main content via margin classes (`lg:ml-[290px]` expanded, `lg:ml-[90px]` collapsed); this logic lives in `src/app/(admin)/layout.tsx`.
- Prettier is configured with `prettier-plugin-tailwindcss` for class sorting (`prettier.config.js`).
