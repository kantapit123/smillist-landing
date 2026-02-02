import { useLanguage } from '../contexts/LanguageContext'

export default function Reviews() {
  const { t } = useLanguage()

  const reviews = [
    {
      name: t('review1Name'),
      text: t('review1Text'),
      rating: 5,
    },
    {
      name: t('review2Name'),
      text: t('review2Text'),
      rating: 5,
    },
    {
      name: t('review3Name'),
      text: t('review3Text'),
      rating: 5,
    },
  ]

  const StarIcon = () => (
    <svg className="w-5 h-5 text-smilist-gold fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-smilist-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-smilist-text mb-4">
            {t('reviewsTitle')}
          </h2>
          <p className="text-lg text-smilist-muted">{t('reviewsSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-smilist-border shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-smilist-text leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-smilist-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-smilist-primary to-smilist-accent flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(review.name.indexOf('.') + 2 || 2)}
                </div>
                <div>
                  <p className="font-semibold text-smilist-text">{review.name}</p>
                  <p className="text-sm text-smilist-muted">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
