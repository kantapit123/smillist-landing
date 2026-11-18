import { useEffect, useRef, useState } from 'react'
import { ArrowDownIcon, ChatIcon, ImageIcon, PhoneIcon } from '../components/icons'
import { useReducedMotion } from '../lib/hooks'
import { LINE_URL, TEL_LABEL, TEL_URL } from '../lib/site'

const WORDS = ['จัดฟันใส', 'จัดฟันติดเครื่องมือ', 'วีเนียร์แบบฉีด', 'ฟอกสีฟัน']
const HOLD_TICKS = 26

/** Split into grapheme clusters so Thai vowels/tone marks never detach from their consonant. */
function splitGraphemes(w: string): string[] {
  try {
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
      return Array.from(new Intl.Segmenter('th', { granularity: 'grapheme' }).segment(w), (s) => s.segment)
    }
  } catch {
    /* fall through */
  }
  return Array.from(w)
}

function useTypedWord(reduce: boolean): string {
  // Mutable typing state lives in a ref; `render` bumps only when visible text changes.
  const st = useRef({ wordIdx: 0, chars: 99, deleting: false, hold: HOLD_TICKS })
  const [, render] = useState(0)

  useEffect(() => {
    const tick = () => {
      const s = st.current
      if (reduce) {
        s.wordIdx = (s.wordIdx + 1) % WORDS.length
        s.chars = 99
        render((n) => n + 1)
        return
      }
      const len = splitGraphemes(WORDS[s.wordIdx]).length
      if (!s.deleting) {
        if (s.chars < len) {
          s.chars += 1
          render((n) => n + 1)
          return
        }
        if (s.hold > 0) {
          s.hold -= 1
          return
        }
        s.deleting = true
        s.chars = len
        render((n) => n + 1)
        return
      }
      if (s.chars > 0) {
        s.chars -= 1
        render((n) => n + 1)
        return
      }
      s.hold = HOLD_TICKS
      s.deleting = false
      s.wordIdx = (s.wordIdx + 1) % WORDS.length
      render((n) => n + 1)
    }
    const id = setInterval(tick, reduce ? 2800 : 85)
    return () => clearInterval(id)
  }, [reduce])

  const glyphs = splitGraphemes(WORDS[st.current.wordIdx])
  return glyphs.slice(0, Math.min(st.current.chars, glyphs.length)).join('')
}

/** Weekday + minutes-since-midnight in Asia/Bangkok. */
function bangkokClock(now: number): { wd: string; mins: number } {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Bangkok',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date(now))
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
    return { wd: get('weekday'), mins: (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10) }
  } catch {
    const d = new Date(now)
    return { wd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()], mins: d.getHours() * 60 + d.getMinutes() }
  }
}

const DAY_DEFS = [
  ['Mon', 'จ.'],
  ['Tue', 'อ.'],
  ['Wed', 'พ.'],
  ['Thu', 'พฤ.'],
  ['Fri', 'ศ.'],
  ['Sat', 'ส.'],
  ['Sun', 'อา.'],
] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const typed = useTypedWord(reduce)

  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000)
    return () => clearInterval(id)
  }, [])

  // Open Tue–Sun 11:00–20:00, closed Mondays.
  const { wd, mins } = bangkokClock(now)
  const isMon = wd === 'Mon'
  const isOpen = !isMon && mins >= 660 && mins < 1200
  let statusLabel = 'เปิดอยู่ตอนนี้ · ปิด 20:00 น.'
  if (!isOpen) {
    if (isMon) statusLabel = 'วันนี้ปิด · เปิดพรุ่งนี้ 11:00 น.'
    else if (mins < 660) statusLabel = 'เปิดวันนี้ 11:00 น.'
    else if (wd === 'Sun') statusLabel = 'ปิดแล้ว · เปิดวันอังคาร 11:00 น.'
    else statusLabel = 'ปิดแล้ว · เปิดพรุ่งนี้ 11:00 น.'
  }

  return (
    <section
      className="wrap"
      style={{ padding: '64px 24px 56px', display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}
    >
      <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <a
          href="#contact"
          style={{
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 14px 6px 10px',
            border: '1px solid #E5DAD8',
            borderRadius: 999,
            background: '#FFFFFF',
            color: '#1A1A1A',
            textDecoration: 'none',
            fontSize: 14,
          }}
        >
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: isOpen ? '#1F8A4C' : '#9AA8AC' }} />
          <span style={{ fontWeight: 600 }}>{statusLabel}</span>
          <span className="muted">ดูเวลาทำการ →</span>
        </a>
        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.22em', color: 'var(--accent)' }}>
          CONFIDENT SMILES · START HERE
        </span>
        <h1 className="h1" style={{ margin: 0, fontSize: 64, lineHeight: 1.15, letterSpacing: '-0.005em' }}>
          ยิ้มที่มั่นใจ
          <br />
          <span style={{ color: 'var(--accent)' }}>เริ่มต้นที่นี่</span>
        </h1>
        <p
          style={{
            margin: 0,
            fontFamily: "'Kanit', sans-serif",
            fontWeight: 500,
            fontSize: 24,
            lineHeight: 1.4,
            minHeight: '1.4em',
            color: '#1A1A1A',
          }}
        >
          ออกแบบรอยยิ้มด้วย{' '}
          <span
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'var(--accent)',
              textDecorationThickness: 3,
              textUnderlineOffset: 6,
            }}
          >
            {typed}
          </span>
          <span className="caret" style={{ color: 'var(--accent)' }} />
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a className="btn pill pill-lg on-line" href={LINE_URL} style={{ gap: 10 }}>
            <ChatIcon />
            นัดหมายผ่าน LINE
          </a>
          <a className="btn pill pill-lg on-blush" href={TEL_URL} style={{ gap: 10 }}>
            <PhoneIcon />
            โทร {TEL_LABEL}
          </a>
        </div>

        <a
          href="#story"
          style={{
            alignSelf: 'flex-start',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            minHeight: 44,
            color: 'var(--accent)',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
          }}
        >
          เลื่อนดูการรักษาแบบใกล้ ๆ
          <ArrowDownIcon />
        </a>
      </div>

      <div style={{ flex: '1 1 440px', minWidth: 0, position: 'relative' }}>
        <div
          className="placeholder"
          data-todo="hero-doctor-photo: ภาพคุณหมอในคลินิก สัดส่วน 4:5 (คลินิกกำลังเลือกรูป)"
          style={{
            aspectRatio: '4 / 5',
            borderRadius: 28,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            textAlign: 'center',
            padding: 24,
            position: 'relative',
          }}
        >
          <ImageIcon />
          <span style={{ fontWeight: 600, color: '#1A1A1A' }}>[ ภาพคุณหมอในคลินิก ]</span>
          <span style={{ fontSize: 14 }}>ทันตแพทย์ในเสื้อกาวน์ SMILIST ยิ้มกว้าง ในห้องทำฟันสีขาวสว่าง</span>
          <div
            className="hours-card"
            style={{
              position: 'absolute',
              left: 21,
              width: 'min(340px, 90%)',
              background: '#FFFFFF',
              borderRadius: 18,
              boxShadow: '0 18px 40px rgba(60,20,22,.14)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              // Design had `top: 518px` (tuned at 1440 wide, where it lands ~20px above the bottom edge);
              // anchoring to the bottom keeps that look without overflowing on narrower screens.
              bottom: 21,
              color: '#1A1A1A',
              textAlign: 'start',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>เวลาทำการ</span>
              <span className="muted" style={{ fontSize: 14 }}>
                11:00–20:00 น.
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: 6 }}>
              {DAY_DEFS.map(([k, th]) => {
                const today = k === wd
                const closed = k === 'Mon'
                return (
                  <div
                    key={k}
                    aria-current={today ? 'date' : undefined}
                    style={{
                      height: 44,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      lineHeight: 1.2,
                      background: today ? 'var(--cta)' : closed ? '#F6EFEE' : '#F8F3F2',
                      color: today ? '#FFFFFF' : closed ? '#776B69' : '#1A1A1A',
                      fontWeight: today ? 700 : 500,
                    }}
                  >
                    <span>{th}</span>
                    <span style={{ fontSize: 10 }}>{closed ? 'ปิด' : today ? 'วันนี้' : ''}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
