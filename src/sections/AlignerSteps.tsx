const STEPS = [
  ['ตรวจประเมินช่องปาก', 'ตรวจสุขภาพช่องปาก เอกซเรย์ และประเมินแพ็กเกจที่เหมาะกับเคส'],
  ['เก็บข้อมูลทำแผน', 'สแกนฟัน 3 มิติ ถ่ายรูปในและนอกช่องปาก'],
  ['ฟังแผนการรักษา', 'ดูภาพ 3 มิติการเคลื่อนฟัน สรุปจำนวนชิ้นงานและระยะเวลา'],
  ['รับชิ้นงาน', 'ติด Attachment แล้วเริ่มใส่ Aligner'],
  ['ติดตามผลทุก 2 เดือน', 'รับชิ้นงานชุดใหม่ทุก 2–3 เดือน'],
]

export default function AlignerSteps() {
  return (
    <section
      id="aligner-steps"
      style={{
        background: '#FBF8F7',
        borderTop: '1px solid #EDE4E2',
        borderBottom: '1px solid #EDE4E2',
      }}
    >
      <div
        className="wrap"
        style={{ padding: '80px 24px', display: 'flex', flexDirection: 'column', gap: 36 }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="eyebrow">02 — จัดฟันใส</span>
            <h2 className="sec-h2">
              5 ขั้นตอน<span className="dim"> ก่อนเริ่มจัดฟันใส</span>
            </h2>
          </div>
          <p className="soft" style={{ margin: 0, maxWidth: 420 }}>
            แบ่งชำระเป็นงวดตามขั้นตอน สอบถามรายละเอียดและเงื่อนไขได้ทาง LINE
          </p>
        </div>
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 16,
          }}
        >
          {STEPS.map(([title, desc], i) => (
            <li
              key={title}
              className="lift"
              style={{
                border: '1px solid #EDE4E2',
                borderRadius: 20,
                padding: 22,
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <span className="step-num" style={{ fontSize: 32 }}>
                {i + 1}
              </span>
              <span style={{ fontWeight: 600, fontSize: 18 }}>{title}</span>
              <span className="soft" style={{ fontSize: 15 }}>
                {desc}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
