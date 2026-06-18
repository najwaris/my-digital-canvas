import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-ember" />
          <span className="italic">N.</span>Najwa
        </Link>
        <nav className="flex items-center gap-6 md:gap-10 text-xs uppercase tracking-[0.2em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-ember" }}
              activeOptions={{ exact: true }}
              className="hover:text-ember transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="mailto:wawaris2002@gmail.com" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] hover:text-ember transition-colors">
          Say hello →
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <div>© 2026 — Crafted with care</div>
        <div className="flex gap-6">
          <a href="https://github.com/najwaris" target="_blank" rel="noopener noreferrer" className="hover:text-ember">GitHub</a>
          <a href="https://www.linkedin.com/in/nurul-najwa-mat-aris" target="_blank" rel="noopener noreferrer" className="hover:text-ember">LinkedIn</a>
          <a href="mailto:wawaris2002@gmail.com" className="hover:text-ember">Email</a>
        </div>
      </div>
    </footer>
  );
}