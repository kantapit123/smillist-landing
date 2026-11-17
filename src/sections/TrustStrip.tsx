import type { ReactNode } from 'react'
import { CalendarIcon, CardIcon, CheckCircleIcon, GlobeIcon } from '../components/icons'

const ITEMS: [ReactNode, ReactNode][] = [
  [<CheckCircleIcon />, <><strong>ตรวจปรึกษาฟรี</strong> ไม่มีค่าใช้จ่าย</>],
  [<CardIcon />, <><strong>ผ่อนสบาย</strong> แบ่งจ่ายรายเดือนได้</>],
  [<GlobeIcon />, <>เครื่องมือจาก<strong>สหรัฐฯ และอิตาลี</strong></>],
  [<CalendarIcon />, <><strong>วันหยุดนักขัตฤกษ์</strong> คลินิกไม่หยุด</>],
]

export default function TrustStrip() {
  return (
    <section
      aria-label="จุดเด่นของคลินิก"
      style={{ borderTop: '1px solid #EDE4E2', borderBottom: '1px solid #EDE4E2', background: '#FBF8F7' }}
    >
      <div
        className="wrap"
        style={{
          padding: '22px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '16px 32px',
          fontSize: 15,
        }}
      >
        {ITEMS.map(([icon, text], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: 'var(--accent)', display: 'flex' }}>{icon}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
