import { SERVICES, ServiceContent } from './content/services'

export type Page = { path: string; service?: ServiceContent }

/** Every prerendered page. The home page keeps the meta tags written in index.html. */
export const PAGES: Page[] = [{ path: '/' }, ...SERVICES.map((s) => ({ path: s.path, service: s }))]

/** `/braces/`, `/braces.html` and `/braces` are the same page. */
export function normalizePath(pathname: string): string {
  const p = pathname
    .replace(/\.html$/, '')
    .replace(/\/index$/, '')
    .replace(/\/+$/, '')
  return p === '' ? '/' : p
}

export function findPage(pathname: string): Page {
  const path = normalizePath(pathname)
  return PAGES.find((p) => p.path === path) ?? PAGES[0]
}
