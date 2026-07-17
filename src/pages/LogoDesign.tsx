import { useEffect } from "react";
import { ArrowUpRight, Palette, PenTool, Layers, Sparkles, Crown, Building2, Smile, Type, CheckCircle2, Mail, MapPin, Star, Phone } from "lucide-react";
import Nav from "@/components/solvix/Nav";
import Footer from "@/components/solvix/Footer";
import { SectionHeader } from "@/components/solvix/ServicesBento";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { title: "Custom Logo Design", desc: "Unique logos created specifically for your business with no templates or generic icons.", icon: <PenTool className="h-5 w-5" /> },
  { title: "Logo Redesign", desc: "Modernize an outdated logo while preserving your brand recognition and identity.", icon: <Sparkles className="h-5 w-5" /> },
  { title: "Brand Identity Design", desc: "Build a complete visual identity including colors, typography, icons, and brand guidelines.", icon: <Layers className="h-5 w-5" /> },
  { title: "Minimalist Logo Design", desc: "Clean, modern logos that remain memorable and versatile across every platform.", icon: <Palette className="h-5 w-5" /> },
  { title: "Luxury Logo Design", desc: "Premium branding solutions for high-end businesses, fashion brands, beauty companies, and luxury services.", icon: <Crown className="h-5 w-5" /> },
  { title: "Corporate Logo Design", desc: "Professional logos designed for startups, small businesses, and established enterprises.", icon: <Building2 className="h-5 w-5" /> },
  { title: "Mascot Logo Design", desc: "Fun and engaging mascot logos ideal for restaurants, sports teams, gaming brands, and family businesses.", icon: <Smile className="h-5 w-5" /> },
  { title: "Monogram & Lettermark Logos", desc: "Elegant initials and letter-based logos perfect for premium brands and personal businesses.", icon: <Type className="h-5 w-5" /> },
];

const logoTypes = [
  "Wordmark Logos", "Lettermark Logos", "Monogram Logos", "Brandmark Logos",
  "Abstract Logos", "Icon Logos", "Combination Logos", "Emblem Logos",
  "Mascot Logos", "Vintage Logos", "Minimalist Logos", "Modern Logos",
  "Luxury Logos", "Hand-Drawn Logos", "Geometric Logos", "3D Logo Concepts",
];

const whatsIncluded = [
  "Custom Logo Concepts", "Unlimited Revisions", "High-Resolution Files",
  "PNG (Transparent Background)", "JPG", "SVG", "AI Vector Files",
  "EPS Files", "PDF Files", "Print-Ready Files", "Social Media Profile Images",
  "Logo Color Variations", "Black & White Version", "Favicon",
  "Brand Color Palette", "Typography Recommendations", "Full Commercial Rights",
];

const processSteps = [
  { n: "01", title: "Discovery", desc: "We learn about your business, industry, competitors, and target audience." },
  { n: "02", title: "Research", desc: "Our designers analyze current trends while ensuring your logo remains timeless." },
  { n: "03", title: "Concept Design", desc: "We create multiple custom logo concepts based on your vision and goals." },
  { n: "04", title: "Refinement", desc: "We revise and improve your chosen concept until you're completely satisfied." },
  { n: "05", title: "Final Delivery", desc: "Receive all source files and formats ready for web, print, packaging, signage, apparel, and marketing materials." },
];

const industries = [
  "Small Businesses", "Startups", "Restaurants", "Cafés", "Law Firms",
  "Medical Practices", "Real Estate Agencies", "Construction Companies",
  "Fashion Brands", "Beauty Salons", "Fitness Brands", "E-commerce Stores",
  "Technology Companies", "Marketing Agencies", "Consultants", "Coaches",
  "Nonprofit Organizations", "Educational Institutions", "Automotive Businesses", "Financial Services",
];

const whyChoose = [
  "100% Custom Logo Designs",
  "No Templates or AI-Generated Stock Logos",
  "Experienced Creative Designers",
  "Modern & Timeless Design Style",
  "Fast Turnaround",
  "Unlimited Revisions",
  "Vector Source Files Included",
  "Full Ownership & Commercial Rights",
  "Affordable Pricing",
  "Friendly Customer Support",
];

const software = [
  "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe Express",
  "CorelDRAW", "Figma", "Affinity Designer", "Canva Pro",
  "Procreate", "Adobe Fresco", "Sketch", "Inkscape",
];

const faqs = [
  { q: "How long does logo design take?", a: "Most logo projects are completed within 3–7 business days, depending on the complexity and revision process." },
  { q: "Will I own my logo?", a: "Yes. Once the project is completed, you'll receive full ownership and commercial rights to your logo." },
  { q: "What file formats will I receive?", a: "You'll receive AI, EPS, SVG, PNG, JPG, PDF, and other formats suitable for web, print, and branding." },
  { q: "Can you redesign my existing logo?", a: "Absolutely. We can modernize your current logo while maintaining your brand identity and recognition." },
  { q: "Can you design my complete brand identity?", a: "Yes. We also create business cards, letterheads, social media kits, brand guidelines, packaging, banners, brochures, and other branding materials." },
];

export default function LogoDesign() {
  useEffect(() => {
    document.title = "Professional Logo Design Services | Myzonic - Custom Brand Identity";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Myzonic offers professional logo design services for small businesses, startups, and brands. Custom logos, brand identity, logo redesign, and complete branding solutions. Affordable pricing with unlimited revisions.");
    setMeta("keywords", "logo design, professional logo, custom logo, brand identity, logo redesign, business logo, minimalist logo, luxury logo, corporate logo, mascot logo, logo designer, branding services, brand identity design");
    setMeta("og:title", "Professional Logo Design Services | Myzonic", "property");
    setMeta("og:description", "Professional custom logo design services. Create a memorable brand identity with 100% custom logos, unlimited revisions, and full commercial rights.", "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", window.location.href, "property");
    setMeta("og:site_name", "Myzonic", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Professional Logo Design Services | Myzonic");
    setMeta("twitter:description", "Custom logo design services for businesses. 100% custom logos with unlimited revisions and full commercial rights.");
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = window.location.origin + "/logodesign";

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Myzonic Logo Design Services",
      description: "Professional custom logo design services for small businesses, startups, and brands including brand identity, logo redesign, and complete branding solutions.",
      provider: { "@type": "Organization", name: "Myzonic", url: window.location.origin },
      serviceType: "Logo Design",
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
            <span className="text-muted-foreground">Professional Logo Design Services</span>
          </div>
          <h1 className="font-display text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[5.5vw] lg:text-[72px]">
            Logos that inspire. <br />
            <span className="text-gradient-gold italic">Brands that last.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base text-muted-foreground md:text-lg">
            Your logo is the face of your business. It's often the first thing customers notice and one of the most important elements of your brand identity. At Myzonic, we create professional, custom logo designs that help businesses stand out, build trust, and leave a lasting impression.
          </p>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Whether you're launching a new business, refreshing an existing brand, or rebranding your company, our designers craft logos that are unique, timeless, and designed to work across digital and print media.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
              Get Started <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5">
              View Our Work
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-gold-soft pt-8 md:grid-cols-4">
            {[["500+", "Logos Delivered"], ["48h", "Initial Concepts"], ["100%", "Custom Designs"], ["Unlimited", "Revisions"]].map(([v, l]) => (
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
          <SectionHeader eyebrow="Our Services" title={<>Our logo design <span className="text-gradient-gold italic">services</span>.</>} desc="A professionally designed logo does more than look good—it communicates your brand's personality, values, and professionalism." />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((svc) => (
              <div key={svc.title} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,hsl(var(--gold-2)/0.15),transparent_70%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--gold-2)/0.12)] text-[hsl(var(--gold-3))] ring-1 ring-[hsl(var(--gold-2)/0.25)] transition-all duration-300 group-hover:bg-[hsl(var(--gold-2)/0.2)] group-hover:ring-[hsl(var(--gold-2)/0.4)]">
                    {svc.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Logo Types" title={<>Types of logos we <span className="text-gradient-gold italic">design</span>.</>} desc="We create every style of logo to match your brand's personality and industry." />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {logoTypes.map((lt) => (
              <div key={lt} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--gold-2)/0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 font-display text-sm font-semibold">{lt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="What's Included" title={<>Everything you <span className="text-gradient-gold italic">get</span>.</>} desc="Every logo project includes comprehensive deliverables ready for web, print, and branding." />
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
          <SectionHeader eyebrow="Our Process" title={<>Our logo design <span className="text-gradient-gold italic">process</span>.</>} desc="A proven five-step system that delivers logos your customers will remember." />
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
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
          <SectionHeader eyebrow="Industries" title={<>Industries we <span className="text-gradient-gold italic">serve</span>.</>} desc="We design logos for businesses across every industry." />
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
        <div className="container-tight">
          <SectionHeader eyebrow="Why Choose Us" title={<>Why businesses <span className="text-gradient-gold italic">choose Myzonic</span>.</>} desc="We combine creativity, strategy, and industry expertise to design logos that inspire confidence and help businesses grow." />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item) => (
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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.1),transparent_70%)] blur-3xl" />
        </div>
        <div className="container-tight">
          <SectionHeader eyebrow="Software" title={<>Design software we <span className="text-gradient-gold italic">use</span>.</>} desc="To ensure premium quality and scalability, we use industry-leading design tools." />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {software.map((sw) => (
              <div key={sw} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--gold-2)/0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{sw}</span>
              </div>
            ))}
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
              Ready to build a <span className="text-gradient-gold italic">memorable</span> brand?
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Let Myzonic design a logo that represents your brand with confidence. Whether you're starting from scratch or refreshing your existing identity, we're here to create a logo your customers will remember.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Contact Myzonic today for a free consultation.
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
