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
      <section className="container pt-20 pb-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ About</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
              I build front-ends, hide messages in images, and <em className="italic">still</em> love a good table join.
            </h1>
            <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground max-w-xl">
              <p>
                I'm Nurul Najwa binti Mat Aris — a Computer Science graduate from Universiti Sains Malaysia,
                where I earned a CGPA of 3.38 and made the Dean's List for two semesters. My degree focused on
                Computing Infrastructure with a minor in Psychology, giving me a unique blend of technical and
                human-centered design thinking.
              </p>
              <p>
                My final year project combined steganography and cryptography — I built an invisible watermarking
                system using AES‑256 encryption with SHA‑256 hashing, embedded via the LSB algorithm.
                The project won Bronze at PIXEL 2025 USM and included image sharing functionality via Outlook Desktop.
              </p>
              <p>
                I interned as a front-end developer at MOABI PLT, where I integrated REST APIs documented in Swagger,
                achieved a 90% API integration success rate, resolved 50+ front-end bugs, and maintained 90% design
                accuracy from Figma prototypes across 20+ responsive web pages using Angular, Bootstrap, and RxJS.
              </p>
              <p>
                Currently, I'm a Full Stack Developer at GenSE Sdn. Bhd., where I implement secure steganography-based
                encrypted document features, upgrade user interfaces, develop automated testing scripts with Laravel Dusk,
                and build document integrity features that embed encrypted hidden metadata into AI-generated PDFs.
              </p>
              <p>
                Outside of work, I shoot 35mm film, read about security vulnerabilities, drink pour-over coffee,
                and continuously expand my skills — currently training for CompTIA Security+ and Power BI analytics.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { k: "Based in", v: "Selangor, Malaysia" },
                { k: "Born", v: "2002" },
                { k: "Degree", v: "B.Sc. CS (Infrastructure)" },
                { k: "Languages", v: "Malay · English" },
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
        <div className="container grid grid-cols-12 gap-6">
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