/**
 * Live Google reviews through the Maps JavaScript API (Places API New).
 * Google's terms forbid storing review content, so nothing here is cached or committed.
 */
const PLACE_ID = 'ChIJj02rbe3oXQwRlKDtcAqaty4'
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export const hasReviewsKey = Boolean(API_KEY)
export const REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`

export type Review = {
  rating: number | null
  text: string | null
  relativePublishTimeDescription: string | null
  googleMapsURI?: string | null
  authorAttribution: { displayName: string; uri: string | null; photoURI: string | null } | null
}
export type PlaceReviews = {
  rating: number | null
  count: number | null
  reviews: Review[]
}

type Place = {
  rating?: number | null
  userRatingCount?: number | null
  reviews?: Review[] | null
  fetchFields(o: { fields: string[] }): Promise<unknown>
}
type PlacesLibrary = { Place: new (o: { id: string; requestedLanguage: string }) => Place }
declare global {
  interface Window {
    google?: { maps?: { importLibrary?: (name: 'places') => Promise<PlacesLibrary> } }
    initGoogleMaps?: () => void
    gm_authFailure?: () => void
  }
}

function loadMaps(): Promise<void> {
  if (window.google?.maps?.importLibrary) return Promise.resolve()
  return new Promise((resolve, reject) => {
    window.initGoogleMaps = resolve
    window.gm_authFailure = () => reject(new Error('Google Maps rejected the API key'))
    const s = document.createElement('script')
    const q = new URLSearchParams({
      key: API_KEY ?? '',
      v: 'weekly',
      loading: 'async',
      libraries: 'places',
      language: 'th',
      region: 'TH',
      callback: 'initGoogleMaps',
    })
    s.src = `https://maps.googleapis.com/maps/api/js?${q}`
    s.async = true
    s.onerror = () => reject(new Error('Google Maps script failed to load'))
    document.head.appendChild(s)
  })
}

let request: Promise<PlaceReviews> | undefined

async function load(): Promise<PlaceReviews> {
  await loadMaps()
  const lib = await window.google?.maps?.importLibrary?.('places')
  if (!lib) throw new Error('Google Places library is unavailable')
  const place = new lib.Place({ id: PLACE_ID, requestedLanguage: 'th' })
  await place.fetchFields({ fields: ['rating', 'userRatingCount', 'reviews'] })
  return {
    rating: place.rating ?? null,
    count: place.userRatingCount ?? null,
    reviews: place.reviews ?? [],
  }
}

/** One billed request per page view, even if the component mounts twice. */
export const fetchReviews = () => (request ??= load())
