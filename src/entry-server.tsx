import { renderToString } from 'react-dom/server'
import App from './App'

/** Used by scripts/prerender.mjs at build time so crawlers get the full page HTML. */
export function render(): string {
  return renderToString(<App />)
}
