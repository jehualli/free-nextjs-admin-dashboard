# Nova Analytics — Functionality Tour

Step-by-step checklist to verify every deliverable is working correctly.
Run against the live URL or `npm run dev` locally.

**Base URL (prod):** https://www.novaanalytics.xyz  
**Base URL (local):** http://localhost:3000

---

## 1. Landing Page `/`

| # | What to do | Expected result |
|---|------------|-----------------|
| 1.1 | Open the base URL | Landing page loads — **not** the dashboard |
| 1.2 | Read the header | Nova Analytics logo visible (light mode) |
| 1.3 | Scroll through the page | Eight sections render in order: Nav → Hero → Stats → Features → Pricing → About → CTA → Footer |
| 1.4 | Check the hero headline | "Transform Your Data Into Decisions" |
| 1.5 | Check the dashboard mockup | Browser-chrome card with mini bar chart and three metric tiles |
| 1.6 | Check the Stats bar | Four numbers: 10k+ / 99.9% / 2M+ / <50ms |
| 1.7 | Check the Features section | Three cards: Real-Time Analytics · Team Collaboration · Custom Reports |
| 1.8 | Click **Start Free Trial** (hero) | Redirects to `/signup` |
| 1.9 | Go back, click **Log in** (hero) | Redirects to `/signin` |
| 1.10 | Click **Start Free Trial** (CTA section) | Redirects to `/signup` |
| 1.11 | Click **Log in** (CTA section) | Redirects to `/signin` |
| 1.8 | Click **Start Free Trial** (hero) | Redirects to `/signup` |
| 1.9 | Go back, click **Log in** (hero) | Redirects to `/signin` |
| 1.10 | Click **#Pricing** nav link | Smooth scrolls to Pricing section |
| 1.11 | Click **#About** nav link | Smooth scrolls to About section |
| 1.12 | Check Pricing section | Three cards: Starter (Free) / Pro ($29, "MOST POPULAR" badge) / Enterprise (Custom) — each with feature list |
| 1.13 | Check Pro card styling | Highlighted with indigo background and cyan badge |
| 1.14 | Check About section | Two-column: company story left, four value cards right |
| 1.15 | Click **Join us** in About | Redirects to `/signup` |
| 1.16 | Click **Start Free Trial** (CTA section) | Redirects to `/signup` |
| 1.17 | Click **Log in** (CTA section) | Redirects to `/signin`; button text visible on indigo background |
| 1.18 | Check the footer | "© 2026 Nova Analytics" — no TailAdmin text anywhere |
| 1.19 | Resize to mobile (< 768 px) | Hamburger nav replaces desktop links; all sections stack vertically; pricing cards stack |

---

## 2. Branding Checks

| # | What to do | Expected result |
|---|------------|-----------------|
| 2.1 | Check browser tab on `/` | Title: "Nova Analytics — Transform Your Data Into Decisions" |
| 2.2 | Check browser tab on `/dashboard` | Title: "Dashboard \| Nova Analytics" |
| 2.3 | Toggle dark mode on the dashboard | Logo switches to white wordmark version |
| 2.4 | Inspect primary color (buttons, active nav) | Indigo `#4f46e5` — not the old blue `#465fff` |
| 2.5 | Search for "TailAdmin" on any visible page | Should appear nowhere |
| 2.6 | Click the ☀/🌙 toggle in the landing nav | Page switches between light and dark mode |
| 2.7 | Toggle dark on landing, navigate to `/dashboard` | Dark mode persists across pages (shared ThemeContext) |

---

## 3. Authentication — Sign Up

| # | What to do | Expected result |
|---|------------|-----------------|
| 3.1 | Navigate to `/signup` | Sign Up form renders inside the branded auth panel |
| 3.2 | Check the left panel (desktop) | Nova Analytics auth logo + tagline "Transform your data…" |
| 3.3 | Click **Back to home** | Returns to `/` (not `/dashboard`) |
| 3.4 | Submit the form empty | Browser validation blocks submission |
| 3.5 | Tick the T&C checkbox, fill all fields with a real email, submit | "Check your email" confirmation screen appears |
| 3.6 | Check your inbox | Confirmation email from Supabase arrives |
| 3.7 | Click the confirmation link | Redirected to `/dashboard` and logged in |

---

## 4. Authentication — Sign In

| # | What to do | Expected result |
|---|------------|-----------------|
| 4.1 | Sign out first (user menu → Sign out) | Redirected to `/signin` |
| 4.2 | Navigate to `/signin` | Sign In form renders |
| 4.3 | Submit with wrong password | Inline error message appears below the divider |
| 4.4 | Submit with correct credentials | Redirected to `/dashboard` |
| 4.5 | While logged in, navigate to `/signin` | Automatically redirected to `/dashboard` |
| 4.6 | While logged in, navigate to `/signup` | Automatically redirected to `/dashboard` |

---

## 5. Route Protection (Middleware)

| # | What to do | Expected result |
|---|------------|-----------------|
| 5.1 | Open an incognito window, go to `/dashboard` | Redirected to `/signin` |
| 5.2 | Try `/dashboard/calendar` without auth | Redirected to `/signin` |
| 5.3 | Try `/dashboard/profile` without auth | Redirected to `/signin` |
| 5.4 | The landing page `/` | Accessible without auth |
| 5.5 | `/signin` and `/signup` | Accessible without auth |

---

## 6. Dashboard Shell

| # | What to do | Expected result |
|---|------------|-----------------|
| 6.1 | Open `/dashboard` while logged in | Full dashboard with sidebar + header renders |
| 6.2 | Check the sidebar logo | Nova Analytics icon/wordmark — not TailAdmin bars |
| 6.3 | Check the header user dropdown | Shows "Admin" name and `admin@novaanalytics.io` |
| 6.4 | Click the hamburger (desktop) | Sidebar collapses to icon-only mode |
| 6.5 | Click again | Sidebar expands back |
| 6.6 | Hover the collapsed sidebar | Expands with tooltip labels |
| 6.7 | Resize to mobile | Sidebar hides; hamburger reveals mobile drawer |
| 6.8 | Click **⌘K** in the header search | Search input receives focus |
| 6.9 | Click the theme toggle | Page switches between light and dark mode |
| 6.10 | Refresh after toggling dark | Dark mode persists (stored in localStorage) |

---

## 7. Dashboard Widgets `/dashboard`

| # | What to do | Expected result |
|---|------------|-----------------|
| 7.1 | Check the four metric cards | Revenue / Orders / Customers / Growth with arrows |
| 7.2 | Monthly Sales Chart | Area chart renders; no console errors |
| 7.3 | Monthly Target | Radial/donut chart with percentage |
| 7.4 | Statistics Chart | Area chart with date-range picker |
| 7.5 | Click the date-range picker | flatpickr calendar opens |
| 7.6 | Demographic Card | Map loads with country bars |
| 7.7 | Recent Orders table | Paginated table with order rows |

---

## 8. Sidebar Navigation Pages

Visit each route from the sidebar and confirm it loads without errors.

| Route | Sidebar label |
|-------|--------------|
| `/dashboard/calendar` | Calendar |
| `/dashboard/profile` | User Profile |
| `/dashboard/form-elements` | Forms → Form Elements |
| `/dashboard/basic-tables` | Tables → Basic Tables |
| `/dashboard/blank` | Pages → Blank Page |
| `/dashboard/line-chart` | Charts → Line Chart |
| `/dashboard/bar-chart` | Charts → Bar Chart |
| `/dashboard/alerts` | UI Elements → Alerts |
| `/dashboard/avatars` | UI Elements → Avatar |
| `/dashboard/badge` | UI Elements → Badge |
| `/dashboard/buttons` | UI Elements → Buttons |
| `/dashboard/images` | UI Elements → Images |
| `/dashboard/videos` | UI Elements → Videos |
| `/dashboard/modals` | UI Elements → (Modals) |

---

## 9. Sign Out

| # | What to do | Expected result |
|---|------------|-----------------|
| 9.1 | Open the user dropdown (top-right) | Dropdown shows name, email, and menu items |
| 9.2 | Click **Sign out** | Session ends, redirected to `/signin` |
| 9.3 | Click browser back | Cannot return to `/dashboard` — redirected to `/signin` |

---

## 10. 404 Page

| # | What to do | Expected result |
|---|------------|-----------------|
| 10.1 | Navigate to `/anything-random` | Custom 404 page with error graphic |
| 10.2 | Check the footer | "© 2026 Nova Analytics" |
| 10.3 | Click **Back to Home Page** | Returns to `/` |

---

## 11. CI/CD

| # | What to do | Expected result |
|---|------------|-----------------|
| 11.1 | Go to GitHub → Actions tab | Workflow "CI" is listed |
| 11.2 | Check the last run | Green ✅ — both Lint and Build jobs passed |
| 11.3 | Click into the run | Two jobs visible: Lint → Build |

---

## 12. Analytics

| # | What to do | Expected result |
|---|------------|-----------------|
| 12.1 | Navigate a few pages on the live URL | Page views accumulate |
| 12.2 | Open Vercel → project → **Analytics** tab | Page view events appear (may take a few minutes) |

---

## Quick Test Credentials

Use these pre-confirmed credentials to skip the signup flow:

| Field | Value |
|-------|-------|
| Email | `demo@novaanalytics.io` |
| Password | `NovaDemo2026!` |

Or create a fresh account via `/signup` with any real email — Supabase will send a confirmation link.
