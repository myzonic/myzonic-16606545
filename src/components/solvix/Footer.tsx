export default function Footer() {
  return (
    <footer className="relative border-t border-gold-soft pb-10 pt-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-2)/0.5)] to-transparent" />
      <div className="container-tight">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="Myzonic" className="h-[6.25rem] w-auto" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Myzonic - Digital Done Right. A design, development and automation studio
              building the digital future for ambitious brands.
            </p>
          </div>

          <FooterCol
            title="Studio"
            links={[
              { label: "Services", href: "#services" },
              { label: "Work Portfolio", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "Pricing", href: "#pricing" },
              { label: "Reviews", href: "#reviews" },
              { label: "FAQ", href: "#faq" },
            ]}
          />
          <FooterCol
            title="Capabilities"
            links={[
              { label: "Web & App", href: "#services" },
              { label: "AI Automation", href: "#services" },
              { label: "Paid Ads", href: "#services" },
              { label: "Brand", href: "#services" },
            ]}
          />
          <FooterCol
            title="Connect"
            links={[
              { label: "Myzonicllc@gmail.com", href: "mailto:Myzonicllc@gmail.com" },
              { label: "Instagram", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Dribbble", href: "#" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold-soft pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Myzonic Studio. All rights reserved.</p>
          <p>Crafted with obsession in Lisbon · Shipping worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title, links,
}: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="md:col-span-2">
      <div className="font-display text-xs uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
