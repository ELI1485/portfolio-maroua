# Maroua Arbouni — Portfolio

Personal portfolio of **Maroua Arbouni**, AI & Digital Transformation engineering student at ENSA Al Hoceima.

**Live:** https://portfolio-maroua-gamma.vercel.app

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) — no UI framework, hand-crafted CSS design system
- [lucide-react](https://lucide.dev) icons
- EN / FR language toggle · dark / light themes
- AI assistant ("maroua.ai") powered by **NVIDIA Nemotron 3 Ultra** via a Vercel Edge Function

## Development

```bash
npm install
npm run dev
```

> Note: the AI chat needs the serverless function, which only runs on Vercel
> (or locally via `vercel dev`). With plain `npm run dev` the chat shows a
> graceful fallback message.

## AI chat setup (Vercel)

The chatbot calls `api/chat.js`, an Edge Function that proxies
`nvidia/nemotron-3-ultra-550b-a55b` on [NVIDIA NIM](https://build.nvidia.com).
The API key is **never** committed or shipped to the browser.

1. Vercel → Project → **Settings → Environment Variables**
2. Add `NVIDIA_API_KEY` = your `nvapi-…` key (Production + Preview)
3. Redeploy

## Structure

```
api/chat.js        # Edge function: NVIDIA proxy + persona prompt (streams text)
src/App.jsx        # Page composition
src/ChatWidget.jsx # Streaming chat dock
src/i18n.js        # EN/FR copy
src/data.js        # Projects, skills, links
src/hooks.js       # Reveal-on-scroll, typewriter, scroll progress
src/index.css      # Design system (tokens + components)
```
