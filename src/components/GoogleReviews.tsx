import { useEffect, useRef, useState } from 'react'
import {
  PlaceReviews,
  REVIEWS_URL,
  Review,
  fetchReviews,
  hasReviewsKey,
} from '../lib/googleReviews'
import { ArrowRightIcon } from './icons'

type State = { status: 'loading' | 'failed' } | { status: 'ready'; data: PlaceReviews }

function Stars({ value }: { value: number }) {
  return (
    <span
      role="img"
      aria-label={`${value} จาก 5 ดาว`}
      style={{ color: '#B06000', letterSpacing: 1, lineHeight: 1 }}
    >
      {'★'.repeat(Math.round(value))}
      <span style={{ color: '#DDD0CD' }}>{'★'.repeat(5 - Math.round(value))}</span>
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const { authorAttribution: author, rating, text } = review

  return (
    <article className="review">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {author?.photoURI && (
          <img
            src={author.photoURI}
            alt=""
            width={44}
            height={44}
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{ borderRadius: '50%', flex: '0 0 auto' }}
          />
        )}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {author?.uri ? (
            <a
              href={author.uri}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600, color: '#1A1A1A', overflowWrap: 'anywhere' }}
            >
              {author.displayName}
            </a>
          ) : (
            <span style={{ fontWeight: 600 }}>{author?.displayName}</span>
          )}
          <span className="muted" style={{ fontSize: 14 }}>
            {review.relativePublishTimeDescription}
          </span>
        </div>
      </div>
      {rating != null && <Stars value={rating} />}
      {text && <p className="soft review-text">{text}</p>}
      <a
        className="review-link"
        href={review.googleMapsURI ?? REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`อ่านรีวิวของ ${author?.displayName ?? 'ผู้ใช้ Google'} บน Google Maps`}
      >
        อ่านบน Google Maps
      </a>
    </article>
  )
}

export default function GoogleReviews() {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<State>({ status: hasReviewsKey ? 'loading' : 'failed' })

  // Each load is a billed Places request, so wait until the section is close to view.
  useEffect(() => {
    const el = ref.current
    if (!el || !hasReviewsKey) return
    let alive = true
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        fetchReviews().then(
          (data) => alive && setState({ status: 'ready', data }),
          (err) => {
            console.error('Google reviews:', err)
            if (alive) setState({ status: 'failed' })
          }
        )
      },
      { rootMargin: '400px' }
    )
    io.observe(el)
    return () => {
      alive = false
      io.disconnect()
    }
  }, [])

  const data = state.status === 'ready' ? state.data : null

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h3 style={{ margin: 0, fontSize: 26 }}>รีวิวจริงจากคนไข้</h3>
          {data?.rating != null && (
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
              <span className="price">{data.rating.toFixed(1)}</span>
              <Stars value={data.rating} />
              {data.count != null && <span className="soft">{data.count} รีวิว</span>}
              <span className="gmaps-credit" translate="no">
                Google Maps
              </span>
            </div>
          )}
        </div>
        <a
          className="btn pill on-white"
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            gap: 8,
            minHeight: 44,
            padding: '0 18px',
            border: '1px solid #E5DAD8',
            fontSize: 15,
          }}
        >
          อ่านรีวิวทั้งหมดบน Google Maps
          <ArrowRightIcon />
        </a>
      </div>
      {state.status === 'loading' && (
        <p className="muted" role="status" style={{ margin: 0 }}>
          กำลังโหลดรีวิวจาก Google Maps
        </p>
      )}
      {state.status === 'failed' && (
        <p className="soft" style={{ margin: 0 }}>
          อ่านประสบการณ์จริงของคนไข้ Smilist ได้ที่หน้าคลินิกบน Google Maps
        </p>
      )}
      {data && data.reviews.length > 0 && (
        <>
          <div className="review-cols">
            {data.reviews.map((r, i) => (
              <ReviewCard key={r.authorAttribution?.uri ?? i} review={r} />
            ))}
          </div>
          <p className="muted" style={{ margin: 0, fontSize: 14 }}>
            เรียงตามความเกี่ยวข้องโดย Google · ผลลัพธ์แตกต่างกันในแต่ละบุคคล
          </p>
        </>
      )}
    </div>
  )
}
