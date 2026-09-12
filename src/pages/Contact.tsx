import ContactCTA from "@/components/solvix/ContactCTA";
import Footer from "@/components/solvix/Footer";
import Nav from "@/components/solvix/Nav";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Myzonic | Start Your Project";
    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = "Contact Myzonic to discuss your next website, software, design, AI, or automation project.";
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <section className="relative overflow-hidden pb-2 pt-36 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold-2)/0.16),transparent_58%)]" />
        <div className="container-tight">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">Contact Myzonic</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.98] md:text-7xl">Let’s make your next move <span className="text-gradient-gold italic">matter</span>.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Share the goal, challenge, or idea you’re working on. We’ll reply with a clear next step.</p>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
}
import { useEffect } from "react";
