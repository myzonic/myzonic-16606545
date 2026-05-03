import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./ServicesBento";

type Project = {
  title: string;
  category: string;
  year: string;
  hue: string;
  span: string;
};

const projects: Project[] = [
  { title: "Aurum Finance", category: "Fintech · Web & App", year: "2025", hue: "from-amber-500/30 via-yellow-300/10 to-transparent", span: "md:col-span-7" },
  { title: "Noctura Apparel", category: "E-commerce · Shopify", year: "2025", hue: "from-rose-500/20 via-orange-300/10 to-transparent", span: "md:col-span-5" },
  { title: "Helix Health", category: "SaaS · UI/UX", year: "2024", hue: "from-emerald-400/20 via-yellow-200/10 to-transparent", span: "md:col-span-5" },
  { title: "Vox Studio", category: "Brand · Identity", year: "2024", hue: "from-fuchsia-400/20 via-yellow-200/10 to-transparent", span: "md:col-span-7" },
  { title: "Strato Logistics", category: "AI Automation", year: "2025", hue: "from-cyan-400/20 via-yellow-200/10 to-transparent", span: "md:col-span-6" },
  { title: "Verde Hospitality", category: "Web · Performance", year: "2024", hue: "from-yellow-400/30 via-amber-200/10 to-transparent", span: "md:col-span-6" },
];

export default function Portfolio() {
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
            desc="A taste of recent collaborations across fintech, retail, SaaS and hospitality."
          />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm hover:bg-white/5 md:inline-flex"
          >
            See all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              className={`group relative block overflow-hidden rounded-[1.75rem] border border-gold-soft bg-[hsl(var(--surface))] ${p.span}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--gold-2)/0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--gold-2)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--gold-2)/0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
                {/* Mock UI */}
                <div className="absolute inset-6 rounded-2xl border border-gold-soft glass-card p-5 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-16 rounded-full bg-[hsl(var(--gold-2)/0.6)]" />
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/15" />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="col-span-2 h-20 rounded-xl bg-white/5" />
                    <div className="h-20 rounded-xl bg-gold/30" />
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    <div className="h-10 rounded-lg bg-white/5" />
                    <div className="h-10 rounded-lg bg-white/5" />
                    <div className="h-10 rounded-lg bg-white/5" />
                    <div className="h-10 rounded-lg bg-gold/20" />
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-[hsl(var(--primary-foreground))]">
                    View case <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <span className="text-xs text-[hsl(var(--gold-3))]">{p.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
