# Myzonic website

## Contact form setup

The contact form sends submissions to `Contact@myzonic.com` through a Vercel
Edge Function and Resend.

Resend uses the dedicated `send.myzonic.com` sending subdomain so the website
mailer does not interfere with the existing `@myzonic.com` inboxes.

Before deploying, verify `myzonic.com` in Resend and add `RESEND_API_KEY` to the
Vercel project's environment variables for Production, Preview, and Development.

Keep the API key in Vercel's encrypted environment variables only. Do not add it
to `.env` or commit it to the repository.
