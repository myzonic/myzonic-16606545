import { useEffect } from "react";
import { ArrowUpRight, Palette, Megaphone, CreditCard, Share2, Monitor, Printer, Package, CheckCircle2, Mail, MapPin, Star, Phone } from "lucide-react";
import Nav from "@/components/solvix/Nav";
import Footer from "@/components/solvix/Footer";
import { SectionHeader } from "@/components/solvix/ServicesBento";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Marketing Materials",
    desc: "Designs that help promote your products and services with clarity, impact, and a strong visual message.",
    icon: <Megaphone className="h-5 w-5" />,
    items: ["Flyers", "Brochures", "Posters", "Catalogs", "Booklets", "Menus", "Rack Cards", "Presentation Folders"],
  },
  {
    title: "Business Branding",
    desc: "Professional branding materials that create a lasting impression and help your business appear credible and memorable.",
    icon: <CreditCard className="h-5 w-5" />,
    items: ["Business Cards", "Letterheads", "Envelopes", "Email Signatures", "Company Profiles", "Brand Guidelines", "Corporate Stationery"],
  },
  {
    title: "Social Media Design",
    desc: "Creative visuals designed to boost engagement across your social media channels and help your content look polished.",
    icon: <Share2 className="h-5 w-5" />,
    items: ["Instagram Posts", "Facebook Graphics", "LinkedIn Banners", "YouTube Thumbnails", "YouTube Channel Art", "X (Twitter) Banners", "Pinterest Graphics", "Story Templates", "Social Media Ad Creatives"],
  },
  {
    title: "Digital Marketing Graphics",
    desc: "Professional graphics designed for online advertising, promotions, and campaigns that capture attention quickly.",
    icon: <Monitor className="h-5 w-5" />,
    items: ["Google Display Ads", "Facebook Ads", "Instagram Ads", "Web Banners", "Hero Banners", "Landing Page Graphics", "Email Marketing Graphics", "Infographics"],
  },
  {
    title: "Print Design",
    desc: "High-quality, print-ready designs for every business need that look sharp and professionally consistent.",
    icon: <Printer className="h-5 w-5" />,
    items: ["Posters", "Flyers", "Brochures", "Event Banners", "Roll Up Banners", "Signage", "Stickers", "Postcards", "Invitations"],
  },
  {
    title: "Packaging Design",
    desc: "Stand out on the shelf with professionally designed packaging that influences buying decisions and reinforces brand recognition.",
    icon: <Package className="h-5 w-5" />,
    items: ["Product Labels", "Box Packaging", "Pouches", "Bottle Labels", "Shipping Packaging", "Retail Packaging"],
  },
];

const whyDesignMatters = [
  "Build Brand Recognition", "Increase Customer Trust", "Improve Marketing Performance",
  "Create Consistent Branding", "Enhance Customer Engagement", "Stand Out From Competitors",
  "Strengthen Brand Identity", "Support Business Growth",
];

const whatsIncluded = [
  "Custom Design Concepts", "High Resolution Files", "Print Ready Files",
  "PNG", "JPG", "PDF", "AI Source Files", "EPS Files",
  "SVG Files (where applicable)", "Editable Source Files", "Multiple Size Variations", "Commercial Usage Rights",
];

const industries = [
  "Small Businesses", "Startups", "Ecommerce Brands", "Restaurants & Cafés", "Healthcare",
  "Real Estate", "Construction", "Legal Services", "Financial Services", "Beauty & Fashion",
  "Fitness", "Technology", "Education", "Manufacturing", "Nonprofit Organizations", "Professional Services",
];

const software = [
  "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe Express",
  "Figma", "Canva Pro", "CorelDRAW", "Affinity Designer", "Procreate",
];

const processSteps = [
  { n: "01", title: "Discover", desc: "We begin by understanding your business, brand, audience, and project requirements to identify your goals and preferred style." },
  { n: "02", title: "Create", desc: "Our designers develop creative concepts that align with your vision and marketing goals, combining strategy and creativity." },
  { n: "03", title: "Refine", desc: "We work closely with you to make revisions and fine-tune every detail until you are completely satisfied." },
  { n: "04", title: "Deliver", desc: "Once approved, you receive all final files optimized for web, social media, print, and future use." },
];

const faqs = [
  { q: "Do you create custom designs?", a: "Yes. Every project is designed specifically for your business. We never use generic templates or stock layouts, so your final design is unique and aligned with your brand." },
  { q: "Will I receive editable source files?", a: "Yes. Depending on your package, we provide editable source files along with high-resolution exports so you can make future updates if needed." },
  { q: "Can you design for both print and digital use?", a: "Absolutely. We create designs optimized for websites, social media, advertising, presentations, and professional printing, ensuring they look great across all platforms." },
  { q: "Can you maintain a consistent brand style?", a: "Yes. We make sure every design follows your brand colors, typography, and visual identity for a consistent and professional look across all materials." },
];

export default function GraphicDesign() {
  useEffect(() => {
    document.title = "Professional Graphic Design Services | Myzonic - Creative Brand Solutions";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Myzonic offers professional graphic design services. Marketing materials, social media graphics, business branding, packaging design, print design, and complete brand assets for businesses of all sizes.");
    setMeta("keywords", "graphic design, graphic designer, marketing materials, social media design, business branding, logo design, packaging design, print design, flyer design, brochure design, brand identity, digital marketing graphics");
    setMeta("og:title", "Professional Graphic Design Services | Myzonic", "property");
    setMeta("og:description", "Professional graphic design services for businesses. Marketing materials, social media graphics, branding, packaging, and print design.", "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", window.location.href, "property");
    setMeta("og:site_name", "Myzonic", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Professional Graphic Design Services | Myzonic");
    setMeta("twitter:description", "Creative graphic design services for businesses. Marketing materials, branding, social media, and print design.");
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = window.location.origin + "/graphicdesign";

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Myzonic Graphic Design Services",
      description: "Professional graphic design services including marketing materials, social media graphics, business branding, packaging design, and print design.",
      provider: { "@type": "Organization", name: "Myzonic", url: window.location.origin },
      serviceType: "Graphic Design",
      areaServed: "Worldwide",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "127" }
    });
    document.head.appendChild(ld);
    return () => { if (ld.parentNode) ld.parentNode.removeChild(ld); };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.18),transparent_70%)] blur-2xl" />
        </div>
        <div className="container-tight relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full glass-card px-3.5 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--gold-2))] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-muted-foreground">Graphic Design Services</span>
          </div>
          <h1 className="font-display text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[5.5vw] lg:text-[72px]">
            Designs that speak. <br />
            <span className="text-gradient-gold italic">Brands that inspire.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base text-muted-foreground md:text-lg">
            Great design does far more than catch the eye. It communicates your message clearly, shapes how people perceive your business, and creates a memorable experience that builds trust over time. At Myzonic, we provide high-quality graphic design services that help businesses strengthen their brand identity and connect more effectively with their audience.
          </p>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Whether you need marketing materials, social media graphics, business stationery, packaging, or complete brand assets, our creative team develops professional designs tailored to your goals, your audience, and your brand personality.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
              Start Your Project <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5">
              View Our Work
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-gold-soft pt-8 md:grid-cols-4">
            {[["100%", "Custom Designs"], ["All Formats", "Print & Digital"], ["Unlimited", "Revisions"], ["Full Rights", "Commercial Use"]].map(([v, l]) => (
              <div key={l as string}>
                <div className="font-display text-3xl font-bold text-gradient-gold">{v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Our Services" title={<>Our graphic design <span className="text-gradient-gold italic">services</span>.</>} desc="We offer a wide range of creative design solutions to help businesses maintain a consistent, professional, and visually appealing brand identity." />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <div key={svc.title} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,hsl(var(--gold-2)/0.15),transparent_70%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--gold-2)/0.12)] text-[hsl(var(--gold-3))] ring-1 ring-[hsl(var(--gold-2)/0.25)] transition-all duration-300 group-hover:bg-[hsl(var(--gold-2)/0.2)] group-hover:ring-[hsl(var(--gold-2)/0.4)]">
                    {svc.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {svc.items.map((item) => (
                      <span key={item} className="rounded-full bg-[hsl(var(--gold-2)/0.08)] px-3 py-1 text-xs text-muted-foreground ring-1 ring-[hsl(var(--gold-2)/0.15)]">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Why Design Matters" title={<>Why professional graphic design <span className="text-gradient-gold italic">matters</span>.</>} desc="Strong visual communication helps your business look more professional, more memorable, and more trustworthy. Customers often judge a brand within seconds." />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyDesignMatters.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-5 transition-all hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[hsl(var(--gold-2)/0.15)] text-[hsl(var(--gold-3))]">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="What's Included" title={<>Everything you <span className="text-gradient-gold italic">get</span>.</>} desc="Every design project is created with careful attention to detail and delivered in formats ready for both digital and print use." />
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whatsIncluded.map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,hsl(var(--gold-2)/0.15),transparent_70%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[hsl(var(--gold-2)/0.12)] text-[hsl(var(--gold-3))] ring-1 ring-[hsl(var(--gold-2)/0.25)] transition-all duration-300 group-hover:bg-[hsl(var(--gold-2)/0.2)] group-hover:ring-[hsl(var(--gold-2)/0.4)]">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground/90">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Industries" title={<>Industries we <span className="text-gradient-gold italic">serve</span>.</>} desc="We provide graphic design services for businesses across many industries." />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--gold-2)/0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 font-display text-sm font-semibold">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.1),transparent_70%)] blur-3xl" />
        </div>
        <div className="container-tight">
          <SectionHeader eyebrow="Software" title={<>Design software we <span className="text-gradient-gold italic">use</span>.</>} desc="We use industry-leading creative tools to produce professional-quality designs with precision, flexibility, and consistency." />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {software.map((sw) => (
              <div key={sw} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--gold-2)/0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{sw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Our Process" title={<>Our design <span className="text-gradient-gold italic">process</span>.</>} desc="A proven four-step system that delivers designs that inspire, engage, and deliver results." />
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] font-display font-bold">{s.n}</div>
                  <div className="mt-5 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] p-5 text-center">
                    <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Why Choose Us" title={<>Why businesses <span className="text-gradient-gold italic">choose Myzonic</span>.</>} desc="We believe every design should have a purpose. Our goal is to create visuals that communicate your message clearly, strengthen your brand, and support your business objectives." />
          <div className="mt-14 glass-strong rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-base text-muted-foreground md:text-lg">
                Whether you are launching a new business, promoting a campaign, or refreshing your brand identity, we deliver creative solutions that combine strategy, creativity, and attention to detail. We focus on producing designs that not only look professional but also help your business connect with the right audience and achieve better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient-gold italic">questions</span>.</>} />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] px-5 transition-colors hover:border-[hsl(var(--gold-2)/0.45)]">
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.18),transparent_70%)] blur-3xl" />
        </div>
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
              <Star className="h-3 w-3" /> Free Consultation
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Design that makes a <span className="text-gradient-gold italic">lasting impression</span>.
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Every design represents your business. That is why we focus on creating visuals that are not only beautiful but also meaningful, helping your brand communicate with confidence and stand out in a competitive marketplace.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Whether you need a single marketing asset or ongoing graphic design support, Myzonic is here to help you create designs that inspire, engage, and deliver results.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:Contact@myzonic.com" className="sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                <Mail className="h-4 w-4" /> Get Free Quote
              </a>
              <a href="tel:+12243733224" className="group inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5">
                Call Us
              </a>
            </div>
            <div className="mx-auto mt-12 grid max-w-md gap-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]"><Mail className="h-4 w-4" /></span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:Contact@myzonic.com" className="font-medium hover:text-[hsl(var(--gold-3))]">Contact@myzonic.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]"><Phone className="h-4 w-4" /></span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <a href="tel:+12243733224" className="font-medium hover:text-[hsl(var(--gold-3))]">(224) 373-3224</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]"><MapPin className="h-4 w-4" /></span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="font-medium">1603 Orrington Ave, Evanston, IL 60201</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
