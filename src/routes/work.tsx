import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/Nav";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Najwa Aris" },
      { name: "description", content: "Selected projects, freelance work, and experience." },
      { property: "og:title", content: "Work — Najwa Aris" },
      { property: "og:description", content: "Front-end projects, steganography tools, and a live engagement invitation." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    year: "2025",
    name: "Live Engagement Invitation",
    role: "Freelance Front-end Developer",
    blurb: "Designed and deployed a fully responsive digital invitation card. Features: countdown timer, RSVP form, photo gallery, Google Maps embed, and mobile-first layout. Built for a real client and used by 150+ guests.",
    tags: ["React", "HTML/CSS", "JS", "Netlify"],
    link: "https://tyrafoundfahmi.netlify.app"
  },
  {
    year: "2025",
    name: "Steganography Document Feature",
    role: "Full Stack Developer (GenSE Sdn. Bhd.)",
    blurb: "Implemented AES-256 + SHA-256 encrypted watermarking inside PDFs for SDIP system. Ensured document authenticity and tamper resistance using LSB embedding.",
    tags: ["Java", "Steganography", "AES-256", "SHA-256"]
  },
  {
    year: "2024",
    name: "IoT Air Quality Monitor",
    role: "Academic Project",
    blurb: "ESP32-based system tracking temperature, humidity, and gas (MQ2). Real-time MQTT transmission to GCP/V-One. Triggers buzzer + LEDs when thresholds exceeded.",
    tags: ["C++", "ESP32", "MQTT", "GCP"]
  },
  {
    year: "2023",
    name: "E‑commerce for Farmers",
    role: "Front-end Lead",
    blurb: "React-based platform supporting UN SDG-2 & SDG-12. Eliminated middlemen between farmers and buyers. Designed in Figma.",
    tags: ["React", "Figma", "CSS3"]
  },
];

const timeline = [
  { period: "2025 — present", title: "Full Stack Developer", place: "GenSE Sdn. Bhd." },
  { period: "2024 — 2025", title: "Front-end Development Intern", place: "MOABI PLT" },
  { period: "2021 — 2025", title: "B.Sc. Computer Science (Infrastructure)", place: "Universiti Sains Malaysia · CGPA 3.38" },
  { period: "2025", title: "Freelance Engagement Invitation", place: "tyrafoundfahmi.netlify.app" },
  { period: "2025", title: "CompTIA Security+ Training", place: "Iverson Associates" },
];

function WorkPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ Work</div>
        <h1 className="font-display text-6xl md:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
          Front-end, security, and a <em className="italic">little</em> bit of steganography.
        </h1>
      </section>

      {/* Project list */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
        <div className="hairline" />
        {projects.map((p) => (
          <article key={p.name} className="grid grid-cols-12 gap-4 py-10 border-b border-rule group hover:bg-secondary/30 transition-colors -mx-6 md:-mx-12 px-6 md:px-12">
            <div className="col-span-2 md:col-span-1 text-xs uppercase tracking-[0.25em] text-muted-foreground pt-3">{p.year}</div>
            <div className="col-span-10 md:col-span-5">
              <h3 className="font-display text-4xl md:text-5xl">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-ember transition-colors">
                    {p.name} ↗
                  </a>
                ) : (
                  p.name
                )}
              </h3>
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

      {/* Timeline - now matches your real history */}
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