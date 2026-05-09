import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Loader2 } from "lucide-react";
import { SectionHeader } from "./ServicesBento";

type Project = {
  title: string;
  category: string;
  url: string;
  description: string;
  hue: string;
  span: string;
};

const projects: Project[] = [
  {
    title: "A3BNB",
    category: "Travel",
    url: "https://a3bnb.vet/",
    description:
      "Exclusive Airbnb-style travel platform for verified military, law enforcement, firefighters and first responders. 100% veteran-owned with community-only stays and reduced fees.",
    hue: "from-amber-500/30 via-yellow-300/10 to-transparent",
    span: "md:col-span-7",
  },
  {
    title: "Drink Jubi",
    category: "Wellness",
    url: "https://drinkjubi.com/",
    description:
      "Wellness brand offering natural kratom-based shots and tablets for energy, focus, relaxation and mood — plant-based, lab-tested and made in the USA.",
    hue: "from-emerald-400/25 via-yellow-200/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "Gard’nClean",
    category: "Health",
    url: "https://gardnclean.com/",
    description:
      "Chlorine dioxide-based sanitation solutions for agriculture and indoor cultivation — eliminating bacteria, mold, viruses and pathogens across surfaces, water and air.",
    hue: "from-cyan-400/25 via-emerald-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "Conex Hub",
    category: "Logistics",
    url: "https://www.conexhub.com/",
    description:
      "Nationwide shipping container sales, leasing, delivery and customization for commercial and industrial clients across California, Arizona and beyond.",
    hue: "from-orange-500/25 via-yellow-300/10 to-transparent",
    span: "md:col-span-7",
  },
  {
    title: "Thoughtful Dots",
    category: "Art",
    url: "https://thoughtful-dots.vercel.app/",
    description:
      "Mindfulness and creative platform centered on mandala art, meditation and intentional creation practices for healing, presence and reflection.",
    hue: "from-rose-400/25 via-fuchsia-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Transcendent Spaces",
    category: "Wellness",
    url: "https://transcendent-spaces.vercel.app/",
    description:
      "Immersive digital experience platform blending sound, storytelling, breathwork and reflection-based journeys for emotional restoration and clarity.",
    hue: "from-violet-500/25 via-indigo-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "DW² Transportation",
    category: "Transportation",
    url: "https://dw2-wheat.vercel.app/",
    description:
      "Luxury transportation in Idaho offering wine tours, airport transfers and custom scenic travel — focused on comfort and premium service.",
    hue: "from-yellow-500/30 via-amber-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Crimson Foot Care",
    category: "Health",
    url: "https://crimson-footcare.vercel.app/",
    description:
      "Birmingham, Alabama podiatry clinic specializing in conservative treatment of foot and ankle conditions, diabetic care and chronic pain management.",
    hue: "from-red-500/25 via-rose-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Francisco Vidal",
    category: "Art",
    url: "https://francisco-vidal.vercel.app/",
    description:
      "Portfolio of a New York-based contemporary figurative artist exploring identity, diaspora, memory and cultural storytelling through painting and drawing.",
    hue: "from-fuchsia-500/25 via-amber-200/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Electric Sun",
    category: "Beauty",
    url: "https://electric-sun.vercel.app/",
    description:
      "Salon, spa and boutique in Fernley, Nevada offering hair, skincare, massage, tanning and wellness retail in a modern beauty environment.",
    hue: "from-orange-400/30 via-yellow-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "EZNY Brokerage",
    category: "Finance",
    url: "https://ezny-brokerage.vercel.app/",
    description:
      "Early-stage financial services platform under active development — laying the foundation for future brokerage and investment services.",
    hue: "from-emerald-500/25 via-teal-300/10 to-transparent",
    span: "md:col-span-3",
  },
  {
    title: "MusiX Infinity",
    category: "Education",
    url: "https://app-musixinfinity.vercel.app",
    description:
      "Multi-role music education platform for students, teachers and administrators with structured learning tools, dashboards and role-based access.",
    hue: "from-indigo-500/25 via-violet-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Game Day Transportation",
    category: "Transportation",
    url: "https://www.gamedaytransportation.com/",
    description:
      "Event shuttle service to Hard Rock Stadium in Miami Gardens, Florida — group travel and stadium shuttles for major events including FIFA World Cup 2026.",
    hue: "from-sky-500/25 via-cyan-300/10 to-transparent",
    span: "md:col-span-12",
  },
];

const categories = [
  "All",
  "Travel",
  "Wellness",
  "Health",
  "Logistics",
  "Education",
  "Art",
  "Transportation",
  "Finance",
  "Beauty",
];

function PreviewCard({ p }: { p: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--gold-2)/0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--gold-2)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--gold-2)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-6 rounded-2xl border border-gold-soft glass-card p-5 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </div>
          <div className="h-2 w-24 rounded-full bg-white/10" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gold/40" />
          <div className="h-2 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="col-span-2 h-16 rounded-xl bg-white/5" />
          <div className="h-16 rounded-xl bg-gold/30" />
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-gold/20" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="relative py-28">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Work that <span className="text-gradient-gold italic">moves</span> the metric.
              </>
            }
            desc="Real client projects across travel, wellness, health, logistics, art, transportation, finance and beauty. Click any card to preview the live site inside the studio."
          />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm hover:bg-white/5 md:inline-flex"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? "border-transparent bg-gold text-[hsl(var(--primary-foreground))] shadow-[0_0_30px_hsl(var(--gold-2)/0.35)]"
                    : "border-gold-soft text-muted-foreground hover:border-[hsl(var(--gold-3)/0.6)] hover:text-foreground"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.title}
                layout
                onClick={() => {
                  setIframeLoaded(false);
                  setActive(p);
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className={`group relative block overflow-hidden rounded-[1.75rem] border border-gold-soft bg-[hsl(var(--surface))] text-left ${p.span}`}
              >
                <PreviewCard p={p} />

                <div className="absolute left-5 top-5 z-10">
                  <span className="rounded-full border border-gold-soft bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider text-[hsl(var(--gold-3))] backdrop-blur-md">
                    {p.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
                    Preview case <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-semibold">{p.title}</h3>
                    <p className="line-clamp-1 text-xs text-muted-foreground">{p.description}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[hsl(var(--gold-3))] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Embedded preview modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${active.title} live preview`}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="relative z-10 flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] shadow-[0_30px_120px_-20px_hsl(var(--gold-2)/0.35)]"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-3 border-b border-gold-soft bg-black/40 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <div className="mx-2 hidden flex-1 items-center gap-2 rounded-full border border-gold-soft bg-black/40 px-4 py-1.5 text-xs text-muted-foreground sm:flex">
                  <span className="rounded-full bg-[hsl(var(--gold-2)/0.15)] px-2 py-0.5 text-[10px] uppercase tracking-wider text-[hsl(var(--gold-3))]">
                    {active.category}
                  </span>
                  <span className="truncate">{active.url}</span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-[hsl(var(--primary-foreground))] hover:opacity-90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open Live Site
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close preview"
                    className="rounded-full border border-gold-soft p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <div className="relative flex-1 overflow-hidden bg-white">
                {!iframeLoaded && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[hsl(var(--surface))] text-muted-foreground">
                    <Loader2 className="h-6 w-6 animate-spin text-[hsl(var(--gold-3))]" />
                    <p className="text-sm">Loading {active.title}…</p>
                    <p className="max-w-md px-6 text-center text-xs text-muted-foreground/80">
                      Some sites disallow embedding. If the preview stays blank, use{" "}
                      <span className="text-[hsl(var(--gold-3))]">Open Live Site</span> to view it
                      in a new tab.
                    </p>
                  </div>
                )}
                <iframe
                  key={active.url}
                  src={active.url}
                  title={`${active.title} live preview`}
                  loading="lazy"
                  onLoad={() => setIframeLoaded(true)}
                  referrerPolicy="no-referrer"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
                  className="h-full w-full border-0"
                />
              </div>

              {/* Footer caption */}
              <div className="border-t border-gold-soft bg-black/40 px-5 py-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="truncate font-display text-sm font-semibold">{active.title}</h4>
                    <p className="line-clamp-1 text-xs text-muted-foreground">
                      {active.description}
                    </p>
                  </div>
                  <span className="hidden text-[10px] uppercase tracking-wider text-[hsl(var(--gold-3))] sm:inline">
                    Embedded preview
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
