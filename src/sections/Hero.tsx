import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'url(/images/placeholder4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-smilist-secondary/10 via-transparent to-smilist-accent/5" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero content */}
          <div className="space-y-8">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-smilist-text leading-relaxed">
              <span className="block">{t('heroTitleLine1')}</span>
              <span className="block mt-4">{t('heroTitleLine2')}</span>
            </h1>

            <p className="text-lg text-smilist-muted max-w-xl leading-[1.85]">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-smilist-primary text-white rounded-2xl hover:bg-smilist-primary/90 transition-all font-semibold shadow-xl shadow-smilist-primary/20 hover:shadow-2xl hover:shadow-smilist-primary/30 hover:-translate-y-0.5"
              >
                {t('heroCtaBook')}
              </button>
              <a
                href="tel:0833457812"
                className="px-8 py-4 bg-white text-smilist-primary rounded-2xl hover:bg-gray-50 transition-colors font-semibold border-2 border-smilist-primary text-center"
              >
                {t('heroCtaCall')}
              </a>
            </div>

            {/* Trust indicators */}
            {/* <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-smilist-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-smilist-text">
                  5.0
                </span>
              </div>
              <div className="w-px h-4 bg-smilist-border" />
              <span className="text-sm text-smilist-muted">
                {t('heroCardBadge')}
              </span>
            </div> */}
          </div>

          {/* Right: Premium card */}
          <div className="lg:ml-auto">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-smilist-primary/20 to-smilist-accent/20 rounded-3xl blur-2xl" />

              <div className="relative bg-white rounded-2xl shadow-2xl border border-smilist-border p-8 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-smilist-accent/10 rounded-full">
                  <svg
                    className="w-4 h-4 text-smilist-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs font-semibold text-smilist-accent">
                    {t('heroCardBadge')}
                  </span>
                </div>

                {/* Opening hours */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-smilist-text flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-smilist-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{t('heroCardTitle')}</span>
                  </h3>
                  <p className="text-smilist-text font-medium">
                    {t('heroCardHours')}
                  </p>
                  <p className="text-smilist-muted text-sm">
                    {t('heroCardSunday')}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-smilist-border to-transparent" />

                {/* Quick contact */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-smilist-muted uppercase tracking-wide">
                    {t('heroCardQuickContact')}
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="tel:0833457812"
                      className="flex items-center space-x-3 p-3 bg-smilist-background rounded-xl hover:bg-smilist-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-smilist-primary/10 flex items-center justify-center group-hover:bg-smilist-primary/20 transition-colors">
                        <svg
                          className="w-5 h-5 text-smilist-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold text-smilist-text">
                        083-345-7812
                      </span>
                    </a>
                    <a
                      href="https://line.me/R/ti/p/@smillist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-smilist-background rounded-xl hover:bg-smilist-accent/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-smilist-accent/10 flex items-center justify-center group-hover:bg-smilist-accent/20 transition-colors">
                        <svg
                          className="w-5 h-5 text-smilist-accent"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                      </div>
                      <span className="font-semibold text-smilist-text">
                        @smillist
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
