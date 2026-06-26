import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Smartphone } from "lucide-react";
import { SectionHeader } from "./ServicesBento";

type Brand = { name: string; color: string; initial: string };

const brands: Brand[] = [
  { name: "Bing Places for Business", color: "#008373", initial: "B" },
  { name: "Apple Business Connect", color: "#555555", initial: "A" },
  { name: "Yelp", color: "#D32323", initial: "Y" },
  { name: "Foursquare", color: "#F94877", initial: "F" },
  { name: "Hotfrog", color: "#E8762D", initial: "H" },
  { name: "Brownbook", color: "#8B4513", initial: "B" },
  { name: "Manta", color: "#0077B6", initial: "M" },
  { name: "Yellow Pages (YP.com)", color: "#FFCC00", initial: "Y" },
  { name: "MerchantCircle", color: "#1E88E5", initial: "M" },
  { name: "Better Business Bureau", color: "#003B71", initial: "B" },
  { name: "EZlocal", color: "#2E7D32", initial: "E" },
  { name: "ShowMeLocal", color: "#FF6F00", initial: "S" },
  { name: "Cylex US", color: "#00ACC1", initial: "C" },
  { name: "CitySquares", color: "#7B1FA2", initial: "C" },
  { name: "ChamberofCommerce.com", color: "#C62828", initial: "C" },
  { name: "Nextdoor", color: "#8ED500", initial: "N" },
  { name: "Angi", color: "#F55B2D", initial: "A" },
  { name: "Sitejabber", color: "#1A1A2E", initial: "S" },
  { name: "2FindLocal", color: "#1565C0", initial: "2" },
  { name: "WhoDoYou", color: "#6A1B9A", initial: "W" },
  { name: "Spoke", color: "#00897B", initial: "S" },
  { name: "Birdeye", color: "#00BCD4", initial: "B" },
  { name: "Clutch", color: "#FF3C00", initial: "C" },
  { name: "GoodFirms", color: "#3F51B5", initial: "G" },
  { name: "Crunchbase", color: "#0288D1", initial: "C" },
  { name: "Product Hunt", color: "#DA552F", initial: "P" },
  { name: "G2", color: "#FF492C", initial: "G" },
  { name: "HoneyHat", color: "#FFB300", initial: "H" },
  { name: "DesignRush", color: "#00BFA5", initial: "D" },
  { name: "UpCity", color: "#651FFF", initial: "U" },
  { name: "The Manifest", color: "#37474F", initial: "M" },
  { name: "Agency Spotter", color: "#E91E63", initial: "A" },
  { name: "Expertise.com", color: "#009688", initial: "E" },
  { name: "SelectedFirms", color: "#FF6F00", initial: "S" },
  { name: "Sortlist", color: "#0055FF", initial: "S" },
];

export default function TrustBadges() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? brands : brands.slice(0, 8);

  return (
    <section className="relative py-28">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Trust Badges"
          title={
            <>
              Your brand, <span className="text-gradient-gold italic">listed everywhere</span>.
            </>
          }
          desc="We ensure your business appears across the top directories and review platforms - building credibility and local SEO authority."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-md">
          <div className="relative mx-auto w-[320px] rounded-[2.5rem] border-4 border-[hsl(var(--surface-3))] bg-[hsl(var(--surface))] p-4 shadow-[var(--shadow-gold)]">
            <div className="mb-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">Trust Signals</span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <AnimatePresence mode="popLayout">
                {visible.map((b) => (
                  <motion.div
                    key={b.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className="group flex flex-col items-center gap-1"
                  >
                    <div
                      className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white shadow-lg transition-transform group-hover:-translate-y-0.5"
                      style={{ backgroundColor: b.color }}
                    >
                      {b.initial}
                    </div>
                    <span className="text-[8px] text-center leading-tight text-muted-foreground line-clamp-2">
                      {b.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {brands.length > 8 && (
              <button
                onClick={() => setShowAll((s) => !s)}
                className="mx-auto mt-4 flex items-center gap-1.5 rounded-full border border-gold-soft px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-[hsl(var(--gold-2)/0.5)] hover:text-foreground"
              >
                {showAll ? "Show Less" : `+${brands.length - 8} More`}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAll ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
