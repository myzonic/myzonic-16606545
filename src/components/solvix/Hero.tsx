import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Smartphone, Zap, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36">
      {/* background decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.18),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--gold-2)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--gold-2)/0.06)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-tight relative">
        <div className="grid grid-cols-12 gap-y-10">
          {/* Eyebrow */}
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full glass-card px-3.5 py-1.5 text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--gold-2))] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-muted-foreground">Now booking Q3 — design, dev & automation</span>
            </motion.div>
          </div>

          {/* Headline (broken grid) */}
          <div className="col-span-12 md:col-span-11 md:col-start-1">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display text-[15vw] font-bold leading-[0.92] tracking-tight md:text-[8.5vw] lg:text-[128px]"
            >
              <span className="block">Digital.</span>
              <span className="block pl-[8%] md:pl-[14%]">
                Done <span className="text-gradient-gold italic">Right</span>.
              </span>
            </motion.h1>
          </div>

          {/* Sub copy + CTAs */}
          <div className="col-span-12 grid grid-cols-12 items-end gap-6 md:col-span-11 md:col-start-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="col-span-12 max-w-xl text-base text-muted-foreground md:col-span-6 md:text-lg"
            >
              Myzonic is a design, development & automation studio engineering the
              digital future for ambitious brands. Built for speed, made to convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end"
            >
              <a
                href="#contact"
                className="sheen group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-gold-soft px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
              >
                See our work
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating cards */}
        <FloatingCard
          className="left-[2%] top-[18%] hidden md:block"
          delay={0.4}
          icon={<Zap className="h-4 w-4" />}
          label="AI Automation"
          metric="−68% manual ops"
        />
        <FloatingCard
          className="right-[3%] top-[8%] hidden md:block"
          delay={0.55}
          icon={<Smartphone className="h-4 w-4" />}
          label="Mobile App"
          metric="4.9★ avg rating"
          float="slow"
        />
        <FloatingCard
          className="right-[6%] top-[55%] hidden lg:block"
          delay={0.7}
          icon={<TrendingUp className="h-4 w-4" />}
          label="Paid Ads"
          metric="3.2× ROAS"
        />
        <FloatingCard
          className="left-[4%] top-[62%] hidden lg:block"
          delay={0.8}
          icon={<Sparkles className="h-4 w-4" />}
          label="Brand & UI"
          metric="Pixel-perfect"
          float="slow"
        />
      </div>
    </section>
  );
}

function FloatingCard({
  className = "",
  icon,
  label,
  metric,
  delay = 0,
  float = "normal",
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  metric: string;
  delay?: number;
  float?: "normal" | "slow";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className={`absolute z-10 ${className}`}
    >
      <div className={`${float === "slow" ? "animate-float-slow" : "animate-float"}`}>
        <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[var(--shadow-deep)]">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gold text-[hsl(var(--primary-foreground))]">
            {icon}
          </span>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
            <div className="text-sm font-semibold">{metric}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
