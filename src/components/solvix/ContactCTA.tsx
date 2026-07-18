import { useState } from "react";
import { ArrowUpRight, Mail, Phone, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

const budgets = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k+"];
const types = ["Brand & Design", "Web / App", "AI Automation", "Paid Ads", "Other"];

export default function ContactCTA() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Thanks - we'll be in touch within 24h.", {
      description: "A senior strategist will personally reply to your brief.",
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold-2)/0.18),transparent_70%)] blur-3xl" />
      </div>
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--gold-3))]">
              Let's build
            </div>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] md:text-6xl">
              Let's build something <span className="text-gradient-gold italic">inevitable</span>.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Tell us about your goals. We'll come back with a sharp plan, realistic
              timeline and a senior team ready to ship.
            </p>

            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Email</div>
                  <a href="mailto:Contact@myzonic.com" className="font-medium hover:text-[hsl(var(--gold-3))]">
                    Contact@myzonic.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Response time</div>
                  <div className="font-medium">Within 24 hours, every time</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Phone</div>
                  <a href="tel:+12243733224" className="font-medium hover:text-[hsl(var(--gold-3))]">
                    (224) 373-3224
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-soft text-[hsl(var(--gold-3))]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">Address</div>
                  <div className="font-medium">1603 Orrington Ave, Evanston, IL 60201</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-[2rem] p-6 md:p-8 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required placeholder="Jane Cooper" />
                <Field label="Email" name="email" type="email" required placeholder="jane@brand.com" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Company" name="company" placeholder="Acme Inc." />
                <SelectField label="Budget" name="budget" options={budgets} />
              </div>
              <SelectField label="Project type" name="type" options={types} />
              <div>
                <Label>Tell us about your project</Label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Goals, timelines, links - whatever helps us understand the brief."
                  className="mt-2 w-full rounded-2xl border border-gold-soft bg-[hsl(var(--input))] px-4 py-3 text-sm outline-none transition-colors focus:border-[hsl(var(--gold-2)/0.7)] focus:ring-1 focus:ring-[hsl(var(--gold-2)/0.4)]"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="sheen group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-4 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send brief"} <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                By sending, you agree to be contacted by our team. We never share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-wider text-muted-foreground">{children}</label>;
}
function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-gold-soft bg-[hsl(var(--input))] px-4 py-3 text-sm outline-none transition-colors focus:border-[hsl(var(--gold-2)/0.7)] focus:ring-1 focus:ring-[hsl(var(--gold-2)/0.4)]"
      />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-2xl border border-gold-soft bg-[hsl(var(--input))] px-4 py-3 text-sm outline-none transition-colors focus:border-[hsl(var(--gold-2)/0.7)] focus:ring-1 focus:ring-[hsl(var(--gold-2)/0.4)]"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
