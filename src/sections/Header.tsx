import { ChatIcon, ToothLogo } from '../components/icons'
import { LINE_URL } from '../lib/site'

const LINKS = [
  ['#services', 'บริการ'],
  ['/prices', 'ราคา'],
  ['#story', 'ดูการรักษา'],
  ['#about', 'เกี่ยวกับเรา'],
  ['#faq', 'คำถามพบบ่อย'],
  ['#contact', 'แผนที่ & ติดต่อ'],
] as const

export default function Header({ home }: { home: boolean }) {
  // On service pages the section anchors live on the home page.
  const base = home ? '' : '/'

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid #EDE4E2',
      }}
    >
      <nav
        aria-label="เมนูหลัก"
        className="wrap"
        style={{
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <a
          href={home ? '#top' : '/'}
          aria-label="Smilist Dental Clinic หน้าแรก"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: '#1A1A1A',
          }}
        >
          <ToothLogo />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: '.08em',
              }}
            >
              SMILIST
            </span>
            <span style={{ fontSize: 10.5, color: '#6B605E', letterSpacing: '.32em' }}>
              DENTAL CLINIC
            </span>
          </span>
        </a>
        <div className="navlinks" style={{ display: 'flex', gap: 26, fontSize: 15 }}>
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href.startsWith('#') ? base + href : href}
              style={{ color: '#1A1A1A', textDecoration: 'none' }}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="btn pill on-line nav-cta"
          href={LINE_URL}
          style={{ gap: 8, minHeight: 44, padding: '0 18px', fontSize: 15, whiteSpace: 'nowrap' }}
        >
          <ChatIcon size={18} />
          นัดผ่าน LINE
        </a>
      </nav>
    </header>
  )
}
