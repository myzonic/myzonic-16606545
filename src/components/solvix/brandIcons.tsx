import {
  siWordpress, siWoocommerce, siShopify, siMagento, siWebflow, siWix, siSquarespace,
  siMake, siN8n,
  siAdobephotoshop, siAdobeillustrator, siAdobeaftereffects, siAdobepremierepro, siAdobeindesign, siAutodesk,
  siReact, siNextdotjs, siNodedotjs, siTypescript, siTailwindcss, siFigma, siFramer,
  siSwift, siKotlin, siFlutter,
  siOpenai, siGoogleads, siMeta, siGoogleanalytics, siHubspot, siMailchimp, siZapier,
  siBlender, siCinema4d,
} from "simple-icons/icons";

export type BrandIcon = {
  title: string;
  path: string;
  hex: string;
};

const ico = (i: { title: string; path: string; hex: string }): BrandIcon => ({
  title: i.title,
  path: i.path,
  hex: `#${i.hex}`,
});

export const brandIcons = {
  wordpress: ico(siWordpress),
  woocommerce: ico(siWoocommerce),
  shopify: ico(siShopify),
  magento: ico(siMagento),
  webflow: ico(siWebflow),
  wix: ico(siWix),
  squarespace: ico(siSquarespace),
  make: ico(siMake),
  n8n: ico(siN8n),
  photoshop: ico(siAdobephotoshop),
  illustrator: ico(siAdobeillustrator),
  aftereffects: ico(siAdobeaftereffects),
  premiere: ico(siAdobepremierepro),
  indesign: ico(siAdobeindesign),
  maya: { ...ico(siAutodesk), title: "Autodesk Maya" },
  react: ico(siReact),
  next: ico(siNextdotjs),
  node: ico(siNodedotjs),
  typescript: ico(siTypescript),
  tailwind: ico(siTailwindcss),
  figma: ico(siFigma),
  framer: ico(siFramer),
  swift: ico(siSwift),
  kotlin: ico(siKotlin),
  flutter: ico(siFlutter),
  openai: ico(siOpenai),
  googleads: ico(siGoogleads),
  meta: ico(siMeta),
  analytics: ico(siGoogleanalytics),
  hubspot: ico(siHubspot),
  mailchimp: ico(siMailchimp),
  zapier: ico(siZapier),
  blender: ico(siBlender),
  cinema4d: ico(siCinema4d),
};

export function BrandSvg({ icon, className = "h-7 w-7" }: { icon: BrandIcon; className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      aria-label={icon.title}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
