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
    title: "Mindycoach",
    category: "Therapy",
    url: "https://html.xpressbuddy.com/mindycoach/",
    description:
      "Therapy & counseling platform focused on anxiety, trauma recovery, mindfulness, CBT, EMDR and compassionate emotional wellness.",
    hue: "from-violet-500/25 via-fuchsia-300/10 to-transparent",
    span: "md:col-span-7",
  },
  {
    title: "Cargon",
    category: "Logistics",
    url: "https://unifato.com/cargon/",
    description:
      "Logistics & transportation company providing freight, transportation management and end-to-end supply chain solutions.",
    hue: "from-orange-500/25 via-yellow-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "Resox",
    category: "Health",
    url: "https://azim.commonsupport.com/Resox/",
    description:
      "Physiotherapy & chiropractic clinic specializing in rehabilitation, chiropractic care, recovery treatments and patient wellness.",
    hue: "from-emerald-400/25 via-teal-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "Bulidy",
    category: "Industrial",
    url: "https://weblayout.mnsithub.com/html/webplateone/bulidy/",
    description:
      "Industrial & manufacturing company focused on automation, advanced production systems and modern industrial solutions.",
    hue: "from-amber-500/30 via-yellow-300/10 to-transparent",
    span: "md:col-span-7",
  },
  {
    title: "Regalis",
    category: "Legal",
    url: "https://madebydesignesia.com/themes/regalis/",
    description:
      "Professional law firm and legal services platform delivering strategic counsel and confident legal representation.",
    hue: "from-yellow-500/30 via-amber-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Legalt",
    category: "Legal",
    url: "https://html.vikinglab.agency/legalt/",
    description:
      "Modern attorney and legal consultation platform focused on flexibility and client-centered legal strategy.",
    hue: "from-indigo-500/25 via-violet-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Hosue",
    category: "Real Estate",
    url: "https://unifato.com/hosue/",
    description:
      "Luxury real estate platform showcasing premium properties, architecture and high-end living experiences.",
    hue: "from-rose-400/25 via-amber-200/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Lawsy",
    category: "Legal",
    url: "https://unifato.com/lawsy/demo/index.html",
    description:
      "Criminal defense law platform emphasizing expert legal protection and personalized defense strategies.",
    hue: "from-red-500/25 via-rose-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Eolexi",
    category: "Business",
    url: "https://bracketweb.com/eolexi-php/index-2.php",
    description:
      "Business consulting and finance platform offering strategic planning, advisory services and IT consulting.",
    hue: "from-cyan-400/25 via-emerald-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Escul",
    category: "Education",
    url: "https://html.themehour.net/escul/demo/home-5.html",
    description:
      "Online education platform delivering digital learning, interactive courses and remote education experiences.",
    hue: "from-sky-500/25 via-cyan-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "Kidscamp",
    category: "Kids",
    url: "https://demo.themeim.com/html/kidscamp/",
    description:
      "Kids educational and activity platform focused on creativity, child development, safety and engaging learning.",
    hue: "from-fuchsia-500/25 via-amber-200/10 to-transparent",
    span: "md:col-span-3",
  },
  {
    title: "Kidso",
    category: "Kids",
    url: "https://htmldemo.zcubethemes.com/kidso/",
    description:
      "Modern children's learning platform promoting fun education, creativity and developmental growth.",
    hue: "from-pink-400/25 via-orange-200/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Conbiz",
    category: "Construction",
    url: "https://winsfolio.net/html/conbiz/service.html",
    description:
      "Construction and engineering services platform highlighting quality infrastructure and building expertise.",
    hue: "from-orange-400/30 via-yellow-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Medixi",
    category: "Health",
    url: "https://html.vecurosoft.com/medixi/",
    description:
      "Healthcare and medical platform focused on patient care, treatment solutions and healthy living.",
    hue: "from-emerald-500/25 via-teal-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "A3BNB",
    category: "Travel",
    url: "https://a3bnb.vet/",
    description:
      "Exclusive Airbnb-style travel platform for verified military, law enforcement, firefighters and first responders. 100% veteran-owned.",
    hue: "from-blue-500/25 via-indigo-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Conex Hub",
    category: "Logistics",
    url: "https://www.conexhub.com/",
    description:
      "Shipping container sales, leasing, delivery and modification across the United States with nationwide logistics coverage.",
    hue: "from-amber-500/25 via-orange-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Thoughtful Dots",
    category: "Wellness",
    url: "https://thoughtful-dots.vercel.app/",
    description:
      "Mindfulness and mandala art platform offering meditative classes, original artwork, dotting tools and creative healing experiences.",
    hue: "from-fuchsia-500/25 via-violet-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Transcendent Spaces",
    category: "Wellness",
    url: "https://transcendent-spaces.vercel.app/",
    description:
      "Immersive wellness experiences combining sound, breathwork and reflective practices inspired by neuroscience and contemplative traditions.",
    hue: "from-purple-500/25 via-indigo-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "DW² Transportation",
    category: "Transportation",
    url: "https://dw2-wheat.vercel.app/",
    description:
      "Luxury transportation service in Idaho specializing in wine tours, airport transfers and premium scenic travel experiences.",
    hue: "from-yellow-500/25 via-amber-300/10 to-transparent",
    span: "md:col-span-4",
  },
  {
    title: "Crimson Foot Care",
    category: "Health",
    url: "https://crimson-footcare.vercel.app/",
    description:
      "Professional podiatry clinic in Birmingham, Alabama specializing in diabetic foot care, fungal nail treatments and conservative care.",
    hue: "from-red-500/25 via-rose-300/10 to-transparent",
    span: "md:col-span-7",
  },
  {
    title: "Francisco Vidal",
    category: "Art",
    url: "https://francisco-vidal.vercel.app/",
    description:
      "Contemporary figurative artist exploring identity, diaspora, memory and cultural storytelling through paintings and exhibitions.",
    hue: "from-orange-500/25 via-rose-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "Limar Trolley Rental",
    category: "Transportation",
    url: "https://limar-trolley-rental.vercel.app/",
    description:
      "Premium luxury party trolley rental delivering entertainment, comfort and memorable celebration experiences on the move.",
    hue: "from-pink-500/25 via-rose-300/10 to-transparent",
    span: "md:col-span-5",
  },
  {
    title: "EZNY Brokerage",
    category: "Finance",
    url: "https://ezny-brokerage.vercel.app/",
    description:
      "Early-stage financial brokerage platform with future expansion planned for investment and financial services.",
    hue: "from-emerald-500/25 via-cyan-300/10 to-transparent",
    span: "md:col-span-7",
  },
  {
    title: "MusiX Infinity",
    category: "Education",
    url: "https://app-musixinfinity.vercel.app/",
    description:
      "Multi-role music education and management app for students, teachers and admins with role-based dashboards. Demo logins: student.sub@example.com / teacher@example.com / admin@gmail.com (pwd: 12345678).",
    hue: "from-violet-500/25 via-fuchsia-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Game Day Transportation",
    category: "Transportation",
    url: "https://www.gamedaytransportation.com/",
    description:
      "Event shuttle service to Hard Rock Stadium in Miami Gardens, Florida - including FIFA World Cup 2026 group transportation.",
    hue: "from-orange-500/25 via-amber-300/10 to-transparent",
    span: "md:col-span-6",
  },
  {
    title: "Ann Photography",
    category: "Art",
    url: "https://ann-photography-cd44.vercel.app/",
    description:
      "Personal photography portfolio showcasing creative work and visual storytelling from a retired professional photographer.",
    hue: "from-slate-400/25 via-stone-300/10 to-transparent",
    span: "md:col-span-12",
  },
];

const categories = [
  "All",
  "Travel",
  "Wellness",
  "Transportation",
  "Health",
  "Art",
  "Finance",
  "Education",
  "Therapy",
  "Logistics",
  "Industrial",
  "Legal",
  "Real Estate",
  "Business",
  "Kids",
  "Construction",
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
            desc="Real-world projects across therapy, logistics, health, legal, real estate, education, kids and construction. Click any card to preview the live site inside the studio."
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
