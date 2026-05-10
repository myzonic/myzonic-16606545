import { motion } from "framer-motion";
import { BrandSvg, brandIcons as B } from "./brandIcons";
import { SectionHeader } from "./ServicesBento";

type Lane = { name: string; items: { icon: typeof B.react; label: string }[] };

const lanes: Lane[] = [
  {
    name: "CMS & Platforms",
    items: [
      { icon: B.wordpress, label: "WordPress" },
      { icon: B.woocommerce, label: "WooCommerce" },
      { icon: B.shopify, label: "Shopify" },
      { icon: B.magento, label: "Magento" },
      { icon: B.webflow, label: "Webflow" },
      { icon: B.wix, label: "Wix" },
      { icon: B.squarespace, label: "Squarespace" },
    ],
  },
  {
    name: "Frontend & Backend",
    items: [
      { icon: B.react, label: "React" },
      { icon: B.next, label: "Next.js" },
      { icon: B.typescript, label: "TypeScript" },
      { icon: B.tailwind, label: "Tailwind" },
      { icon: B.node, label: "Node.js" },
    ],
  },
  {
    name: "Mobile",
    items: [
      { icon: B.swift, label: "Swift" },
      { icon: B.kotlin, label: "Kotlin" },
      { icon: B.flutter, label: "Flutter" },
      { icon: B.react, label: "React Native" },
    ],
  },
  {
    name: "AI & Automation",
    items: [
      { icon: B.openai, label: "OpenAI" },
      { icon: B.make, label: "Make.com" },
      { icon: B.n8n, label: "n8n" },
      { icon: B.zapier, label: "Zapier" },
    ],
  },
  {
    name: "Design & Motion",
    items: [
      { icon: B.figma, label: "Figma" },
      { icon: B.framer, label: "Framer" },
      { icon: B.photoshop, label: "Photoshop" },
      { icon: B.illustrator, label: "Illustrator" },
      { icon: B.indesign, label: "InDesign" },
      { icon: B.aftereffects, label: "After Effects" },
      { icon: B.premiere, label: "Premiere Pro" },
      { icon: B.maya, label: "Autodesk Maya" },
      { icon: B.blender, label: "Blender" },
      { icon: B.cinema4d, label: "Cinema 4D" },
    ],
  },
  {
    name: "Marketing",
    items: [
      { icon: B.googleads, label: "Google Ads" },
      { icon: B.meta, label: "Meta Ads" },
      { icon: B.analytics, label: "Analytics" },
      { icon: B.hubspot, label: "HubSpot" },
      { icon: B.mailchimp, label: "Mailchimp" },
    ],
  },
];

export default function ToolsCloud() {
  return (
    <section id="tools" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.08),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tools & Technologies"
          title={
            <>
              The full <span className="text-gradient-gold italic">toolkit</span>, fluently.
            </>
          }
          desc="From CMS to AI, design to motion - we work natively with the tools your team already trusts."
        />

        <div className="mt-14 space-y-8">
          {lanes.map((lane, li) => (
            <motion.div
              key={lane.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: li * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
                  {lane.name}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[hsl(var(--gold-2)/0.4)] to-transparent" />
              </div>
              <div className="flex flex-wrap gap-3">
                {lane.items.map((it, i) => (
                  <div
                    key={`${lane.name}-${it.label}-${i}`}
                    className="group relative"
                    style={{ animation: `float-y ${6 + (i % 4)}s ease-in-out ${(i % 5) * 0.4}s infinite` }}
                  >
                    <div className="flex items-center gap-2.5 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.55)] hover:shadow-[var(--shadow-gold)]">
                      <span className="text-[hsl(var(--gold-3))] transition-colors group-hover:text-[hsl(var(--gold-2))]">
                        <BrandSvg icon={it.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-medium">{it.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
