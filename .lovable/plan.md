# Solvix — Digital Done Right

&nbsp;

Design and develop a premium, modern, high-performance agency website with a clean, futuristic aesthetic that feels fast, interactive, and conversion-focused. The layout should be completely unique, not template-based, with strong visual hierarchy, smooth section flow, and engaging animations throughout. Use a minimal yet dynamic design style with a light base of white and soft grey combined with bold gradient accents in red and orange tones, incorporating glassmorphism, rounded containers, soft shadows, clean typography, and layered UI elements with subtle depth. The website should include a strong hero section with a clear value proposition, supporting text, call-to-action buttons, and animated background elements with floating cards. Services should be presented in a modern grid or bento-style layout, grouped into categories such as design, development, marketing, creative, and automation, with each service including an icon, title, short description, and hover animation. Highlight key services like AI automation, mobile app development, and paid ads in a dedicated featured section with interactive elements. Include a portfolio section with modern cards and hover effects, a process section showing discovery through launch in a visual flow, and a highly engaging tools and technologies section featuring floating, animated icons. This section must include all platform and CMS icons such as WordPress, WooCommerce, Shopify, Magento, Webflow, Wix, and Squarespace, along with automation tools like [Make.com](http://Make.com) and n8n, and design software icons including Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Premiere Pro, Adobe InDesign, and Autodesk Maya, as well as icons representing frontend, backend, mobile development, AI automation, marketing, and motion graphics. Add a “Why Choose Us” section with animated cards, a testimonials section with a contrasting dark background and smooth transitions, an FAQ section with clean accordion interactions, and a strong final call-to-action section with a modern contact form. Animations should include smooth scroll effects, hover micro-interactions, floating elements, and layered motion while maintaining high performance and fast loading speed. The entire experience should feel premium, visually striking, slightly futuristic, and designed to convert visitors into clients.

A premium, futuristic agency website with a black base and glossy golden accents, built around bold typography (Syne + Plus Jakarta Sans), glassmorphism, and layered motion.

## Visual direction

- **Palette**: Deep black `#0a0a0a` base, off-black surfaces `#141414`, soft graphite `#1f1f1f`, off-white text `#f5f5f5`, muted grey `#8a8a8a`. Accent: glossy golden gradient `#b8862f → #f5d77a → #c9962d` with subtle highlight sheen for "liquid gold" feel. Used on CTAs, key headings, dividers, icon glows.
- **Typography**: Syne (headings, tight tracking, mixed weights 600/800) + Plus Jakarta Sans (body, 400/500). Oversized display headlines, generous line-height.
- **Surfaces**: Rounded 2xl containers (20–28px), 1px gold-tinted borders at 10–20% opacity, soft inner highlights, deep ambient shadows. Glassmorphism on floating cards (backdrop blur + low-opacity gold gradients).
- **Motion**: Smooth scroll reveals (fade + rise), magnetic hover on buttons, subtle parallax on hero shapes, floating loops on tool icons, gold sheen sweep on featured CTAs, accordion ease, marquee for logos. All GPU-friendly transforms; respects `prefers-reduced-motion`.

## Sections

1. **Sticky nav** — Solvix wordmark left, links (Services, Work, Process, Tools, FAQ), gold "Start a Project" pill CTA. Glass blur on scroll.
2. **Hero — broken grid**
  - Off-grid composition: huge headline "Digital. Done Right." (Syne, gold gradient on "Right"), supporting line "Solvix is a design, development & automation studio building the digital future for ambitious brands."
  - Dual CTAs: gold "Start a Project" + ghost "See Our Work".
  - Floating glass cards offset around the headline: "AI Automation", "Mobile App", "Paid Ads" with mini metrics.
  - Background: soft radial gold glow, animated grain, subtle drifting orbs, faint grid lines.
3. **Trusted-by marquee** — Infinite logo strip in muted greyscale, gold hover.
4. **Services — bento grid**
  - Mixed-size tiles grouped: Design, Development, Marketing, Creative, Automation.
  - Each tile: lucide icon in gold-glass chip, title, 1-line description, hover lift + gold border glow + arrow slide.
5. **Featured services spotlight** — 3 large interactive panels for AI Automation, Mobile App Development, Paid Ads. Each has animated visual (e.g., flowing nodes, phone mockup, ad-metric chart), bullet outcomes, "Learn more" link.
6. **Portfolio** — Asymmetric card grid, image with gold overlay on hover, project name + category, tilt micro-interaction.
7. **Process** — Visual flow Discover → Strategy → Design → Build → Launch → Scale, connected by an animated gold line that draws on scroll; numbered nodes with glass cards.
8. **Tools & Technologies — floating cloud**
  - Animated floating icons grouped by lane (CMS, Automation, Design, Dev, Mobile, AI, Marketing, Motion).
  - Includes: WordPress, WooCommerce, Shopify, Magento, Webflow, Wix, Squarespace, Make.com, n8n, Photoshop, Illustrator, After Effects, Premiere Pro, InDesign, Autodesk Maya, plus React, Next.js, Node, Swift, Kotlin, Flutter, OpenAI, Meta Ads, Google Ads, etc.
  - Icons drift on subtle sine paths; hover pauses and shows label tooltip with gold ring.
9. **Why Choose Us** — 4–6 animated cards (Senior team, Speed, Transparent process, Measurable results, Always-on support, AI-native). Each with icon, count-up stat, hover gold sheen.
10. **Testimonials — dark contrast band** — Even darker section (`#050505`) with gold accents. Smooth slide/fade carousel of 3–5 quotes with avatar, name, role, company. Auto-advance, swipe + dots.
11. **FAQ** — Clean accordion (Radix), gold plus/minus icon morph, soft expand.
12. **Final CTA + contact form** — Oversized headline "Let's build something inevitable." Contact form (name, email, company, budget select, project type, message) inside a glass card with gold-glow submit. Side column: email, response time, social links.
13. **Footer** — Wordmark, sitemap, socials, fine print, subtle gold top border.

## Technical notes

- Stack: Vite + React + TS + Tailwind + shadcn (already in project). Add framer-motion for orchestrated motion; lucide-react for icons; react-simple-icons (or simple-icons via CDN/svg) for brand logos (WordPress, Shopify, Adobe, etc.).
- Design tokens in `index.css` + `tailwind.config.ts`: HSL CSS vars for `--bg`, `--surface`, `--gold-1/2/3`, gradient utility `bg-gold`, text utility `text-gradient-gold`, glass utility `glass-card`.
- Componentize: `Nav`, `Hero`, `LogoMarquee`, `ServicesBento`, `FeaturedSpotlight`, `Portfolio`, `Process`, `ToolsCloud`, `WhyUs`, `Testimonials`, `FAQ`, `ContactCTA`, `Footer`. All on a single `Index` route.
- Performance: lazy-load heavy sections below the fold, prefers-reduced-motion guards, no layout-shift images (fixed aspect ratios), tree-shaken icon imports, compressed inline SVG decoration.
- Accessibility: focus-visible gold rings, semantic landmarks, accordion keyboard nav, color contrast AA on body text.
- Form: client-side validation + toast on submit (no backend wired yet — can add Lovable Cloud + email later if desired).

## Out of scope (can add next)

- CMS for portfolio/testimonials, blog, multi-language, contact form delivery via Lovable Cloud + Resend, individual case-study pages.

&nbsp;