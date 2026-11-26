// Writes one prerendered HTML file per page (dist/index.html, dist/braces.html, ...) plus
// dist/sitemap.xml and dist/llms.txt, so crawlers and LINE/Facebook link previews see real content and the right
// title/description without running JavaScript. Runs after both Vite builds.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const SITE = 'https://smilistdental.com'
const root = fileURLToPath(new URL('..', import.meta.url))
const ssrDir = `${root}dist-ssr`
const { render, PAGES, OFFERS, PRICE_NOTE } = await import(
  new URL('../dist-ssr/entry-server.js', import.meta.url).href
)

const template = await readFile(`${root}dist/index.html`, 'utf8')
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Replace exactly one match, so a template change can't silently ship wrong meta tags. */
function swap(html, re, value) {
  const hits = html.match(new RegExp(re.source, 'g'))?.length ?? 0
  if (hits !== 1) throw new Error(`expected 1 match for ${re}, found ${hits}`)
  return html.replace(re, value)
}

function head(html, s) {
  const url = `${SITE}${s.path}`
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${esc(s.title)}</title>`)
  html = swap(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${esc(s.description)}" />`
  )
  html = swap(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`
  )
  html = swap(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`
  )
  html = swap(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${esc(s.title)}" />`
  )
  html = swap(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${esc(s.description)}" />`
  )
  // Share the page's own picture; its size varies, so drop the home image's width/height.
  const img = `${SITE}/img/${s.image.name}.jpg`
  html = swap(
    html,
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${img}" />`
  )
  html = swap(
    html,
    /<meta property="og:image:alt" content="[^"]*" \/>/,
    `<meta property="og:image:alt" content="${esc(s.image.alt)}" />`
  )
  html = swap(
    html,
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${img}" />`
  )
  html = swap(
    html,
    /\s*<meta property="og:image:width" content="\d+" \/>\s*<meta property="og:image:height" content="\d+" \/>/,
    ''
  )
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: s.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
  const tags = ld
    .map(
      (o) =>
        `    <script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`
    )
    .join('\n')
  return html.replace('</head>', `${tags}\n  </head>`)
}

const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error(`${marker} not found in dist/index.html`)

/** Starting prices as JSON-LD offers on the clinic node, so answer engines can quote them. */
const makesOffer = OFFERS.map((o) => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'Service', name: o.name, ...(o.path && { url: `${SITE}${o.path}` }) },
  priceSpecification: {
    '@type': 'PriceSpecification',
    minPrice: o.minPrice,
    priceCurrency: 'THB',
    ...(o.unit && { unitText: o.unit }),
  },
}))

for (const page of PAGES) {
  let html = template.replace(marker, `<div id="root">${render(page.path)}</div>`)
  if (page.service) html = head(html, page.service)
  else
    html = swap(
      html,
      /\n(\s*)"sameAs": \[/,
      `\n$1"makesOffer": ${JSON.stringify(makesOffer)},\n$1"sameAs": [`
    )
  // Cloudflare Pages serves dist/braces.html at /braces.
  const out = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  await writeFile(`${root}dist/${out}`, html)
  console.log(`prerendered ${page.path} -> dist/${out} (${(html.length / 1024).toFixed(1)} KB)`)
}

const today = new Date().toISOString().slice(0, 10)
const urls = PAGES.map(
  (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
).join('\n')
await writeFile(
  `${root}dist/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
)
await rm(ssrDir, { recursive: true, force: true })
console.log(`wrote dist/sitemap.xml (${PAGES.length} URLs)`)

// llms.txt (llmstxt.org): a plain-text brief for LLM tools. Clinic facts mirror index.html.
const thb = (n) => (n === 0 ? 'ฟรี' : `เริ่มต้น ${n.toLocaleString('en-US')} บาท`)
const llms = `# Smilist Dental Clinic (คลินิกทันตกรรมสไมล์ลิสต์)

> คลินิกทันตกรรมใน อ.เมืองนครพนม จ.นครพนม ประเทศไทย ให้บริการจัดฟันใส (TrioClear / Invisalign) จัดฟันติดเครื่องมือ วีเนียร์แบบฉีด ฟอกสีฟัน ฟันปลอม และทันตกรรมทั่วไป ตรวจปรึกษาฟรี

- ที่อยู่: 381 21-22 ถนนนิตโย ต.หนองญาติ อ.เมืองนครพนม จ.นครพนม 48000
- เวลาทำการ: อังคาร – อาทิตย์ 11:00 – 20:00 น. ปิดวันจันทร์ วันหยุดนักขัตฤกษ์เปิดตามปกติ
- โทร: 081-161-5129
- LINE: @smilist (https://lin.ee/yWzM5v4)
- แผนที่: https://maps.app.goo.gl/G4UX77mTpa3Dk4sL9
- Facebook / Instagram / TikTok: Smilistdentalclinic

## ราคาเริ่มต้น

${OFFERS.map((o) => `- ${o.name}: ${thb(o.minPrice)}${o.unit ? `/${o.unit}` : ''}`).join('\n')}

${PRICE_NOTE}

## หน้าเว็บ

- [หน้าแรก](${SITE}/): ภาพรวมคลินิก บริการ ทีมทันตแพทย์ คำถามพบบ่อย แผนที่และการนัดหมาย
${PAGES.filter((p) => p.service)
  .map((p) => `- [${p.service.name}](${SITE}${p.path}): ${p.service.description}`)
  .join('\n')}
`
await writeFile(`${root}dist/llms.txt`, llms)
console.log('wrote dist/llms.txt')
