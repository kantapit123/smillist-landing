export const LINE_URL = 'https://lin.ee/yWzM5v4'
export const TEL_URL = 'tel:0811615129'
export const TEL_LABEL = '081-161-5129'

/** Sticky scroll scenes are pinned below the 72px header and are 720px tall. */
export const HEADER_H = 72
export const STAGE_H = 720

export const clamp01 = (n: number) => Math.max(0, Math.min(1, n))
export const ease = (t: number) => 1 - Math.pow(1 - t, 3)
export const r2 = (n: number) => Math.round(n * 1000) / 1000
/** 0→1 progress of `p` between a and b. */
export const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a))
