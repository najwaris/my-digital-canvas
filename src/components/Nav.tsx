import { Link } from "@tanstack/react-router";
import * as React from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  // { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-rule">
        <div className="container py-4 md:py-5 flex items-center justify-between">

          <Link
            to="/"
            className="font-display text-xl tracking-tight flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-ember" />
            <span className="italic">N.</span>Najwa
          </Link>


          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6 md:gap-10 text-xs uppercase tracking-[0.2em]">
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


          <a
            href="mailto:wawaris2002@gmail.com"
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] hover:text-ember"
          >
            Say hello →
          </a>


          {/* Mobile button */}
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden ml-4 p-2 rounded-md focus:outline-none"
            onClick={() => setOpen(!open)}
          >

            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            ) : (

              <svg width="22" height="22" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

            )}

          </button>

        </div>
      </header>



      {/* Mobile Menu OUTSIDE header */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >

          <div
            className="absolute top-20 left-6 right-6 bg-background border border-rule rounded-md p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >

            <nav className="flex flex-col gap-5 text-sm uppercase tracking-widest">

              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="hover:text-ember transition-colors"
                >
                  {l.label}
                </Link>
              ))}


              <a
                href="mailto:wawaris2002@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-3 hover:text-ember"
              >
                Say hello →
              </a>

            </nav>

          </div>

        </div>
      )}

    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
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