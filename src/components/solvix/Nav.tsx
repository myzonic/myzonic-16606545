import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Linkedin, Facebook, Instagram } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#tools", label: "Tools" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

const pageLinks = [
  { to: "/bookkeeping", label: "Bookkeeping" },
  { to: "/logodesign", label: "Logo Design" },
  { to: "/websitedesign", label: "Website Design" },
  { to: "/graphicdesign", label: "Graphic Design" },
];

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { href: "https://www.facebook.com/myzonic", label: "Facebook", icon: <Facebook className="h-4 w-4" /> },
  { href: "https://www.instagram.com/myzonicllc", label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.4v6.6a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.03 1 .08v3.13a3.4 3.4 0 1 0 2.5 3.29V3h3z" />
      </svg>
    ),
  },
];

const THEME_KEY = "myzonic.theme";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const saved = localStorage.getItem(THEME_KEY);
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    document.documentElement.classList.toggle("light", !next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-tight">
        <nav
          className={`flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 pl-2">
            <img src="/logo.svg" alt="Myzonic" className="h-[6.25rem] w-auto" />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {isHome
              ? links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))
              : pageLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to="/"
                      className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Home
                    </Link>
                  </li>
                ))}
            {pageLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground ${
                    location.pathname === l.to
                      ? "text-[hsl(var(--gold-3))]"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <div className="hidden items-center gap-1 md:flex">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-[hsl(var(--gold-3))]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-[hsl(var(--gold-3))] hover:bg-white/5"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="sheen relative hidden overflow-hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] md:inline-flex"
            >
              Contact Us
            </a>
            <button
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full glass-card lg:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl glass-strong p-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {isHome
                ? links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))
                : (
                    <li>
                      <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                      >
                        Home
                      </Link>
                    </li>
                  )}
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm hover:bg-white/5 ${
                      location.pathname === l.to
                        ? "text-[hsl(var(--gold-3))]"
                        : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 px-4 pt-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-[hsl(var(--gold-3))]"
                  >
                    {s.icon}
                  </a>
                ))}
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-[hsl(var(--primary-foreground))]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
