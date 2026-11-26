/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
import { renderToString } from 'react-dom/server'
import App from './App'

export { PAGES } from './routes'
export { OFFERS, PRICE_NOTE } from './content/services'

/** Used by scripts/prerender.mjs at build time so crawlers get the full HTML of every page. */
export function render(path: string): string {
  return renderToString(<App path={path} />)
}
