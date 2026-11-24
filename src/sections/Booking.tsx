const STEPS = [
  ['ทัก LINE @smilist', 'กดปุ่มนัดหมาย หรือค้นหา @smilist ในแอป LINE'],
  ['ส่งรูปฟันและวันที่สะดวก', 'บอกอาการที่กังวล ส่งรูปฟันให้คุณหมอประเมินเบื้องต้นได้'],
  ['คลินิกยืนยันนัด', 'รับการยืนยันทาง LINE แล้วมาตามเวลานัดได้เลย'],
]

export default function Booking() {
  return (
    <section
      id="booking"
      className="wrap"
      style={{ padding: '48px 24px 72px', display: 'flex', flexDirection: 'column', gap: 36 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span className="eyebrow">04 — วิธีนัดหมาย</span>
        <h2 className="sec-h2">
          นัดง่ายใน 3 ขั้น<span className="dim"> ผ่าน LINE</span>
        </h2>
      </div>
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 20,
        }}
      >
        {STEPS.map(([title, desc], i) => (
          <li
            key={title}
            className="lift"
            style={{
              border: '1px solid #EDE4E2',
              borderRadius: 24,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <span className="step-num" style={{ fontSize: 36 }}>
              {i + 1}
            </span>
            <span style={{ fontWeight: 600, fontSize: 20 }}>{title}</span>
            <span className="soft">{desc}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
