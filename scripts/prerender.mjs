// Injects the server-rendered page into dist/index.html so crawlers (and LINE/Facebook
// link previews) see the content without running JavaScript. Runs after both Vite builds.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const ssrDir = `${root}dist-ssr`
const { render } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url).href)

const file = `${root}dist/index.html`
const template = await readFile(file, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error(`${marker} not found in dist/index.html`)

const html = render()
await writeFile(file, template.replace(marker, `<div id="root">${html}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log(`prerendered dist/index.html (${(html.length / 1024).toFixed(1)} KB of HTML)`)
