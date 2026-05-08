# Pattie Mortgage Website

A deployable Next.js + Tailwind website for Pattie Durham, Mortgage Loan Officer.

## How to use

1. Upload this full folder to GitHub.
2. Connect the GitHub repository to Vercel.
3. Deploy.
4. In Vercel, add your GoDaddy domain under Settings > Domains.
5. Replace the placeholder Google Reviews URL in `app/page.tsx` with your actual Google Business Profile review link.
6. Replace `/public/images/pattie-headshot.png` if you want to update your headshot.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Important files

- `app/page.tsx` — homepage design and content
- `app/layout.tsx` — SEO metadata and site wrapper
- `app/globals.css` — Tailwind and base styles
- `public/images/pattie-headshot.png` — headshot image


## Updated dependency note

This version uses Next.js 14.2.35, a patched 14.x release line, and removes the optional ESLint dependency to reduce Vercel install warnings.
