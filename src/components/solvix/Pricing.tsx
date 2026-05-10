import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeader } from "./ServicesBento";

type Cycle = "monthly" | "yearly" | "biennial";

type Plan = {
  name: string;
  tagline: string;
  monthly: { price: string; meta: string };
  yearly: { price: string; meta: string; badge?: string };
  biennial: { price: string; meta: string; badge?: string };
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Website Launch",
    tagline: "We build & launch your website",
    monthly: { price: "$24.99", meta: "/mo · +$79 setup" },
    yearly: { price: "$20.83", meta: "/mo · $249.90 billed annually", badge: "2 Months Free" },
    biennial: { price: "$18.74", meta: "/mo · $449.82 every 2 years", badge: "6 Months Free" },
    features: [
      "Built-for-you professional website / online store",
      "Personalized design & copy",
      "Fast loading speed to rank on Google",
      "Ready in 7 days",
      "Custom domain or connect your own",
      "Professional email address",
      "0% fees on sales & bookings",
      "1-to-1 launch & training call",
      "Secure hosting + SSL certificate",
      "30-Day Money-Back Guarantee",
    ],
  },
  {
    name: "Plus",
    tagline: "We manage your online presence",
    highlight: true,
    monthly: { price: "$59", meta: "/mo · +$79 setup" },
    yearly: { price: "$49.17", meta: "/mo · $590 billed annually", badge: "2 Months Free" },
    biennial: { price: "$44.25", meta: "/mo · $1,062 every 2 years", badge: "6 Months Free" },
    features: [
      "Everything in Launch",
      "4 professional email addresses",
      "Advanced SEO to rank on Google",
      "Unlimited done-for-you edits",
      "Third-party integrations (chat, forms, multimedia)",
      "Promote on Google, Facebook & Instagram",
      "VIP phone support",
    ],
  },
  {
    name: "Ecommerce",
    tagline: "Everything to sell your products",
    monthly: { price: "$99", meta: "/mo · +$79 setup" },
    yearly: { price: "$82.50", meta: "/mo · $990 billed annually", badge: "2 Months Free" },
    biennial: { price: "$74.25", meta: "/mo · $1,980 every 2 years", badge: "6 Months Free" },
    features: [
      "Everything in Plus",
      "0% Commission on sales",
      "Abandoned cart recovery",
      "Sell on social channels",
      "Product subscriptions & courses",
      "Advanced bookings platform",
      "Advanced shipping + automated sales tax",
      "Loyalty, reviews, back-in-stock alerts",
      "Sell eGift cards",
    ],
  },
  {
    name: "Growth",
    tagline: "We grow your business online",
    monthly: { price: "$124.99", meta: "/mo · +$79 setup" },
    yearly: { price: "$104.16", meta: "/mo · $1,249.90 billed annually", badge: "2 Months Free" },
    biennial: { price: "$93.74", meta: "/mo · $2,249.82 every 2 years", badge: "6 Months Free" },
    features: [
      "Everything in Ecommerce",
      "Dedicated VIP Growth Team",
      "Custom marketing plan",
      "1-on-1 monthly strategy sessions",
      "Expert email, social, ads, SEO & reputation",
      "2,000 words of fresh content monthly",
    ],
  },
];

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("yearly");

  return (
    <section id="pricing" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.1),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-tight">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Our <span className="text-gradient-gold italic">Pricing Plans</span>.
            </>
          }
          desc="Flexible billing with big savings. Get 2 months free on yearly plans and 6 months free on 2-year plans."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-gold-soft bg-[hsl(var(--surface))/0.6] p-1 text-xs">
            {(
              [
                ["monthly", "Monthly"],
                ["yearly", "Yearly · Save 17%"],
                ["biennial", "2-Year · Save 25%"],
              ] as [Cycle, string][]
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setCycle(k)}
                className={`rounded-full px-4 py-2 font-medium transition-all ${
                  cycle === k
                    ? "bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => {
            const tier = p[cycle];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex flex-col rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                  p.highlight
                    ? "glass-strong ring-1 ring-[hsl(var(--gold-2)/0.5)] shadow-[var(--shadow-gold)]"
                    : "border border-gold-soft bg-[hsl(var(--surface))/0.6]"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}
                <div className="font-display text-xl font-bold">{p.name}</div>
                <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>

                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-gradient-gold">{tier.price}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{tier.meta}</div>
                  {"badge" in tier && tier.badge && (
                    <span className="mt-2 inline-block rounded-full border border-gold-soft px-2 py-0.5 text-[10px] uppercase tracking-wider text-[hsl(var(--gold-3))]">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[hsl(var(--gold-2)/0.15)] text-[hsl(var(--gold-3))]">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]"
                      : "border border-gold-soft text-foreground hover:bg-white/5"
                  }`}
                >
                  Get Started <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-3xl glass-strong p-8 md:p-10"
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
                <Sparkles className="h-3 w-3" /> Premium Custom Development
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                Mobile Apps, SaaS, AI Systems, Automation, Scraping, LMS &
                Enterprise Solutions
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                For fully bespoke engineering work we scope every project from
                the ground up. Custom projects start from{" "}
                <span className="font-semibold text-foreground">$2,000 - $5,000+</span>.
                Contact us for a personalized quote.
              </p>
            </div>
            <a
              href="#contact"
              className="sheen relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]"
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
