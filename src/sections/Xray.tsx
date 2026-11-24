import { useRef, useState } from 'react'
import Picture from '../components/Picture'
import { useRafScroll, useReducedMotion } from '../lib/hooks'
import { HEADER_H, LINE_URL, STAGE_H, clamp01, ease, r2, seg as segOf } from '../lib/site'

// Callouts appear one after another once the scan has revealed the X-ray image.
const CALLOUTS: { label: string; x: number; y: number; at: number; side?: 'left' }[] = [
  { label: 'รากฟัน', x: 46, y: 57, at: 0.45 },
  { label: 'ฟันกรามซี่ในสุด', x: 60.5, y: 69, at: 0.51 },
  { label: 'กระดูกขากรรไกร', x: 36, y: 70, at: 0.57, side: 'left' },
]

export default function Xray() {
  const reduce = useReducedMotion()
  const el = useRef<HTMLElement>(null)
  const [q, setQ] = useState(0)

  useRafScroll(() => {
    if (!el.current) return
    const b = el.current.getBoundingClientRect()
    const xr = clamp01((HEADER_H - b.top) / Math.max(1, b.height - STAGE_H))
    setQ((prev) => (Math.abs(xr - prev) > 0.001 ? xr : prev))
  })

  // 0–.12 face · .12–.45 scan line reveals X-ray · .45–.7 callouts · .7– closing line
  const seg = (a: number, b: number) => segOf(q, a, b)
  let sweep = ease(seg(0.12, 0.45)) * 100
  if (reduce) sweep = q > 0.12 ? 100 : 0
  const end = seg(0.7, 0.78)

  return (
    <section
      id="xray"
      ref={el}
      aria-label="เอกซเรย์: สิ่งที่ตามองไม่เห็น"
      style={{ position: 'relative', height: 2800, background: '#0E0E0E', color: '#FFFFFF' }}
    >
      <div
        style={{
          position: 'sticky',
          top: HEADER_H,
          height: STAGE_H,
          boxSizing: 'border-box',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '36px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 22,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.14em', color: '#A39794' }}>
            เอกซเรย์พาโนรามาและ 3 มิติในคลินิก
          </span>
          <h2
            className="xr-h2"
            style={{
              margin: 0,
              fontSize: 52,
              lineHeight: 1.15,
              color: '#FFFFFF',
              opacity: r2(0.25 + 0.75 * seg(0.02, 0.12)),
              transition: 'opacity .3s ease',
            }}
          >
            สิ่งที่ตามองไม่เห็น
          </h2>
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'relative',
            flex: '0 0 auto',
            width: 'min(100%, 690px)',
            aspectRatio: '3 / 2',
            borderRadius: 24,
            overflow: 'hidden',
            background: '#000000',
          }}
        >
          <Picture name="xray_face" className="fill-img" />
          <div
            style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${r2(100 - sweep)}% 0 0)` }}
          >
            <Picture name="xray_scan" className="fill-img" />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${r2(sweep)}%`,
              width: 3,
              marginLeft: -1,
              background: '#FFFFFF',
              boxShadow: '0 0 18px 6px rgba(190,225,255,.55)',
              opacity: sweep > 0.5 && sweep < 99.5 ? 1 : 0,
            }}
          />
          {CALLOUTS.map((c) => {
            const o = seg(c.at, c.at + 0.05)
            return (
              <div
                key={c.label}
                style={{
                  position: 'absolute',
                  ...(c.side === 'left'
                    ? { right: `${100 - c.x}%`, marginRight: -7, flexDirection: 'row-reverse' }
                    : { left: `${c.x}%`, marginLeft: -7 }),
                  top: `${c.y}%`,
                  marginTop: -7,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  opacity: r2(o),
                  transform: `translateY(${r2(8 * (1 - o))}px)`,
                  transition: 'opacity .35s ease, transform .35s ease',
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    border: '2px solid #FFFFFF',
                    background: 'rgba(255,255,255,.25)',
                    boxShadow: '0 0 0 6px rgba(255,255,255,.12)',
                  }}
                />
                <span
                  className="xr-label"
                  style={{
                    padding: '5px 12px',
                    borderRadius: 999,
                    background: 'rgba(14,14,14,.78)',
                    fontSize: 14,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.label}
                </span>
              </div>
            )
          })}
        </div>
        <span className="ai-note" style={{ color: '#A39794', marginTop: -16 }}>
          ภาพจำลองเอกซเรย์จาก AI ไม่ใช่ภาพจากเครื่องจริง
        </span>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px 28px',
            textAlign: 'center',
            opacity: r2(end),
            transform: `translateY(${r2(16 * (1 - end))}px)`,
            transition: 'opacity .35s ease, transform .35s ease',
          }}
        >
          <p
            className="xr-big"
            style={{
              margin: 0,
              fontFamily: "'Kanit', sans-serif",
              fontWeight: 600,
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            "ไม่ปวด" ไม่ได้แปลว่า "ไม่ผุ"
          </p>
          <a className="btn pill pill-md on-white" href={LINE_URL} tabIndex={end > 0.5 ? 0 : -1}>
            นัดตรวจฟรี ทาง LINE
          </a>
        </div>
      </div>
    </section>
  )
}
