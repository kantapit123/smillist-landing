import GoogleReviews from '../components/GoogleReviews'
import Picture from '../components/Picture'

const POINTS = [
  ['ทีมหมอรุ่นใหม่ที่กลับบ้าน', 'นำความรู้และประสบการณ์จากเมืองใหญ่กลับมาดูแลคนบ้านเรา'],
  ['เครื่องมือมาตรฐานสากล', 'เลือกอุปกรณ์จากสหรัฐอเมริกาและอิตาลี'],
  ['เครือข่ายทันตแพทย์กรุงเทพฯ', 'มีเพื่อนทันตแพทย์ร่วมปรึกษาและแลกเปลี่ยนความรู้'],
  ['คลินิกเล็กที่อบอุ่น', 'ตั้งใจดูแลรอยยิ้มคนในพื้นที่และครอบครัว'],
]

type Doctor = { nick: string; full: string; focus: string; img: string; todo?: boolean }
const DOCTORS: Doctor[] = [
  {
    nick: 'หมอเพชร',
    full: 'ทพญ. ชนาภรณ์ แพงดี · ท.21787',
    focus: 'ออกแบบรอยยิ้ม · ฟื้นฟูรอยยิ้มทั้งปาก',
    img: 'petch_profile',
  },
  {
    nick: 'หมอพิม',
    full: 'ชื่อ นามสกุล (ตัวอย่าง) · ท.00000',
    focus: 'ความเชี่ยวชาญ (ตัวอย่าง)',
    img: 'mock_doctor_pim',
    todo: true,
  },
  {
    nick: 'หมอเบนนี่',
    full: 'ชื่อ นามสกุล (ตัวอย่าง) · ท.00000',
    focus: 'ความเชี่ยวชาญ (ตัวอย่าง)',
    img: 'mock_doctor_benny',
    todo: true,
  },
  {
    nick: 'หมอพลอย',
    full: 'ชื่อ นามสกุล (ตัวอย่าง) · ท.00000',
    focus: 'ความเชี่ยวชาญ (ตัวอย่าง)',
    img: 'mock_doctor_ploy',
    todo: true,
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="wrap"
      style={{ padding: '96px 24px 72px', display: 'flex', flexDirection: 'column', gap: 48 }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
        <div
          style={{
            flex: '1 1 420px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <span className="eyebrow">03 — เกี่ยวกับเรา</span>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 46,
              lineHeight: 1.15,
            }}
          >
            Health first
            <br />
            <span style={{ color: 'var(--accent)' }}>→ Aesthetic next</span>
          </h2>
          <p className="soft" style={{ margin: 0, fontSize: 18 }}>
            ก่อนจัดฟัน วีเนียร์ หรือออกแบบรอยยิ้ม เราเช็กและเคลียร์ปัญหาช่องปากที่จำเป็นก่อนเสมอ
            เพราะ "ไม่ปวด" ไม่ได้แปลว่า "ไม่ผุ"
          </p>
          <p
            style={{ margin: 0, fontFamily: "'Kanit', sans-serif", fontWeight: 500, fontSize: 20 }}
          >
            ตรวจครบ · วางแผนชัด · รักษาตรงจุด
          </p>
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
            <li
              key={t}
              style={{
                borderRadius: 18,
                background: '#F8F3F2',
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
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
          name="clinic_front"
          width={2048}
          height={1024}
          alt="ภาพจำลองหน้าคลินิกทันตกรรมสไมล์ลิสต์ ประตูกระจกกรอบไม้ เคาน์เตอร์ต้อนรับและที่นั่งรอ"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            aspectRatio: '2 / 1',
            objectFit: 'cover',
            borderRadius: 24,
          }}
        />
        <figcaption className="muted" style={{ fontSize: 14 }}>
          หน้าคลินิก Smilist นครพนม
          <span className="ai-note">ภาพจำลองจาก AI อ้างอิงอาคารจริง</span>
        </figcaption>
      </figure>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <h3 style={{ margin: 0, fontSize: 26 }}>ทีมทันตแพทย์</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
            gap: 16,
          }}
        >
          {/* Placeholder profiles (todo) stay hidden on the live site until the clinic sends real details. */}
          {DOCTORS.filter((d) => !d.todo).map((d) => (
            <div
              key={d.nick}
              data-todo={
                d.todo
                  ? `doctor-profile: ${d.nick} — รูปโปรไฟล์ ชื่อเต็ม เลขใบอนุญาต ความเชี่ยวชาญ`
                  : undefined
              }
              style={{
                border: '1px solid #EDE4E2',
                borderRadius: 20,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#F6EFEE' }}>
                <Picture
                  name={d.img}
                  width={1200}
                  height={900}
                  alt={d.todo ? `ภาพตัวอย่างโปรไฟล์ ${d.nick}` : d.nick}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'relative',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {/* Absolute so cards with and without the note keep their names aligned. */}
                {d.todo && (
                  <span className="ai-note" style={{ position: 'absolute', top: 0, right: 18 }}>
                    ภาพตัวอย่าง
                  </span>
                )}
                <span style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 600, fontSize: 20 }}>
                  {d.nick}
                </span>
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

      <GoogleReviews />
    </section>
  )
}
