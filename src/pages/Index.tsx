import Nav from "@/components/solvix/Nav";
import Hero from "@/components/solvix/Hero";
import LogoMarquee from "@/components/solvix/LogoMarquee";
import ServicesBento from "@/components/solvix/ServicesBento";
import FeaturedSpotlight from "@/components/solvix/FeaturedSpotlight";
import Portfolio from "@/components/solvix/Portfolio";
import Process from "@/components/solvix/Process";
import ToolsCloud from "@/components/solvix/ToolsCloud";
import WhyUs from "@/components/solvix/WhyUs";
import Pricing from "@/components/solvix/Pricing";
import Testimonials from "@/components/solvix/Testimonials";
import FAQ from "@/components/solvix/FAQ";
import ContactCTA from "@/components/solvix/ContactCTA";
import Footer from "@/components/solvix/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Myzonic - Digital Done Right";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Myzonic is a full stack digital engineering studio building websites, mobile apps, SaaS platforms, AI systems, automation and education platforms."
    );
    setMeta("og:title", "Myzonic - Digital Done Right", "property");
    setMeta(
      "og:description",
      "Custom coded systems, mobile apps, scalable platforms, and AI powered digital solutions tailored to your business.",
      "property"
    );

    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = window.location.origin + "/";
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <LogoMarquee />
      <ServicesBento />
      <FeaturedSpotlight />
      <Portfolio />
      <Process />
      <ToolsCloud />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
