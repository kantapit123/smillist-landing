import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-smilist-primary to-smilist-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="font-semibold text-lg text-smilist-primary">
              Smilist
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-smilist-text hover:text-smilist-primary transition-colors"
            >
              {t('headerServices')}
            </button>
            <button
              onClick={() => scrollToSection('doctor')}
              className="text-smilist-text hover:text-smilist-primary transition-colors"
            >
              {t('headerDoctor')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-smilist-text hover:text-smilist-primary transition-colors"
            >
              {t('headerPricing')}
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-smilist-text hover:text-smilist-primary transition-colors"
            >
              {t('headerReviews')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-smilist-text hover:text-smilist-primary transition-colors"
            >
              {t('headerContact')}
            </button>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-1 bg-smilist-surface rounded-full p-1 border border-smilist-border">
              <button
                onClick={() => setLanguage('th')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === 'th'
                    ? 'bg-smilist-primary text-white'
                    : 'text-smilist-muted hover:text-smilist-text'
                }`}
              >
                TH
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-smilist-primary text-white'
                    : 'text-smilist-muted hover:text-smilist-text'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2.5 bg-smilist-primary text-white rounded-xl hover:bg-smilist-primary/90 transition-colors font-medium shadow-lg shadow-smilist-primary/20"
            >
              {t('headerBooking')}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-smilist-surface transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-smilist-border">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-smilist-text hover:bg-smilist-surface rounded-lg transition-colors"
            >
              {t('headerServices')}
            </button>
            <button
              onClick={() => scrollToSection('doctor')}
              className="block w-full text-left px-4 py-2 text-smilist-text hover:bg-smilist-surface rounded-lg transition-colors"
            >
              {t('headerDoctor')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-smilist-text hover:bg-smilist-surface rounded-lg transition-colors"
            >
              {t('headerPricing')}
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left px-4 py-2 text-smilist-text hover:bg-smilist-surface rounded-lg transition-colors"
            >
              {t('headerReviews')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-smilist-text hover:bg-smilist-surface rounded-lg transition-colors"
            >
              {t('headerContact')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-4 py-2.5 bg-smilist-primary text-white rounded-xl hover:bg-smilist-primary/90 transition-colors font-medium mt-4"
            >
              {t('headerBooking')}
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
