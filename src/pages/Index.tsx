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
import TrustBadges from "@/components/solvix/TrustBadges";
import ContactCTA from "@/components/solvix/ContactCTA";
import Footer from "@/components/solvix/Footer";
const Index = () => {
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
      <TrustBadges />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
