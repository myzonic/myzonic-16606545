export const config = { runtime: "edge" };

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const payload = await request.json();
    const name = String(payload.name ?? "").trim().slice(0, 120);
    const email = String(payload.email ?? "").trim().slice(0, 320);
    const company = String(payload.company ?? "").trim().slice(0, 160);
    const budget = String(payload.budget ?? "").trim().slice(0, 80);
    const projectType = String(payload.projectType ?? "").trim().slice(0, 80);
    const message = String(payload.message ?? "").trim().slice(0, 5000);
    const website = String(payload.website ?? "").trim();

    // Silently accept honeypot submissions so bots cannot adapt to the filter.
    if (website) return Response.json({ delivered: true });

    if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { error: "Please provide a valid name, email, and message." },
        { status: 400 },
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
          ${line("Company", company)}
          ${line("Budget", budget)}
          ${line("Project type", projectType)}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      throw new Error(`Email provider returned ${resendResponse.status}`);
    }

    return Response.json({ delivered: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json({ error: "Unable to deliver the message." }, { status: 500 });
  }
}
