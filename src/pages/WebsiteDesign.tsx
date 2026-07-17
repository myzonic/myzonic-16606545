import { useEffect } from "react";
import { ArrowUpRight, Globe, Palette, Smartphone, Layout, MousePointer, Code, ShoppingCart, Wrench, Settings, Gauge, Search, CheckCircle2, Mail, MapPin, Star, Phone } from "lucide-react";
import Nav from "@/components/solvix/Nav";
import Footer from "@/components/solvix/Footer";
import { SectionHeader } from "@/components/solvix/ServicesBento";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const designServices = [
  { title: "Custom Website Design", desc: "Unique, professionally designed websites tailored to your brand, audience, and business goals.", icon: <Palette className="h-5 w-5" /> },
  { title: "Website Redesign", desc: "Refresh your outdated website with a modern design, improved navigation, stronger visuals, and enhanced functionality.", icon: <Globe className="h-5 w-5" /> },
  { title: "Responsive Web Design", desc: "Every website is optimized for desktops, tablets, and mobile devices to ensure a seamless experience for every visitor.", icon: <Smartphone className="h-5 w-5" /> },
  { title: "Landing Page Design", desc: "High-converting landing pages built for advertising campaigns, lead generation, product launches, and promotions.", icon: <Layout className="h-5 w-5" /> },
  { title: "UI/UX Design", desc: "User-focused interface and experience design that improves engagement, simplifies navigation, and encourages visitors to take action.", icon: <MousePointer className="h-5 w-5" /> },
];

const devServices = [
  { title: "Business Website Development", desc: "Professional websites designed to showcase your business, build credibility, and generate more inquiries.", icon: <Globe className="h-5 w-5" /> },
  { title: "Ecommerce Development", desc: "Sell products online with secure, feature-rich ecommerce websites built on Shopify, WooCommerce, or custom development.", icon: <ShoppingCart className="h-5 w-5" /> },
  { title: "Custom Web Development", desc: "Need something unique? We develop custom websites and web applications tailored to your specific business requirements.", icon: <Code className="h-5 w-5" /> },
  { title: "CMS Development", desc: "Manage your website content with ease using WordPress, Shopify, Webflow, or other modern content management systems.", icon: <Settings className="h-5 w-5" /> },
  { title: "Website Maintenance & Support", desc: "Keep your website updated, secure, and running smoothly with ongoing maintenance, monitoring, backups, and technical support.", icon: <Wrench className="h-5 w-5" /> },
  { title: "Website Speed Optimization", desc: "Improve loading times, Core Web Vitals, and overall website performance to provide a better user experience and reduce bounce rates.", icon: <Gauge className="h-5 w-5" /> },
  { title: "Technical SEO", desc: "Every website is built with clean code, optimized structure, schema markup, fast loading speeds, and SEO best practices.", icon: <Search className="h-5 w-5" /> },
];

const whatsIncluded = [
  "Custom Website Design", "Fully Responsive Layout", "Mobile First Development",
  "SEO Optimized Structure", "Fast Loading Performance", "Secure SSL Configuration",
  "Contact Forms", "Lead Generation Forms", "Google Maps Integration",
  "Social Media Integration", "Blog Functionality", "Image Optimization",
  "Google Analytics Integration", "Conversion Focused Design", "Cross Browser Compatibility",
  "Basic On Page SEO", "Performance Optimization", "Easy Content Management", "Scalable Architecture",
];

const platforms = [
  "WordPress", "Shopify", "WooCommerce", "Webflow", "Wix",
  "Squarespace", "Framer", "Duda", "Bubble.io", "Revize CMS",
];

const frontend = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
  "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap",
];

const backend = [
  "Node.js", "Express.js", "PHP", "Laravel", "Python", "Django",
];

const databases = [
  "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase",
];

const hosting = [
  "Hostinger", "Vercel", "AWS", "Microsoft Azure", "Google Cloud",
  "Cloudflare", "DigitalOcean", "Netlify",
];

const processSteps = [
  { n: "01", title: "Discovery & Planning", desc: "We begin by understanding your business, target audience, competitors, and project goals to create a strategy that aligns with your vision." },
  { n: "02", title: "Design", desc: "Our designers create modern, engaging layouts that reflect your brand, communicate your message clearly, and provide an exceptional user experience." },
  { n: "03", title: "Development", desc: "Using the latest technologies, we build a fast, secure, and scalable website with clean, maintainable code and strong performance." },
  { n: "04", title: "Testing & QA", desc: "Before launch, every website is thoroughly tested for responsiveness, browser compatibility, speed, functionality, accessibility, and security." },
  { n: "05", title: "Launch", desc: "After your approval, we deploy your website and ensure everything is fully optimized for performance, usability, and search engines." },
  { n: "06", title: "Ongoing Support", desc: "We provide maintenance, updates, backups, improvements, and technical support to keep your website running at its best." },
];

const industries = [
  "Small Businesses", "Startups", "Ecommerce Brands", "Healthcare", "Legal Services",
  "Construction", "Real Estate", "Restaurants & Cafés", "Marketing Agencies", "Consultants",
  "Financial Services", "Educational Institutions", "Manufacturing", "Nonprofit Organizations",
  "Automotive Businesses", "Technology Companies", "Professional Services",
];

const whyChoose = [
  "Fully Custom Website Solutions",
  "Experienced Designers & Developers",
  "Mobile First Design Approach",
  "SEO Friendly Development",
  "Fast Loading Websites",
  "Secure & Scalable Architecture",
  "Transparent Communication",
  "Affordable Pricing",
  "Ongoing Website Support",
  "Dedicated Project Management",
];

const performanceFeatures = [
  "Fast Loading Pages", "Mobile First Design", "Core Web Vitals Optimization",
  "Secure SSL Configuration", "SEO Friendly Code", "Optimized Images",
  "Clean URL Structure", "Accessibility Best Practices",
];

const integrations = [
  "Online Booking Systems", "Payment Gateways", "Customer Relationship Management (CRM)",
  "Live Chat", "Email Marketing Platforms", "Google Analytics",
  "Google Tag Manager", "Facebook Pixel", "API Integrations",
  "Membership Systems", "Client Portals", "Custom Dashboards",
];

const faqs = [
  { q: "How long does it take to build a website?", a: "Most business websites are completed within 2 to 6 weeks, depending on the project's complexity, features, and content requirements. Larger or more custom projects may take longer." },
  { q: "Will my website be mobile friendly?", a: "Yes. Every website we create is fully responsive and optimized for all modern devices, including smartphones, tablets, laptops, and desktops." },
  { q: "Can you redesign my current website?", a: "Absolutely. We can modernize your existing website while improving its design, speed, functionality, structure, and overall user experience." },
  { q: "Is SEO included?", a: "Yes. All websites are developed using technical SEO best practices and include an SEO-friendly structure to help improve search engine visibility." },
  { q: "Do you provide hosting and maintenance?", a: "Yes. We offer reliable website hosting, ongoing maintenance, backups, security updates, performance checks, and technical support." },
  { q: "Can you integrate third party services?", a: "Yes. We can integrate payment gateways, CRMs, booking systems, live chat, email marketing platforms, APIs, analytics tools, and many other business solutions." },
];

export default function WebsiteDesign() {
  useEffect(() => {
    document.title = "Professional Website Design & Development | Myzonic - Modern Web Solutions";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Myzonic offers professional website design and development services. Custom websites, ecommerce, CMS development, responsive design, SEO optimization, and ongoing support for businesses of all sizes.");
    setMeta("keywords", "website design, web development, custom website, ecommerce website, responsive web design, SEO, WordPress, Shopify, business website, landing page, UI/UX design, website redesign, web developer");
    setMeta("og:title", "Professional Website Design & Development | Myzonic", "property");
    setMeta("og:description", "Professional website design and development services. Custom, responsive, SEO-optimized websites for businesses of all sizes.", "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", window.location.href, "property");
    setMeta("og:site_name", "Myzonic", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Professional Website Design & Development | Myzonic");
    setMeta("twitter:description", "Custom website design and development services. Responsive, SEO-optimized, and built for growth.");
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = window.location.origin + "/websitedesign";

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Myzonic Website Design & Development",
      description: "Professional website design and development services including custom websites, ecommerce, CMS development, responsive design, and SEO optimization.",
      provider: { "@type": "Organization", name: "Myzonic", url: window.location.origin },
      serviceType: "Website Design & Development",
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
            <span className="text-muted-foreground">Website Design & Development</span>
          </div>
          <h1 className="font-display text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[5.5vw] lg:text-[72px]">
            Websites that perform. <br />
            <span className="text-gradient-gold italic">Brands that grow.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base text-muted-foreground md:text-lg">
            Your website is one of the most valuable assets your business can have. At Myzonic, we design and develop modern, high-performing websites that not only look exceptional but also help businesses generate leads, increase sales, and establish a strong online presence.
          </p>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Whether you're a startup, small business, or established company, we create custom websites tailored to your goals, industry, and audience. Every website we build is responsive, SEO optimized, secure, and designed to deliver an outstanding user experience.
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
            {[["2-6 Weeks", "Average Delivery"], ["100%", "Custom Designs"], ["Mobile First", "Approach"], ["SEO Built In", "Every Project"]].map(([v, l]) => (
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
          <SectionHeader eyebrow="Design Services" title={<>Our website design <span className="text-gradient-gold italic">services</span>.</>} desc="We design websites that combine creativity, functionality, and user experience to help your business stand out online." />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {designServices.map((svc) => (
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
          <SectionHeader eyebrow="Development Services" title={<>Our website development <span className="text-gradient-gold italic">services</span>.</>} desc="Our development team builds fast, scalable, and secure websites using the latest technologies and industry best practices." />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {devServices.map((svc) => (
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
          <SectionHeader eyebrow="What's Included" title={<>Everything your website <span className="text-gradient-gold italic">needs</span>.</>} desc="Every website we build includes the features businesses need to succeed online." />
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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.1),transparent_70%)] blur-3xl" />
        </div>
        <div className="container-tight">
          <SectionHeader eyebrow="Platforms" title={<>Platforms & technologies we <span className="text-gradient-gold italic">work with</span>.</>} desc="We work with a wide range of platforms and technologies so we can choose the right solution for your business." />

          <div className="mt-12">
            <h3 className="font-display text-lg font-semibold text-[hsl(var(--gold-3))]">Website Platforms</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {platforms.map((p) => (
                <div key={p} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                  <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-[hsl(var(--gold-3))]">Front End Technologies</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {frontend.map((f) => (
                <div key={f} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                  <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-[hsl(var(--gold-3))]">Back End Technologies</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {backend.map((b) => (
                <div key={b} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                  <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-[hsl(var(--gold-3))]">Databases</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {databases.map((d) => (
                <div key={d} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                  <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-[hsl(var(--gold-3))]">Hosting & Cloud</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {hosting.map((h) => (
                <div key={h} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                  <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Why Choose Us" title={<>Why businesses <span className="text-gradient-gold italic">choose Myzonic</span>.</>} desc="We combine creative design, modern development technologies, and strategic thinking to deliver websites that help businesses grow." />
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
        <div className="container-tight">
          <SectionHeader eyebrow="What You Can Expect" title={<>What you can <span className="text-gradient-gold italic">expect</span>.</>} desc="When you partner with Myzonic, you're getting more than just a website. You're investing in a solution designed around your business goals, your audience, and your long-term growth." />
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-8 transition-all hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--gold-3))]">Designed for Performance</h3>
              <p className="mt-3 text-sm text-muted-foreground">A beautiful website means very little if it doesn't perform well. That's why every website we build is optimized for speed, security, and usability from day one.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {performanceFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(var(--gold-3))]" />
                    <span className="text-sm text-foreground/85">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-8 transition-all hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--gold-3))]">Built Around Your Business</h3>
              <p className="mt-3 text-sm text-muted-foreground">No two businesses are the same, and neither should their websites. We take the time to understand your business, industry, target audience, and objectives before we begin designing.</p>
              <p className="mt-3 text-sm text-muted-foreground">Whether your priority is generating leads, selling products online, booking appointments, or showcasing your portfolio, we develop solutions tailored specifically to your needs.</p>
            </div>

            <div className="rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-8 transition-all hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--gold-3))]">Integrations & Functionality</h3>
              <p className="mt-3 text-sm text-muted-foreground">Need more than a standard website? We can integrate the tools your business already relies on.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {integrations.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(var(--gold-3))]" />
                    <span className="text-sm text-foreground/85">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-8 transition-all hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
              <h3 className="font-display text-xl font-bold text-[hsl(var(--gold-3))]">Future Ready Websites</h3>
              <p className="mt-3 text-sm text-muted-foreground">Technology evolves quickly, and your website should be built with the future in mind. Our websites are designed with scalability in mind, making it easier to add new features, pages, integrations, or functionality as your business grows.</p>
              <p className="mt-3 text-sm text-muted-foreground">Whether you're planning to expand your services, launch an online store, or integrate third-party tools, your website will be ready to evolve with you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Our Commitment" title={<>Why clients <span className="text-gradient-gold italic">trust Myzonic</span>.</>} desc="Businesses choose Myzonic because we focus on building long-term relationships rather than simply delivering projects." />
          <div className="mt-14 glass-strong rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-base text-muted-foreground md:text-lg">
                We believe in honest communication, reliable support, and creating digital solutions that provide real value. Our goal is simple: to build a website that you're proud to share and your customers enjoy using.
              </p>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Every website we create reflects the same commitment to quality, performance, and attention to detail. From startups taking their first steps online to established businesses looking to modernize their digital presence, we approach every project with the same level of care and professionalism.
              </p>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                When you choose Myzonic, you're choosing a team that's invested in helping your business succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Our Process" title={<>Our development <span className="text-gradient-gold italic">process</span>.</>} desc="A proven six-step system that delivers websites built for performance and growth." />
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
              {processSteps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] font-display font-bold">{s.n}</div>
                  <div className="mt-5 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] p-5 text-center">
                    <h3 className="mt-2 font-display text-sm font-semibold">{s.title}</h3>
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
          <SectionHeader eyebrow="Industries" title={<>Industries we <span className="text-gradient-gold italic">serve</span>.</>} desc="We build websites for businesses across a wide range of industries." />
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
              Your next website <span className="text-gradient-gold italic">starts here</span>.
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              A great website isn't just about looking good. It should represent your brand, earn your customers' trust, and help your business grow. At Myzonic, we combine thoughtful design, modern technology, and proven development practices to create websites that are visually engaging, easy to use, and built for long-term success.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Whether you're starting from scratch or giving your existing website a fresh new direction, we're here to bring your vision to life.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:Contact@myzonic.com" className="sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                <Mail className="h-4 w-4" /> Start Your Project
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
