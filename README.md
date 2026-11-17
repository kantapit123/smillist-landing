# Smilist Dental Clinic - Landing Page

Landing page for **Smilist Dental Clinic** (คลินิกทันตกรรมสไมล์ลิสต์), Mueang Nakhon Phanom, Thailand.
Built from the approved Claude Design canvas (`Main.dc.html`) — layout, copy and colors follow that design.

## Tech Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: plain CSS (`src/styles/index.css`) + inline styles carried over from the design
- **Fonts**: IBM Plex Sans Thai, Kanit, Playfair Display (Google Fonts)
- **Deployment**: Cloudflare Pages

## Theme tokens

The design's tweakable props are CSS variables in `src/styles/index.css`:

```css
--accent: #8b1e24;     /* wine red */
--cta: #1a1a1a;        /* dark CTA band / today highlight */
--line-green: #06c755; /* LINE buttons */
```

## Getting Started

Requires Node.js 18+ and Yarn 4 (via Corepack).

```bash
yarn install
yarn dev        # http://localhost:3009
yarn build      # type-check + production build to dist/
yarn preview    # serve dist/ (http://localhost:4173)
yarn lint
```

## Project Structure

```
smillist-landing/
├── public/
│   ├── img/                 # Photos: .avif / .webp / .jpg (fallback) per image
│   ├── favicon.svg          # Tooth logo
│   ├── apple-touch-icon.png
│   ├── _redirects           # Cloudflare Pages SPA routing
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Picture.tsx      # <picture> AVIF → WebP → JPG, lazy + async decode
│   │   └── icons.tsx
│   ├── lib/
│   │   ├── hooks.ts         # useRafScroll (rAF-throttled passive scroll), useReducedMotion
│   │   └── site.ts          # LINE / tel links, shared math helpers
│   ├── sections/            # One file per page section, in page order (see App.tsx)
│   ├── styles/index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html               # SEO meta, Open Graph, JSON-LD
└── vite.config.ts
```

## Placeholders waiting for clinic content

Search for `data-todo` — hero doctor photo (4:5), whitening / retainer starting prices,
doctor profile photos and details, Before/After gallery (consented cases only), Google Maps embed.

## Advertising-compliance copy (do not remove)

All "ภาพประกอบ…จาก AI / ไม่ใช่ผลการรักษาจริง / ไม่ใช่ภาพจากเครื่องจริง" labels,
"ผลลัพธ์แตกต่างกันในแต่ละบุคคล", and "ราคาเริ่มต้น…ขึ้นอยู่กับการตรวจและประเมินโดยทันตแพทย์" are required
for medical-facility advertising. Show starting prices only.

## SEO

- **robots.txt** / **sitemap.xml** in `public/`
- **index.html** – Thai title/description, canonical, Open Graph (`/img/clinic_room.jpg`), JSON-LD `Dentist`
  (address, phone, Tue–Sun 11:00–20:00)

**หลัง deploy:** แทนที่ `https://smilist.com` ใน `public/robots.txt`, `public/sitemap.xml` และ `index.html` (canonical, og:url, og:image, JSON-LD) ด้วยโดเมนจริง

## Contact Information

- **Address**: 381 21-22 ถนนนิตโย ต.หนองญาติ อ.เมืองนครพนม จ.นครพนม 48000
- **Phone**: 081-161-5129
- **LINE**: @smilist (https://lin.ee/yWzM5v4)
- **Email**: smilistdental@gmail.com
- **Facebook / Instagram / TikTok**: Smilistdentalclinic
- **Hours**: Tue–Sun 11:00–20:00, closed Monday
