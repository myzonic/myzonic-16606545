import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Brand = {
  name: string;
  icon: React.ReactNode;
};

const Svg = ({ viewBox, children, color }: { viewBox?: string; children: React.ReactNode; color?: string }) => (
  <svg viewBox={viewBox || "0 0 24 24"} className="h-6 w-6" fill={color || "currentColor"} xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

const BingIcon = () => (
  <Svg viewBox="0 0 24 24" color="#008373">
    <path d="M4.8 2.4v16.8L12 24l7.2-4.8V12l-3.6 2.4-2.4-1.2V7.2L9.6 4.8 4.8 2.4z"/>
  </Svg>
);

const AppleBusinessIcon = () => (
  <Svg viewBox="0 0 24 24" color="#555">
    <path d="M17.6 3.2c.4-.4.8-.8.8-1.2 0-.4-.4-.8-.8-.8-.4 0-.8.4-1.2.8-.4.4-.8.8-.8 1.2 0 .4.4.8.8.8.4 0 .8-.4 1.2-.8zm1.6 4.8c0-1.6-.8-2.8-2-3.6-.4-.4-.8-.4-1.2 0-.4.4-.4.8 0 1.2.8.4 1.2 1.2 1.2 2v.8c0 .4.4.8.8.8s.8-.4.8-.8V8zm-3.2 7.2c1.2 0 2-.8 2-2v-2c0-.4-.4-.8-.8-.8s-.8.4-.8.8v2c0 .4-.4.8-.8.8H7.2c-.4 0-.8-.4-.8-.8V4.8c0-.4.4-.8.8-.8h5.6c.4 0 .8-.4.8-.8s-.4-.8-.8-.8H7.2C6 2.4 4.8 3.6 4.8 4.8v12c0 1.2 1.2 2.4 2.4 2.4h8c1.2 0 2.4-1.2 2.4-2.4v-.8z"/>
  </Svg>
);

const YelpIcon = () => (
  <Svg viewBox="0 0 24 24" color="#D32323">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6h2v4h-2V8zm0 6h2v2h-2v-2z"/>
  </Svg>
);

const FoursquareIcon = () => (
  <Svg viewBox="0 0 24 24" color="#F94877">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h5l-.5 2H12v2h3l-.5 2H12v5h-2V7z"/>
  </Svg>
);

const HotfrogIcon = () => (
  <Svg viewBox="0 0 24 24" color="#E8762D">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>
  </Svg>
);

const BrownbookIcon = () => (
  <Svg viewBox="0 0 24 24" color="#8B4513">
    <path d="M4 3h16v2H4V3zm0 4h16v2H4V7zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/>
  </Svg>
);

const MantaIcon = () => (
  <Svg viewBox="0 0 24 24" color="#0077B6">
    <path d="M3 3h7v18H3V3zm11 0h7v4h-7V3zm0 6h7v4h-7V9zm0 6h7v4h-7v-4z"/>
  </Svg>
);

const YellowPagesIcon = () => (
  <Svg viewBox="0 0 24 24" color="#DAA520">
    <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h12v2H4v-2z"/>
  </Svg>
);

const MerchantCircleIcon = () => (
  <Svg viewBox="0 0 24 24" color="#1E88E5">
    <path d="M2 6h20v12H2V6zm2 2v8h16V8H4zm3 2h2v4H7v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z"/>
  </Svg>
);

const BBBIcon = () => (
  <Svg viewBox="0 0 24 24" color="#003B71">
    <path d="M4 2h16v4H4V2zm0 6h16v6c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V8z"/>
  </Svg>
);

const EZlocalIcon = () => (
  <Svg viewBox="0 0 24 24" color="#2E7D32">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h4v2h-4V7zm0 3h4v2h-4v-2zm0 3h4v2h-4v-2z"/>
  </Svg>
);

const ShowMeLocalIcon = () => (
  <Svg viewBox="0 0 24 24" color="#FF6F00">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h6l-2 4 2 4h-6V7z"/>
  </Svg>
);

const CylexIcon = () => (
  <Svg viewBox="0 0 24 24" color="#00ACC1">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h4v2h-4V7zm0 3h6v2h-6v-2zm0 3h4v2h-4v-2z"/>
  </Svg>
);

const CitySquaresIcon = () => (
  <Svg viewBox="0 0 24 24" color="#7B1FA2">
    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
  </Svg>
);

const ChamberIcon = () => (
  <Svg viewBox="0 0 24 24" color="#C62828">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.21l6.36 3.18L12 10.57 5.64 7.39 12 4.21zM4 9.61l7 3.5v6.68l-7-3.5V9.61zm16 0v6.68l-7 3.5v-6.68l7-3.5z"/>
  </Svg>
);

const NextdoorIcon = () => (
  <Svg viewBox="0 0 24 24" color="#8ED500">
    <path d="M12 2L2 8v8l10 6 10-6V8l-10-6z"/>
  </Svg>
);

const AngiIcon = () => (
  <Svg viewBox="0 0 24 24" color="#F55B2D">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h4l-1 3h2l-3 5v-3h-2l2-5z"/>
  </Svg>
);

const SitejabberIcon = () => (
  <Svg viewBox="0 0 24 24" color="#1A1A2E">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.21l6.36 3.18L12 10.57 5.64 7.39 12 4.21zM4 9.61l7 3.5v6.68l-7-3.5V9.61zm16 0v6.68l-7 3.5v-6.68l7-3.5z"/>
  </Svg>
);

const FindLocalIcon = () => (
  <Svg viewBox="0 0 24 24" color="#1565C0">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
  </Svg>
);

const WhoDoYouIcon = () => (
  <Svg viewBox="0 0 24 24" color="#6A1B9A">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>
  </Svg>
);

const SpokeIcon = () => (
  <Svg viewBox="0 0 24 24" color="#00897B">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5h2v2h-2V7zm0 3h2v5h-2v-5zm0 6h2v2h-2v-2z"/>
  </Svg>
);

const BirdeyeIcon = () => (
  <Svg viewBox="0 0 24 24" color="#00BCD4">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>
  </Svg>
);

const ClutchIcon = () => (
  <Svg viewBox="0 0 24 24" color="#FF3C00">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>
  </Svg>
);

const GoodFirmsIcon = () => (
  <Svg viewBox="0 0 24 24" color="#3F51B5">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.21l6.36 3.18L12 10.57 5.64 7.39 12 4.21zM4 9.61l7 3.5v6.68l-7-3.5V9.61zm16 0v6.68l-7 3.5v-6.68l7-3.5z"/>
  </Svg>
);

const CrunchbaseIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="#0288D1" xmlns="http://www.w3.org/2000/svg">
    <title>Crunchbase</title>
    <path d="M21.6 0H2.4A2.41 2.41 0 0 0 0 2.4v19.2A2.41 2.41 0 0 0 2.4 24h19.2a2.41 2.41 0 0 0 2.4-2.4V2.4A2.41 2.41 0 0 0 21.6 0zM7.045 14.465A2.11 2.11 0 0 0 9.84 13.42h1.66a3.69 3.69 0 1 1 0-1.75H9.84a2.11 2.11 0 1 0-2.795 2.795zm11.345.845a3.55 3.55 0 0 1-1.06.63 3.68 3.68 0 0 1-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 0 1 1.8-.63H16a3.67 3.67 0 0 1 2.39 6.46zm-.223-2.766a2.104 2.104 0 1 1-4.207 0 2.104 2.104 0 0 1 4.207 0z"/>
  </svg>
);

const ProductHuntIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="#DA552F" xmlns="http://www.w3.org/2000/svg">
    <title>Product Hunt</title>
    <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>
  </svg>
);

const G2Icon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="#FF492C" xmlns="http://www.w3.org/2000/svg">
    <title>G2</title>
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm.122 5.143c.45 0 .9.044 1.342.132l-1.342 2.806C9.962 8.08 8.203 9.84 8.203 12s1.76 3.92 3.92 3.92c.937 0 1.844-.338 2.553-.951l1.483 2.572A6.856 6.856 0 0 1 5.266 12a6.856 6.856 0 0 1 6.856-6.856Zm3.498.49a1.262 1.262 0 0 1 .026 0c.427 0 .792.113 1.101.34.31.229.466.546.466.946 0 .639-.36 1.03-1.035 1.376l-.377.191c-.403.204-.602.385-.657.706h2.05v.85h-3.101v-.144c0-.526.103-.96.314-1.306.211-.345.576-.65 1.102-.917l.242-.117c.427-.216.538-.401.538-.625 0-.266-.228-.458-.6-.458-.44 0-.773.228-1.004.694l-.592-.595c.13-.279.338-.502.619-.675a1.7 1.7 0 0 1 .908-.266Zm-2.094 5.388h3.394l1.697 2.937-1.697 2.94-1.697-2.94H11.83l1.696-2.937Z"/>
  </svg>
);

const HoneyHatIcon = () => (
  <Svg viewBox="0 0 24 24" color="#FFB300">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM8 9h8l-1 7H9l-1-7z"/>
  </Svg>
);

const DesignRushIcon = () => (
  <Svg viewBox="0 0 24 24" color="#00BFA5">
    <path d="M3 3h18v18H3V3zm2 2v2h2V5H5zm4 0v2h2V5H9zm4 0v2h2V5h-2zm4 0v2h2V5h-2zM5 9v2h2V9H5zm4 0v2h2V9H9zm4 0v10h-2V9h2zm4 0v2h2V9h-2zM5 13v2h2v-2H5zm4 0v6H9v-6h2zm4 0v2h2v-2h-2zm4 0v6h-2v-6h2z"/>
  </Svg>
);

const UpCityIcon = () => (
  <Svg viewBox="0 0 24 24" color="#651FFF">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h4v2h-4V7zm0 3h4v2h-4v-2zm0 3h4v2h-4v-2z"/>
  </Svg>
);

const ManifestIcon = () => (
  <Svg viewBox="0 0 24 24" color="#37474F">
    <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/>
  </Svg>
);

const AgencySpotterIcon = () => (
  <Svg viewBox="0 0 24 24" color="#E91E63">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>
  </Svg>
);

const ExpertiseIcon = () => (
  <Svg viewBox="0 0 24 24" color="#009688">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.21l6.36 3.18L12 10.57 5.64 7.39 12 4.21zM4 9.61l7 3.5v6.68l-7-3.5V9.61zm16 0v6.68l-7 3.5v-6.68l7-3.5z"/>
  </Svg>
);

const SelectedFirmsIcon = () => (
  <Svg viewBox="0 0 24 24" color="#FF6F00">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 7h8v2H8V7zm0 3h8v2H8v-2zm0 3h6v2H8v-2z"/>
  </Svg>
);

const SortlistIcon = () => (
  <Svg viewBox="0 0 24 24" color="#0055FF">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 5h4v2h-4V7zm0 3h4v2h-4v-2zm0 3h4v2h-4v-2z"/>
  </Svg>
);

const brands: Brand[] = [
  { name: "Bing Places for Business", icon: <BingIcon /> },
  { name: "Apple Business Connect", icon: <AppleBusinessIcon /> },
  { name: "Yelp", icon: <YelpIcon /> },
  { name: "Foursquare", icon: <FoursquareIcon /> },
  { name: "Hotfrog", icon: <HotfrogIcon /> },
  { name: "Brownbook", icon: <BrownbookIcon /> },
  { name: "Manta", icon: <MantaIcon /> },
  { name: "Yellow Pages", icon: <YellowPagesIcon /> },
  { name: "MerchantCircle", icon: <MerchantCircleIcon /> },
  { name: "BBB", icon: <BBBIcon /> },
  { name: "EZlocal", icon: <EZlocalIcon /> },
  { name: "ShowMeLocal", icon: <ShowMeLocalIcon /> },
  { name: "Cylex US", icon: <CylexIcon /> },
  { name: "CitySquares", icon: <CitySquaresIcon /> },
  { name: "ChamberofCommerce", icon: <ChamberIcon /> },
  { name: "Nextdoor", icon: <NextdoorIcon /> },
  { name: "Angi", icon: <AngiIcon /> },
  { name: "Sitejabber", icon: <SitejabberIcon /> },
  { name: "2FindLocal", icon: <FindLocalIcon /> },
  { name: "WhoDoYou", icon: <WhoDoYouIcon /> },
  { name: "Spoke", icon: <SpokeIcon /> },
  { name: "Birdeye", icon: <BirdeyeIcon /> },
  { name: "Clutch", icon: <ClutchIcon /> },
  { name: "GoodFirms", icon: <GoodFirmsIcon /> },
  { name: "Crunchbase", icon: <CrunchbaseIcon /> },
  { name: "Product Hunt", icon: <ProductHuntIcon /> },
  { name: "G2", icon: <G2Icon /> },
  { name: "HoneyHat", icon: <HoneyHatIcon /> },
  { name: "DesignRush", icon: <DesignRushIcon /> },
  { name: "UpCity", icon: <UpCityIcon /> },
  { name: "The Manifest", icon: <ManifestIcon /> },
  { name: "Agency Spotter", icon: <AgencySpotterIcon /> },
  { name: "Expertise.com", icon: <ExpertiseIcon /> },
  { name: "SelectedFirms", icon: <SelectedFirmsIcon /> },
  { name: "Sortlist", icon: <SortlistIcon /> },
];

export default function TrustBadges() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? brands : brands.slice(0, 8);

  return (
    <section className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.1),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-tight">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
            Trust Badges
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-5xl">
            Trusted Across Leading <span className="text-gradient-gold italic">Business Platforms</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg leading-relaxed max-w-3xl mx-auto">
            Choosing the right team for your project is a big decision, and we know how important trust is. That's why our business is listed across leading business directories, review platforms, and agency marketplaces, making it easy for you to verify who we are before you decide to work with us. Whether you need website design, graphic design, logo design, SEO, digital marketing, AI automation, mobile app development, custom software development, or Windows and macOS application development, you can find our business across multiple trusted platforms. We're proud to be transparent, easy to verify, and committed to delivering quality work that businesses can rely on.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-lg">
          <div className="relative mx-auto w-[340px] rounded-[2.5rem] border border-gold-soft bg-[hsl(var(--surface))/0.6] p-5 shadow-[var(--shadow-gold)]">
            <div className="mb-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">Verified Listings</span>
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
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold-soft bg-[hsl(var(--surface))] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[hsl(var(--gold-2)/0.5)] group-hover:shadow-[var(--shadow-gold)]">
                      {b.icon}
                    </div>
                    <span className="text-[7px] text-center leading-tight text-muted-foreground line-clamp-2 max-w-[68px]">
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

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl glass-strong p-8 md:p-10 text-center">
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            Not Comfortable Paying Upfront?
          </h3>
          <p className="mt-4 text-base text-muted-foreground md:text-lg leading-relaxed">
            We completely understand. Trust isn't something that's given right away. It's something that's earned. If paying upfront is the only thing making you hesitate, we're happy to show you an initial concept or a preview of the work before asking for any payment. We want you to see the quality of our work first and feel confident that you've chosen the right team. Our goal is to make the entire experience straightforward, honest, and comfortable from the very beginning. When you feel confident in the work, you can move forward with complete peace of mind.
          </p>
          <a
            href="#contact"
            className="sheen relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
          >
            Get a Free Preview
          </a>
        </div>
      </div>
    </section>
  );
}
