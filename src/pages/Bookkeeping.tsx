import { useEffect } from "react";
import { ArrowUpRight, Calculator, Receipt, PieChart, Banknote, FileText, BarChart3, Shield, Clock, Users, TrendingUp, Landmark, BookOpen, CheckCircle2, Mail, MapPin, Star, Phone } from "lucide-react";
import Nav from "@/components/solvix/Nav";
import Footer from "@/components/solvix/Footer";
import { SectionHeader } from "@/components/solvix/ServicesBento";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const whatsIncluded = [
  "Monthly Bookkeeping",
  "Bank & Credit Card Reconciliations",
  "Accounts Payable (AP) Management",
  "Accounts Receivable (AR) Management",
  "Customer Invoicing",
  "Payroll Processing",
  "Financial Statement Preparation",
  "Profit & Loss Statements",
  "Balance Sheet Preparation",
  "Cash Flow Reporting",
  "Chart of Accounts Setup & Cleanup",
  "Catch-Up & Cleanup Bookkeeping",
  "QuickBooks Online Support",
  "Xero Bookkeeping",
  "CPA-Ready Financial Reports",
  "Secure Document Management",
];

const outsourceBenefits = [
  "Save time and reduce administrative workload",
  "Improve financial accuracy",
  "Reduce costly bookkeeping mistakes",
  "Access real-time financial insights",
  "Stay tax-ready year-round",
  "Lower operating costs",
  "Scale services as your business grows",
];

const bookkeepingServices = [
  { title: "Monthly Bookkeeping", desc: "Keep your financial records current with regular transaction categorization, reconciliations, and monthly reporting." },
  { title: "Catch-Up Bookkeeping", desc: "Behind on your books? We'll organize and update months or even years of financial records." },
  { title: "Bookkeeping Cleanup", desc: "Correct errors, remove duplicate transactions, fix uncategorized expenses, and prepare accurate financial reports." },
  { title: "Payroll Management", desc: "Process employee payroll accurately while ensuring tax compliance and timely payments." },
  { title: "Accounts Payable", desc: "Track bills, manage vendors, and ensure payments are made on time." },
  { title: "Accounts Receivable", desc: "Manage invoices, customer payments, and outstanding balances to improve cash flow." },
  { title: "Financial Reporting", desc: "Receive monthly Profit & Loss Statements, Balance Sheets, Cash Flow Statements, and customized reports." },
  { title: "Bookkeeping Consultation", desc: "Need advice? Our bookkeeping specialists can help improve your accounting workflow and reporting process." },
];

const industries = [
  "Retail Stores",
  "E-commerce Businesses",
  "Restaurants",
  "Medical & Dental Practices",
  "Law Firms",
  "Construction Companies",
  "Contractors",
  "HVAC Companies",
  "Electricians",
  "Plumbers",
  "Landscaping Businesses",
  "Manufacturing Companies",
  "Marketing Agencies",
  "Consultants",
  "Coaches",
  "Real Estate Investors",
  "Property Management Companies",
  "Nonprofit Organizations",
  "Technology Startups",
];

const whyChoose = [
  "Experienced bookkeeping professionals",
  "Affordable monthly pricing",
  "Accurate financial reporting",
  "Secure cloud-based bookkeeping",
  "Dedicated account support",
  "Quick response times",
  "Transparent communication",
  "Scalable bookkeeping solutions",
  "CPA-ready financial statements",
  "100% confidential handling of financial data",
];

const processSteps = [
  { n: "01", title: "Free Consultation", desc: "We learn about your business, accounting software, and bookkeeping needs.", icon: <BookOpen className="h-5 w-5" /> },
  { n: "02", title: "Account Setup", desc: "We organize your Chart of Accounts, connect bank accounts, and review your financial records.", icon: <CheckCircle2 className="h-5 w-5" /> },
  { n: "03", title: "Monthly Bookkeeping", desc: "Our team categorizes transactions, reconciles accounts, manages invoices, and keeps your books current.", icon: <Clock className="h-5 w-5" /> },
  { n: "04", title: "Financial Reports", desc: "Receive accurate monthly financial statements that help you make informed business decisions.", icon: <TrendingUp className="h-5 w-5" /> },
  { n: "05", title: "Ongoing Support", desc: "Our bookkeeping experts remain available to answer questions and help your business grow.", icon: <Users className="h-5 w-5" /> },
];

const software = [
  "QuickBooks Online",
  "QuickBooks Desktop (Pro, Premier & Enterprise)",
  "Xero",
  "Zoho Books",
  "FreshBooks",
  "Wave Accounting",
  "Sage 50 & Sage Business Cloud Accounting",
  "NetSuite",
  "Oracle NetSuite ERP",
  "Microsoft Dynamics 365 Business Central",
  "Odoo Accounting",
  "Kashoo",
  "FreeAgent",
  "Reckon",
  "MYOB",
  "KashFlow",
  "Aplos (Nonprofits)",
  "Patriot Accounting",
  "AccountEdge",
  "ZipBooks",
  "GnuCash",
  "Sunrise by Lendio",
  "Busy Accounting Software",
  "TallyPrime",
  "Microsoft Excel Bookkeeping",
  "Google Sheets Financial Tracking",
];

const faqs = [
  { q: "Do you offer monthly bookkeeping services?", a: "Yes. We provide flexible monthly bookkeeping plans designed for businesses of all sizes." },
  { q: "Can you clean up overdue books?", a: "Absolutely. We specialize in catch-up bookkeeping and cleanup services for businesses with outdated financial records." },
  { q: "Do you prepare financial statements?", a: "Yes. We prepare Profit & Loss Statements, Balance Sheets, Cash Flow Statements, and other financial reports." },
  { q: "Can you work with my CPA or tax preparer?", a: "Yes. We provide CPA-ready financial reports that simplify tax preparation and year-end filing." },
  { q: "Which accounting software do you use?", a: "We support QuickBooks Online, QuickBooks Desktop, Xero, Zoho Books, FreshBooks, Wave, Sage, NetSuite, Microsoft Dynamics 365, Odoo, and many more. If you use a platform not listed, contact us and we'll see how we can help." },
  { q: "Is my financial data secure?", a: "Yes. We use bank-level 256-bit encryption, SOC 2 compliant tools, and strict access controls. Your data is never shared." },
];

const pricingPlans = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses",
    price: "$149",
    meta: "/month",
    features: [
      "Up to 200 monthly transactions",
      "Financial statement preparation",
      "Up to 4 credit card reconciliations",
      "Chart of Accounts setup",
      "Accounts Payable (AP) & Accounts Receivable (AR) management",
      "Customer invoicing",
      "Payroll for up to 3 employees",
      "Free bookkeeping cleanup during onboarding",
      "Secure document management",
      "Monthly review meeting",
      "CPA-ready financials & guidance",
    ],
  },
  {
    name: "Professional",
    tagline: "Ideal for growing businesses",
    highlight: true,
    price: "$249",
    meta: "/month",
    features: [
      "Up to 350 monthly transactions",
      "Financial statement preparation",
      "Unlimited bank reconciliations",
      "Unlimited credit card reconciliations",
      "Company setup",
      "Chart of Accounts setup",
      "AP & AR management",
      "Customer invoicing",
      "Payroll for up to 8 employees",
      "Payroll class tracking",
      "Free bookkeeping cleanup during onboarding",
      "Secure document management",
      "Bi-weekly review meetings",
      "CPA-ready financials & guidance",
    ],
  },
  {
    name: "Business Pro",
    tagline: "Built for established businesses",
    price: "$499",
    meta: "/month",
    features: [
      "Up to 600 monthly transactions",
      "Financial statement preparation",
      "Unlimited bank reconciliations",
      "Unlimited credit card reconciliations",
      "Company setup",
      "Chart of Accounts setup",
      "AP & AR management",
      "Customer invoicing",
      "Payroll for up to 15 employees",
      "Payroll class tracking",
      "Free bookkeeping cleanup during onboarding",
      "Financial statement analysis & insights",
      "Secure document management",
      "Weekly review meetings",
      "CPA-ready financials & guidance",
    ],
  },
];

export default function Bookkeeping() {
  useEffect(() => {
    document.title = "Professional Bookkeeping Services | Myzonic - Accurate Financial Management";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Myzonic offers professional bookkeeping services for small businesses, startups, and growing companies. Monthly bookkeeping, bank reconciliations, payroll, AP/AR management, and CPA-ready financial reporting. Affordable plans from $149/mo.");
    setMeta("keywords", "bookkeeping services, professional bookkeeper, small business bookkeeping, accounting services, financial reporting, payroll management, tax preparation, QuickBooks bookkeeper, Xero bookkeeper, virtual bookkeeper, outsourced bookkeeping, bank reconciliation, accounts payable, accounts receivable");
    setMeta("og:title", "Professional Bookkeeping Services | Myzonic", "property");
    setMeta("og:description", "Professional bookkeeping services for small businesses. Monthly bookkeeping, bank reconciliations, payroll support, and CPA-ready financial reports from $149/mo.", "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", window.location.href, "property");
    setMeta("og:site_name", "Myzonic", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Professional Bookkeeping Services | Myzonic");
    setMeta("twitter:description", "Professional bookkeeping for small businesses. Monthly bookkeeping, reconciliations, payroll, and financial reporting from $149/mo.");
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement("link"); canon.rel = "canonical"; document.head.appendChild(canon); }
    canon.href = window.location.origin + "/bookkeeping";

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Myzonic Bookkeeping Services",
      description: "Professional bookkeeping services for small businesses, startups, and growing companies including monthly bookkeeping, bank reconciliations, payroll, and financial reporting.",
      provider: { "@type": "Organization", name: "Myzonic", url: window.location.origin },
      serviceType: "Bookkeeping",
      areaServed: "Worldwide",
      priceRange: "$149 - $499 per month",
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
            <span className="text-muted-foreground">Professional Bookkeeping Services</span>
          </div>
          <h1 className="font-display text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[5.5vw] lg:text-[72px]">
            Books that balance. <br />
            <span className="text-gradient-gold italic">Numbers that grow.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base text-muted-foreground md:text-lg">
            Keep your finances organized, accurate, and tax-ready with Myzonic's professional bookkeeping services. We help small businesses, startups, freelancers, and growing companies manage their books so they can focus on running their business.
          </p>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Whether you need monthly bookkeeping, bank reconciliations, payroll support, accounts payable and receivable management, or financial reporting, Myzonic delivers reliable, affordable solutions tailored to your business.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
              View Pricing <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5">
              Free Consultation
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-gold-soft pt-8 md:grid-cols-4">
            {[["99.8%", "Accuracy Rate"], ["< 48h", "Report Turnaround"], ["500+", "Businesses Served"], ["12+", "Years Experience"]].map(([v, l]) => (
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
          <SectionHeader eyebrow="What's Included" title={<>Everything your business <span className="text-gradient-gold italic">needs</span>.</>} desc="Our professional bookkeeping services cover all aspects of financial management to keep your business running smoothly." />
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whatsIncluded.map((item, i) => (
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
          <SectionHeader eyebrow="Why Outsource" title={<>Why outsource your <span className="text-gradient-gold italic">bookkeeping?</span></>} desc="Managing your books shouldn't be stressful. At Myzonic, we combine experienced bookkeeping professionals with modern cloud-based accounting tools to provide accurate financial records and timely reports." />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {outsourceBenefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-5 transition-all hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[hsl(var(--gold-2)/0.15)] text-[hsl(var(--gold-3))]">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground/85">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Our Services" title={<>Our bookkeeping <span className="text-gradient-gold italic">services</span>.</>} desc="Comprehensive bookkeeping solutions tailored to your business needs." />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bookkeepingServices.map((svc) => (
              <div key={svc.title} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,hsl(var(--gold-2)/0.15),transparent_70%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="font-display text-lg font-semibold">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Industries" title={<>Industries & business sizes we <span className="text-gradient-gold italic">support</span>.</>} desc="We provide bookkeeping services for a wide range of industries and business sizes." />
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
          <SectionHeader eyebrow="Why Choose Us" title={<>Why businesses <span className="text-gradient-gold italic">choose Myzonic</span>.</>} desc="We combine experienced professionals, modern technology, and affordable pricing to deliver reliable bookkeeping services." />
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
          <SectionHeader eyebrow="Nationwide" title={<>Bookkeeping services across the <span className="text-gradient-gold italic">USA</span>.</>} desc="Myzonic provides professional bookkeeping services to businesses across the United States. Whether you're in New York, California, Texas, Florida, Illinois, or anywhere in between, our remote bookkeeping team is ready to help." />
          <div className="mt-12 glass-strong rounded-3xl p-6 md:p-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold">Serving Businesses Nationwide</h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">From coast to coast, our bookkeeping professionals work remotely with businesses of all sizes. We understand the unique financial needs of different regions and industries across the United States.</p>
              </div>
              <a href="#contact" className="sheen relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                Get Started <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Our Process" title={<>Our bookkeeping <span className="text-gradient-gold italic">process</span>.</>} desc="A proven five-step system that keeps your finances organized and your business compliant." />
          <div className="relative mt-16">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">{s.icon}</div>
                  <div className="mt-5 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] p-5 text-center">
                    <div className="font-display text-xs uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">{s.n}</div>
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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.1),transparent_70%)] blur-3xl" />
        </div>
        <div className="container-tight">
          <SectionHeader eyebrow="Software" title={<>Accounting software we <span className="text-gradient-gold italic">support</span>.</>} desc="Our bookkeeping professionals are experienced with a wide range of cloud-based and desktop accounting platforms." />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {software.map((sw) => (
              <div key={sw} className="group relative overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.45)] hover:shadow-[var(--shadow-gold)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--gold-2)/0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 font-display text-xs font-semibold text-foreground/85 group-hover:text-foreground">{sw}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 glass-strong rounded-3xl p-6 md:p-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold">Need Help Migrating?</h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">Already using another accounting platform? We can help migrate your financial data, organize your chart of accounts, reconcile transactions, and ensure a smooth transition with minimal disruption to your business.</p>
              </div>
              <a href="#contact" className="sheen relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                Get Help <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-28">
        <div className="container-tight">
          <SectionHeader eyebrow="Pricing" title={<>Transparent <span className="text-gradient-gold italic">pricing plans</span>.</>} desc="Choose the plan that fits your business. All plans include free bookkeeping cleanup during onboarding." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`relative flex flex-col rounded-3xl p-7 transition-all hover:-translate-y-1 ${plan.highlight ? "glass-strong ring-1 ring-[hsl(var(--gold-2)/0.5)] shadow-[var(--shadow-gold)]" : "border border-gold-soft bg-[hsl(var(--surface))/0.6]"}`}>
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                    <Star className="h-3 w-3" /> Most Popular
                  </span>
                )}
                <div className="font-display text-xl font-bold">{plan.name}</div>
                <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-gradient-gold">{plan.price}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{plan.meta}</div>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[hsl(var(--gold-2)/0.15)] text-[hsl(var(--gold-3))]">
                        <CheckCircle2 className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${plan.highlight ? "bg-gold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]" : "border border-gold-soft text-foreground hover:bg-white/5"}`}>
                  Get Started <ArrowUpRight className="h-4 w-4" />
                </a>
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
              Ready to <span className="text-gradient-gold italic">simplify</span> your bookkeeping?
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Let Myzonic handle your bookkeeping while you focus on growing your business. From daily transaction management to monthly financial reporting and payroll support, we provide reliable bookkeeping solutions that keep your business financially organized.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Schedule your free consultation today and discover how Myzonic can help streamline your finances.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:hello@myzonic.studio" className="sheen relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)]">
                <Mail className="h-4 w-4" /> Schedule Free Consultation
              </a>
              <a href="https://wa.me/16304038612" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-gold-soft px-5 py-3 text-sm font-medium text-foreground hover:bg-white/5">
                WhatsApp Us
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
