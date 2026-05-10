import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Myzonic didn't just redesign our product - they re-architected how we ship. Six weeks in, our activation jumped 38%.",
    name: "Léa Marchand",
    role: "VP Product, Aurum Finance",
    initial: "L",
  },
  {
    quote: "The most senior, calmest team we've ever worked with. They turned a chaotic launch into the cleanest go-live we've had.",
    name: "Daniel Okafor",
    role: "Founder, Noctura Apparel",
    initial: "D",
  },
  {
    quote: "Their AI automation work paid for the entire engagement in the first month. We retired three tools and freed up two FTEs.",
    name: "Priya Anand",
    role: "COO, Strato Logistics",
    initial: "P",
  },
  {
    quote: "Pixel-obsessed designers, ruthless engineers and a strategist who actually moves numbers. Rare combo, real results.",
    name: "Marco Rinaldi",
    role: "CMO, Verde Hospitality",
    initial: "M",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section
      className="relative overflow-hidden py-28"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 2%) 0%, hsl(0 0% 4%) 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[hsl(var(--gold-2)/0.6)] to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.08),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-tight relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
            <Quote className="h-3 w-3" /> Testimonials
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-5xl">
            What partners say about <span className="text-gradient-gold italic">working</span> with us.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-[2rem] p-8 md:p-12 text-center"
            >
              <div className="mx-auto mb-6 flex w-fit items-center gap-1 text-[hsl(var(--gold-3))]">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-display text-2xl leading-snug md:text-3xl">"{t.quote}"</p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold font-display text-lg font-bold text-[hsl(var(--primary-foreground))]">
                  {t.initial}
                </span>
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-soft transition-colors hover:bg-white/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-soft transition-colors hover:bg-white/5"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
