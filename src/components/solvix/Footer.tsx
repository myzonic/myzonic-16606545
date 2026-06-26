import { Linkedin, Instagram } from "lucide-react";

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
          <div className="md:col-span-2">
            <div className="font-display text-xs uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
              Connect
            </div>
            <div className="mt-4 space-y-3">
              <a href="mailto:Myzonicllc@gmail.com" className="block text-sm text-muted-foreground transition-colors hover:text-foreground">
                Myzonicllc@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-muted-foreground transition-colors hover:border-[hsl(var(--gold-2)/0.5)] hover:text-[hsl(var(--gold-3))]">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-muted-foreground transition-colors hover:border-[hsl(var(--gold-2)/0.5)] hover:text-[hsl(var(--gold-3))]">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Dribbble" className="grid h-9 w-9 place-items-center rounded-full border border-gold-soft text-muted-foreground transition-colors hover:border-[hsl(var(--gold-2)/0.5)] hover:text-[hsl(var(--gold-3))]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
