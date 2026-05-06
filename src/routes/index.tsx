import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/Nav";
import portrait from "@/assets/portrait.jpg";
import photo1 from "@/assets/photo-1.jpg";
import scribble from "@/assets/scribble-1.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const stack = [
  "TypeScript", "React", "Next.js", "TanStack", "Node", "Go", "PostgreSQL",
  "Rust (learning)", "tRPC", "Tailwind", "Framer Motion", "Figma", "Swift",
];

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Vol. 04 — Portfolio · Spring 2026
            </div>
            <h1 className="font-display text-[14vw] md:text-[8.5vw] leading-[0.9] tracking-tighter text-balance">
              Building <em className="italic text-ember">quiet</em>
              <br />software
              <br />for loud
              <br />problems.
            </h1>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              I'm Kiran — a software developer based in Kuala Lumpur. I make web
              products, take photographs at strange hours, and occasionally
              draw on napkins. This is a record of those things.
            </p>
            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
              <Link to="/work" className="px-5 py-3 bg-ink text-paper hover:bg-ember transition-colors">
                See the work →
              </Link>
              <Link to="/about" className="hover:text-ember transition-colors">About me</Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pt-12">
            <figure className="relative grain">
              <img src={portrait} alt="Portrait silhouette" width={1024} height={1280} className="w-full h-auto object-cover aspect-[4/5] grayscale" />
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex justify-between">
                <span>fig. 01 — self, by window</span>
                <span>35mm · 2025</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* MARQUEE STACK */}
      <section className="border-y border-rule bg-secondary/40 py-6 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="mx-8 text-xs uppercase tracking-[0.3em] text-muted-foreground inline-flex items-center gap-8">
              {s}
              <span className="text-ember">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">§ 01 — Currently</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Notes from <em className="italic">this season.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 grid gap-8">
            {[
              { k: "Reading", v: "‘A Pattern Language’ — Christopher Alexander" },
              { k: "Building", v: "A small CLI for organising film negatives" },
              { k: "Listening", v: "Nils Frahm · Hania Rani · old Bon Iver" },
              { k: "Drinking", v: "Single-origin Ethiopian, V60, no sugar" },
              { k: "Avoiding", v: "Frameworks that need a Slack channel to install" },
            ].map((row) => (
              <div key={row.k} className="grid grid-cols-12 gap-4 hairline pt-6">
                <div className="col-span-4 md:col-span-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{row.k}</div>
                <div className="col-span-8 md:col-span-9 font-display text-2xl md:text-3xl leading-snug">{row.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEASER GRID */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-5xl md:text-7xl leading-none">Wander a little.</h2>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">04 sections</div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <Link to="/work" className="col-span-12 md:col-span-7 group block">
            <div className="overflow-hidden">
              <img src={photo1} alt="Work" width={1024} height={1280} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h3 className="font-display text-3xl italic">Work →</h3>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected projects, 2019–now</span>
            </div>
          </Link>
          <Link to="/journal" className="col-span-12 md:col-span-5 group block">
            <div className="overflow-hidden bg-secondary">
              <img src={scribble} alt="Journal" width={1024} height={1024} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" />
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h3 className="font-display text-3xl italic">Journal →</h3>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Photos, scribbles, UIs</span>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
