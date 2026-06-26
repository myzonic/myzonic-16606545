import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone, Star, MessageSquare } from "lucide-react";

const ctas = [
  { label: "Contact Us", href: "#contact", icon: <ArrowUpRight className="h-4 w-4" />, primary: true },
  { label: "Live Chat", href: "#contact", icon: <MessageCircle className="h-4 w-4" /> },
  { label: "WhatsApp", href: "https://wa.me/12243733224", icon: <Phone className="h-4 w-4" />, external: true },
  { label: "Email", href: "mailto:Myzonicllc@gmail.com", icon: <Mail className="h-4 w-4" /> },
  { label: "Text Message", href: "sms:+12243733224", icon: <MessageSquare className="h-4 w-4" /> },
  { label: "Reviews", href: "#reviews", icon: <Star className="h-4 w-4" /> },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.18),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--gold-2)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--gold-2)/0.06)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-tight relative">
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
          <span className="text-muted-foreground">Full stack digital engineering studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="font-display text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[5.5vw] lg:text-[72px]"
        >
          We build{" "}
          <span className="text-gradient-gold italic">beyond websites.</span>
          <br />
          Custom coded systems, mobile apps, scalable platforms, and{" "}
          <span className="text-gradient-gold italic">AI powered</span> digital
          solutions tailored to your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-3xl text-base text-muted-foreground md:text-lg"
        >
          We design and develop complete digital ecosystems including custom
          coded websites, WordPress solutions, CMS platforms, website builders,
          no code tools, AI driven applications, backend systems, scraping
          infrastructure, automation workflows, mobile applications, web
          applications, SaaS platforms, and education based platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          {ctas.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className={
                c.primary
                  ? "sheen group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]"
                  : "group inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5"
              }
            >
              {c.icon}
              {c.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 grid grid-cols-2 gap-4 border-t border-gold-soft pt-8 md:grid-cols-4"
        >
          {[
            ["50+", "Brands shipped"],
            ["12+", "Years combined"],
            ["3.2x", "Avg ROAS"],
            ["<24h", "Response time"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-3xl font-bold text-gradient-gold">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
