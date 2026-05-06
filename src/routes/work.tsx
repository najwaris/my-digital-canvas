import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/Nav";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Kiran Noor" },
      { name: "description", content: "Selected projects and the timeline behind them." },
      { property: "og:title", content: "Work — Kiran Noor" },
      { property: "og:description", content: "Selected projects, experience, and an annotated timeline." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { year: "2025", name: "Lumen", role: "Lead Engineer", blurb: "A calm analytics tool for indie founders. SSR, edge-first, beautiful empty states.", tags: ["TS", "Next", "Postgres"] },
  { year: "2024", name: "Halftone", role: "Founder · Engineer", blurb: "A film-photography journal app. Local-first, syncs over CRDTs.", tags: ["Swift", "Rust", "CRDT"] },
  { year: "2023", name: "Folio OS", role: "Senior Engineer", blurb: "Internal design system used across 14 products. Reduced ship-time by 40%.", tags: ["React", "Tailwind", "DS"] },
  { year: "2022", name: "Slowtide", role: "Engineering Lead", blurb: "Reading platform for long-form essays. Quiet typography, no ads, ever.", tags: ["Remix", "Stripe"] },
];

const timeline = [
  { period: "2024 — now", title: "Independent · Building Lumen", place: "Kuala Lumpur" },
  { period: "2022 — 2024", title: "Engineering Lead · Slowtide", place: "Remote" },
  { period: "2020 — 2022", title: "Senior Engineer · Folio Studio", place: "Singapore" },
  { period: "2018 — 2020", title: "Software Engineer · Northbeam", place: "Berlin" },
  { period: "2017", title: "B.Sc. Computer Science · NUS", place: "Singapore" },
];

function WorkPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ Work</div>
        <h1 className="font-display text-6xl md:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
          A <em className="italic">decade</em> of small, careful <em className="italic">things.</em>
        </h1>
      </section>

      {/* Project list */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="hairline" />
        {projects.map((p) => (
          <article key={p.name} className="grid grid-cols-12 gap-4 py-10 border-b border-rule group hover:bg-secondary/30 transition-colors -mx-6 md:-mx-12 px-6 md:px-12">
            <div className="col-span-2 md:col-span-1 text-xs uppercase tracking-[0.25em] text-muted-foreground pt-3">{p.year}</div>
            <div className="col-span-10 md:col-span-5">
              <h3 className="font-display text-4xl md:text-5xl">{p.name}</h3>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.role}</div>
            </div>
            <p className="col-span-12 md:col-span-4 text-sm leading-relaxed text-muted-foreground pt-3">{p.blurb}</p>
            <div className="col-span-12 md:col-span-2 pt-3 flex md:justify-end gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 border border-rule">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Timeline */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">§ Timeline</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              An incomplete <em className="italic">history.</em>
            </h2>
          </div>
          <ol className="col-span-12 md:col-span-7 md:col-start-6 relative border-l border-rule pl-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-ember ring-4 ring-background" />
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.period}</div>
                <div className="font-display text-2xl md:text-3xl mt-1">{t.title}</div>
                <div className="text-sm text-muted-foreground mt-1 italic">{t.place}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}
