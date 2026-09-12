export const config = { runtime: "edge" };

const allowedOrigins = new Set([
  "https://myzonic.com",
  "https://www.myzonic.com",
  "https://myzonic-website.vercel.app",
]);
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const corsHeaders = (origin: string | null) => ({
  ...(origin && allowedOrigins.has(origin) ? { "Access-Control-Allow-Origin": origin } : {}),
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  Vary: "Origin",
});

const json = (body: object, status: number, origin: string | null) =>
  Response.json(body, { status, headers: corsHeaders(origin) });

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(request: Request) {
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    if (origin && !allowedOrigins.has(origin)) return json({ error: "Origin not allowed" }, 403, origin);
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405, origin);
  }

  if (origin && !allowedOrigins.has(origin)) return json({ error: "Origin not allowed" }, 403, origin);

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const limit = rateLimit.get(clientIp);
  if (!limit || limit.resetAt <= now) {
    rateLimit.set(clientIp, { count: 1, resetAt: now + 10 * 60 * 1000 });
  } else if (limit.count >= 5) {
    return json({ error: "Too many submissions. Please try again later." }, 429, origin);
  } else {
    limit.count += 1;
  }

  try {
    const payload = await request.json();
    const name = String(payload.name ?? "").trim().slice(0, 120);
    const email = String(payload.email ?? "").trim().slice(0, 320);
    const phone = String(payload.phone ?? "").trim().slice(0, 40);
    const company = String(payload.company ?? "").trim().slice(0, 160);
    const websiteUrl = String(payload.websiteUrl ?? "").trim().slice(0, 500);
    const budget = String(payload.budget ?? "").trim().slice(0, 80);
    const projectType = String(payload.projectType ?? "").trim().slice(0, 80);
    const message = String(payload.message ?? "").trim().slice(0, 5000);
    const faxNumber = String(payload.faxNumber ?? "").trim();

    // Silently accept honeypot submissions so bots cannot adapt to the filter.
    if (faxNumber) return json({ delivered: true }, 200, origin);

    if (!name || !phone || !projectType || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return json(
        { error: "Please provide a valid name, email, phone, service, and message." },
        400,
        origin,
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) throw new Error("RESEND_API_KEY is not configured");

    const line = (label: string, value: string) =>
      value ? `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>` : "";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Myzonic Website <website@send.myzonic.com>",
        to: ["Contact@myzonic.com"],
        reply_to: email,
        subject: `New website inquiry from ${name}`,
        html: `
          <h2>New contact form submission</h2>
          ${line("Name", name)}
          ${line("Email", email)}
          ${line("Phone", phone)}
          ${line("Company", company)}
          ${line("Website", websiteUrl)}
          ${line("Budget", budget)}
          ${line("Service interested in", projectType)}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      throw new Error(`Email provider returned ${resendResponse.status}`);
    }

    return json({ delivered: true }, 200, origin);
  } catch (error) {
    console.error("Contact email failed:", error);
    return json({ error: "Unable to deliver the message." }, 500, origin);
  }
}
