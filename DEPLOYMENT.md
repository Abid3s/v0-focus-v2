Focus Insurance — Deployment Guide (Vercel)

Overview
- Stack: Next.js App Router, Server Actions (Node runtime), Tailwind, shadcn/ui.
- Email: Nodemailer via your SMTP provider.
- Assets: All logos/images live in the public/ folder and are served from the root path [^1].

Prerequisites
1) GitHub repository ready for the site code.
2) SMTP credentials from your email provider (host, port, user, pass). Use port 465 + secure true, or port 587 + secure false.
3) A domain you control (e.g., focusinsurance.co.uk) and access to DNS.

Step 1 — Local check (optional but recommended)
- Install deps: npm install
- Start dev: npm run dev
- Visit http://localhost:3000 and verify pages render.
- Static assets under public are served from the base URL (/), so image paths like /logos/axa-logo.png should work without extra config [^1].

Step 2 — Push to GitHub
- Commit all changes and push to a GitHub repository (public or private).

Step 3 — Deploy on Vercel
1) Go to vercel.com → New Project → Import your GitHub repo.
2) Framework preset: Next.js (auto-detected).
3) Root Directory: the repository root (where app/ exists).
4) Build settings: leave defaults; no next.config.js is required here.

Step 4 — Environment variables (add for Preview and Production)
Required for the contact form (server action):
- SMTP_HOST=your_smtp_host
- SMTP_PORT=465          // or 587
- SMTP_USER=your_smtp_username
- SMTP_PASS=your_smtp_password
- SMTP_SECURE=true       // use true for 465; false for 587
- TO_EMAIL=info@focusinsurance.co.uk
- FROM_EMAIL=no-reply@focusinsurance.co.uk
Recommended:
- NEXT_PUBLIC_SITE_URL=https://your-domain.tld

Notes:
- If FROM_EMAIL uses your domain, ensure your provider has DKIM/SPF set to avoid spam filtering.
- If your SMTP provider requires a specific from address, use that exact mailbox for FROM_EMAIL.

Step 5 — First build & preview
- Click Deploy. Vercel will create a Preview deployment (unique URL).
- Open the Preview URL and test:
  - Navigation & dropdown alignment.
  - Logos scroll and load correctly.
  - Forms submit (you should get the success state).

Step 6 — Verify email delivery (Preview)
Option A — Use the UI form at /contact (preferred):
- Submit a short test message.
- Check your inbox (info@focusinsurance.co.uk).
Option B — Run the SMTP test script (included in scripts/test-smtp.mjs):
- This uses the same env vars as production; see scripts section below.

Step 7 — Connect your custom domain
1) In the Vercel project → Settings → Domains → Add your domain (e.g., focusinsurance.co.uk and www.focusinsurance.co.uk).
2) DNS:
   - If using Vercel nameservers: switch nameservers at your domain registrar as instructed.
   - If keeping your current DNS: add the provided A/AAAA or CNAME records for root and www.
3) Set the primary domain (usually the apex: focusinsurance.co.uk) and create a redirect from www → apex.
4) HTTPS certificates issue automatically; wait for the green lock.

Step 8 — Set NEXT_PUBLIC_SITE_URL for Production
- In Project → Settings → Environment Variables (Production), set:
  NEXT_PUBLIC_SITE_URL=https://focusinsurance.co.uk
- Redeploy to apply.

Step 9 — Production deploy
- Merge your main branch (or click Promote to Production in Vercel).
- Validate again on the live domain:
  - CTAs route to /contact.
  - /quote and /get-quote redirect to /contact.
  - Contact form sends an email successfully.

Troubleshooting
- Email not received:
  - Check Vercel → Project → Deployments → Logs for server errors (search "Email send failed").
  - Verify SMTP_HOST/PORT/USER/PASS and SMTP_SECURE match your provider.
  - Try changing FROM_EMAIL to the authenticated mailbox from your provider.
  - Check spam folder; set DKIM/SPF records for your domain.
- Assets missing:
  - Ensure images are in public/ and referenced with root-relative paths (e.g., /logos/axa-logo.png) [^1].
- Env vars not applied:
  - Add them to both Preview and Production environments and redeploy.

Scripts
- See scripts/test-smtp.mjs to send a one-off test email with current env vars.
