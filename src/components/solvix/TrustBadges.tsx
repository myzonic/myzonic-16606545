import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Brand = {
  name: string;
  icon: React.ReactNode;
};

const Svg = ({ viewBox, children, color }: { viewBox?: string; children: React.ReactNode; color?: string }) => (
  <svg viewBox={viewBox || "0 0 24 24"} className="h-8 w-8" fill={color || "currentColor"} xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

const LetterIcon = ({ letter, color }: { letter: string; color: string }) => (
  <Svg viewBox="0 0 24 24" color={color}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill={color} opacity="0.15" />
    <text x="12" y="16" textAnchor="middle" fill={color} fontWeight="700" fontFamily="system-ui" fontSize={letter.length > 1 ? "13" : "16"}>{
      letter
    }</text>
  </Svg>
);

const BingIcon = () => (
  <Svg viewBox="0 0 24 24" color="#008373">
    <path d="M4.8 3.6v16.8L12 24l7.2-4.8V12l-3.6 2.4-2.4-1.2V7.2L9.6 4.8l-4.8-1.2z"/>
  </Svg>
);

const AppleBusinessIcon = () => (
  <Svg viewBox="0 0 24 24" color="#555555">
    <path d="M19.2 4.8c0-1.2-1.2-2.4-2.4-2.4H7.2C6 2.4 4.8 3.6 4.8 4.8v14.4c0 1.2 1.2 2.4 2.4 2.4h9.6c1.2 0 2.4-1.2 2.4-2.4V4.8zm-2.4 0v4.8H7.2V4.8h9.6zm0 14.4H7.2v-7.2h9.6v7.2z"/>
  </Svg>
);

const YelpIcon = () => (
  <Svg viewBox="0 0 24 24" color="#D32323">
    <path d="M7.688 15.141l-3.672.848c-.377.087-.755.183-1.145.155-.261-.019-.512-.041-.76-.213a1.179 1.179 0 01-.332-.36c-.348-.551-.365-1.366-.37-2 .008-.708.124-1.402.332-2.064.036-.083.07-.166.107-.247.04-.074.082-.146.126-.217.049-.07.102-.135.156-.197a1.174 1.174 0 01.399-.283 1.082 1.082 0 01.459-.084c.236.002.514.052.91.173.056.02.124.039.186.058.327.101.705.24 1.15.398.686.24 1.366.487 2.046.74l1.212.442c.222.08.436.18.641.297.174.098.327.23.451.387.088.134.15.279.192.43a1.22 1.22 0 01-.872 1.453c-.047.015-.085.024-.109.03l-1.105.254h-.003zM18.82 7.565a1.85 1.85 0 00-.204-.175 2.408 2.408 0 00-.208-.14 2.36 2.36 0 00-.227-.108 1.17 1.17 0 00-.482-.08 1.086 1.086 0 00-.45.127c-.21.104-.438.273-.742.555-.042.041-.094.088-.142.133-.25.235-.528.525-.86.863l-1.516 1.563-.896.929a4.19 4.19 0 00-.447.548 1.541 1.541 0 00-.236.546 1.22 1.22 0 00.01.452l.005.02a1.218 1.218 0 001.418.923 1.162 1.162 0 00.11-.022l4.779-1.104c.376-.087.759-.167 1.097-.363.227-.131.443-.262.59-.525.076-.14.12-.303.14-.468.074-.652-.266-1.391-.54-1.963a6.28 6.28 0 00-1.2-1.71zM8.97.075a8.672 8.672 0 00-.83.157c-.275.066-.548.138-.815.224-.868.284-2.088.806-2.295 1.806-.116.565.16 1.144.374 1.66.26.625.614 1.189.937 1.778.855 1.554 1.725 3.099 2.592 4.645.26.462.542 1.047 1.043 1.286.033.014.067.027.102.038.224.085.47.102.704.047.013-.003.027-.006.042-.01a1.214 1.214 0 00.565-.34c.03-.026.056-.053.08-.082.346-.435.345-1.083.376-1.613.104-1.771.214-3.542.3-5.314.034-.672.106-1.334.066-2.01-.033-.558-.037-1.198-.39-1.656C10.722-.298 9.395-.232 8.49-.107L8.97.075z"/>
  </Svg>
);

const FoursquareIcon = () => (
  <Svg viewBox="0 0 24 24" color="#F94877">
    <path d="M2.376 0h7.338v1.204h-6.12v3.372h5.44V5.78h-5.44v4.874H2.376V0zm-.208 20.16l1.19-.268c.213 1.473 1.232 2.352 2.89 2.352 1.487 0 2.664-.694 2.664-1.828 0-.807-.595-1.487-2.919-2.18-2.635-.752-3.513-1.715-3.513-3.13 0-1.829 1.473-2.805 3.613-2.805 2.393 0 3.456 1.218 3.825 2.89l-1.19.269c-.299-1.374-1.233-1.955-2.679-1.955-1.36 0-2.323.51-2.323 1.487 0 .793.624 1.403 2.777 2.083 2.565.793 3.67 1.658 3.67 3.301 0 2.04-1.715 3.103-3.896 3.103-2.28-.003-3.84-1.193-4.11-3.318zm9.223-2.238c0-3.159 2.068-5.624 5.242-5.624 3.159 0 5.2 2.479 5.2 5.624 0 1.573-.525 2.933-1.404 3.925.406.422.832.857 1.247 1.303l-.879.85a57.16 57.16 0 00-1.303-1.346c-.807.524-1.771.822-2.861.822-3.061 0-5.242-2.352-5.242-5.554zm7.181 3.825a31.24 31.24 0 00-1.247-1.148l.85-.863a36.54 36.54 0 011.331 1.218c.638-.764 1.02-1.813 1.02-3.046 0-2.493-1.516-4.39-3.896-4.39s-3.91 1.897-3.91 4.39c0 2.565 1.658 4.363 3.91 4.363.725 0 1.375-.184 1.942-.524z"/>
  </Svg>
);

const HotfrogIcon = () => (
  <LetterIcon letter="H" color="#E8762D" />
);

const BrownbookIcon = () => (
  <LetterIcon letter="B" color="#8B4513" />
);

const MantaIcon = () => (
  <Svg viewBox="0 0 24 24" color="#0077B6">
    <path d="M14.505 7.34a1.22 1.22 0 101.22 1.22 1.22 1.22 0 00-1.22-1.22m4.522-2.916l-.18.476-.18-.476h-.205v.668h.128v-.527h.002l.205.527h.09l.206-.527v.527h.128V4.424h-.194zM7.65 12.837h-.539a1.977 1.977 0 01-1.977-1.977V8.87h2.48a.345.345 0 00.347-.347V6.938a.346.346 0 00-.347-.347H5.133V4.874a.346.346 0 00-.348-.347H3.315a.345.345 0 00-.347.347v5.872a4.162 4.162 0 004.162 4.162h.539a.346.346 0 00.347-.347v-.348a.352.352 0 00-.366-.376m7.428.86a.388.388 0 01-.553 0l-1.208-1.208a2 2 0 11.54-.54l1.208 1.209a.36.36 0 01.013.539m.102-5.832a4.188 4.188 0 103.006 7.144l3.88-3.88a.346.346 0 00-.347-.347h-3.88a4.208 4.208 0 00-2.66-2.917m-9.937 3.539c0-.344.042-.681.117-1.003l3.454 3.454a4.205 4.205 0 01-3.571 2.008 4.188 4.188 0 110-4.46zm12.37-4.66a3.902 3.902 0 00-5.559 0l.662.61a3.56 3.56 0 0111.112 7.211l-5.216-5.216-1.464 1.465.991.983.672.67-.002.001-1.754 1.751h7.962a.346.346 0 00.347-.347v-3.878a4.188 4.188 0 00-4.188-4.188z"/>
  </Svg>
);

const YellowPagesIcon = () => (
  <LetterIcon letter="YP" color="#DAA520" />
);

const MerchantCircleIcon = () => (
  <LetterIcon letter="MC" color="#1E88E5" />
);

const BBBIcon = () => (
  <Svg viewBox="0 0 24 24" color="#003B71">
    <path d="M12 2.4L2.4 7.2v9.6l9.6 4.8 9.6-4.8V7.2L12 2.4zm0 2.64l5.76 2.88L12 10.8 6.24 7.92 12 5.04zM5.04 9.6l6.24 3.12v5.76L5.04 15.36V9.6zm13.92 0v5.76l-6.24 3.12V12.72l6.24-3.12z"/>
  </Svg>
);

const EZlocalIcon = () => (
  <LetterIcon letter="EZ" color="#2E7D32" />
);

const ShowMeLocalIcon = () => (
  <LetterIcon letter="S" color="#FF6F00" />
);

const CylexIcon = () => (
  <LetterIcon letter="C" color="#00ACC1" />
);

const CitySquaresIcon = () => (
  <LetterIcon letter="CS" color="#7B1FA2" />
);

const ChamberIcon = () => (
  <LetterIcon letter="CC" color="#C62828" />
);

const NextdoorIcon = () => (
  <Svg viewBox="0 0 24 24" color="#8ED500">
    <path d="M14.65 9.997a.069.069 0 00-.07.069v1.415c-.123-.177-.42-.37-.805-.37-.745 0-1.316.659-1.316 1.445 0 .787.571 1.447 1.316 1.447.386 0 .682-.194.806-.372v.221c0 .05.04.09.09.09h.607a.07.07 0 00.07-.07v-3.806a.069.069 0 00-.07-.069h-.628zM10.737 10.401a.07.07 0 00-.069.07c0 .779.064.7-.504.7a.09.09 0 00-.09.09v.486c0 .05.04.089.09.089h.504v1.136c0 .676.476 1.003 1.07 1.003.183 0 .32-.017.434-.046a.07.07 0 00.052-.067v-.526a.07.07 0 00-.086-.066.984.984 0 01-.227.023c-.33 0-.476-.133-.476-.47v-.987h.608a.07.07 0 00.07-.069v-.527a.069.069 0 00-.07-.069h-.608v-.701a.069.069 0 00-.069-.07h-.609zM2.341 11.077c-.516 0-.955.236-1.201.598-.02.03-.055.095-.102.095-.226.002-.24-.276-.247-.524a.07.07 0 00-.069-.066l-.653-.004a.07.07 0 00-.069.07c.014.606.126 1.018.86 1.181.04.01.068.045.068.087v1.36c0 .037.03.068.069.068h.634a.07.07 0 00.069-.07V12.47c0-.312.221-.667.64-.667.4 0 .642.355.642.667v1.404c0 .038.03.069.069.069h.634a.07.07 0 00.069-.07v-1.508c0-.72-.616-1.287-1.413-1.287zm3.207.033c-.851 0-1.472.626-1.472 1.446 0 .876.65 1.431 1.483 1.447.655.012 1.09-.363 1.194-.494a.068.068 0 00-.015-.097l-.435-.34c-.047-.047-.084-.021-.112.001-.07.057-.203.22-.626.237-.37.015-.7-.205-.745-.576h2.03a.07.07 0 00.069-.065c.006-.082.006-.142.006-.196 0-.897-.644-1.363-1.377-1.363h-.016zM18.159 11.077c-.812 0-1.472.637-1.472 1.446 0 .81.66 1.447 1.472 1.447.812 0 1.472-.638 1.472-1.447s-.66-1.446-1.472-1.446zm3.229 0c-.812 0-1.472.637-1.472 1.446 0 .81.66 1.447 1.472 1.447.812 0 1.472-.638 1.472-1.447s-.66-1.446-1.472-1.446zm3.314.028a.745.745 0 00-.695.476v-.374a.069.069 0 00-.069-.069h-.628a.069.069 0 00-.07.07v2.632a.07.07 0 00.07.069h.628a.07.07 0 00.07-.07v-1.255c0-.454.24-.737.604-.737.092 0 .175.013.26.035a.069.069 0 00.056-.068v-.624a.07.07 0 00-.056-.068.938.938 0 00-.201-.02l.031.003zM4.877 11.11a.069.069 0 00-.058.108l.88 1.305-.854 1.309a.07.07 0 00.056.11h.745a.068.068 0 00.058-.032l.561-.89.562.89a.068.068 0 00.058.032h.734a.069.069 0 00.058-.108l-.858-1.304.87-1.31a.068.068 0 00-.057-.107h-.738a.069.069 0 00-.058.035l-.576.928-.575-.928a.069.069 0 00-.058-.035h-.745z"/>
  </Svg>
);

const AngiIcon = () => (
  <Svg viewBox="0 0 24 24" color="#F55B2D">
    <path d="M22.638 7.398H17.56l-1.734 10.824c-3.834.51-6.816 3.738-6.78 7.35.012 1.512.528 2.688 1.452 3.654.81.858 1.938 1.344 3.12 1.35.456 0 .906-.072 1.332-.222 2.07-.714 2.754-2.448 3.078-4.038v.006c.09-1.77-.852-3.522-2.658-4.56l-.57 3.606c-.186 1.026-.42 1.638-.936 1.812-.306.108-.684-.006-.936-.27-.33-.342-.522-.726-.528-1.374-.018-1.806 1.404-3.222 2.97-3.774.504-.18 1.038-.27 1.572-.264.594.006 1.188.108 1.746.3 2.118.498 3.396 2.742 3.714 5.172l.186 1.362h3.522l3.612-23.27h-3.522zM19.026 18.46l1.014-7.746h.12l1.128 8.646c-.714-.39-1.476-.696-2.262-1.086V18.46z"/>
  </Svg>
);

const SitejabberIcon = () => (
  <LetterIcon letter="SJ" color="#635AD9" />
);

const FindLocalIcon = () => (
  <LetterIcon letter="2F" color="#1565C0" />
);

const WhoDoYouIcon = () => (
  <LetterIcon letter="W" color="#6A1B9A" />
);

const SpokeIcon = () => (
  <LetterIcon letter="S" color="#00897B" />
);

const BirdeyeIcon = () => (
  <LetterIcon letter="B" color="#217AC0" />
);

const ClutchIcon = () => (
  <Svg viewBox="0 0 24 24" color="#FF3C00">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.64 14.41l-2.22-2.22A4.001 4.001 0 0112 8c2.21 0 4 1.79 4 4 0 .89-.29 1.71-.78 2.36l2.22 2.22-1.8 1.83zm-3.31-7.48A4.003 4.003 0 008 12c0 .23.02.46.06.68L6 10.64a6.008 6.008 0 015.43-5.43l.9 3.72z"/>
  </Svg>
);

const GoodFirmsIcon = () => (
  <Svg viewBox="0 0 24 24" color="#3F51B5">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.21l6.36 3.18L12 10.57 5.64 7.39 12 4.21zM4 9.61l7 3.5v6.68l-7-3.5V9.61zm16 0v6.68l-7 3.5v-6.68l7-3.5z"/>
  </Svg>
);

const CrunchbaseIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-8 w-8" fill="#0288D1" xmlns="http://www.w3.org/2000/svg">
    <title>Crunchbase</title>
    <path d="M21.6 0H2.4A2.41 2.41 0 000 2.4v19.2A2.41 2.41 0 002.4 24h19.2a2.41 2.41 0 002.4-2.4V2.4A2.41 2.41 0 0021.6 0zM7.045 14.465A2.11 2.11 0 009.84 13.42h1.66a3.69 3.69 0 110-1.75H9.84a2.11 2.11 0 10-2.795 2.795zm11.345.845a3.55 3.55 0 01-1.06.63 3.68 3.68 0 01-3.39-.38v.38h-1.51V5.37h1.5v4.11a3.74 3.74 0 011.8-.63H16a3.67 3.67 0 012.39 6.46zm-.223-2.766a2.104 2.104 0 11-4.207 0 2.104 2.104 0 014.207 0z"/>
  </svg>
);

const ProductHuntIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-8 w-8" fill="#DA552F" xmlns="http://www.w3.org/2000/svg">
    <title>Product Hunt</title>
    <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/>
  </svg>
);

const G2Icon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-8 w-8" fill="#FF492C" xmlns="http://www.w3.org/2000/svg">
    <title>G2</title>
    <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm.122 5.143c.45 0 .9.044 1.342.132l-1.342 2.806C9.962 8.08 8.203 9.84 8.203 12s1.76 3.92 3.92 3.92c.937 0 1.844-.338 2.553-.951l1.483 2.572A6.856 6.856 0 015.266 12a6.856 6.856 0 016.856-6.856zm3.498.49a1.262 1.262 0 01.026 0c.427 0 .792.113 1.101.34.31.229.466.546.466.946 0 .639-.36 1.03-1.035 1.376l-.377.191c-.403.204-.602.385-.657.706h2.05v.85h-3.101v-.144c0-.526.103-.96.314-1.306.211-.345.576-.65 1.102-.917l.242-.117c.427-.216.538-.401.538-.625 0-.266-.228-.458-.6-.458-.44 0-.773.228-1.004.694l-.592-.595c.13-.279.338-.502.619-.675a1.7 1.7 0 01.908-.266zm-2.094 5.388h3.394l1.697 2.937-1.697 2.94-1.697-2.94H11.83l1.696-2.937z"/>
  </svg>
);

const HoneyHatIcon = () => (
  <LetterIcon letter="H" color="#FFB300" />
);

const DesignRushIcon = () => (
  <Svg viewBox="0 0 24 24" color="#00BFA5">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.21l6.36 3.18L12 10.57 5.64 7.39 12 4.21zM4 9.61l7 3.5v6.68l-7-3.5V9.61zm16 0v6.68l-7 3.5v-6.68l7-3.5z"/>
  </Svg>
);

const UpCityIcon = () => (
  <LetterIcon letter="U" color="#651FFF" />
);

const ManifestIcon = () => (
  <LetterIcon letter="TM" color="#37474F" />
);

const AgencySpotterIcon = () => (
  <LetterIcon letter="AS" color="#E91E63" />
);

const ExpertiseIcon = () => (
  <LetterIcon letter="E" color="#009688" />
);

const SelectedFirmsIcon = () => (
  <LetterIcon letter="SF" color="#FF6F00" />
);

const SortlistIcon = () => (
  <LetterIcon letter="S" color="#0055FF" />
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
