# Smilist Dental Clinic - Landing Page

Premium landing page for **Smilist Dental Clinic** located in Mueang District, Nakhon Phanom, Thailand.

## Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages

## Features

- ✨ Premium/Luxury design aesthetic
- 🌐 Bilingual support (Thai/English)
- 📱 Mobile-first, fully responsive
- ⚡ Fast load times with Vite
- 🎨 Custom Smilist brand palette
- 📋 Booking request form
- 🗺️ Location information with map placeholder
- ⭐ Reviews section
- ❓ FAQ accordion
- 📞 Real contact information integration
- 🔍 SEO & AI discoverability (robots.txt, sitemap, JSON-LD)

## Brand Palette

```css
Primary (Deep Clinic Blue): #1E3A8A
Secondary (Soft Sky): #7BCBFF
Accent (Mint): #35D0BA
Gold (Luxury): #C8A24A
Background: #F7FAFF
Surface: #FFFFFF
Text: #0F172A
Muted: #64748B
Border: #E2E8F0
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd smillist-landing
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
smillist-landing/
├── public/
│   ├── _redirects          # Cloudflare Pages SPA routing
│   ├── robots.txt           # Crawler rules (search + AI)
│   ├── sitemap.xml          # Sitemap for search engines
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── Doctor.tsx
│   │   ├── Services.tsx
│   │   ├── WhySmilist.tsx
│   │   ├── Pricing.tsx
│   │   ├── Location.tsx
│   │   ├── Reviews.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── contexts/           # React contexts
│   │   └── LanguageContext.tsx
│   ├── content/            # Content & translations
│   │   └── translations.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## SEO & AI Discoverability

- **robots.txt** – Allows all crawlers (Google, Bing) and common AI crawlers (GPTBot, Claude-Web, Google-Extended, PerplexityBot) so search and AI can index the site.
- **sitemap.xml** – Lists the main URL for search engines.
- **index.html** – Canonical URL, meta keywords, `robots` meta, and **JSON-LD** (Schema.org `Dentist`) so search engines and AI can understand the clinic’s name, address, phone, hours, services, and doctor.

**หลัง deploy:** แทนที่ `https://smilist.com` ใน `public/robots.txt`, `public/sitemap.xml` และ `index.html` (canonical, og:url, JSON-LD) ด้วยโดเมนจริงของคุณ

## Contact Information

- **Phone**: 083-345-7812
- **LINE**: @smillist
- **Facebook**: Smilist Dental Clinic
- **Location**: Mueang District, Nakhon Phanom, Thailand

## Deployment

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Pages deployment instructions.

## License

© 2026 Smilist Dental Clinic. All rights reserved.
