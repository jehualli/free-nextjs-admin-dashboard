# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

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
