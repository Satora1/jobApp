import type React from "react";

const metrics = [
  { label: "Total Jobs Found", value: "284", delta: "+12%", note: "vs last week" },
  { label: "Avg. Match Rate", value: "82%", delta: "+3%", note: "vs last week" },
  { label: "Companies Researched", value: "35", delta: "Total researched", note: "" },
  { label: "Jobs This Week", value: "28", delta: "New this week", note: "" },
];

const jobs = [
  { company: "Vercel", score: "94%", salary: "$160k - $200k", source: "LinkedIn", tone: "success" },
  { company: "Stripe", score: "88%", salary: "$180k - $240k", source: "URL", tone: "info" },
  { company: "Linear", score: "96%", salary: "$150k - $190k", source: "LinkedIn", tone: "success" },
  { company: "Notion", score: "72%", salary: "$130k - $170k", source: "LinkedIn", tone: "warning" },
  { company: "OpenAI", score: "91%", salary: "$200k - $280k", source: "LinkedIn", tone: "success" },
  { company: "Figma", score: "85%", salary: "$170k - $220k", source: "URL", tone: "info" },
];

const activity = [
  { title: "Found 8 jobs for Frontend Engineer", time: "10 mins ago", tone: "accent" },
  { title: "Researched Stripe", time: "1 hour ago", tone: "info" },
  { title: "Found 6 jobs for React Developer", time: "2 hours ago", tone: "success" },
  { title: "Researched Vercel", time: "Yesterday", tone: "accent" },
];

const searchFeatures = [
  {
    title: "Find jobs that actually fit",
    body: "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
  },
  {
    title: "Know the Company Before You Apply",
    body: "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.",
  },
  {
    title: "Keep track of every application",
    body: "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
  },
];

const confidenceFeatures = [
  {
    title: "Understand your match score",
    body: "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what is missing.",
  },
  {
    title: "AI-Powered Job Matching",
    body: "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.",
  },
  {
    title: "Focus on the right roles",
    body: "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
  },
];

const bars = ["h-7", "h-16", "h-10", "h-24", "h-36", "h-13", "h-5"];

const toneClasses = {
  accent: "bg-accent",
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
};

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-md bg-accent text-sm font-black text-accent-foreground shadow-sm">
        JP
      </span>
      <span className="text-base font-extrabold text-text-darkest">JobPilot</span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
}: Readonly<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>) {
  return (
    <a
      href="#"
      className={[
        "inline-flex h-11 min-w-36 items-center justify-center rounded-sm border px-6 text-sm font-bold transition",
        variant === "primary"
          ? "border-overlay bg-overlay text-accent-foreground shadow-sm hover:bg-overlay-dark"
          : "border-border bg-surface text-text-dark hover:bg-surface-secondary",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[980px] rounded-xl bg-surface shadow-2xl shadow-info-muted/30 ring-1 ring-border">
      <div className="flex h-10 items-center gap-2 border-b border-border px-5">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <div className="mx-auto hidden h-6 w-80 items-center justify-center rounded-md bg-surface-secondary text-xs font-semibold text-text-muted sm:flex">
          jobpilot.ai/dashboard
        </div>
      </div>
      <div className="px-5 py-5">
        <div className="mb-5 flex items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-7 text-xs font-bold text-text-muted md:flex">
            <span className="text-accent">Dashboard</span>
            <span>Find Jobs</span>
            <span>Profile</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-border bg-surface p-4">
              <p className="text-xs font-bold text-text-muted">{metric.label}</p>
              <p className="mt-1 text-2xl font-black text-text-darkest">{metric.value}</p>
              <p className="mt-1 text-xs font-semibold text-success">
                {metric.delta} <span className="font-medium text-text-muted">{metric.note}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.08fr]">
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="text-sm font-extrabold text-text-darkest">Recent Activity</h3>
            <div className="mt-5 space-y-5">
              {activity.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className={`mt-1.5 size-2 rounded-full ${toneClasses[item.tone as keyof typeof toneClasses]}`} />
                  <div>
                    <p className="text-xs font-extrabold text-text-dark">{item.title}</p>
                    <p className="mt-1 text-xs text-text-muted">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5">
            <h3 className="text-sm font-extrabold text-text-darkest">Company Research Activity</h3>
            <div className="mt-7 flex h-40 items-end gap-6 border-b border-border px-3">
              {bars.map((height, index) => (
                <span key={`${height}-${index}`} className={`w-7 rounded-t-md bg-info ${height}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobsTable() {
  return (
    <div className="w-full max-w-[510px] rounded-xl border border-border bg-surface p-5 shadow-sm">
      <div className="grid grid-cols-[1.15fr_1fr_1.3fr_.8fr] gap-3 pb-4 text-xs font-black uppercase text-text-muted">
        <span>Company</span>
        <span>Match Score</span>
        <span>Salary Est.</span>
        <span>Source</span>
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.company} className="grid grid-cols-[1.15fr_1fr_1.3fr_.8fr] items-center gap-3 text-sm">
            <div className="flex items-center gap-3 font-extrabold text-text-dark">
              <span className="grid size-7 place-items-center rounded-md bg-surface-tertiary text-xs text-text-muted">
                =
              </span>
              {job.company}
            </div>
            <div className="flex items-center gap-2 font-bold text-text-dark">
              <span className={`h-1.5 w-9 rounded-full ${toneClasses[job.tone as keyof typeof toneClasses]}`} />
              {job.score}
            </div>
            <span className="font-semibold text-text-secondary">{job.salary}</span>
            <span className="rounded-md bg-info-lightest px-2.5 py-1 text-center text-xs font-extrabold text-info-foreground">
              {job.source}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureList({ items, accent }: Readonly<{ items: typeof searchFeatures; accent: "accent" | "success" }>) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => (
        <div key={item.title} className="relative px-6 py-8 md:px-16">
          {index === 0 ? <span className={`absolute left-0 top-0 h-full w-0.5 ${toneClasses[accent]}`} /> : null}
          <h3 className="text-lg font-extrabold text-text-dark">{item.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-text-secondary">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function AgentLog() {
  return (
    <div className="w-full max-w-[470px] overflow-hidden rounded-lg bg-surface shadow-lg shadow-info-muted/20">
      <div className="flex h-11 items-center gap-2 bg-overlay px-4 text-xs font-semibold text-text-muted">
        <span className="size-3 rounded-full bg-error" />
        <span className="size-3 rounded-full bg-warning" />
        <span className="size-3 rounded-full bg-success" />
        <span className="ml-4 text-accent-foreground">agent_log.ts</span>
      </div>
      <div className="space-y-7 px-8 py-8 font-mono text-sm font-bold text-text-slate">
        <p><span className="mr-7 text-text-muted">1</span><span className="text-info-medium">[SYSTEM]</span> Initializing JobPilot Agent...</p>
        <p><span className="mr-7 text-text-muted">2</span><span className="text-accent">[SCAN]</span> Found 14 matching roles</p>
        <p><span className="mr-7 text-text-muted">3</span>Filtered out 3 roles (below salary cap)</p>
        <p><span className="mr-7 text-text-muted">4</span><span className="text-success">[ACTION]</span> Tailoring resume for Stripe</p>
        <p><span className="mr-7 text-text-muted">5</span><span className="text-warning">...</span> Generating cover letter</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/95 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
          <Logo />
          <div className="hidden items-center gap-12 text-sm font-semibold text-text-secondary md:flex">
            <a href="#">Dashboard</a>
            <a href="#">Find Jobs</a>
            <a href="#">Profile</a>
          </div>
          <a href="#" className="rounded-sm bg-overlay px-5 py-3 text-sm font-bold text-accent-foreground">
            Start for free
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-[1100px] border-x border-border bg-surface">
        <div className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_28%_14%,var(--color-accent-light),transparent_24%),radial-gradient(circle_at_70%_10%,var(--color-info-light),transparent_28%),radial-gradient(circle_at_60%_90%,var(--color-accent-light),transparent_24%),var(--color-surface)] px-6 pb-14 pt-24 text-center">
          <h1 className="mx-auto max-w-3xl text-5xl font-black leading-[1.04] text-text-black md:text-6xl">
            Job hunting is hard. Your tools shouldn&apos;t be.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-text-secondary">
            Stop applying blind. JobPilot finds the jobs, researches the companies, and gives you everything you need to stand out.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button>Get Started &gt;</Button>
            <Button variant="secondary">Find Your First Match</Button>
          </div>
        </div>

        <div className="border-b border-border bg-surface-tertiary px-6 py-12 md:px-14">
          <DashboardMockup />
        </div>

        <section className="grid border-b border-border md:grid-cols-2">
          <div className="flex min-h-[590px] flex-col justify-center border-b border-border md:border-b-0 md:border-r">
            <div className="px-6 py-12 md:px-16">
              <h2 className="max-w-md text-4xl font-black leading-tight text-text-darker md:text-5xl">
                Manage Your Job Search With Ease
              </h2>
            </div>
            <FeatureList items={searchFeatures} accent="accent" />
          </div>
          <div className="flex items-center justify-center bg-surface-muted p-8 md:p-12">
            <JobsTable />
          </div>
        </section>

        <div className="h-16 border-b border-border bg-[repeating-linear-gradient(-45deg,var(--color-surface)_0,var(--color-surface)_2px,var(--color-surface-secondary)_2px,var(--color-surface-secondary)_8px)]" />

        <section className="grid border-b border-border md:grid-cols-2">
          <div className="flex min-h-[540px] items-center justify-center bg-surface-muted p-8 md:p-12">
            <AgentLog />
          </div>
          <div className="flex flex-col justify-center border-t border-border md:border-l md:border-t-0">
            <div className="px-6 py-14 md:px-16">
              <h2 className="max-w-md text-4xl font-black leading-tight text-text-darker md:text-5xl">
                Apply With More Confidence, Every Time
              </h2>
            </div>
            <FeatureList items={confidenceFeatures} accent="success" />
          </div>
        </section>

        <div className="h-16 border-b border-border bg-[repeating-linear-gradient(-45deg,var(--color-surface)_0,var(--color-surface)_2px,var(--color-surface-secondary)_2px,var(--color-surface-secondary)_8px)]" />

        <section className="border-b border-border bg-surface px-6 py-24 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-accent">Success Stories</p>
          <blockquote className="mx-auto mt-7 max-w-3xl text-3xl font-bold leading-snug text-text-darker">
            &quot;I used to spend my evenings copy-pasting resumes. Now I open my dashboard to see interviews waiting. It feels like cheating. Had 3 offers on the table simultaneously.&quot;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-accent-light text-sm font-black text-accent">TW</div>
            <div className="text-left">
              <p className="text-sm font-extrabold text-text-darkest">Tom Wilson</p>
              <p className="text-xs font-medium text-text-secondary">Junior Developer</p>
            </div>
          </div>
        </section>

        <div className="h-16 border-b border-border bg-[repeating-linear-gradient(-45deg,var(--color-surface)_0,var(--color-surface)_2px,var(--color-surface-secondary)_2px,var(--color-surface-secondary)_8px)]" />

        <section className="border-b border-border bg-[radial-gradient(circle_at_30%_10%,var(--color-accent-light),transparent_24%),radial-gradient(circle_at_80%_10%,var(--color-info-light),transparent_28%),radial-gradient(circle_at_58%_92%,var(--color-accent-light),transparent_24%),var(--color-surface)] px-6 py-24 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-text-black md:text-5xl">
            Your next job search can feel a lot less overwhelming
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-text-secondary">
            Set up your profile, upload your resume, and start finding matches in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button>Get Started &gt;</Button>
            <Button variant="secondary">Find Your First Match</Button>
          </div>
        </section>

        <footer className="flex flex-col gap-8 bg-surface px-8 py-16 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-9 text-sm font-semibold text-text-secondary">
            <a href="#">Dashboard</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Condition</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
