import { useEffect, useMemo } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
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
          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-card/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--gold-3))]">
              <Sparkles className="h-3.5 w-3.5" /> {service.eyebrow}
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{service.summary}</p>
            <a href="/#contact" className="sheen mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5">
              Discuss your project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-tight grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20">
          <article className="space-y-7">
            {blocks.map((block, index) => {
              if (block.type === "h2") return <h2 key={index} className="pt-7 font-display text-3xl font-bold leading-tight md:text-4xl">{block.text}</h2>;
              if (block.type === "h3") return <h3 key={index} className="pt-3 text-xl font-semibold md:text-2xl">{block.text}</h3>;
              if (block.type === "p") return <p key={index} className="max-w-3xl text-[1.02rem] leading-8 text-muted-foreground"><InlineText text={block.text} /></p>;
              if (block.type === "list") return <ul key={index} className="grid gap-3 rounded-3xl border border-gold-soft bg-card/40 p-6 sm:grid-cols-2">{block.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--gold-3))]" /><span><InlineText text={item} /></span></li>)}</ul>;
              return <div key={index} className="h-px w-full bg-gold-soft" />;
            })}
          </article>
          <aside className="h-fit rounded-3xl border border-gold-soft bg-card/50 p-6 lg:sticky lg:top-28">
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
