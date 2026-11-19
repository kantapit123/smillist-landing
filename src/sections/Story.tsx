import { useRef, useState, type CSSProperties } from 'react'
import Picture from '../components/Picture'
import { useRafScroll, useReducedMotion } from '../lib/hooks'
import { HEADER_H, LINE_URL, STAGE_H, clamp01, ease, r2, seg as segOf } from '../lib/site'

/*
 * Scroll-driven zoom: smile (01) → teeth (02) → braces 07→08→06 → denture 10→11 → zoom out to booking (12).
 * Formulas are carried over unchanged from the design's storyVals()/measure().
 * The design's div-drawn 3D teeth model was always fully covered by the photo layer (photoO = 1),
 * so it is not rendered here.
 */

// Zoom ratio between the smile photo (01) and the close-up teeth photo (02).
const RATIO = 3.97
// The mouth in 01 is ~5.4× wider than the mouth in 12 (booking shot).
const BOOK = 5.4
// Focal points (px in the 720×480 photo frame).
const SMILE_O = { x: 361.9, y: 221.3 }
const TEETH_O = { x: 374.1, y: 248.4 }
const BOOK_O = { x: 372.2, y: 204.8 }

const CHAPTERS = [
  {
    label: '01 — เริ่มจากรอยยิ้ม',
    title: 'เลื่อนลง แล้วซูมเข้าไปดูฟันกัน',
    body: 'ดูว่าเหล็กดัดฟันกับฟันปลอมทำงานอย่างไร ก่อนตัดสินใจรักษา',
  },
  {
    label: '02 — จัดฟันติดเครื่องมือ',
    title: 'แบร็กเก็ตกับลวด ค่อย ๆ พาฟันเข้าแนว',
    body: 'ทันตแพทย์ติดแบร็กเก็ตบนผิวฟันทีละซี่ แล้วร้อยลวดผ่านทุกซี่ ลวดออกแรงเบา ๆ ให้ฟันเคลื่อนตามแผนการรักษา นัดปรับลวดเป็นระยะ และเลือกสียางได้ตามชอบ',
  },
  {
    label: '03 — ฟันปลอม',
    title: 'เติมช่องว่างของฟันที่หายไป',
    body: 'ฟันปลอมแบบถอดได้มีฐานสีคล้ายเหงือก ยึดกับฟันข้างเคียงด้วยตะขอ ถอดออกมาทำความสะอาดได้เอง มีทั้งแบบอะคริลิก โครงโลหะ ทั้งปาก และแบบยืดหยุ่น ทันตแพทย์จะช่วยประเมินว่าแบบไหนเหมาะกับคุณ',
  },
  {
    label: '04 — เริ่มที่การตรวจ',
    title: 'ไม่แน่ใจว่าแบบไหนเหมาะ เริ่มจากนัดตรวจ',
    body: 'ไม่มีแบบไหนที่ดีที่สุดสำหรับทุกคน นัดตรวจและปรึกษาทันตแพทย์ที่ Smilist ฟรี ทักทาง LINE @smilist ได้เลย',
  },
]

// [from, to, jump target] per chapter, plus rail labels.
const STOPS: [number, number, number][] = [
  [0, 0.22, 0],
  [0.22, 0.58, 0.4],
  [0.58, 0.88, 0.78],
  [0.88, 1, 0.97],
]
const RAIL_NAMES = ['รอยยิ้ม', 'จัดฟัน', 'ฟันปลอม', 'นัดตรวจ']

type View = { story: number; fit: number; cover: number }

export default function Story() {
  const reduce = useReducedMotion()
  const storyEl = useRef<HTMLElement>(null)
  const sceneEl = useRef<HTMLDivElement>(null)
  const [v, setV] = useState<View>({ story: 0, fit: 1, cover: 1 })

  useRafScroll(() => {
    const el = storyEl.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const span = Math.max(1, r.height - STAGE_H)
    const p = clamp01((HEADER_H - r.top) / span)
    const w = sceneEl.current ? sceneEl.current.clientWidth : 760
    const h = sceneEl.current ? sceneEl.current.clientHeight : 520
    const fit = Math.max(0.4, Math.min(1, (w - 16) / 720, (h - 16) / 480))
    const cover = Math.max(w / 720, h / 480)
    setV((prev) =>
      Math.abs(p - prev.story) > 0.001 ||
      Math.abs(fit - prev.fit) > 0.01 ||
      Math.abs(cover - prev.cover) > 0.01
        ? { story: p, fit, cover }
        : prev
    )
  })

  const jump = (frac: number) => {
    const el = storyEl.current
    if (!el) return
    const r = el.getBoundingClientRect()
    window.scrollBy({
      top: r.top - HEADER_H + frac * (r.height - STAGE_H),
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  // ---- storyVals() ----
  const p = v.story
  const fit = v.fit
  const seg = (a: number, b: number) => segOf(p, a, b)

  // Chapters: 0–.22 zoom in (01→02) · .22–.58 braces (07→08→06) · .58–.88 denture (10→11) · .88–1 zoom out → 12
  let zt = ease(seg(0.02, 0.17)) - ease(seg(0.88, 0.93))
  const brOff = 1 - seg(0.88, 0.9)
  const brA = seg(0.25, 0.31) * brOff
  const brB = seg(0.38, 0.46) * brOff
  const brC = seg(0.5, 0.55) * brOff
  const dnA = seg(0.62, 0.68) * brOff
  const dnB = seg(0.74, 0.81) * brOff
  let zo = ease(seg(0.93, 0.995))
  let bookO = seg(0.93, 0.955)
  if (reduce) {
    zt = p < 0.2 || p > 0.88 ? 0 : 1
    zo = p > 0.93 ? 1 : 0
    bookO = zo
  }
  zt = clamp01(zt)
  const Z = Math.pow(RATIO, zt)
  const coverK = (v.cover || 1) / (fit || 1)
  const ax = SMILE_O.x + (TEETH_O.x - SMILE_O.x) * zt
  const ay = SMILE_O.y + (TEETH_O.y - SMILE_O.y) * zt
  const cx = ax
  const S = Math.pow(BOOK, 1 - zo)
  const smileTf = `translate(${r2(cx - SMILE_O.x)}px, ${r2(ay - SMILE_O.y)}px) scale(${r2(Z * coverK * (S / BOOK))})`
  const bookTf = `translate(${r2(SMILE_O.x - BOOK_O.x)}px, ${r2(SMILE_O.y - BOOK_O.y)}px) scale(${r2(S * coverK)})`
  const teethTf = `translate(${r2(cx - TEETH_O.x)}px, ${r2(ay - TEETH_O.y)}px) scale(${r2((Z / RATIO) * coverK)})`
  const mt = clamp01((zt - 0.7) / 0.3)
  const teethO = clamp01((zt - 0.45) / 0.3)
  // Teeth photo edges stay feathered while zooming so no rectangle edge shows; full frame once fully zoomed.
  const teethMask =
    zt >= 0.999
      ? 'none'
      : `radial-gradient(ellipse closest-side at 50% 50%, #000 ${r2(35 + 50 * mt)}%, transparent 100%)`

  const active = p < 0.22 ? 0 : p < 0.58 ? 1 : p < 0.88 ? 2 : 3

  const teethLayer = (opacity: number, withOpacityTransition = true): CSSProperties => ({
    transformOrigin: `${TEETH_O.x}px ${TEETH_O.y}px`,
    transform: teethTf,
    opacity: r2(opacity),
    WebkitMaskImage: teethMask,
    maskImage: teethMask,
    transition: withOpacityTransition
      ? 'transform .15s linear, opacity .2s linear'
      : 'transform .15s linear',
  })

  return (
    <section
      id="story"
      ref={storyEl}
      aria-label="ซูมเข้าไปดูการรักษา: จัดฟันติดเครื่องมือและฟันปลอม"
      style={{ position: 'relative', height: 3400, borderBottom: '1px solid #EDE4E2' }}
    >
      <div
        className="wrap story-stage"
        style={{
          position: 'sticky',
          top: HEADER_H,
          height: STAGE_H,
          boxSizing: 'border-box',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div
          className="story-row"
          style={{
            flex: '1 1 auto',
            minHeight: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
          }}
        >
          <div
            className="captions"
            style={{ flex: '1 1 320px', minWidth: 0, position: 'relative', minHeight: 300 }}
          >
            {CHAPTERS.map((c, i) => {
              const on = i === active
              return (
                <div
                  key={c.label}
                  aria-hidden={!on}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 12,
                    opacity: on ? 1 : 0,
                    transform: `translateY(${on ? 0 : i < active ? -16 : 16}px)`,
                    transition: 'opacity .35s ease, transform .35s ease',
                    pointerEvents: on ? 'auto' : 'none',
                  }}
                >
                  <span className="eyebrow">{c.label}</span>
                  <h2
                    className="story-h2"
                    style={{ margin: 0, fontSize: 36, lineHeight: 1.3, fontWeight: 700 }}
                  >
                    {c.title}
                  </h2>
                  <p className="soft" style={{ margin: 0 }}>
                    {c.body}
                  </p>
                  {i === 3 && (
                    <a
                      className="btn pill pill-lg on-line"
                      href={LINE_URL}
                      tabIndex={on ? 0 : -1}
                      style={{ alignSelf: 'flex-start', gap: 10 }}
                    >
                      ส่งรูปฟันให้คุณหมอประเมินทาง LINE
                    </a>
                  )}
                </div>
              )
            })}
          </div>

          <div
            className="scene"
            ref={sceneEl}
            aria-hidden="true"
            style={{
              position: 'relative',
              flex: '2 1 520px',
              minWidth: 0,
              height: 520,
              borderRadius: 32,
              background: '#EDEDEB',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                flex: '0 0 auto',
                width: 720,
                height: 480,
                transform: `scale(${r2(fit)})`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: 720,
                  height: 480,
                  pointerEvents: 'none',
                }}
              >
                <Picture
                  name="01_smile"
                  className="story-img"
                  style={{
                    transformOrigin: `${SMILE_O.x}px ${SMILE_O.y}px`,
                    transform: smileTf,
                    transition: 'transform .15s linear',
                  }}
                />
                <Picture name="02_teeth" className="story-img" style={teethLayer(teethO, false)} />
                <Picture name="07_braces_on" className="story-img" style={teethLayer(brA)} />
                <Picture name="08_braces_done" className="story-img" style={teethLayer(brB)} />
                <Picture name="06_aligner_after" className="story-img" style={teethLayer(brC)} />
                <Picture name="10_denture_gap" className="story-img" style={teethLayer(dnA)} />
                <Picture name="11_denture_in" className="story-img" style={teethLayer(dnB)} />
                <Picture
                  name="12_booking"
                  className="story-img"
                  style={{
                    transformOrigin: `${BOOK_O.x}px ${BOOK_O.y}px`,
                    transform: bookTf,
                    opacity: r2(bookO),
                    transition: 'transform .15s linear, opacity .2s linear',
                  }}
                />
              </div>
            </div>
            <span
              className="chip-note"
              style={{ background: 'rgba(255,255,255,.85)', color: '#4F4645' }}
            >
              ภาพประกอบ ไม่ใช่ผลการรักษาจริง
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
          {STOPS.map(([a, b, to], i) => (
            <button
              key={RAIL_NAMES[i]}
              type="button"
              className="rail-btn"
              onClick={() => jump(to)}
              style={{
                flex: '1 1 140px',
                minHeight: 44,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 6,
                padding: '6px 0',
                border: 0,
                background: 'transparent',
                color: i === active ? '#1A1A1A' : '#776B69',
                font: 'inherit',
                fontSize: 14,
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              <span>{RAIL_NAMES[i]}</span>
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: 3,
                  borderRadius: 2,
                  background: '#EDE4E2',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    height: 3,
                    width: `${Math.round(seg(a, b) * 100)}%`,
                    background: 'var(--accent)',
                  }}
                />
              </span>
            </button>
          ))}
          <a
            href="#aligner-steps"
            style={{
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              minHeight: 44,
              padding: '0 4px',
              fontSize: 14,
              color: '#6B605E',
              textDecoration: 'none',
            }}
          >
            ข้ามส่วนนี้ ↓
          </a>
        </div>
      </div>
    </section>
  )
}
