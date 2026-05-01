"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { label: "PROJECTS", href: "#projects" },
  { label: "STACK",    href: "#skills" },
  { label: "PROFILE",  href: "#about" },
  { label: "CONTACT",  href: "#contact" },
];

const SECTION_IDS = ["projects", "skills", "about", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [activeLink, setActiveLink]   = useState("projects");
  const [menuOpen, setMenuOpen]       = useState(false);

  /* border-b on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active link via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 h-16 bg-zinc-950/80 backdrop-blur-[12px] transition-all duration-300 ${
        scrolled ? "border-b border-zinc-800" : "border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="flex items-center gap-2.5 group"
        aria-label="Mirjana Cale — back to top"
      >
        <span className="material-symbols-outlined text-primary text-xl">
          terminal
        </span>
        <span className="font-space-grotesk text-base font-bold tracking-tighter text-white uppercase">
          MIRJANA_CALE
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = activeLink === id;
          return (
            <a
              key={href}
              href={href}
              className={`font-space-grotesk text-sm font-medium tracking-wide transition-all pb-0.5 ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-white border-b-2 border-transparent"
              }`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* Resume + hamburger */}
      <div className="flex items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-container text-on-primary-container px-4 py-2 font-space-grotesk text-sm font-medium rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95 transition-all duration-200"
        >
          RESUME
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-on-surface-variant transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-on-surface-variant transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-on-surface-variant transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-zinc-950/95 backdrop-blur-[12px] border-b border-zinc-800 py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="font-space-grotesk text-sm font-medium tracking-wide text-on-surface-variant hover:text-primary transition-colors py-2"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
