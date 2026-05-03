import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./ServicesBento";

const faqs = [
  {
    q: "How fast can you start?",
    a: "Most engagements kick off within 5–10 business days. Smaller scopes can begin in under a week.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-scope sprints for defined work, monthly retainers for ongoing partnerships, and hybrid models for product builds. You'll always have a clear total before we start.",
  },
  {
    q: "Do you work with existing teams?",
    a: "Absolutely. We embed with in-house designers, developers and marketers — bringing senior firepower, not friction.",
  },
  {
    q: "Which platforms do you specialise in?",
    a: "We're platform-fluent: Shopify, Webflow, WordPress and headless stacks (Next.js, React, Node). Mobile in Swift, Kotlin, React Native and Flutter. Automation in Make.com and n8n.",
  },
  {
    q: "Do you handle ongoing growth?",
    a: "Yes — paid ads, SEO, CRO and AI automation are all in-house. Many clients keep us on monthly to compound results post-launch.",
  },
  {
    q: "What size companies do you work with?",
    a: "From funded startups shipping their first product to enterprises modernising legacy stacks. The common thread is ambition.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient-gold italic">answered</span>.
            </>
          }
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-gold-soft bg-[hsl(var(--surface))] px-5 transition-colors hover:border-[hsl(var(--gold-2)/0.45)]"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
