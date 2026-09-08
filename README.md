# PM Portfolio (Next.js + Tailwind)

Single-scroll product-manager portfolio. White and burgundy gradient theme, pure CSS/Tailwind, static content.

## Editing content

Everything you need to change is in **`src/lib/content.ts`**: profile info, headline, pillars, capabilities, craft, case studies, testimonials, approach steps, and FAQs. Every `[bracketed]` value is a placeholder to replace with your real content.

## Adding your photo

The hero has a placeholder initials badge where a headshot goes. Drop your photo in `public/photo.jpg`, then in `src/components/Hero.tsx` swap the placeholder `<div>` block for something like:

```tsx
import Image from "next/image";
// ...
<Image src="/photo.jpg" alt={profile.name} width={288} height={288} className="rounded-[1.4rem] object-cover" />
```

## Contact form setup

The contact form sends submissions through [Web3Forms](https://web3forms.com), a free service (no account needed, just an email to get an access key).

1. Go to web3forms.com and enter your email. It sends you a free access key.
2. Copy `.env.local.example` to `.env.local` and paste the key in.
3. Restart `npm run dev`.

Until you do this, the form will show the "didn't go through" error since there's no key configured.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

```bash
npm install -g vercel   # if you don't have it
vercel login             # opens a browser to authenticate, you do this step
vercel                   # deploys a preview
vercel --prod            # deploys to production
```

If you deploy this way, add `NEXT_PUBLIC_WEB3FORMS_KEY` in the Vercel project's Environment Variables settings too, since `.env.local` never gets deployed.

Or push this folder to a GitHub repo and import it at vercel.com/new. Vercel auto-detects Next.js, no config needed.
