import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/Nav";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kiran Noor" },
      { name: "description", content: "A short, honest introduction." },
      { property: "og:title", content: "About — Kiran Noor" },
      { property: "og:description", content: "Software developer, photographer, occasional scribbler." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ About</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
              I write software the way I take photographs — <em className="italic">slowly,</em> and with a lot of waiting.
            </h1>
            <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I've been writing code for about ten years, professionally for
                eight. I care about interfaces that don't shout, systems that
                age well, and small details that nobody notices until they
                aren't there.
              </p>
              <p>
                Outside of work I shoot 35mm film, mostly at night. I make
                coffee on a temperamental espresso machine. I keep promising
                myself I'll learn to play the piano properly.
              </p>
              <p>
                If any of that resonates — or if you just want to argue about
                monospace fonts — I'd love to hear from you.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { k: "Based in", v: "Kuala Lumpur" },
                { k: "Born", v: "1996, Penang" },
                { k: "Working", v: "Independently" },
                { k: "Available", v: "Q3 2026" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{m.k}</div>
                  <div className="font-display text-xl mt-2">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="col-span-12 md:col-span-4 md:col-start-9 md:pt-20">
            <figure className="grain">
              <img src={portrait} alt="Portrait" width={1024} height={1280} loading="lazy" className="w-full aspect-[4/5] object-cover grayscale" />
              <figcaption className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                fig. 02 — taken by a friend
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-ink text-paper py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ Contact</div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
              Let's make <em className="italic text-ember">something</em> small and good.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-8 space-y-6">
            <a href="mailto:hello@example.com" className="block group">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">Email</div>
              <div className="font-display text-2xl mt-1 group-hover:text-ember transition-colors">hello@kiran.noor →</div>
            </a>
            <a href="#" className="block group">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">Calendar</div>
              <div className="font-display text-2xl mt-1 group-hover:text-ember transition-colors">Book 30 minutes →</div>
            </a>
            <a href="#" className="block group">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">Elsewhere</div>
              <div className="font-display text-2xl mt-1 group-hover:text-ember transition-colors">@knoor everywhere →</div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
