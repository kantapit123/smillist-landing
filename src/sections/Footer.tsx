import { ChatIcon } from '../components/icons'
import { LINE_URL } from '../lib/site'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #EDE4E2' }}>
      <div
        className="wrap muted"
        style={{ padding: '28px 24px 96px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontSize: 14 }}
      >
        <span>
          <strong style={{ color: '#1A1A1A', fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: '.06em' }}>SMILIST</strong>{' '}
          Dental Clinic · 381 21-22 ถ.นิตโย ต.หนองญาติ อ.เมืองนครพนม จ.นครพนม 48000
        </span>
        <span>ผลลัพธ์แตกต่างกันในแต่ละบุคคล · © 2026 Smilist Dental Clinic</span>
      </div>
    </footer>
  )
}

export function FloatingLine() {
  return (
    <a
      className="btn"
      href={LINE_URL}
      aria-label="นัดหมายผ่าน LINE @smilist"
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 30,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: 'var(--line-green)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 12px 28px rgba(60,20,22,.28)',
      }}
    >
      <ChatIcon size={26} />
    </a>
  )
}
