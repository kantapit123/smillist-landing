import { ArrowRightIcon, PinIcon } from '../components/icons'
import { LINE_URL, TEL_LABEL, TEL_URL } from '../lib/site'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Smilist+Dental+Clinic+Nakhon+Phanom'

const infoCard = { border: '1px solid #EDE4E2', borderRadius: 20, padding: 22, display: 'flex', flexDirection: 'column' } as const
const squareBtn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  minHeight: 52,
  borderRadius: 14,
  textDecoration: 'none',
  fontWeight: 600,
} as const
const socialLink = { minHeight: 44, display: 'flex', alignItems: 'center' } as const

export function Contact() {
  return (
    <section id="contact" className="wrap" style={{ padding: '72px 24px 96px', display: 'flex', flexDirection: 'column', gap: 36 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span className="eyebrow">06 — แผนที่ &amp; ติดต่อ</span>
        <h2 className="sec-h2">
          แวะมาหาเราที่<span className="dim"> ถนนนิตโย</span>
        </h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        <div
          className="placeholder"
          data-todo="google-maps-embed: ฝัง Google Maps ของคลินิก (ตอนนี้เป็นปุ่มค้นหาชื่อคลินิก)"
          style={{
            flex: '3 1 480px',
            minWidth: 0,
            minHeight: 360,
            borderRadius: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            padding: 24,
            textAlign: 'center',
          }}
        >
          <span style={{ color: 'var(--accent)', display: 'flex' }}>
            <PinIcon />
          </span>
          <span style={{ fontWeight: 600, color: '#1A1A1A' }}>[ ฝังแผนที่ Google Maps ของคลินิกตรงนี้ ]</span>
          <a
            className="btn pill on-white"
            href={MAPS_URL}
            style={{ gap: 8, minHeight: 44, padding: '0 18px', border: '1px solid #E5DAD8', fontSize: 15 }}
          >
            เปิดใน Google Maps
            <ArrowRightIcon />
          </a>
        </div>
        <div style={{ flex: '2 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...infoCard, gap: 6 }}>
            <span className="muted" style={{ fontSize: 14 }}>
              ที่อยู่
            </span>
            <span style={{ fontWeight: 600 }}>
              คลินิกทันตกรรมสไมล์ลิสต์
              <br />
              381 21-22 ถนนนิตโย ต.หนองญาติ
              <br />
              อ.เมืองนครพนม จ.นครพนม 48000
            </span>
          </div>
          <div style={{ ...infoCard, gap: 8 }}>
            <span className="muted" style={{ fontSize: 14 }}>
              เวลาทำการ
            </span>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <span>อังคาร – อาทิตย์</span>
              <span style={{ fontWeight: 600 }}>11:00 – 20:00 น.</span>
            </div>
            <div className="muted" style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <span>จันทร์</span>
              <span>ปิด</span>
            </div>
            <span className="muted" style={{ fontSize: 14 }}>
              วันหยุดนักขัตฤกษ์เปิดตามปกติ ติดตามประกาศทางเพจ
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: 10 }}>
            <a className="btn" href={LINE_URL} style={{ ...squareBtn, background: 'var(--line-green)', color: '#FFFFFF' }}>
              LINE @smilist
            </a>
            <a className="btn" href={TEL_URL} style={{ ...squareBtn, background: '#F6EFEE', color: '#1A1A1A' }}>
              {TEL_LABEL}
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', fontSize: 15 }}>
            <a href="https://www.facebook.com/Smilistdentalclinic" style={socialLink}>
              Facebook
            </a>
            <a href="https://instagram.com/Smilistdentalclinic" style={socialLink}>
              Instagram
            </a>
            <a href="https://tiktok.com/@Smilistdentalclinic" style={socialLink}>
              TikTok
            </a>
            <a href="mailto:smilistdental@gmail.com" style={socialLink}>
              smilistdental@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="wrap" style={{ marginBottom: 72, padding: '0 24px' }}>
      <div
        style={{
          borderRadius: 32,
          background: 'var(--cta)',
          color: '#FFFFFF',
          padding: '56px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 580 }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.22em', opacity: 0.85 }}>CONFIDENT SMILES · START HERE</span>
          <h2 style={{ margin: 0, fontSize: 36, lineHeight: 1.3 }}>ให้เราช่วยออกแบบรอยยิ้มของคุณ</h2>
          <p style={{ margin: 0, opacity: 0.92 }}>แจ้งวันเวลาที่สะดวกและอาการที่กังวล มาได้เลยทาง LINE</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a className="btn pill pill-lg on-line" href={LINE_URL}>
            นัดหมายผ่าน LINE
          </a>
          <a
            className="btn pill pill-lg"
            href={TEL_URL}
            style={{ border: '1.5px solid rgba(255,255,255,.7)', color: '#FFFFFF' }}
          >
            โทร {TEL_LABEL}
          </a>
        </div>
      </div>
    </section>
  )
}
