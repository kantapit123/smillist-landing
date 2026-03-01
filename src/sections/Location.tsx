import { useLanguage } from '../contexts/LanguageContext'

export default function Location() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {t('locationTitle')}
          </h2>
          <p className="text-lg text-gray">{t('locationSubtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border-2 border-sand-light overflow-hidden bg-sand relative">
              <iframe
                title="Smilist Dental Clinic - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.9212714148485!2d104.7748523!3d17.3940142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313c0f000781c2b9%3A0xe6c70c9e68f39a76!2zU21pbGlzdCBDbGluaWMg4Liq4LmE4Lih4Lil4Li04Liq4LiV4LmM4LiE4Lil4Li04LiZ4Li04LiB!5e0!3m2!1sth!2sth!4v1772350335501!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/XfERNpwaopbaTZD97"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-espresso text-white rounded-xl hover:bg-espresso/90 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>{t('locationOpenMap')}</span>
            </a>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-sand rounded-2xl border border-sand-light p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-espresso/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-espresso"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">
                    {t('locationAddress')}
                  </h3>
                  <p className="text-gray text-sm">{t('locationAddressDetail')}</p>
                </div>
              </div>
            </div>

            <div className="bg-sand rounded-2xl border border-sand-light p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-espresso-light/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-espresso-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">
                    {t('locationParking')}
                  </h3>
                  <p className="text-gray text-sm">{t('locationLandmark')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-espresso/5 to-espresso-light/5 rounded-2xl border border-sand-light p-6">
              <h3 className="font-semibold text-charcoal mb-3">
                {t('heroCardTitle')}
              </h3>
              <div className="space-y-2">
                <p className="text-charcoal font-medium">{t('heroCardHours')}</p>
                <p className="text-gray">{t('heroCardSunday')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
