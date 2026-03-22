# Quantum Star Systems Website

Quantum Star Systems (QSS) builds deterministic optical quantum hardware and enterprise software that make quantum advantage practical for real-world businesses.

This repository is the source of truth for [quantumstarsystems.com](https://www.quantumstarsystems.com), including the main marketing site, investor-facing `/hardware` page, and QRAT (Quantum Readiness Assessment Tool) product pages.

## Tech Stack

- **Frontend:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Routing:** React Router
- **Icons:** Lucide React
- **Backend / Data:** Supabase
- **Linting:** ESLint

## Local Development

```bash
git clone https://github.com/jlasman/quantumstarsystems.git
cd quantumstarsystems
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build via Vite |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
src/          # Application source (components, pages, routes)
public/       # Static assets
supabase/     # Supabase configuration and migrations
dist/         # Production build output
```

## Production

The `main` branch is the production branch for **quantumstarsystems.com**.

## Contact

For investor or partnership inquiries: jeremy@quantumstarsystems.com
More at [quantumstarsystems.com](https://www.quantumstarsystems.com)
