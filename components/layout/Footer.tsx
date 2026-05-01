const FOOTER_LINKS = [
  { icon: "code",     label: "Source",   href: "#" },
  { icon: "share",    label: "Share",    href: "#" },
  { icon: "terminal", label: "Terminal", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-zinc-500 font-space-grotesk tracking-widest">
            MIRJANA_CALE
          </span>
          <span className="h-4 w-px bg-zinc-800" />
          <span className="font-space-grotesk text-xs text-zinc-500 opacity-80">
            © 2025 TERMINAL_PORTFOLIO. BUILT_WITH_PRECISION
          </span>
        </div>

        <div className="flex items-center gap-5">
          {FOOTER_LINKS.map(({ icon, label, href }) => (
            <a
              key={icon}
              href={href}
              aria-label={label}
              className="text-zinc-500 hover:text-emerald-400 transition-colors opacity-80 hover:opacity-100"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
