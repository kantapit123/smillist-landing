import { ReactNode, useState } from 'react'
import { MinusIcon, PlusIcon } from '../components/icons'

const FAQS = [
  {
    q: 'นัดหมายได้ทางไหนบ้าง',
    a: 'ทักทาง LINE @smilist หรือโทร 081-161-5129 แจ้งวันเวลาที่สะดวกและอาการที่กังวล ส่งรูปฟันให้คุณหมอประเมินเบื้องต้นก่อนได้',
  },
  {
    q: 'ตรวจปรึกษามีค่าใช้จ่ายไหม',
    a: 'ตรวจปรึกษาไม่มีค่าใช้จ่าย หากต้องเอกซเรย์หรือรักษาเพิ่ม คุณหมอจะแจ้งค่าใช้จ่ายก่อนทุกครั้ง',
  },
  {
    q: 'ค่ารักษาประมาณเท่าไหร่',
    a: 'จัดฟันใสเริ่มต้น 49,000 บาท จัดฟันติดเครื่องมือเริ่มต้น 750 บาท วีเนียร์แบบฉีดเริ่มต้น 4,000 บาทต่อซี่ ราคาจริงขึ้นอยู่กับการตรวจและประเมินโดยทันตแพทย์',
  },
  {
    q: 'จัดฟันใส TrioClear กับ Invisalign ต่างกันอย่างไร',
    a: 'TrioClear ผลิตในไทย รอชิ้นงานไม่เกิน 1 สัปดาห์ ราคาเข้าถึงง่าย ส่วน Invisalign ผลิตที่สหรัฐอเมริกา รอชิ้นงานราว 3–4 สัปดาห์ วางแผนด้วยระบบ ClinCheck® คุณหมอจะช่วยแนะนำตามเคสและงบประมาณ',
  },
  {
    q: 'ผ่อนจ่ายได้ไหม',
    a: 'จัดฟันติดเครื่องมือผ่อนรายเดือนได้ ส่วนจัดฟันใสแบ่งชำระเป็นงวดตามขั้นตอนการรักษา สอบถามจำนวนงวดและเงื่อนไขการยกเลิกได้ทาง LINE',
  },
  {
    q: 'ฟันห่างหรือฟันบิ่น แก้ได้ไหม',
    a: 'แก้ได้ด้วยการอุดเติมรูปร่างหรือวีเนียร์แบบฉีดที่ไม่ต้องกรอฟัน วิธีที่เหมาะขึ้นอยู่กับการประเมินของทันตแพทย์',
  },
  {
    q: 'ทำฟันปลอมทั้งปากได้ไหม',
    a: 'ได้ คลินิกมีฟันปลอมถอดได้ทั้งแบบอะคริลิก โครงโลหะ ทั้งปาก และแบบยืดหยุ่น ค่าใช้จ่ายขึ้นอยู่กับเคส ส่งรูปมาให้คุณหมอประเมินก่อนได้',
  },
  {
    q: 'คลินิกเปิดวันไหน และอยู่ที่ไหน',
    a: 'เปิดอังคาร – อาทิตย์ 11:00 – 20:00 น. ปิดทุกวันจันทร์ ตั้งอยู่ที่ 381 21-22 ถนนนิตโย ต.หนองญาติ อ.เมืองนครพนม แนะนำให้นัดล่วงหน้าเพื่อไม่ต้องรอนาน',
  },
]

type Props = { items?: { q: string; a: string }[]; eyebrow?: string; heading?: ReactNode }

export default function Faq({
  items = FAQS,
  eyebrow = '05 — คำถามพบบ่อย',
  heading = (
    <>
      คำถามที่คนไข้
      <br />
      ถามบ่อย
    </>
  ),
}: Props) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true })
  const allOpen = items.every((_, i) => open[i])

  const toggleAll = () => {
    if (allOpen) {
      setOpen({})
      return
    }
    setOpen(Object.fromEntries(items.map((_, i) => [i, true])))
  }

  return (
    <section
      id="faq"
      className="wrap"
      style={{ padding: '72px 24px', display: 'flex', flexWrap: 'wrap', gap: 48 }}
    >
      <div
        style={{
          flex: '1 1 320px',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          alignSelf: 'flex-start',
        }}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="sec-h2">{heading}</h2>
        <p className="soft" style={{ margin: 0 }}>
          ไม่เจอคำตอบที่ต้องการ ทักถามคุณหมอทาง LINE @smilist ได้เลย
        </p>
        <button
          className="btn"
          type="button"
          onClick={toggleAll}
          style={{
            alignSelf: 'flex-start',
            minHeight: 44,
            padding: '0 18px',
            borderRadius: 999,
            border: '1px solid #E5DAD8',
            background: '#FFFFFF',
            color: '#1A1A1A',
            font: 'inherit',
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {allOpen ? 'ย่อทั้งหมด' : 'เปิดดูทั้งหมด'}
        </button>
      </div>
      <div
        style={{
          flex: '2 1 560px',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          borderTop: '1px solid #EDE4E2',
        }}
      >
        {items.map((f, i) => {
          const isOpen = !!open[i]
          const panelId = `faq-a-${i}`
          return (
            <div key={f.q} style={{ borderBottom: '1px solid #EDE4E2' }}>
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                aria-expanded={isOpen}
                aria-controls={panelId}
                style={{
                  width: '100%',
                  minHeight: 64,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '14px 0',
                  background: 'transparent',
                  border: 0,
                  color: '#1A1A1A',
                  font: 'inherit',
                  fontSize: 18,
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: '#776B69',
                    fontWeight: 500,
                    width: 26,
                    flex: '0 0 auto',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ flex: '1 1 auto' }}>{f.q}</span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    flex: '0 0 auto',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isOpen ? 'var(--cta)' : '#F6EFEE',
                    color: isOpen ? '#FFFFFF' : '#1A1A1A',
                  }}
                >
                  {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              {isOpen && (
                <p id={panelId} className="soft" style={{ margin: 0, padding: '0 48px 22px 42px' }}>
                  {f.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
