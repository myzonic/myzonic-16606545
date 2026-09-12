import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Facebook, Instagram, Linkedin, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicePages } from "@/data/servicePages";

const homeLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];
const featuredPages = [
  { to: "/bookkeeping", label: "Bookkeeping" },
  { to: "/logodesign", label: "Logo Design" },
  { to: "/websitedesign", label: "Website Design" },
  { to: "/graphicdesign", label: "Graphic Design" },
];
const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { href: "https://www.facebook.com/myzonic", label: "Facebook", icon: <Facebook className="h-4 w-4" /> },
  { href: "https://www.instagram.com/myzonicllc", label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
];
const THEME_KEY = "myzonic.theme";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    const saved = localStorage.getItem(THEME_KEY);
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    document.documentElement.classList.toggle("light", !next);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3 md:py-4"}`}>
      <div className="container-tight">
        <nav className={`flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 md:rounded-full ${scrolled ? "glass-strong shadow-xl shadow-black/10" : "border border-transparent"}`}>
          <Link to="/" aria-label="Myzonic home" className="flex shrink-0 items-center px-1"><img src="/logo.svg" alt="Myzonic" className="h-11 w-auto sm:h-12" /></Link>
          <div className="hidden items-center gap-1 xl:flex">
            <a href={homeHref("#services")} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Services</a>
            <SolutionsMenu locationPath={location.pathname} />
            <a href={homeHref("#work")} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Work</a>
            <a href={homeHref("#process")} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Process</a>
            <a href={homeHref("#faq")} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
          </div>
          <div className="flex items-center gap-1.5">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-[hsl(var(--gold-3))] transition-colors hover:bg-white/5">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <a href={homeHref("#contact")} className="sheen hidden items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] md:inline-flex">Start a project <ArrowUpRight className="h-4 w-4" /></a>
            <button aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-full border border-gold-soft bg-card/80 text-[hsl(var(--gold-3))] transition-colors hover:bg-white/5 xl:hidden" onClick={() => setOpen((value) => !value)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </nav>
        {open && (
          <div className="mt-2 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-3xl border border-gold-soft bg-[hsl(var(--background)/0.98)] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl xl:hidden">
            <div className="grid gap-1 sm:grid-cols-2">
              {(isHome ? homeLinks : [{ href: "/", label: "Home" }]).map((link) => <a key={link.href} href={link.href.startsWith("#") ? homeHref(link.href) : link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5">{link.label}</a>)}
            </div>
            <div className="mt-4 rounded-2xl border border-gold-soft bg-card/50 p-3">
              <div className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--gold-3))]"><Sparkles className="h-3.5 w-3.5" /> Explore services</div>
              <div className="grid gap-1 sm:grid-cols-2">
                {featuredPages.map((page) => <MobilePageLink key={page.to} {...page} active={location.pathname === page.to} />)}
                {servicePages.map((service) => <MobilePageLink key={service.slug} to={`/services/${service.slug}`} label={service.title} active={location.pathname === `/services/${service.slug}`} />)}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-gold-soft pt-4">
              <div className="flex items-center gap-1">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-[hsl(var(--gold-3))] transition-colors hover:bg-white/5">{social.icon}</a>)}</div>
              <a href={homeHref("#contact")} onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))]">Start a project <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function SolutionsMenu({ locationPath }: { locationPath: string }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Solutions <ChevronDown className="h-3.5 w-3.5" /></button></DropdownMenuTrigger><DropdownMenuContent align="center" className="w-[44rem] rounded-3xl border-gold-soft bg-[hsl(var(--background))] p-3 shadow-2xl"><div className="grid grid-cols-2 gap-4 p-2"><div><DropdownMenuLabel className="px-2 text-xs uppercase tracking-[0.16em] text-[hsl(var(--gold-3))]">Featured services</DropdownMenuLabel><div className="mt-1 grid gap-1">{featuredPages.map((page) => <DesktopPageLink key={page.to} {...page} active={locationPath === page.to} />)}</div></div><div><DropdownMenuLabel className="px-2 text-xs uppercase tracking-[0.16em] text-[hsl(var(--gold-3))]">Technology & business</DropdownMenuLabel><div className="mt-1 grid grid-cols-2 gap-1">{servicePages.map((service) => <DesktopPageLink key={service.slug} to={`/services/${service.slug}`} label={service.title} active={locationPath === `/services/${service.slug}`} compact />)}</div></div></div><DropdownMenuSeparator /><a href="/#contact" className="mx-2 mt-2 flex items-center justify-between rounded-2xl bg-gold/10 px-4 py-3 text-sm font-semibold text-[hsl(var(--gold-3))] transition-colors hover:bg-gold/15">Not sure where to start? Let’s talk <ArrowUpRight className="h-4 w-4" /></a></DropdownMenuContent></DropdownMenu>;
}

function DesktopPageLink({ to, label, active, compact = false }: { to: string; label: string; active: boolean; compact?: boolean }) {
  return <Link to={to} className={`rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/5 ${active ? "bg-gold/10 text-[hsl(var(--gold-3))]" : "text-muted-foreground"} ${compact ? "text-xs" : ""}`}>{label}</Link>;
}
function MobilePageLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return <Link to={to} className={`rounded-xl px-3 py-2.5 text-sm leading-5 transition-colors hover:bg-white/5 ${active ? "bg-gold/10 text-[hsl(var(--gold-3))]" : "text-muted-foreground"}`}>{label}</Link>;
}
