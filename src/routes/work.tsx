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
    blurb: "Designed and deployed a fully responsive digital invitation card for a real client. Features include a countdown timer, RSVP form, photo gallery, Google Maps embed, and mobile-first layout. Used by 150+ guests. Tech stack: React, HTML/CSS, JavaScript, Netlify.",
    tags: ["React", "HTML/CSS", "JS", "Netlify"],
    link: "https://tyrafoundfahmi.netlify.app"
  },
  {
    year: "2025",
    name: "Steganography Document Feature",
    role: "Full Stack Developer (GenSE Sdn. Bhd.)",
    blurb: "Built a secure encrypted watermarking system for PDF documents using AES-256 encryption with SHA-256 hashing and LSB steganography embedding. Ensured document authenticity, tamper resistance, and traceability of AI-generated PDFs for the Aura-AI system and SDIP system.",
    tags: ["PHP", "Steganography", "AES-256", "SHA-256"]
  },
  {
    year: "2024",
    name: "IoT Air Quality Monitor",
    role: "Academic Project",
    blurb: "Built an ESP32-based IoT system monitoring temperature, humidity (DHT11), and gas levels (MQ2). Implemented real-time MQTT data transmission to GCP and V-One cloud platforms. Triggers onboard buzzer and LED alerts when thresholds are exceeded.",
    tags: ["C++", "ESP32", "MQTT", "GCP"]
  },
  {
    year: "2023",
    name: "E‑commerce for Farmers",
    role: "Front-end Lead",
    blurb: "Led a team to build a React-based e-commerce platform supporting UN SDG-2 (Zero Hunger) and SDG-12 (Responsible Consumption). Eliminated middlemen between farmers and buyers. Designed the full interface in Figma.",
    tags: ["React", "Figma", "CSS3"]
  },
  {
    year: "2023",
    name: "Digital Watermarking System",
    role: "Final Year Project",
    blurb: "Developed a secure invisible watermarking system combining steganography and cryptography. Used AES-256 encryption with SHA-256 hashing for integrity checks, and LSB algorithm for embedding. Features image sharing via Outlook Desktop. Won Bronze at PIXEL 2025 USM.",
    tags: ["Python, Steganography", "AES-256", "SHA-256", "LSB"]
  },
];

const timeline = [
  { period: "Aug 2025 — Present", title: "Full Stack Developer", place: "GenSE Sdn. Bhd. · Implemented steganography features, UI upgrades, automated testing" },
  { period: "2025", title: "Personal Project: e-Invitation", place: "tyrafoundfahmi.netlify.app · 150+ guests" },
  { period: "2025", title: "CompTIA Security+ Training", place: "Iverson Associates Sdn Bhd" },
  { period: "2025", title: "Power BI Analytics Training", place: "Iverson Associates Sdn Bhd" },
  { period: "2021 — 2025", title: "B.Sc. Computer Science (Computing Infrastructure)", place: "Universiti Sains Malaysia · Psychology Minor · CGPA 3.38 · Dean's List (2 Semesters)" },
  { period: "March 2024 — Aug 2024", title: "Front-end Development Intern", place: "MOABI PLT · Integrated REST APIs, resolved 50+ UI bugs, maintained 90% design accuracy" },
  { period: "2024", title: "Google UX Design Foundations", place: "Google" },
];

function WorkPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">§ Work</div>
        <h1 className="font-display text-6xl md:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
          Front-end, security, and a <em className="italic">little</em> bit of steganography.
        </h1>
      </section>

      {/* Project list */}
      <section className="container pb-24">
        <div className="hairline" />
        {projects.map((p) => (
          <article key={p.name} className="grid grid-cols-12 gap-4 py-10 border-b border-rule group hover:bg-secondary/30 transition-colors">
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

      {/* Timeline */}
      <section className="container py-24">
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