import { useLanguage } from '../contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()

  const pricingItems = [
    { service: t('pricingCheckup'), price: '300-500' },
    { service: t('pricingScaling'), price: '800-1,500' },
    { service: t('pricingFilling'), price: '500-2,000' },
    { service: t('pricingExtraction'), price: '500-3,000' },
    { service: t('pricingImplant'), price: '40,000+' },
    { service: t('pricingBraces'), price: '30,000+' },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-smilist-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-smilist-gold/10 border border-smilist-gold/20 rounded-full mb-4">
            <svg
              className="w-4 h-4 text-smilist-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-smilist-gold">
              {t('pricingBadge')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-smilist-text mb-4">
            {t('pricingTitle')}
          </h2>
          <p className="text-lg text-smilist-muted">{t('pricingSubtitle')}</p>
        </div>

        <div className="bg-white rounded-3xl border border-smilist-border shadow-xl p-8 md:p-10">
          <div className="space-y-4">
            {pricingItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-smilist-border last:border-0"
              >
                <span className="text-smilist-text font-medium">{item.service}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-smilist-muted">{t('pricingStarting')}</span>
                  <span className="text-lg font-semibold text-smilist-primary">
                    ฿{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-smilist-border">
            <p className="text-sm text-smilist-muted text-center mb-6">
              {t('pricingDisclaimer')}
            </p>
            <button
              onClick={scrollToContact}
              className="w-full px-6 py-3 bg-smilist-primary text-white rounded-xl hover:bg-smilist-primary/90 transition-colors font-semibold"
            >
              {t('pricingConsult')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
