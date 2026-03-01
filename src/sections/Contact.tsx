import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-smilist-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-smilist-text mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-smilist-muted">{t('contactSubtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Google Map + Address */}
          <div className="space-y-4">
            <div className="aspect-video w-full rounded-2xl border-2 border-smilist-border overflow-hidden bg-smilist-background relative">
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

            <div className="bg-white rounded-2xl border border-smilist-border p-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-smilist-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-smilist-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-smilist-text">{t('locationAddress')}</p>
                  <p className="text-smilist-muted text-sm mt-1">{t('locationAddressDetail')}</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/XfERNpwaopbaTZD97"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-smilist-primary text-white rounded-xl hover:bg-smilist-primary/90 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>{t('locationOpenMap')}</span>
            </a>
          </div>

          {/* Right: Contact Info + Hours */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-smilist-border shadow-xl p-8">
              <h3 className="text-xl font-semibold text-smilist-text mb-5">
                {t('contactInfoTitle')}
              </h3>

              <div className="space-y-3">
                <a
                  href="tel:0811615129"
                  className="flex items-center space-x-4 p-4 bg-smilist-background rounded-xl hover:bg-smilist-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-smilist-primary/10 flex items-center justify-center group-hover:bg-smilist-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-smilist-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-smilist-muted">{t('contactPhone')}</p>
                    <p className="font-semibold text-smilist-text">081-161-5129</p>
                  </div>
                </a>

                <a
                  href="https://line.me/R/ti/p/@smillist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-smilist-background rounded-xl hover:bg-smilist-accent/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-smilist-accent/10 flex items-center justify-center group-hover:bg-smilist-accent/20 transition-colors">
                    <svg className="w-6 h-6 text-smilist-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-smilist-muted">{t('contactLine')}</p>
                    <p className="font-semibold text-smilist-text">@smillist</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/people/%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B9%84%E0%B8%A1%E0%B8%A5%E0%B9%8C%E0%B8%A5%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%8CSmilist/61586336439310/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-smilist-background rounded-xl hover:bg-smilist-secondary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-smilist-secondary/10 flex items-center justify-center group-hover:bg-smilist-secondary/20 transition-colors">
                    <svg className="w-6 h-6 text-smilist-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-smilist-muted">{t('contactFacebook')}</p>
                    <p className="font-semibold text-smilist-text">Smilist Dental Clinic</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-smilist-primary/5 to-smilist-accent/5 rounded-2xl border border-smilist-border p-6">
              <h3 className="font-semibold text-smilist-text mb-3 flex items-center space-x-2">
                <svg className="w-5 h-5 text-smilist-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('heroCardTitle')}</span>
              </h3>
              <div className="space-y-1">
                <p className="text-smilist-text font-medium">{t('heroCardHours')}</p>
                <p className="text-smilist-muted">{t('heroCardSunday')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
