import { useState } from 'react'
import Picture from '../components/Picture'
import { PauseIcon, PlayIcon, SplitArrowsIcon } from '../components/icons'
import { LINE_URL } from '../lib/site'

const card = {
  border: '1px solid #EDE4E2',
  borderRadius: 24,
  padding: 28,
  background: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
} as const

function AlignerCard() {
  const [paused, setPaused] = useState(false)
  const play = paused ? 'paused' : 'running'

  return (
    <article className="lift span2" style={{ ...card, gridColumn: 'span 2', gap: 20 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 520 }}>
          <h3 style={{ margin: 0, fontSize: 26 }}>จัดฟันใส · Clear Aligner</h3>
          <p className="soft" style={{ margin: 0 }}>
            ถาดใสถอดเข้า-ออกได้ เลือกได้ 2 ระบบตามเคสและงบประมาณ
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, fontSize: 14 }}>
            <span style={{ padding: '4px 12px', borderRadius: 999, background: '#F6EFEE' }}>
              <strong>TrioClear</strong> ผลิตในไทย รอชิ้นงานไม่เกิน 1 สัปดาห์
            </span>
            <span style={{ padding: '4px 12px', borderRadius: 999, background: '#F6EFEE' }}>
              <strong>Invisalign</strong> แบรนด์ระดับโลก วางแผนด้วย ClinCheck®
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            lineHeight: 1.2,
          }}
        >
          <span className="muted" style={{ fontSize: 14 }}>
            เริ่มต้น
          </span>
          <span className="price">49,000.-</span>
        </div>
      </div>
      <div
        style={{
          borderRadius: 18,
          background: '#F8F3F2',
          padding: '32px 24px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          alignItems: 'center',
        }}
      >
        {/* 13 → 02 → 06 crossfade, 6s loop (CSS keyframes) */}
        <div
          aria-hidden="true"
          style={{
            position: 'relative',
            width: '100%',
            height: 320,
            borderRadius: 14,
            overflow: 'hidden',
            background: '#EFE6E3',
          }}
        >
          <Picture name="13_aligner_start" className="fill-img" />
          <Picture
            name="02_teeth"
            className="fill-img al-mid"
            style={{ animationPlayState: play }}
          />
          <Picture
            name="06_aligner_after"
            className="fill-img al-after"
            style={{ animationPlayState: play }}
          />
        </div>
        <div
          style={{ width: '100%', maxWidth: 520, display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <div
            aria-hidden="true"
            style={{
              flex: '1 1 auto',
              height: 4,
              borderRadius: 2,
              background: '#E5DAD8',
              overflow: 'hidden',
            }}
          >
            <div
              className="align-bar"
              style={{ height: 4, width: '100%', background: '#1A1A1A', animationPlayState: play }}
            />
          </div>
          <button
            className="btn"
            type="button"
            onClick={() => setPaused((x) => !x)}
            aria-label={paused ? 'เล่นภาพเคลื่อนไหวจัดฟันใส' : 'หยุดภาพเคลื่อนไหวจัดฟันใส'}
            style={{
              flex: '0 0 auto',
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid #E5DAD8',
              background: '#FFFFFF',
              color: '#1A1A1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {paused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>
        <span className="soft" style={{ fontSize: 14 }}>
          ภาพประกอบจาก AI: ฟันค่อย ๆ เคลื่อนเข้าแนวตามแผนการรักษา
        </span>
      </div>
    </article>
  )
}

const ELASTICS = [
  { id: 'clear', name: 'ใส', hex: '#E9EEF0', img: '' },
  { id: 'pink', name: 'ชมพู', hex: '#E58FB0', img: '14_elastic_pink' },
  { id: 'sky', name: 'ฟ้า', hex: '#5AA9E0', img: '15_elastic_blue' },
  { id: 'purple', name: 'ม่วง', hex: '#A27FD8', img: '16_elastic_purple' },
  { id: 'wine', name: 'แดงไวน์', hex: '#8B1E24', img: '17_elastic_wine' },
] as const

function BracesCard() {
  const [elastic, setElastic] = useState<string>('pink')
  const cur = ELASTICS.find((e) => e.id === elastic) ?? ELASTICS[0]

  return (
    <article className="lift" style={{ ...card, gap: 16 }}>
      <h3 style={{ margin: 0, fontSize: 26 }}>จัดฟันติดเครื่องมือ</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, lineHeight: 1.2 }}>
        <span className="muted" style={{ fontSize: 14 }}>
          ติดเครื่องมือเริ่มต้น
        </span>
        <span className="price">750.-</span>
      </div>
      <p className="soft" style={{ margin: 0 }}>
        ผ่อนรายเดือนสบาย ๆ มีทั้งแบบมาตรฐานและ Self Ligate ที่ไม่ต้องใช้ยาง
      </p>
      <div
        style={{
          borderRadius: 16,
          background: '#F8F3F2',
          padding: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          marginTop: 'auto',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '3 / 2',
            borderRadius: 12,
            overflow: 'hidden',
            background: '#EFE6E3',
          }}
        >
          {/* 07 = clear elastics; colored layers crossfade on top. */}
          <Picture name="07_braces_on" className="fill-img" />
          {ELASTICS.filter((e) => e.img).map((e) => (
            <Picture
              key={e.id}
              name={e.img}
              className="fill-img"
              style={{ opacity: elastic === e.id ? 1 : 0, transition: 'opacity .35s ease' }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {ELASTICS.map((e) => {
            const on = elastic === e.id
            return (
              <button
                key={e.id}
                type="button"
                onClick={() => setElastic(e.id)}
                aria-label={`สียาง${e.name}`}
                aria-pressed={on}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '3px solid #FFFFFF',
                  boxShadow: 'inset 0 0 0 1px rgba(26,26,26,.15)',
                  background: e.hex,
                  outline: on ? '3px solid #1A1A1A' : '0px solid transparent',
                  outlineOffset: 1,
                  cursor: 'pointer',
                }}
              />
            )
          })}
        </div>
        <span className="soft" style={{ fontSize: 14, textAlign: 'center' }}>
          สียาง: <strong style={{ color: '#1A1A1A' }}>{cur.name}</strong> · คลินิกมี 108 สี
          ถามสีมงคลวันเกิดได้ · ภาพประกอบจาก AI
        </span>
      </div>
    </article>
  )
}

const tagOnDark = {
  position: 'absolute',
  top: 10,
  padding: '2px 10px',
  borderRadius: 999,
  background: 'rgba(26,26,26,.72)',
  color: '#FFFFFF',
  fontSize: 12,
  fontWeight: 600,
} as const

function VeneerCard() {
  const [pos, setPos] = useState(50)
  const vPos = Math.max(0, Math.min(100, pos))

  return (
    <article
      className="span2"
      style={{
        gridColumn: 'span 3',
        borderRadius: 28,
        padding: 36,
        background: '#1A1A1A',
        color: '#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <div
        style={{
          flex: '1 1 340px',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <span
          style={{
            alignSelf: 'flex-start',
            padding: '4px 12px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,.45)',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '.06em',
          }}
        >
          ไม่กรอฟัน · ออกแบบรอยยิ้ม 3 มิติ
        </span>
        <h3 style={{ margin: 0, fontSize: 40, lineHeight: 1.2 }}>วีเนียร์แบบฉีด</h3>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, lineHeight: 1.2 }}>
          <span style={{ fontSize: 15, color: '#CFC6C4' }}>เริ่มต้น</span>
          <span className="price" style={{ fontSize: 48, color: '#FFFFFF' }}>
            4,000.-
          </span>
          <span style={{ fontSize: 15, color: '#CFC6C4' }}>/ซี่</span>
        </div>
        <p style={{ margin: 0, color: '#E4DDDB', fontSize: 18 }}>
          ปรับรอยยิ้มโดยไม่ต้องกรอเนื้อฟัน ดูแบบรอยยิ้ม 3 มิติก่อนลงมือ แก้ได้ทั้งปลายฟันบิ่น
          ฟันห่าง รูปร่างไม่สมส่วน และสีหมอง
        </p>
        <a
          className="btn pill pill-md on-white"
          href={LINE_URL}
          style={{ alignSelf: 'flex-start' }}
        >
          ส่งรูปฟันให้คุณหมอประเมิน
        </a>
      </div>
      <div
        style={{
          flex: '1.3 1 380px',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* Before (03, left) / after (04, right). A transparent range input on top handles mouse, touch and keyboard. */}
        <div
          style={{
            position: 'relative',
            height: 300,
            borderRadius: 18,
            overflow: 'hidden',
            background: '#EFE6E3',
            touchAction: 'pan-y',
          }}
        >
          <Picture name="03_veneer_before" className="fill-img" aria-hidden="true" />
          <div
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, clipPath: `inset(0 0 0 ${vPos}%)` }}
          >
            <Picture name="04_veneer_after" className="fill-img" />
          </div>
          <span aria-hidden="true" style={{ ...tagOnDark, left: 10 }}>
            ก่อน
          </span>
          <span aria-hidden="true" style={{ ...tagOnDark, right: 10 }}>
            หลัง
          </span>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${vPos}%`,
              width: 2,
              marginLeft: -1,
              background: '#FFFFFF',
              boxShadow: '0 0 0 1px rgba(26,26,26,.12)',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: -17,
                top: 'calc(50% - 18px)',
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 4px 12px rgba(26,26,26,.22)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1A1A1A',
              }}
            >
              <SplitArrowsIcon />
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={vPos}
            onChange={(e) => setPos(parseInt(e.target.value, 10) || 0)}
            aria-label="เลื่อนเปรียบเทียบก่อนและหลังทำวีเนียร์"
            aria-valuetext={`แสดงภาพก่อนทำ ${vPos}% · ภาพหลังทำ ${100 - vPos}%`}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              opacity: 0,
              cursor: 'ew-resize',
            }}
          />
        </div>
        <span style={{ fontSize: 13, color: '#CFC6C4', textAlign: 'center' }}>
          ลากเส้นกลางเพื่อเทียบ ก่อน / หลัง · ภาพประกอบจาก AI ไม่ใช่เคสจริง ·
          ราคาต่อซี่เมื่อทำฟันหน้า 8 ซี่
        </span>
      </div>
    </article>
  )
}

const OTHER: { name: string; desc: string; price?: string; todo?: string }[] = [
  {
    name: 'ฟอกสีฟัน Philips ZOOM!',
    desc: 'ขาวขึ้น 5–8 ระดับ ใช้เวลาราว 45 นาที',
    todo: 'price-whitening',
  },
  {
    name: 'รีเทนเนอร์ ใส / ลวด',
    desc: 'เลือกสี ลาย และชื่อบนรีเทนเนอร์ได้',
    todo: 'price-retainer',
  },
  { name: 'ถอน / ผ่าฟันคุด', desc: 'เอกซเรย์ประเมินก่อนทุกเคส', price: 'ถอนเริ่มต้น 1,500.-' },
  { name: 'อุดฟัน · อุดเติมรูปร่าง', desc: 'ปิดช่องฟันห่าง แก้ฟันซี่เล็ก' },
  { name: 'รักษารากฟัน', desc: 'เก็บฟันธรรมชาติไว้ใช้งาน' },
  { name: 'ฟันปลอมถอดได้', desc: 'อะคริลิก โครงโลหะ ทั้งปาก หรือแบบยืดหยุ่น' },
  {
    name: 'ตรวจสุขภาพช่องปาก',
    desc: 'ขูดหินปูน · เอกซเรย์ · ตรวจโรคเหงือก',
    price: 'ตรวจปรึกษาฟรี',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="wrap"
      style={{ padding: '96px 24px 48px', display: 'flex', flexDirection: 'column', gap: 40 }}
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
          <span className="eyebrow">01 — บริการ</span>
          <h2 className="sec-h2">
            บริการเด่น<span className="dim"> ของ Smilist</span>
          </h2>
        </div>
        <p className="soft" style={{ margin: 0, maxWidth: 440 }}>
          ราคาที่แสดงเป็นราคาเริ่มต้น
          แผนการรักษาและค่าใช้จ่ายจริงขึ้นอยู่กับการตรวจและประเมินโดยทันตแพทย์
        </p>
      </div>

      <div
        className="svc-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}
      >
        <AlignerCard />
        <BracesCard />
        <VeneerCard />

        <article className="lift span2" style={{ ...card, gridColumn: 'span 3', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h3 style={{ margin: 0, fontSize: 26 }}>บริการอื่น ๆ</h3>
            <p className="soft" style={{ margin: 0 }}>
              ไม่แน่ใจว่าต้องรักษาอะไร เริ่มจากนัดตรวจสุขภาพช่องปากก่อน ตรวจปรึกษาฟรี
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
              gap: 12,
            }}
          >
            {OTHER.map((s) => (
              <div key={s.name} className="tile">
                <span style={{ fontWeight: 600 }}>{s.name}</span>
                <span className="soft" style={{ fontSize: 14 }}>
                  {s.desc}
                </span>
                {s.todo && (
                  <span className="muted" data-todo={s.todo} style={{ fontSize: 14 }}>
                    [ ราคาเริ่มต้น ]
                  </span>
                )}
                {s.price && (
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#1A1A1A' }}>{s.price}</span>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
      <div
        className="muted"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '8px 24px',
          fontSize: 14,
        }}
      >
        <span>สแกนฟัน 3 มิติ · เอกซเรย์พาโนรามาและ 3 มิติในคลินิก · ออกแบบรอยยิ้มดิจิทัล</span>
        <span>ผลลัพธ์แตกต่างกันในแต่ละบุคคล</span>
      </div>
    </section>
  )
}
