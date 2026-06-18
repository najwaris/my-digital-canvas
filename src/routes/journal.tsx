import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/Nav";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import scribble from "@/assets/scribble-1.jpg";
import ui1 from "@/assets/ui-1.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Photographs, scribbles & UIs" },
      { name: "description", content: "A loose archive of photos, sketches, and design experiments." },
      { property: "og:title", content: "Journal — Najwa Aris" },
      { property: "og:description", content: "Photographs, scribbles, and design experiments." },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ Journal</div>
        <h1 className="font-display text-6xl md:text-9xl leading-[0.9] tracking-tighter">
          Things found <em className="italic">in the margins.</em>
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A loose archive — photographs taken on slow walks, scribbles from
          notebooks, and UI experiments that never shipped. Updated when the
          mood strikes.
        </p>
      </section>

      {/* PHOTOGRAPHY */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex items-end justify-between mb-8 hairline pt-6">
          <h2 className="font-display text-3xl italic">Photographs</h2>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Pl. 01 — 03</span>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <figure className="col-span-12 md:col-span-7 grain">
            <img src={photo1} alt="Tokyo street" width={1024} height={1280} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex justify-between">
              <span>Pl. 01 — Shinjuku, after rain</span><span>Portra 400</span>
            </figcaption>
          </figure>
          <div className="col-span-12 md:col-span-5 grid gap-6">
            <figure className="grain">
              <img src={photo2} alt="Mountains at dawn" width={1280} height={896} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Pl. 02 — Cameron Highlands</figcaption>
            </figure>
            <figure className="grain">
              <img src={photo3} alt="Coffee shop" width={1024} height={1280} loading="lazy" className="w-full aspect-square object-cover" />
              <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Pl. 03 — Sunday, alone</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SCRIBBLES */}
      <section className="bg-secondary/50 py-24 border-y border-rule">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">§ Scribbles</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Half-thoughts in <em className="italic">ink.</em>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-sm">
              I keep a black Muji notebook in my back pocket. Most of what's
              inside makes sense to no one — including, often, me. Here are a
              few pages anyway.
            </p>
            <div className="mt-8 space-y-4 font-display text-2xl italic">
              <p>" The grid is not the enemy. The grid is the floor. "</p>
              <p>" Cache is just memory with anxiety. "</p>
              <p>" Design is what's left after you remove the explanations. "</p>
            </div>
          </div>
          <figure className="col-span-12 md:col-span-6 md:col-start-7">
            <img src={scribble} alt="Ink scribble" width={1024} height={1024} loading="lazy" className="w-full aspect-square object-cover mix-blend-multiply" />
            <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">№ 47 — “a cathedral, maybe”</figcaption>
          </figure>
        </div>
      </section>

      {/* UI EXPERIMENTS */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-4">§ Figma</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              UIs that never <em className="italic">shipped.</em>
            </h2>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Concepts and explorations from the cutting room floor.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-6">
            <figure className="bg-card p-6">
              <img src={ui1} alt="Mobile dashboard" width={1024} height={1024} loading="lazy" className="w-full aspect-square object-contain" />
              <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Aera — finance app, 2025</figcaption>
            </figure>
            <figure className="bg-ink text-paper p-6 flex flex-col justify-between aspect-square">
              <div className="text-xs uppercase tracking-[0.3em] opacity-60">Concept · 003</div>
              <div className="font-display text-4xl leading-tight">
                A reading app that <em className="italic text-ember">forgets</em> what you've read, on purpose.
              </div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-60">— Slowtide v2</div>
            </figure>
            <figure className="border border-rule p-6 aspect-square flex flex-col justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Type study · 011</div>
              <div className="font-display text-[10rem] leading-[0.8] italic text-ember">Aa</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Fraunces vs. Söhne</div>
            </figure>
            <figure className="bg-ember text-paper p-6 aspect-square flex flex-col justify-between">
              <div className="text-xs uppercase tracking-[0.3em] opacity-80">Sketch · 022</div>
              <div className="font-display text-3xl leading-tight">
                "What if the cursor had a heartbeat?"
              </div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-80">— a question for nobody</div>
            </figure>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
