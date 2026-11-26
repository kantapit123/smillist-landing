import { useEffect, useRef, useState } from 'react'

/**
 * Read once on mount, like the original design logic. Starts false so the prerendered
 * HTML and the first client render match; the real preference applies right after hydration.
 */
export function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    setReduce(!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
  }, [])
  return reduce
}

/**
 * Calls `measure` at most once per animation frame on scroll/resize.
 * Listener is passive; callers should only setState when values actually change.
 */
export function useRafScroll(measure: () => void) {
  const cb = useRef(measure)
  cb.current = measure

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        cb.current()
      })
    }
    document.addEventListener('scroll', onScroll, { passive: true, capture: true })
    window.addEventListener('resize', onScroll)
    cb.current()
    return () => {
      document.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
