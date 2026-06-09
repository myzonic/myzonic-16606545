import { motion } from "framer-motion";
import { BrandSvg, brandIcons as B } from "./brandIcons";
import { SectionHeader } from "./ServicesBento";

type Lane = { name: string; items: { icon: typeof B.react; label: string }[] };

const lanes: Lane[] = [
  {
    name: "Frontend",
    items: [
      { icon: B.html5, label: "HTML5" },
      { icon: B.css3, label: "CSS3" },
      { icon: B.javascript, label: "JavaScript" },
      { icon: B.typescript, label: "TypeScript" },
      { icon: B.react, label: "React" },
      { icon: B.next, label: "Next.js" },
      { icon: B.vue, label: "Vue.js" },
      { icon: B.svelte, label: "Svelte/SvelteKit" },
      { icon: B.angular, label: "Angular" },
      { icon: B.astro, label: "Astro" },
      { icon: B.remix, label: "Remix" },
      { icon: B.solid, label: "SolidJS" },
      { icon: B.tailwind, label: "Tailwind CSS" },
      { icon: B.bootstrap, label: "Bootstrap" },
      { icon: B.redux, label: "Redux" },
      { icon: B.zustand, label: "Zustand" },
      { icon: B.tanstack, label: "TanStack Query" },
      { icon: B.framermotion, label: "Framer Motion" },
      { icon: B.alpine, label: "Alpine.js" },
    ],
  },
  {
    name: "Mobile",
    items: [
      { icon: B.reactnative, label: "React Native" },
      { icon: B.flutter, label: "Flutter" },
      { icon: B.expo, label: "Expo" },
      { icon: B.swift, label: "Swift/SwiftUI" },
      { icon: B.kotlin, label: "Kotlin/Jetpack Compose" },
      { icon: B.aspnet, label: ".NET MAUI" },
      { icon: B.ionic, label: "Ionic" },
      { icon: B.tauri, label: "Tauri" },
      { icon: B.pwa, label: "PWA" },
      { icon: B.capacitor, label: "Capacitor" },
    ],
  },
  {
    name: "Backend",
    items: [
      { icon: B.node, label: "Node.js" },
      { icon: B.express, label: "Express.js" },
      { icon: B.nest, label: "NestJS" },
      { icon: B.fastapi, label: "FastAPI" },
      { icon: B.hono, label: "Hono" },
      { icon: B.bun, label: "Bun" },
      { icon: B.python, label: "Python" },
      { icon: B.django, label: "Django" },
      { icon: B.flask, label: "Flask" },
      { icon: B.php, label: "PHP" },
      { icon: B.laravel, label: "Laravel" },
      { icon: B.java, label: "Java" },
      { icon: B.springboot, label: "Spring Boot" },
      { icon: B.aspnet, label: "ASP.NET Core" },
      { icon: B.golang, label: "Go (Golang)" },
      { icon: B.rust, label: "Rust" },
      { icon: B.rails, label: "Ruby on Rails" },
      { icon: B.elixir, label: "Elixir/Phoenix" },
    ],
  },
  {
    name: "Databases",
    items: [
      { icon: B.postgres, label: "PostgreSQL" },
      { icon: B.mysql, label: "MySQL" },
      { icon: B.mongodb, label: "MongoDB" },
      { icon: B.redis, label: "Redis" },
      { icon: B.firebase, label: "Firebase" },
      { icon: B.supabase, label: "Supabase" },
      { icon: B.sqlite, label: "SQLite" },
      { icon: B.dynamodb, label: "DynamoDB" },
      { icon: B.cockroach, label: "CockroachDB" },
      { icon: B.planetscale, label: "PlanetScale" },
      { icon: B.neon, label: "Neon" },
      { icon: B.mariadb, label: "MariaDB" },
      { icon: B.cassandra, label: "Cassandra" },
      { icon: B.neo4j, label: "Neo4j" },
    ],
  },
  {
    name: "Authentication & Security",
    items: [
      { icon: B.nextauth, label: "NextAuth/Auth.js" },
      { icon: B.passport, label: "Passport.js" },
      { icon: B.keycloak, label: "Keycloak" },
      { icon: B.clerk, label: "Clerk" },
      { icon: B.auth0, label: "Auth0" },
      { icon: B.lucia, label: "Lucia" },
      { icon: B.supertokens, label: "SuperTokens" },
    ],
  },
  {
    name: "APIs & Communication",
    items: [
      { icon: B.graphql, label: "GraphQL" },
      { icon: B.trpc, label: "tRPC" },
      { icon: B.socketio, label: "Socket.IO" },
      { icon: B.grpc, label: "gRPC" },
      { icon: B.apollo, label: "Apollo" },
      { icon: B.hasura, label: "Hasura" },
    ],
  },
  {
    name: "Payment Integrations",
    items: [
      { icon: B.stripe, label: "Stripe" },
      { icon: B.paypal, label: "PayPal" },
      { icon: B.razorpay, label: "Razorpay" },
      { icon: B.square, label: "Square" },
      { icon: B.adyen, label: "Adyen" },
      { icon: B.braintree, label: "Braintree" },
      { icon: B.paddle, label: "Paddle" },
      { icon: B.lemonsqueezy, label: "Lemon Squeezy" },
      { icon: B.coinbase, label: "Coinbase Commerce" },
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      { icon: B.openai, label: "OpenAI" },
      { icon: B.claude, label: "Claude" },
      { icon: B.gemini, label: "Gemini" },
      { icon: B.langchain, label: "LangChain" },
      { icon: B.langgraph, label: "LangGraph" },
      { icon: B.huggingface, label: "Hugging Face" },
      { icon: B.tensorflow, label: "TensorFlow" },
      { icon: B.pytorch, label: "PyTorch" },
      { icon: B.ollama, label: "Ollama" },
      { icon: B.pinecone, label: "Pinecone" },
      { icon: B.weaviate, label: "Weaviate" },
      { icon: B.chromadb, label: "ChromaDB" },
      { icon: B.crewai, label: "CrewAI" },
      { icon: B.llamaindex, label: "LlamaIndex" },
      { icon: B.autogen, label: "AutoGen" },
      { icon: B.githubcopilot, label: "GitHub Copilot" },
      { icon: B.cursor, label: "Cursor" },
    ],
  },
  {
    name: "CRM & Customer Management",
    items: [
      { icon: B.salesforce, label: "Salesforce" },
      { icon: B.hubspot, label: "HubSpot" },
      { icon: B.zoho, label: "Zoho CRM" },
      { icon: B.pipedrive, label: "Pipedrive" },
      { icon: B.dynamics365, label: "Microsoft Dynamics 365" },
      { icon: B.freshsales, label: "Freshsales" },
      { icon: B.attio, label: "Attio" },
      { icon: B.activecampaign, label: "ActiveCampaign" },
      { icon: B.brevo, label: "Brevo" },
      { icon: B.mondaydotcom, label: "Monday.com" },
      { icon: B.clickup, label: "ClickUp" },
      { icon: B.airtable, label: "Airtable" },
      { icon: B.notion, label: "Notion" },
      { icon: B.linear, label: "Linear" },
      { icon: B.zapier, label: "Zapier / Make.com" },
    ],
  },
  {
    name: "Cloud & Hosting",
    items: [
      { icon: B.aws, label: "AWS" },
      { icon: B.googlecloud, label: "Google Cloud" },
      { icon: B.azure, label: "Microsoft Azure" },
      { icon: B.digitalocean, label: "DigitalOcean" },
      { icon: B.vercel, label: "Vercel" },
      { icon: B.netlify, label: "Netlify" },
      { icon: B.cloudflare, label: "Cloudflare" },
      { icon: B.railway, label: "Railway" },
      { icon: B.render, label: "Render" },
      { icon: B.flyio, label: "Fly.io" },
      { icon: B.hetzner, label: "Hetzner" },
      { icon: B.coolify, label: "Coolify" },
      { icon: B.dokploy, label: "Dokploy" },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    items: [
      { icon: B.docker, label: "Docker" },
      { icon: B.kubernetes, label: "Kubernetes" },
      { icon: B.git, label: "Git" },
      { icon: B.github, label: "GitHub" },
      { icon: B.gitlab, label: "GitLab" },
      { icon: B.jenkins, label: "Jenkins" },
      { icon: B.terraform, label: "Terraform" },
      { icon: B.githubactions, label: "GitHub Actions" },
      { icon: B.ansible, label: "Ansible" },
      { icon: B.helm, label: "Helm" },
      { icon: B.prometheus, label: "Prometheus" },
      { icon: B.grafana, label: "Grafana" },
      { icon: B.argocd, label: "ArgoCD" },
    ],
  },
  {
    name: "CMS & E-Commerce",
    items: [
      { icon: B.wordpress, label: "WordPress" },
      { icon: B.shopify, label: "Shopify" },
      { icon: B.woocommerce, label: "WooCommerce" },
      { icon: B.strapi, label: "Strapi" },
      { icon: B.sanity, label: "Sanity" },
      { icon: B.contentful, label: "Contentful" },
      { icon: B.webflow, label: "Webflow" },
      { icon: B.ghost, label: "Ghost" },
      { icon: B.directus, label: "Directus" },
      { icon: B.payload, label: "Payload CMS" },
      { icon: B.medusa, label: "Medusa" },
      { icon: B.saleor, label: "Saleor" },
      { icon: B.magento, label: "Magento" },
      { icon: B.wix, label: "Wix" },
      { icon: B.squarespace, label: "Squarespace" },
    ],
  },
  {
    name: "Design & Product",
    items: [
      { icon: B.figma, label: "Figma" },
      { icon: B.adobexd, label: "Adobe XD" },
      { icon: B.photoshop, label: "Photoshop" },
      { icon: B.illustrator, label: "Illustrator" },
      { icon: B.framer, label: "Framer" },
      { icon: B.canva, label: "Canva" },
      { icon: B.spline, label: "Spline" },
    ],
  },
  {
    name: "Desktop Software",
    items: [
      { icon: B.vscode, label: "VS Code" },
      { icon: B.jetbrains, label: "JetBrains Suite" },
      { icon: B.xcode, label: "Xcode" },
      { icon: B.androidstudio, label: "Android Studio" },
      { icon: B.docker, label: "Docker Desktop" },
      { icon: B.postman, label: "Postman/Insomnia" },
      { icon: B.dbeaver, label: "TablePlus/DBeaver" },
      { icon: B.figma, label: "Figma Desktop" },
      { icon: B.raycast, label: "Raycast" },
      { icon: B.powertoys, label: "PowerToys" },
      { icon: B.electron, label: "Electron" },
    ],
  },
  {
    name: "Testing & Quality",
    items: [
      { icon: B.vitest, label: "Vitest" },
      { icon: B.jest, label: "Jest" },
      { icon: B.playwright, label: "Playwright" },
      { icon: B.cypress, label: "Cypress" },
      { icon: B.postman, label: "Postman" },
      { icon: B.eslint, label: "ESLint" },
      { icon: B.biome, label: "Biome" },
      { icon: B.prettier, label: "Prettier" },
    ],
  },
];

export default function ToolsCloud() {
  return (
    <section id="tools" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.08),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tools & Technologies"
          title={
            <>
              The full <span className="text-gradient-gold italic">toolkit</span>, fluently.
            </>
          }
          desc="From CMS to AI, design to motion - we work natively with the tools your team already trusts."
        />

        <div className="mt-14 space-y-8">
          {lanes.map((lane, li) => (
            <motion.div
              key={lane.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: li * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
                  {lane.name}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[hsl(var(--gold-2)/0.4)] to-transparent" />
              </div>
              <div className="flex flex-wrap gap-3">
                {lane.items.map((it, i) => (
                  <div
                    key={`${lane.name}-${it.label}-${i}`}
                    className="group relative"
                    style={{ animation: `float-y ${6 + (i % 4)}s ease-in-out ${(i % 5) * 0.4}s infinite` }}
                  >
                    <div className="flex items-center gap-2.5 rounded-2xl border border-gold-soft bg-[hsl(var(--surface))/0.6] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold-2)/0.55)] hover:shadow-[var(--shadow-gold)]">
                      <span className="text-[hsl(var(--gold-3))] transition-colors group-hover:text-[hsl(var(--gold-2))]">
                        <BrandSvg icon={it.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-sm font-medium">{it.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
