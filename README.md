# Himanish Kopalle — Portfolio

A modern, dark-themed portfolio site built with the **React + Vite + Tailwind CSS**.

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/` — ready to deploy anywhere.

## Free Hosting Options

### Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com), import the repo
3. It auto-detects Vite — just click Deploy
4. Add your custom domain in Project Settings → Domains

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://app.netlify.com), import the repo
3. Build command: `npm run build`, publish dir: `dist`
4. Add custom domain in Domain Settings

### GitHub Pages
1. Install: `npm i -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/hkopalle_portfolio/'` in `vite.config.js`
4. Run: `npm run build && npm run deploy`

## Custom Domain (~$10-15/year)
Buy from **Cloudflare Domains**, **Namecheap**, or **Porkbun** — all much cheaper than $50/month!
