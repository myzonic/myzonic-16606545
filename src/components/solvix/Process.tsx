import { motion } from "framer-motion";
import { Compass, Lightbulb, Palette, Rocket, Wrench, TrendingUp } from "lucide-react";
import { SectionHeader } from "./ServicesBento";

const steps = [
  { n: "01", title: "Discover", desc: "Audit, interviews and competitive analysis to anchor strategy in reality.", icon: <Compass className="h-5 w-5" /> },
  { n: "02", title: "Strategy", desc: "Positioning, scope and a clear roadmap your team can rally around.", icon: <Lightbulb className="h-5 w-5" /> },
  { n: "03", title: "Design", desc: "Brand systems, UX flows and prototypes engineered for clarity.", icon: <Palette className="h-5 w-5" /> },
  { n: "04", title: "Build", desc: "Production-grade engineering with weekly demos and zero surprises.", icon: <Wrench className="h-5 w-5" /> },
  { n: "05", title: "Launch", desc: "QA, performance budgets and a polished go-live people remember.", icon: <Rocket className="h-5 w-5" /> },
  { n: "06", title: "Scale", desc: "Measure, experiment and grow — paid, organic and product-led.", icon: <TrendingUp className="h-5 w-5" /> },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              From discovery to launch — <span className="text-gradient-gold italic">on rails</span>.
            </>
          }
          desc="A six-stage system that keeps work moving, stakeholders aligned and momentum high."
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-2)/0.5)] to-transparent md:block" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                  {s.icon}
                </div>
                <div className="mt-5 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] p-5 text-center transition-colors hover:border-[hsl(var(--gold-2)/0.45)]">
                  <div className="font-display text-xs uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
                    {s.n}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
