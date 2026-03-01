import { useLanguage } from '../contexts/LanguageContext'

export default function Doctor() {
  const { t } = useLanguage()

  return (
    <section id="doctor" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-accent/10 rounded-full mb-4">
            <span className="text-xl font-semibold text-red-accent uppercase tracking-wide">
              {t('doctorTitle')}
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-sand to-white rounded-3xl border border-sand-light shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Doctor Portrait - Placeholder illustration */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-espresso/20 to-espresso-light/20 rounded-2xl blur-2xl" />
                  <div className="relative w-48 h-48 rounded-2xl border-2 border-sand-light overflow-hidden bg-sand">
                    <img
                      src="/images/petch1.JPG"
                      alt="แพทย์หญิงชนาภรณ์ แพงดี"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Gold accent corner */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-2">
                    {t('doctorName')}
                  </h2>
                  <p className="text-lg text-gray italic">
                    {t('doctorNameEn')}
                  </p>
                  <div className="inline-block mt-2 px-3 py-1 bg-espresso/10 rounded-full">
                    <p className="text-sm font-medium text-espresso">
                      {t('doctorRole')}
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-espresso-light/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-espresso-light" />
                    </div>
                    <p className="text-charcoal">{t('doctorCredential1')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-espresso-light/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-espresso-light" />
                    </div>
                    <p className="text-charcoal">{t('doctorCredential2')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-espresso-light/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-espresso-light" />
                    </div>
                    <p className="text-charcoal">{t('doctorCredential3')}</p>
                  </div>
                </div>

                {/* Statement */}
                <div className="pt-4 border-t border-sand-light">
                  <p className="text-gray italic leading-relaxed">
                    "{t('doctorStatement')}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
