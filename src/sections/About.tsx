import Picture from '../components/Picture'

const POINTS = [
  ['ทีมหมอรุ่นใหม่ที่กลับบ้าน', 'นำความรู้และประสบการณ์จากเมืองใหญ่กลับมาดูแลคนบ้านเรา'],
  ['เครื่องมือมาตรฐานสากล', 'เลือกอุปกรณ์จากสหรัฐอเมริกาและอิตาลี'],
  ['เครือข่ายทันตแพทย์กรุงเทพฯ', 'มีเพื่อนทันตแพทย์ร่วมปรึกษาและแลกเปลี่ยนความรู้'],
  ['คลินิกเล็กที่อบอุ่น', 'ตั้งใจดูแลรอยยิ้มคนในพื้นที่และครอบครัว'],
]

type Doctor = { nick: string; full: string; focus: string; todo?: boolean }
const DOCTORS: Doctor[] = [
  { nick: 'หมอเพชร', full: 'ทพญ. ชนาภรณ์ แพงดี · ท.21787', focus: 'ออกแบบรอยยิ้ม · ฟื้นฟูรอยยิ้มทั้งปาก' },
  { nick: 'หมอพิม', full: '[ ชื่อเต็ม · เลขใบอนุญาต ]', focus: '[ ความเชี่ยวชาญ ]', todo: true },
  { nick: 'หมอเบนนี่', full: '[ ชื่อเต็ม · เลขใบอนุญาต ]', focus: '[ ความเชี่ยวชาญ ]', todo: true },
  { nick: 'หมอพลอย', full: '[ ชื่อเต็ม · เลขใบอนุญาต ]', focus: '[ ความเชี่ยวชาญ ]', todo: true },
]

export default function About() {
  return (
    <section id="about" className="wrap" style={{ padding: '96px 24px 72px', display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
        <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span className="eyebrow">03 — เกี่ยวกับเรา</span>
          <h2 style={{ margin: 0, fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 46, lineHeight: 1.15 }}>
            Health first
            <br />
            <span style={{ color: 'var(--accent)' }}>→ Aesthetic next</span>
          </h2>
          <p className="soft" style={{ margin: 0, fontSize: 18 }}>
            ก่อนจัดฟัน วีเนียร์ หรือออกแบบรอยยิ้ม เราเช็กและเคลียร์ปัญหาช่องปากที่จำเป็นก่อนเสมอ เพราะ "ไม่ปวด" ไม่ได้แปลว่า "ไม่ผุ"
          </p>
          <p style={{ margin: 0, fontFamily: "'Kanit', sans-serif", fontWeight: 500, fontSize: 20 }}>ตรวจครบ · วางแผนชัด · รักษาตรงจุด</p>
        </div>
        <ul
          style={{
            flex: '1 1 420px',
            minWidth: 0,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 14,
          }}
        >
          {POINTS.map(([t, d]) => (
            <li key={t} style={{ borderRadius: 18, background: '#F8F3F2', padding: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontWeight: 600 }}>{t}</span>
              <span className="soft" style={{ fontSize: 15 }}>
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Picture
          name="clinic_room"
          width={1600}
          height={1109}
          alt="ห้องทำฟันของ Smilist ยูนิตทำฟันสีขาวในห้องสว่าง"
          style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '21 / 9', objectFit: 'cover', objectPosition: '60% 45%', borderRadius: 24 }}
        />
        <figcaption className="muted" style={{ fontSize: 14 }}>
          ห้องทำฟันที่ Smilist นครพนม
        </figcaption>
      </figure>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <h3 style={{ margin: 0, fontSize: 26 }}>ทีมทันตแพทย์</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
          {DOCTORS.map((d) => (
            <div
              key={d.nick}
              data-todo={d.todo ? `doctor-profile: ${d.nick} — รูปโปรไฟล์ ชื่อเต็ม เลขใบอนุญาต ความเชี่ยวชาญ` : 'doctor-photo'}
              style={{ border: '1px solid #EDE4E2', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div
                className="muted"
                style={{ aspectRatio: '4 / 3', background: '#F6EFEE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}
              >
                [ รูปโปรไฟล์ ]
              </div>
              <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: 20 }}>{d.nick}</span>
                <span className="soft" style={{ fontSize: 14 }}>
                  {d.full}
                </span>
                <span className="muted" style={{ fontSize: 14 }}>
                  {d.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="placeholder"
        data-todo="before-after-gallery: เฉพาะเคสที่คนไข้อนุญาต"
        style={{
          borderRadius: 24,
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          textAlign: 'center',
        }}
      >
        <span style={{ fontWeight: 600, color: '#1A1A1A' }}>[ ผลงานจริง Before / After ]</span>
        <span style={{ fontSize: 14 }}>
          ใส่เฉพาะเคสที่คนไข้อนุญาต พร้อมข้อความ "Patient Consent Obtained" และ "ผลลัพธ์แตกต่างกันในแต่ละบุคคล"
        </span>
      </div>
    </section>
  )
}
