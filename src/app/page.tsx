import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nova Analytics — Transform Your Data Into Decisions",
  description:
    "Real-time analytics, beautiful dashboards, and powerful insights for modern teams.",
};

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#eef2ff" />
        <path d="M7 19l4-5 3 3.5 3-4.5 4 6" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="9" r="2" fill="#06b6d4" />
      </svg>
    ),
    title: "Real-Time Analytics",
    description:
      "Monitor your key metrics as they happen. Live dashboards update instantly so your team always acts on the freshest data.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#eef2ff" />
        <circle cx="10" cy="14" r="3" stroke="#4f46e5" strokeWidth="1.8" />
        <circle cx="18" cy="14" r="3" stroke="#4f46e5" strokeWidth="1.8" />
        <path d="M13 14h2" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 20c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 20c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Share dashboards, annotate charts, and assign reports to teammates. Everyone stays aligned without the back-and-forth.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="#eef2ff" />
        <rect x="7" y="8" width="14" height="12" rx="2" stroke="#4f46e5" strokeWidth="1.8" />
        <path d="M10 12h8M10 15h5" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Custom Reports",
    description:
      "Drag-and-drop report builder lets you assemble exactly the view you need — then schedule it to land in your inbox automatically.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals and small projects getting started with analytics.",
    cta: "Start Free",
    href: "/signup",
    featured: false,
    features: [
      "1 workspace",
      "Up to 5 dashboards",
      "7-day data history",
      "Basic charts & tables",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    description: "For growing teams that need deeper insights and collaboration tools.",
    cta: "Start Free Trial",
    href: "/signup",
    featured: true,
    features: [
      "5 workspaces",
      "Unlimited dashboards",
      "1-year data history",
      "All chart types",
      "Team collaboration",
      "Custom reports & scheduling",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored for large organisations with advanced security and compliance needs.",
    cta: "Contact Sales",
    href: "/signin",
    featured: false,
    features: [
      "Unlimited workspaces",
      "Unlimited dashboards",
      "Unlimited data history",
      "SSO / SAML",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
    ],
  },
];

const values = [
  {
    title: "Data transparency",
    description: "We believe your data should always be yours — readable, exportable, and free from lock-in.",
  },
  {
    title: "Speed without compromise",
    description: "Sub-50ms query times aren't a marketing number. We architect every layer around it.",
  },
  {
    title: "Built for teams",
    description: "Analytics tools that only work for data engineers have failed. We design for every role on your team.",
  },
  {
    title: "Always improving",
    description: "We ship weekly. If something isn't working for you, we want to know — and we will fix it.",
  },
];

const stats = [
  { value: "10k+", label: "Companies using Nova" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2M+", label: "Reports generated" },
  { value: "<50ms", label: "Average query time" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/logo/logo.svg" alt="Nova Analytics" width={150} height={32} className="dark:hidden" />
            <Image src="/images/logo/logo-dark.svg" alt="Nova Analytics" width={150} height={32} className="hidden dark:block" />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400 md:flex">
            <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="hidden text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:block"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-12 pt-20 text-center md:pt-28">
        {/* Background gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl" />
        </div>

        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Analytics Platform
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Transform Your Data<br />
            <span className="text-brand-500">Into Decisions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-500 dark:text-gray-400">
            Real-time dashboards, powerful analytics, and team collaboration —
            all in one platform built for modern businesses.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-xl bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600 transition-colors sm:w-auto"
            >
              Start Free Trial
            </Link>
            <Link
              href="/signin"
              className="w-full rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:w-auto"
            >
              Log in to Dashboard
            </Link>
          </div>
        </div>

        {/* Dashboard preview mockup */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 flex h-6 flex-1 max-w-xs items-center rounded-full bg-gray-200 px-3 text-xs text-gray-400 dark:bg-gray-700 dark:text-gray-500">
                novaanalytics.io/dashboard
              </span>
            </div>

            {/* Mock dashboard content */}
            <div className="p-5">
              {/* Metric row */}
              <div className="mb-4 grid grid-cols-3 gap-3">
                {[
                  { label: "Total Revenue", value: "$84,590", change: "+12.5%", up: true },
                  { label: "Active Users", value: "24,380", change: "+8.2%", up: true },
                  { label: "Conversion", value: "3.64%", change: "-0.4%", up: false },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900">
                    <p className="text-xs text-gray-400">{m.label}</p>
                    <p className="mt-1 text-lg font-bold text-gray-800 dark:text-white">{m.value}</p>
                    <p className={`text-xs font-medium ${m.up ? "text-green-500" : "text-red-400"}`}>{m.change}</p>
                  </div>
                ))}
              </div>

              {/* Mock bar chart */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-3 text-xs font-semibold text-gray-500 dark:text-gray-400">Monthly Revenue</p>
                <div className="flex h-24 items-end gap-1.5">
                  {[42, 68, 52, 75, 60, 88, 70, 92, 65, 80, 58, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "#4f46e5" : i % 3 === 0 ? "#a5b4fc" : "#c7d2fe",
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-300 dark:text-gray-600">
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade on the mockup */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-brand-500">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────── */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to grow
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              Stop jumping between spreadsheets and scattered reports. Nova Analytics brings
              all your data into one place, making insights accessible to everyone on your team.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-gray-50 px-6 py-24 dark:bg-gray-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              Start free and scale as you grow. No hidden fees, no surprise bills.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.featured
                    ? "bg-brand-500 text-white shadow-2xl shadow-brand-500/30 ring-2 ring-brand-400"
                    : "border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-gray-900">
                    MOST POPULAR
                  </span>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-semibold ${plan.featured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`mb-1 text-sm ${plan.featured ? "text-brand-200" : "text-gray-400"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`mt-3 text-sm ${plan.featured ? "text-brand-100" : "text-gray-500 dark:text-gray-400"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <svg
                        className={`h-4 w-4 shrink-0 ${plan.featured ? "text-cyan-300" : "text-brand-500"}`}
                        viewBox="0 0 16 16" fill="none"
                      >
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.featured ? "text-white" : "text-gray-600 dark:text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-white text-brand-600 hover:bg-brand-50"
                      : "border border-brand-500 text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────────────── */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left — story */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Our story
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Built by data people,<br />for data people
              </h2>
              <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                Nova Analytics was founded after years of watching great teams drown in spreadsheets
                and pay for enterprise tools that took months to set up. We believed there had to be
                a better way — a platform that gives you enterprise-grade analytics without the
                enterprise-grade headache.
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
                Today, over 10,000 companies use Nova Analytics to track what matters, collaborate
                faster, and make decisions they can stand behind.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/signup"
                  className="rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
                >
                  Join us
                </Link>
                <a
                  href="#features"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  See features
                </a>
              </div>
            </div>

            {/* Right — values grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-brand-500" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-400/50 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-700/50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to transform your data?
          </h2>
          <p className="mt-4 text-brand-200">
            Join thousands of teams already making smarter decisions with Nova Analytics.
            No credit card required.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-600 shadow-lg hover:bg-brand-50 transition-colors sm:w-auto"
            >
              Start Free Trial
            </Link>
            <Link
              href="/signin"
              className="w-full rounded-xl border border-brand-400 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-400/20 transition-colors sm:w-auto"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 bg-white px-6 py-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo/logo.svg" alt="Nova Analytics" width={130} height={28} className="dark:hidden" />
            <Image src="/images/logo/logo-dark.svg" alt="Nova Analytics" width={130} height={28} className="hidden dark:block" />
          </Link>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Nova Analytics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
            <Link href="/signin" className="hover:text-gray-900 dark:hover:text-white transition-colors">Login</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
