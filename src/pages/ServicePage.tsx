import { useEffect, useMemo } from "react";
import {
  AppWindow,
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  ContactRound,
  FilePenLine,
  Gauge,
  Layers3,
  MonitorCog,
  PlugZap,
  Puzzle,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/solvix/Footer";
import Nav from "@/components/solvix/Nav";
import { getServicePage } from "@/data/servicePages";
import NotFound from "./NotFound";

const serviceContent = import.meta.glob("../content/services/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

type ContentBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rule" };

type ServiceVisual = {
  Icon: LucideIcon;
  label: string;
  detail: string;
};

const serviceVisuals: Record<string, ServiceVisual> = {
  "payroll-services": { Icon: CircleDollarSign, label: "Accurate by design", detail: "Payroll systems" },
  "resume-cover-letter-writing": { Icon: FilePenLine, label: "Stand out clearly", detail: "Career documents" },
  "mobile-app-development": { Icon: Smartphone, label: "Built for hands", detail: "Mobile experiences" },
  "custom-software-development": { Icon: Code2, label: "Built around you", detail: "Custom systems" },
  "desktop-app-development": { Icon: MonitorCog, label: "Power at work", detail: "Desktop software" },
  "chrome-extension-development": { Icon: Puzzle, label: "Extend your workflow", detail: "Browser tools" },
  "web-application-development": { Icon: AppWindow, label: "Ready to scale", detail: "Web platforms" },
  "ai-development": { Icon: BrainCircuit, label: "Make work smarter", detail: "AI systems" },
  "saas-development": { Icon: Layers3, label: "Built to grow", detail: "SaaS products" },
  "api-integrations": { Icon: PlugZap, label: "Systems in sync", detail: "Connected data" },
  "business-automation": { Icon: Workflow, label: "Work, simplified", detail: "Smart automation" },
  "custom-crm-development": { Icon: ContactRound, label: "Relationships organised", detail: "Customer systems" },
};

const sectionIcons: LucideIcon[] = [BriefcaseBusiness, Layers3, Gauge, Workflow, Sparkles, Code2];

function parseMarkdown(markdown: string): ContentBlock[] {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const blocks: ContentBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: "p", text: paragraph.join(" ") });
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: "list", items: list });
    list = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line === "---") {
      flushParagraph();
      flushList();
      blocks.push({ type: "rule" });
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", text: line.slice(4) });
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: line.slice(3) });
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith("* ") || line.startsWith("- ")) {
      flushParagraph();
      list.push(line.slice(2));
      continue;
    }
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function InlineText({ text }: { text: string }) {
  const pieces = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {pieces.map((piece, index) =>
        piece.startsWith("**") && piece.endsWith("**") ? (
          <strong key={index} className="font-semibold text-foreground">{piece.slice(2, -2)}</strong>
        ) : (
          piece
        ),
      )}
    </>
  );
}

export default function ServicePage() {
  const { slug = "" } = useParams();
  const service = getServicePage(slug);
  const markdown = serviceContent[`../content/services/${slug}.md`];
  const blocks = useMemo(() => parseMarkdown(markdown ?? ""), [markdown]);
  const visual = serviceVisuals[slug] ?? { Icon: Sparkles, label: "Built with intent", detail: "Myzonic service" };
  const VisualIcon = visual.Icon;

  useEffect(() => {
    if (!service) return;
    document.title = `${service.title} | Myzonic`;
    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = service.summary;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/services/${service.slug}`;
  }, [service]);

  if (!service || !markdown) return <NotFound />;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-52">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.22),transparent_72%)] blur-3xl" />
        </div>
        <div className="container-tight">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[hsl(var(--gold-3))]">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-card/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--gold-3))]">
                <Sparkles className="h-3.5 w-3.5" /> {service.eyebrow}
              </div>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">{service.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{service.summary}</p>
              <a href="/#contact" className="sheen mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
                Discuss your project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <ServiceVisualCard visual={visual} />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-tight grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20">
          <article className="space-y-7">
            {blocks.map((block, index) => {
              const SectionIcon = sectionIcons[index % sectionIcons.length];
              if (block.type === "h2") return <div key={index} className="flex items-center gap-4 pt-10"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold-soft bg-gold/10 text-[hsl(var(--gold-3))]"><SectionIcon className="h-5 w-5" /></span><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{block.text}</h2></div>;
              if (block.type === "h3") return <div key={index} className="flex items-center gap-3 pt-4"><span className="h-2 w-2 rounded-full bg-[hsl(var(--gold-3))]" /><h3 className="text-xl font-semibold md:text-2xl">{block.text}</h3></div>;
              if (block.type === "p") return <p key={index} className="max-w-3xl text-[1.02rem] leading-8 text-muted-foreground"><InlineText text={block.text} /></p>;
              if (block.type === "list") return <ul key={index} className="grid gap-3 sm:grid-cols-2">{block.items.map((item, itemIndex) => <li key={item} className="group rounded-2xl border border-gold-soft bg-card/40 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.5)]"><span className="mb-3 grid h-8 w-8 place-items-center rounded-xl bg-gold/10 text-[hsl(var(--gold-3))]"><CheckCircle2 className="h-4 w-4" /></span><span className="block text-sm leading-6 text-muted-foreground"><InlineText text={item} /></span><span className="sr-only">Feature {itemIndex + 1}</span></li>)}</ul>;
              return <div key={index} className="h-px w-full bg-gold-soft" />;
            })}
          </article>
          <aside className="h-fit rounded-3xl border border-gold-soft bg-card/50 p-6 lg:sticky lg:top-28">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-soft bg-gold/10 text-[hsl(var(--gold-3))]"><VisualIcon className="h-6 w-6" /></div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--gold-3))]">Let’s build</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Ready to discuss it?</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Tell us what you need. We’ll help you define a practical next step.</p>
            <a href="/#contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-soft px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/5">Start a conversation <ArrowUpRight className="h-4 w-4" /></a>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function ServiceVisualCard({ visual }: { visual: ServiceVisual }) {
  const Icon = visual.Icon;
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_40%_25%,hsl(var(--gold-2)/0.28),transparent_58%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold-2)/0.45)] bg-[linear-gradient(145deg,hsl(var(--card)),hsl(var(--background)))] p-6 shadow-2xl shadow-black/30">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full border border-[hsl(var(--gold-2)/0.25)]" />
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[hsl(var(--gold-2)/0.2)]" />
        <div className="relative flex items-start justify-between">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-[hsl(var(--gold-2)/0.45)] bg-gold/15 text-[hsl(var(--gold-3))] shadow-[var(--shadow-gold)]"><Icon className="h-8 w-8" /></div>
          <span className="rounded-full border border-gold-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--gold-3))]">Myzonic</span>
        </div>
        <div className="relative mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{visual.detail}</p>
          <p className="mt-3 font-display text-3xl font-bold leading-tight">{visual.label}</p>
        </div>
        <div className="relative mt-8 grid grid-cols-3 gap-2">
          {["Strategy", "Craft", "Growth"].map((item, index) => <div key={item} className="rounded-xl border border-gold-soft bg-background/70 px-2 py-3 text-center"><div className="mx-auto mb-2 h-1.5 w-7 rounded-full bg-[hsl(var(--gold-3)/0.7)]" style={{ opacity: 1 - index * 0.2 }} /><span className="text-[10px] uppercase tracking-wide text-muted-foreground">{item}</span></div>)}
        </div>
      </div>
    </div>
  );
}
