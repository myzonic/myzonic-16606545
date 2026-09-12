export type ServicePageMeta = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  category: "Technology" | "Business services";
};

export const servicePages: ServicePageMeta[] = [
  {
    slug: "payroll-services",
    title: "Payroll Services",
    eyebrow: "Business services",
    summary: "Reliable payroll support designed to keep your team paid accurately and on time.",
    category: "Business services",
  },
  {
    slug: "resume-cover-letter-writing",
    title: "Resume & Cover Letter Writing",
    eyebrow: "Career services",
    summary: "Professional career documents that present your experience with clarity and confidence.",
    category: "Business services",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    eyebrow: "Digital products",
    summary: "Purpose-built iOS and Android applications for real businesses and real users.",
    category: "Technology",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    eyebrow: "Digital products",
    summary: "Software shaped around the way your business operates—not the other way around.",
    category: "Technology",
  },
  {
    slug: "desktop-app-development",
    title: "Windows & Mac Application Development",
    eyebrow: "Digital products",
    summary: "Reliable desktop applications with the performance and workflow your team needs.",
    category: "Technology",
  },
  {
    slug: "chrome-extension-development",
    title: "Chrome Extension Development",
    eyebrow: "Automation & productivity",
    summary: "Custom browser tools that streamline work, connect systems, and unlock productivity.",
    category: "Technology",
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    eyebrow: "Digital products",
    summary: "Secure, scalable web applications built around your operations and customers.",
    category: "Technology",
  },
  {
    slug: "ai-development",
    title: "AI Development & Integration",
    eyebrow: "Intelligent systems",
    summary: "Practical AI solutions that support better customer experiences and smarter operations.",
    category: "Technology",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    eyebrow: "Digital products",
    summary: "Subscription software platforms built from MVP through a scalable product foundation.",
    category: "Technology",
  },
  {
    slug: "api-integrations",
    title: "API Development & Integrations",
    eyebrow: "Connected systems",
    summary: "Connect the software your business uses and make data move where it needs to.",
    category: "Technology",
  },
  {
    slug: "business-automation",
    title: "Business Process Automation",
    eyebrow: "Automation & productivity",
    summary: "Reduce repetitive manual work with practical automations built for your workflow.",
    category: "Technology",
  },
  {
    slug: "custom-crm-development",
    title: "Custom CRM Development",
    eyebrow: "Connected systems",
    summary: "A customer relationship platform that follows your sales process and business needs.",
    category: "Technology",
  },
];

export const getServicePage = (slug: string) =>
  servicePages.find((service) => service.slug === slug);
