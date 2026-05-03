import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Smartphone, TrendingUp, Check } from "lucide-react";

const features = [
  {
    tag: "Featured · Automation",
    title: "AI Automation",
    desc: "Deploy AI agents and workflows that handle ops, support and growth — 24/7, with zero overhead.",
    bullets: ["Custom GPT agents", "Make.com & n8n flows", "CRM + data sync", "Voice & chat AI"],
    icon: <Bot className="h-5 w-5" />,
    visual: <AutomationVisual />,
  },
  {
    tag: "Featured · Mobile",
    title: "Mobile App Development",
    desc: "Native iOS, Android and cross-platform apps with App Store-ready polish and analytics baked in.",
    bullets: ["Swift & Kotlin", "React Native & Flutter", "Real-time sync", "Push, payments & auth"],
    icon: <Smartphone className="h-5 w-5" />,
    visual: <MobileVisual />,
  },
  {
    tag: "Featured · Performance",
    title: "Paid Ads & Growth",
    desc: "Meta, Google and TikTok campaigns engineered around measurable ROAS and creative testing velocity.",
    bullets: ["Creative testing engine", "Full funnel attribution", "Landing pages that convert", "Weekly growth sprints"],
    icon: <TrendingUp className="h-5 w-5" />,
    visual: <AdsVisual />,
  },
];

export default function FeaturedSpotlight() {
  return (
    <section className="relative py-28">
      <div className="container-tight space-y-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong group relative overflow-hidden rounded-[2rem] p-6 md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,hsl(var(--gold-2)/0.22),transparent_70%)] blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <div className={`relative grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--gold-3))]">
                  {f.tag}
                </span>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md text-muted-foreground">{f.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[hsl(var(--gold-2)/0.15)] text-[hsl(var(--gold-3))]">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
                >
                  Talk to us <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold-soft bg-[hsl(var(--ink))]">
                {f.visual}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AutomationVisual() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <defs>
        <linearGradient id="goldL" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(38 55% 35%)" />
          <stop offset="50%" stopColor="hsl(48 90% 78%)" />
          <stop offset="100%" stopColor="hsl(38 60% 45%)" />
        </linearGradient>
      </defs>
      {[...Array(20)].map((_, i) => (
        <line
          key={i}
          x1={(i * 23) % 400}
          y1={0}
          x2={(i * 23 + 80) % 400}
          y2={300}
          stroke="hsl(var(--gold-2) / 0.08)"
          strokeWidth="1"
        />
      ))}
      {[
        [80, 80], [200, 60], [320, 90], [80, 220], [200, 240], [320, 200], [200, 150],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" fill="hsl(var(--surface-2))" stroke="url(#goldL)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="6" fill="url(#goldL)">
            <animate attributeName="r" values="6;9;6" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {[
        [80, 80, 200, 150], [200, 60, 200, 150], [320, 90, 200, 150],
        [200, 150, 80, 220], [200, 150, 200, 240], [200, 150, 320, 200],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#goldL)" strokeWidth="1" strokeOpacity="0.6">
          <animate attributeName="stroke-opacity" values="0.2;0.8;0.2" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}
    </svg>
  );
}

function MobileVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold-2)/0.18),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[230px] w-[120px] rounded-[2rem] border border-gold-soft bg-[hsl(var(--surface-2))] p-2 shadow-[var(--shadow-gold)] animate-float">
          <div className="h-full w-full rounded-[1.5rem] bg-gradient-to-br from-[hsl(var(--gold-1)/0.2)] via-[hsl(var(--surface-3))] to-[hsl(var(--ink))] p-3">
            <div className="mb-3 h-2 w-12 rounded-full bg-[hsl(var(--gold-2)/0.5)]" />
            <div className="mb-2 h-3 w-20 rounded bg-white/15" />
            <div className="mb-4 h-3 w-14 rounded bg-white/10" />
            <div className="mb-2 h-12 rounded-xl bg-gold/30" />
            <div className="mb-2 h-8 rounded-xl bg-white/5" />
            <div className="h-8 rounded-xl bg-white/5" />
          </div>
        </div>
        <div className="absolute -right-10 top-6 h-[200px] w-[100px] rotate-6 rounded-[1.6rem] border border-gold-soft bg-[hsl(var(--surface))] animate-float-slow" />
      </div>
    </div>
  );
}

function AdsVisual() {
  const bars = [40, 60, 35, 80, 55, 90, 70, 110, 95, 130];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <defs>
        <linearGradient id="goldB" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="hsl(38 55% 35%)" />
          <stop offset="100%" stopColor="hsl(48 90% 78%)" />
        </linearGradient>
      </defs>
      <line x1="40" y1="240" x2="380" y2="240" stroke="hsl(var(--gold-2)/0.3)" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={50 + i * 32}
          y={240 - h}
          width="20"
          height={h}
          rx="6"
          fill="url(#goldB)"
          opacity={0.85}
        >
          <animate attributeName="height" from="0" to={h} dur="1s" begin={`${i * 0.05}s`} fill="freeze" />
          <animate attributeName="y" from="240" to={240 - h} dur="1s" begin={`${i * 0.05}s`} fill="freeze" />
        </rect>
      ))}
      <path
        d={`M50,${240 - 40} ${bars.map((h, i) => `L${60 + i * 32},${240 - h - 10}`).join(" ")}`}
        stroke="hsl(var(--gold-3))"
        strokeWidth="2"
        fill="none"
      />
      <text x="40" y="40" fill="hsl(var(--gold-3))" fontSize="14" fontFamily="Syne" fontWeight="700">
        ROAS · 3.2×
      </text>
      <text x="40" y="60" fill="hsl(var(--muted-foreground))" fontSize="10">
        Last 30 days
      </text>
    </svg>
  );
}
