import { BrandSvg, brandIcons } from "./brandIcons";

const logos = [
  brandIcons.shopify, brandIcons.webflow, brandIcons.wordpress, brandIcons.figma,
  brandIcons.next, brandIcons.react, brandIcons.openai, brandIcons.framer,
  brandIcons.googleads, brandIcons.hubspot, brandIcons.make, brandIcons.n8n,
];

export default function LogoMarquee() {
  return (
    <section aria-label="Trusted platforms" className="border-y border-gold-soft py-10">
      <div className="container-tight mb-6 flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Building with the best · 50+ brands shipped
        </p>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold-2)/0.4)] to-transparent md:block" />
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-16 animate-marquee">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-[hsl(var(--gold-3))]"
            >
              <BrandSvg icon={l} className="h-7 w-7" />
              <span className="font-display text-lg font-semibold">{l.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
