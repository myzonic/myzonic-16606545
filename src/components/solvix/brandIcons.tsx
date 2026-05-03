import {
  siWordpress, siWoocommerce, siShopify, siWebflow, siWix, siSquarespace,
  siMake, siN8n,
  siAutodeskmaya,
  siReact, siNextdotjs, siNodedotjs, siTypescript, siTailwindcss, siFigma, siFramer,
  siSwift, siKotlin, siFlutter,
  siGoogleads, siMeta, siGoogleanalytics, siHubspot, siMailchimp, siZapier,
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

// Custom paths for brands not in current simple-icons exports (trademark restrictions)
// Simplified glyphs / monograms using a 24x24 viewBox.
const custom = {
  magento: {
    title: "Magento",
    hex: "F26322",
    path: "M12 0L1.6 6v12L12 24l3.4-1.96V8.04L12 6.08 8.6 8.04v9.92L6.4 19.2V6.96L12 3.74l5.6 3.22v12.24l-2.2 1.24V9.28L12 11.24z",
  },
  photoshop: {
    title: "Adobe Photoshop",
    hex: "31A8FF",
    path: "M3 3h18v18H3V3zm5.4 4.6v8.8h1.7v-3h1.3c1.7 0 2.9-.9 2.9-2.9 0-1.9-1.2-2.9-2.9-2.9H8.4zm1.7 1.4h1.1c.9 0 1.4.5 1.4 1.5s-.5 1.6-1.4 1.6h-1.1V9zm6 1.5c-1.1 0-2 .6-2 1.7 0 .9.6 1.4 1.5 1.7.9.3 1.1.5 1.1.8 0 .3-.3.5-.7.5-.6 0-1.2-.3-1.7-.6l-.4 1.2c.6.4 1.4.6 2.1.6 1.3 0 2.2-.6 2.2-1.8 0-1-.6-1.5-1.6-1.8-.8-.3-1-.4-1-.7s.2-.5.6-.5c.5 0 1 .2 1.5.5l.4-1.1c-.5-.3-1.2-.5-2-.5z",
  },
  illustrator: {
    title: "Adobe Illustrator",
    hex: "FF9A00",
    path: "M3 3h18v18H3V3zm6.6 4.6L7 16.4h1.7l.6-2.1h2.4l.6 2.1h1.8L11.5 7.6H9.6zm.9 1.6l.9 3.4H9.7l.8-3.4zM15.6 8c.6 0 1-.4 1-.9s-.4-.9-1-.9-1 .4-1 .9.4.9 1 .9zm-.8 8.4h1.7v-6.5h-1.7v6.5z",
  },
  aftereffects: {
    title: "Adobe After Effects",
    hex: "9999FF",
    path: "M3 3h18v18H3V3zm5.7 4.6L6 16.4h1.7l.6-2.1h2.5l.6 2.1h1.8l-2.7-8.8H8.7zm.9 1.6l.9 3.4H8.7l.9-3.4zm6.5.7c-1.7 0-2.9 1.3-2.9 3.3 0 2.1 1.2 3.3 3 3.3 1 0 1.8-.3 2.4-.7l-.6-1.1c-.4.3-1 .5-1.6.5-.9 0-1.5-.5-1.6-1.4h3.9v-.5c.1-2.2-.9-3.4-2.6-3.4zm-.1 1.3c.7 0 1.1.5 1.1 1.3h-2.3c.1-.8.5-1.3 1.2-1.3z",
  },
  premiere: {
    title: "Adobe Premiere Pro",
    hex: "9999FF",
    path: "M3 3h18v18H3V3zm5.4 4.6v8.8h1.7v-3h1.3c1.7 0 2.9-.9 2.9-2.9 0-1.9-1.2-2.9-2.9-2.9H8.4zm1.7 1.4h1.1c.9 0 1.4.5 1.4 1.5s-.5 1.6-1.4 1.6h-1.1V9zm6.4 1c-.6 0-1.1.3-1.5.8l-.1-.7h-1.5v6.3h1.7v-4c.3-.4.7-.6 1.1-.6.2 0 .4 0 .5.1l.2-1.7c-.1-.1-.2-.2-.4-.2z",
  },
  indesign: {
    title: "Adobe InDesign",
    hex: "FF3366",
    path: "M3 3h18v18H3V3zm6 4.6v8.8h1.8V7.6H9zm6.7 0v3.2c-.4-.4-.9-.7-1.6-.7-1.6 0-2.7 1.3-2.7 3.3s1.1 3.3 2.7 3.3c.7 0 1.3-.3 1.7-.8l.1.7H17V7.6h-1.3zm-1.2 4c.6 0 1 .3 1.2.7v2.6c-.2.4-.6.7-1.2.7-.9 0-1.4-.7-1.4-2 0-1.2.5-2 1.4-2z",
  },
  openai: {
    title: "OpenAI",
    hex: "FFFFFF",
    path: "M22.3 9.8a5.4 5.4 0 0 0-.5-4.5 5.5 5.5 0 0 0-5.9-2.7A5.5 5.5 0 0 0 7.5 4.2a5.5 5.5 0 0 0-3.7 2.7 5.5 5.5 0 0 0 .7 6.4 5.5 5.5 0 0 0 .5 4.5 5.5 5.5 0 0 0 5.9 2.7 5.5 5.5 0 0 0 8.4-1.6 5.5 5.5 0 0 0 3.7-2.7 5.5 5.5 0 0 0-.7-6.4zm-8.2 11.5c-.9 0-1.7-.3-2.4-.9l.1-.1 4-2.3a.7.7 0 0 0 .3-.6v-5.6l1.7 1v4.7c0 2.1-1.7 3.8-3.7 3.8zm-8.1-3.5a3.8 3.8 0 0 1-.5-2.5l.1.1 4 2.3c.2.1.5.1.7 0l4.9-2.8v2L11.3 19c-1.8 1-4.1.4-5.3-1.3zm-1-8.7a3.8 3.8 0 0 1 2-1.7v4.8c0 .2.1.5.3.6l4.9 2.8-1.7 1-4-2.3a3.8 3.8 0 0 1-1.5-5.2zm13.9 3.2L13.9 9.5l1.7-1 4 2.3a3.8 3.8 0 0 1-.6 6.9v-4.8c0-.2-.1-.5-.3-.6zm1.7-2.6L20.5 9.5 15.6 6.7v-2L20 7.2c1.8 1 2.4 3.3 1.4 5.1zm-10.5 3.5L9 11.9V7.2c0-2.1 1.7-3.8 3.8-3.8.9 0 1.7.3 2.4.9l-.1.1-4 2.3a.7.7 0 0 0-.3.6v6.4zm.9-2 2.2-1.3 2.2 1.3v2.5l-2.2 1.3-2.2-1.3z",
  },
};

export const brandIcons = {
  wordpress: ico(siWordpress),
  woocommerce: ico(siWoocommerce),
  shopify: ico(siShopify),
  magento: ico(custom.magento),
  webflow: ico(siWebflow),
  wix: ico(siWix),
  squarespace: ico(siSquarespace),
  make: ico(siMake),
  n8n: ico(siN8n),
  photoshop: ico(custom.photoshop),
  illustrator: ico(custom.illustrator),
  aftereffects: ico(custom.aftereffects),
  premiere: ico(custom.premiere),
  indesign: ico(custom.indesign),
  maya: ico(siAutodeskmaya),
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
  openai: ico(custom.openai),
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
