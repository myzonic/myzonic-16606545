import { motion } from "framer-motion";
import {
  Palette, Code2, Megaphone, Film, Bot, Smartphone, Search, ShoppingBag,
  PenTool, LineChart, ArrowUpRight, Wand2,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  category: string;
  span: string;
  accent?: boolean;
};

const services: Service[] = [
  {
    title: "Brand & Identity",
    desc: "Logos, design systems and visual languages built to last.",
    icon: <Palette className="h-5 w-5" />,
    category: "Design",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    title: "Product UI/UX",
    desc: "Interfaces engineered for clarity, speed and conversion.",
    icon: <PenTool className="h-5 w-5" />,
    category: "Design",
    span: "md:col-span-2",
  },
  {
    title: "Web Development",
    desc: "Blazing-fast Next.js, headless CMS and custom builds.",
    icon: <Code2 className="h-5 w-5" />,
    category: "Development",
    span: "md:col-span-2",
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform apps your users actually love.",
    icon: <Smartphone className="h-5 w-5" />,
    category: "Development",
    span: "md:col-span-2",
  },
  {
    title: "AI Automation",
    desc: "Agents, workflows and integrations that ship work for you.",
    icon: <Bot className="h-5 w-5" />,
    category: "Automation",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    title: "Paid Ads",
    desc: "Meta, Google & TikTok campaigns engineered for ROAS.",
    icon: <Megaphone className="h-5 w-5" />,
    category: "Marketing",
    span: "md:col-span-2",
  },
  {
    title: "SEO & Content",
    desc: "Technical SEO and editorial that compounds over time.",
    icon: <Search className="h-5 w-5" />,
    category: "Marketing",
    span: "md:col-span-2",
  },
  {
    title: "E-commerce",
    desc: "Shopify, WooCommerce and headless storefronts that sell.",
    icon: <ShoppingBag className="h-5 w-5" />,
    category: "Development",
    span: "md:col-span-2",
  },
  {
    title: "Motion & Video",
    desc: "Reels, ads and product films with cinematic edge.",
    icon: <Film className="h-5 w-5" />,
    category: "Creative",
    span: "md:col-span-2",
  },
  {
    title: "Analytics & CRO",
    desc: "Tracking, attribution and experiments that move metrics.",
    icon: <LineChart className="h-5 w-5" />,
    category: "Marketing",
    span: "md:col-span-2",
  },
  {
    title: "Creative Direction",
    desc: "Campaigns, art direction and shoot production end-to-end.",
    icon: <Wand2 className="h-5 w-5" />,
    category: "Creative",
    span: "md:col-span-2",
  },
];

export default function ServicesBento() {
  return (
    <section id="services" className="relative py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              A studio for the <span className="text-gradient-gold italic">whole</span> stack.
            </>
          }
          desc="Design, development, marketing, creative and automation — under one roof, sharing one north star: results."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 ${
                s.span
              } ${
                s.accent
                  ? "glass-strong"
                  : "border border-gold-soft bg-[hsl(var(--surface))/0.6] hover:border-[hsl(var(--gold-2)/0.45)]"
              } hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]`}
            >
              {s.accent && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,hsl(var(--gold-2)/0.25),transparent_70%)] blur-2xl" />
              )}
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[hsl(var(--gold-2)/0.12)] text-[hsl(var(--gold-3))] ring-1 ring-[hsl(var(--gold-2)/0.25)]">
                    {s.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.category}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold md:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--gold-3))] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]`}
      >
        <span className="h-1 w-1 rounded-full bg-gold" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h2>
      {desc && <p className="mt-5 text-base text-muted-foreground md:text-lg">{desc}</p>}
    </div>
  );
}
