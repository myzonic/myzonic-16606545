import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#tools", label: "Tools" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-tight">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 pl-1">
            <span className="relative inline-block h-7 w-7 rounded-lg bg-gold ring-1 ring-[hsl(var(--gold-2)/0.4)]">
              <span className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_30%_30%,hsl(0_0%_100%/0.6),transparent_60%)]" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">Solvix</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="sheen group relative hidden overflow-hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] md:inline-flex"
            >
              Start a Project
            </a>
            <button
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full glass-card md:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl glass-strong p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-[hsl(var(--primary-foreground))]"
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
