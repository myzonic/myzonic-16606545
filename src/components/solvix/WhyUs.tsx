import { motion } from "framer-motion";
import { Award, Gauge, Eye, Target, Headphones, Sparkles } from "lucide-react";
import { SectionHeader } from "./ServicesBento";

const items = [
  { icon: <Award className="h-5 w-5" />, title: "Senior team only", desc: "Every project is led by 7+ year specialists. No juniors learning on your dime.", stat: "100%", statLabel: "senior delivery" },
  { icon: <Gauge className="h-5 w-5" />, title: "Built for speed", desc: "Performance budgets baked in. Sub-second loads, smooth at 60fps.", stat: "<1s", statLabel: "median LCP" },
  { icon: <Eye className="h-5 w-5" />, title: "Radical transparency", desc: "Live roadmaps, weekly demos, async updates — nothing happens in the dark.", stat: "5★", statLabel: "client trust" },
  { icon: <Target className="h-5 w-5" />, title: "Outcome obsessed", desc: "We don't ship features, we ship results. Tied to a KPI, every time.", stat: "3.2×", statLabel: "avg ROAS" },
  { icon: <Headphones className="h-5 w-5" />, title: "Always-on support", desc: "Slack-first comms, response within hours — even after launch.", stat: "<2h", statLabel: "response" },
  { icon: <Sparkles className="h-5 w-5" />, title: "AI-native by default", desc: "Every workflow we touch is an opportunity to compound output with AI.", stat: "10×", statLabel: "team velocity" },
];

export default function WhyUs() {
  return (
    <section className="relative py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Why Myzonic"
          title={
            <>
              Built different. <span className="text-gradient-gold italic">Built right.</span>
            </>
          }
          desc="Six reasons brands keep coming back — and why their KPIs do too."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="sheen group relative overflow-hidden rounded-3xl border border-gold-soft bg-[hsl(var(--surface))] p-7 transition-all hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.5)] hover:shadow-[var(--shadow-gold)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[hsl(var(--gold-2)/0.12)] text-[hsl(var(--gold-3))] ring-1 ring-[hsl(var(--gold-2)/0.25)]">
                  {it.icon}
                </span>
                <div className="text-right">
                  <div className="font-display text-2xl font-bold text-gradient-gold">{it.stat}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{it.statLabel}</div>
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
