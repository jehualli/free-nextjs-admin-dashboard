# Nova Analytics

A white-labeled analytics dashboard built on Next.js 16, Tailwind CSS v4, and Supabase Auth.

**Live URL:** https://www.novaanalytics.xyz

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Auth | Supabase Auth (`@supabase/ssr`) |
| Charts | ApexCharts (`react-apexcharts`) |
| Calendar | FullCalendar 6 |
| Date picker | flatpickr |
| Map | react-jvectormap |
| Analytics | Vercel Analytics |

---

## Getting Started

### Prerequisites

- Node.js 18+ (20 recommended)
- A [Supabase](https://supabase.com) project

### 1. Clone and install

```bash
git clone https://github.com/jehualli/free-nextjs-admin-dashboard.git
cd free-nextjs-admin-dashboard
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

Find both values in your Supabase project under **Settings → API**.

### 3. Configure Supabase redirect URLs

In **Supabase → Authentication → URL Configuration**, add:

| Setting | Value |
|---------|-------|
| Site URL | `http://localhost:3000` |
| Redirect URLs | `http://localhost:3000/auth/callback` |

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Public landing page (/)
│   ├── icon.svg                  # Nova Analytics favicon
│   ├── (admin)/                  # Dashboard shell (sidebar + header)
│   │   └── dashboard/            # All /dashboard/* routes
│   └── (full-width-pages)/       # Auth pages + error pages
├── components/
│   ├── auth/                     # SignInForm, SignUpForm
│   ├── ecommerce/                # Dashboard widgets
│   ├── ui/                       # Primitive components
│   └── header/                   # UserDropdown, NotificationDropdown
├── layout/                       # AppSidebar, AppHeader, Backdrop
├── lib/supabase/                 # Browser + server Supabase clients
├── context/                      # ThemeContext, SidebarContext
└── proxy.ts                      # Route guard (auth middleware)
```

---

## Available Scripts

```bash
npm run dev      # Start development server on :3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

---

## Deployment

### Deploy to Vercel (recommended)

#### Option A — Vercel CLI

```bash
npx vercel --prod
```

Follow the prompts to link or create a project. Then add environment variables in the Vercel dashboard under **Settings → Environment Variables**:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

#### Option B — Vercel dashboard

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Add the two environment variables above.
4. Click **Deploy**.

#### Post-deployment (important)

After your first deploy, add the production URL to Supabase:

- **Site URL** → `https://www.novaanalytics.xyz`
- **Redirect URLs** → `https://www.novaanalytics.xyz/auth/callback`

---

## Test Credentials

Use these credentials to log in and explore the dashboard without creating an account:

| Field | Value |
|-------|-------|
| Email | `demo@novaanalytics.io` |
| Password | `NovaDemo2026!` |

---

## Known Limitations

- **No automated tests** — unit, integration, and E2E tests are not implemented in this version.
- **Social auth buttons** — Google and X (Twitter) sign-in buttons are visible on the auth forms but are not wired up; only email/password authentication is functional.

---

## License

MIT
