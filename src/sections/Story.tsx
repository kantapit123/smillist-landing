import { useRef, useState } from 'react'
import Picture from '../components/Picture'
import { useRafScroll, useReducedMotion } from '../lib/hooks'
import { HEADER_H, LINE_URL, STAGE_H, clamp01, r2, seg as segOf } from '../lib/site'

const CHAPTERS = [
  {
    label: '01 — เริ่มจากรอยยิ้ม',
    title: 'เลื่อนลง แล้วดูว่าเราดูแลรอยยิ้มอย่างไร',
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
  [0, 0.25, 0],
  [0.25, 0.5, 0.375],
  [0.5, 0.75, 0.625],
  [0.75, 1, 0.97],
]
const SCENES = ['story_smile', 'story_braces', 'story_denture', 'story_booking']
// Half-width of the crossfade around each chapter boundary.
const FADE = 0.04
const RAIL_NAMES = ['รอยยิ้ม', 'จัดฟัน', 'ฟันปลอม', 'นัดตรวจ']

export default function Story() {
  const reduce = useReducedMotion()
  const storyEl = useRef<HTMLElement>(null)
  const [p, setP] = useState(0)

  useRafScroll(() => {
    const el = storyEl.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const span = Math.max(1, r.height - STAGE_H)
    const next = clamp01((HEADER_H - r.top) / span)
    setP((prev) => (Math.abs(next - prev) > 0.001 ? next : prev))
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

  const seg = (a: number, b: number) => segOf(p, a, b)
  const active = p < 0.25 ? 0 : p < 0.5 ? 1 : p < 0.75 ? 2 : 3
  const sceneOpacity = (i: number) => {
    if (i === 0) return 1
    const at = STOPS[i][0]
    return reduce ? (active >= i ? 1 : 0) : seg(at - FADE, at + FADE)
  }

  return (
    <section
      id="story"
      ref={storyEl}
      aria-label="การรักษา: จัดฟันติดเครื่องมือและฟันปลอม"
      style={{ position: 'relative', height: 2800, borderBottom: '1px solid #EDE4E2' }}
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

          <div className="scene-col" style={{ flex: '2 1 520px', minWidth: 0 }}>
            <div
              className="scene"
              aria-hidden="true"
              style={{
                position: 'relative',
                height: 520,
                borderRadius: 32,
                background: '#EDEDEB',
                overflow: 'hidden',
              }}
            >
              {SCENES.map((name, i) => (
                <Picture
                  key={name}
                  name={name}
                  className="fill-img"
                  style={{
                    opacity: r2(sceneOpacity(i)),
                    transform: reduce
                      ? 'none'
                      : `scale(${r2(1.06 - 0.06 * seg(STOPS[i][0], STOPS[i][1]))})`,
                    transition: 'transform .15s linear, opacity .2s linear',
                  }}
                />
              ))}
            </div>
            <span className="ai-note">ภาพประกอบ ไม่ใช่ผลการรักษาจริง</span>
          </div>
        </div>

        <div
          className="story-rail"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}
        >
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
            className="story-skip"
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
