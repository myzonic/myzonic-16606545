export const config = { runtime: "edge" };

const allowedOrigins = new Set([
  "https://myzonic.com",
  "https://www.myzonic.com",
  "https://myzonic-website.vercel.app",
]);
const allowedBudgets = new Set([
  "$100",
  "$300",
  "$500",
  "$800",
  "$1,000",
  "$1,500",
  "$2,000",
  "$3,000",
  "$5,000",
  "$7,500",
  "$10,000",
  "$15,000",
  "$20,000+",
  "Not sure / Need a quote",
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
    const budget = String(payload.budget ?? "").trim().slice(0, 80);
    const service = String(payload.service ?? "").trim().slice(0, 160);
    const message = String(payload.message ?? "").trim().slice(0, 5000);
    const faxNumber = String(payload.faxNumber ?? "").trim();

    // Silently accept honeypot submissions so bots cannot adapt to the filter.
    if (faxNumber) return json({ delivered: true }, 200, origin);

    if (
      !name ||
      !phone ||
      !service ||
      !allowedBudgets.has(budget) ||
      !message ||
      !/^\S+@\S+\.\S+$/.test(email)
    ) {
      return json(
        { error: "Please provide a valid name, email, phone, service, budget, and message." },
        400,
        origin,
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) throw new Error("RESEND_API_KEY is not configured");

    const detailRow = (label: string, value: string) =>
      value
        ? `<tr>
            <td style="padding:14px 16px;border-bottom:1px solid #2a2926;color:#a9a49a;font-family:Arial,sans-serif;font-size:12px;letter-spacing:1.2px;text-transform:uppercase;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
            <td style="padding:14px 16px;border-bottom:1px solid #2a2926;color:#f7f2e8;font-family:Arial,sans-serif;font-size:15px;line-height:1.5;vertical-align:top;">${escapeHtml(value)}</td>
          </tr>`
        : "";

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
        html: `<!doctype html>
          <html lang="en">
            <body style="margin:0;padding:0;background:#08090b;color:#f7f2e8;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#08090b;padding:32px 12px;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#121316;border:1px solid #343027;border-radius:20px;overflow:hidden;box-shadow:0 18px 60px rgba(0,0,0,.45);">
                      <tr>
                        <td style="padding:34px 36px;background:linear-gradient(135deg,#17181c,#0e0f12);border-bottom:1px solid #463c26;">
                          <div style="color:#d9b866;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">MYZONIC</div>
                          <h1 style="margin:12px 0 8px;color:#fffaf0;font-family:Georgia,serif;font-size:30px;font-weight:500;line-height:1.2;">New client inquiry</h1>
                          <p style="margin:0;color:#aaa59a;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">A new lead submitted the contact form on myzonic.com.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:24px 20px 8px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #2f2c25;border-radius:14px;overflow:hidden;background:#0d0e10;">
                            ${detailRow("Name", name)}
                            ${detailRow("Email", email)}
                            ${detailRow("Phone", phone)}
                            ${detailRow("Company", company)}
                            ${detailRow("Service interested in", service)}
                            ${detailRow("Project Budget", budget)}
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px 20px 28px;">
                          <div style="padding:20px;border:1px solid #403722;border-radius:14px;background:#17150f;">
                            <div style="margin-bottom:10px;color:#d9b866;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Project message</div>
                            <div style="color:#f7f2e8;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:18px 36px;background:#0b0c0e;border-top:1px solid #292722;color:#837f76;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;text-align:center;">
                          Reply to this email to respond directly to ${escapeHtml(name)}.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
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
