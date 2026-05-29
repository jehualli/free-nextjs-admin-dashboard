# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

---

## [1.5.0] — 2026-05-29 · Phase 5: CI/CD + Monitoring

### Added
- `.github/workflows/ci.yml` — GitHub Actions pipeline: `lint` then `build` on every push/PR to `main` and `nova-analytics`; Supabase env vars read from repo secrets with safe placeholder fallback
- Vercel Analytics (`@vercel/analytics`) — page-view tracking injected in root layout, active on all routes

---

## [1.4.0] — 2026-05-29 · Phase 4: Deployment

### Added
- `.env.local.example` — documents required environment variables
- README rewritten: setup instructions, tech stack, env vars, deployment steps, project structure
- Deployed to Vercel production: https://free-nextjs-admin-dashboard-zeta.vercel.app

### Changed
- Removed all TailAdmin branding from README

---

## [1.3.0] — 2026-05-29 · Phase 3: Authentication

### Added
- Supabase Auth integration (`@supabase/supabase-js`, `@supabase/ssr`)
- `src/lib/supabase/client.ts` — browser Supabase client
- `src/lib/supabase/server.ts` — server-side Supabase client (Server Components / Route Handlers)
- `src/proxy.ts` — Next.js 16 proxy (middleware) protecting `/dashboard/*`; unauthenticated users redirected to `/signin`, authenticated users on auth pages redirected to `/dashboard`
- `/auth/callback` route handler — exchanges Supabase email confirmation codes for sessions
- `.env.local.example` for environment variable documentation

### Changed
- `SignInForm` — wired to `supabase.auth.signInWithPassword`; shows loading state, inline error messages, redirects to `/dashboard` on success
- `SignUpForm` — wired to `supabase.auth.signUp` with first/last name metadata; shows "check your email" confirmation screen on success
- `UserDropdown` — sign-out link converted to button calling `supabase.auth.signOut()` with router redirect
- `InputField` — added `value` and `required` props for controlled form support
- Sign-in/sign-up "Back to dashboard" links updated to "Back to home"

---

## [1.2.0] — 2026-05-29 · Phase 2: Landing Page

### Added
- Public landing page at `/` with Hero, Stats, Features (3 cards), CTA, and Footer sections
- Fully responsive and dark-mode compatible
- Dashboard preview mockup in the hero section
- Sticky navigation with Log in / Start Free Trial CTAs

### Changed
- All dashboard routes moved under `/dashboard` path segment (`/` → `/dashboard`, `/calendar` → `/dashboard/calendar`, etc.)
- Sidebar nav paths updated with `/dashboard` prefix throughout
- Sidebar and header logo links updated to `/dashboard`
- User dropdown profile links updated to `/dashboard/profile`

---

## [1.1.0] — 2026-05-29 · Phase 1: White-label

### Changed
- Brand color palette updated to Nova Analytics indigo (`#4f46e5` primary, `#06b6d4` accent) — replaces original TailAdmin blue `#465fff`
- Focus-ring shadow updated to match new primary color
- All 21 page `<title>` and `<meta description>` tags rewritten under "Nova Analytics"
- Auth panel tagline updated: "Transform your data into decisions with Nova Analytics"
- Sidebar upgrade widget rebranded to Nova Analytics Pro CTA
- 404 and not-found footer copyright updated to Nova Analytics
- User identity in header dropdown and profile cards: `admin@novaanalytics.io`

### Replaced
- `public/images/logo/logo.svg` — Nova Analytics wordmark (light mode)
- `public/images/logo/logo-dark.svg` — Nova Analytics wordmark (dark mode)
- `public/images/logo/logo-icon.svg` — Nova Analytics icon mark (collapsed sidebar)
- `public/images/logo/auth-logo.svg` — Nova Analytics logo for auth panel

---
