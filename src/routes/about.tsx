import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/Nav";
import portrait1 from "@/assets/portrait-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Najwa Aris" },
      { name: "description", content: "Computer science graduate, front-end developer, steganography enthusiast." },
      { property: "og:title", content: "About — Najwa Aris" },
      { property: "og:description", content: "Front-end developer, security curious, occasional photographer." },
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
              I build front-ends, hide messages in images, and <em className="italic">still</em> love a good table join.
            </h1>
            <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I'm Nurul Najwa — a computer science graduate from Universiti Sains Malaysia (CGPA 3.38, Dean's List).
                My final year project combined steganography and cryptography (AES‑256 + LSB embedding) to create an
                invisible watermarking system. It won Bronze at PIXEL 2025.
              </p>
              <p>
                I've interned as a front-end developer at MOABI PLT, where I integrated REST APIs, resolved 50+ UI bugs,
                and maintained 90% design accuracy from Figma prototypes. Currently I'm a full-stack developer at GenSE,
                adding secure document features and password strength checkers.
              </p>
              <p>
                Outside of work I shoot 35mm film, read about security vulnerabilities, and drink pour-over coffee.
                I'm also training for CompTIA Security+ (2025) and learning Power BI analytics.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { k: "Based in", v: "Selangor, Malaysia" },
                { k: "Born", v: "2002" },
                { k: "Degree", v: "B.Sc. CS (Infrastructure)" },
                // { k: "Available", v: "Q3 2026" },
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
              <img src={portrait1} alt="Portrait of Najwa" width={1024} height={1280} loading="lazy" className="w-full aspect-[4/5] object-cover" />
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
              Let's build <em className="italic text-ember">something</em> small and good.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-8 space-y-6">
            <a href="mailto:wawaris2002@gmail.com" className="block group">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">Email</div>
              <div className="font-display text-2xl mt-1 group-hover:text-ember transition-colors">wawaris2002@gmail.com →</div>
            </a>
            <a href="https://www.linkedin.com/in/nurul-najwa-mat-aris" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">LinkedIn</div>
              <div className="font-display text-2xl mt-1 group-hover:text-ember transition-colors">/in/nurul-najwa →</div>
            </a>
            <a href="https://github.com/najwaris" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">GitHub</div>
              <div className="font-display text-2xl mt-1 group-hover:text-ember transition-colors">github.com/najwaris →</div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}