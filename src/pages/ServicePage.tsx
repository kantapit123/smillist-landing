import Picture from '../components/Picture'
import { ArrowRightIcon, ChatIcon, PhoneIcon } from '../components/icons'
import { Block, PRICE_NOTE, SERVICES, ServiceContent } from '../content/services'
import { LINE_URL, TEL_LABEL, TEL_URL } from '../lib/site'
import Faq from '../sections/Faq'
import { CtaBand } from '../sections/Contact'

const readable = { maxWidth: 760 } as const

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case 'p':
      return (
        <p className="soft" style={{ margin: 0 }}>
          {b.text}
        </p>
      )
    case 'list':
      return (
        <ul className="soft" style={{ margin: 0, paddingLeft: 22, display: 'grid', gap: 6 }}>
          {b.items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )
    case 'steps':
      return (
        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
          {b.items.map(([title, desc], i) => (
            <li key={title} className="tile" style={{ flexDirection: 'row', gap: 16 }}>
              <span className="step-num" aria-hidden="true" style={{ fontSize: 24 }}>
                {i + 1}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <strong>{title}</strong>
                <span className="soft" style={{ fontSize: 15 }}>
                  {desc}
                </span>
              </span>
            </li>
          ))}
        </ol>
      )
    case 'table':
      return (
        <div className="table-scroll">
          <table className="svc-table">
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        {c}
                      </th>
                    ) : (
                      <td key={i}>{c}</td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default function ServicePage({ s }: { s: ServiceContent }) {
  const related = SERVICES.filter((o) => o.path !== s.path)

  return (
    <>
      <section className="wrap" style={{ padding: '32px 24px 56px' }}>
        <nav aria-label="breadcrumb" className="muted" style={{ fontSize: 14, marginBottom: 28 }}>
          <a href="/" style={{ color: 'inherit' }}>
            หน้าแรก
          </a>
          <span aria-hidden="true"> › </span>
          <span aria-current="page">{s.name}</span>
        </nav>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center' }}>
          <div
            style={{
              flex: '1 1 420px',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <span className="eyebrow">{s.eyebrow}</span>
            <h1 className="h1" style={{ margin: 0, fontSize: 52, lineHeight: 1.2 }}>
              {s.h1}
            </h1>
            <p className="soft" style={{ margin: 0, fontSize: 19 }}>
              {s.lead}
            </p>
            {s.price && (
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8 }}>
                <span className="muted" style={{ fontSize: 15 }}>
                  {s.price.label}
                </span>
                <span className="price">{s.price.value}.-</span>
                {s.price.unit && <span className="muted">{s.price.unit}</span>}
                <span className="muted" style={{ fontSize: 14, flexBasis: '100%' }}>
                  {s.price.note}
                </span>
              </div>
            )}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a className="btn pill pill-lg on-line" href={LINE_URL} style={{ gap: 10 }}>
                <ChatIcon />
                ปรึกษาฟรีทาง LINE
              </a>
              <a className="btn pill pill-lg on-blush" href={TEL_URL} style={{ gap: 10 }}>
                <PhoneIcon />
                โทร {TEL_LABEL}
              </a>
            </div>
          </div>
          <figure style={{ flex: '1 1 420px', minWidth: 0, margin: 0 }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                borderRadius: 28,
                overflow: 'hidden',
                background: '#F6EFEE',
              }}
            >
              <Picture
                name={s.image.name}
                alt={s.image.alt}
                eager
                className="fill-img"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {s.image.note && <figcaption className="ai-note">{s.image.note}</figcaption>}
          </figure>
        </div>
      </section>

      <article
        className="wrap"
        style={{ padding: '0 24px 40px', display: 'flex', flexDirection: 'column', gap: 48 }}
      >
        {s.sections.map((sec) => (
          <section key={sec.h2} style={{ ...readable, display: 'grid', gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.3 }}>{sec.h2}</h2>
            {sec.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
          </section>
        ))}
        <p className="muted" style={{ ...readable, margin: 0, fontSize: 14 }}>
          {PRICE_NOTE}
        </p>
      </article>

      <Faq items={s.faqs} eyebrow={`คำถามเรื่อง${s.name}`} heading="คำถามที่พบบ่อย" />

      <section className="wrap" style={{ padding: '0 24px 72px', display: 'grid', gap: 16 }}>
        <h2 style={{ margin: 0, fontSize: 26 }}>บริการอื่นที่ Smilist</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
            gap: 12,
          }}
        >
          {related.map((o) => (
            <a
              key={o.path}
              href={o.path}
              className="tile lift"
              style={{ textDecoration: 'none', color: '#1A1A1A' }}
            >
              <strong style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {o.name}
                <ArrowRightIcon />
              </strong>
              <span className="soft" style={{ fontSize: 14 }}>
                {o.lead}
              </span>
            </a>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
