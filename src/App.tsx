import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Doctor from './sections/Doctor'
import Services from './sections/Services'
import WhySmilist from './sections/WhySmilist'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Doctor />
          <Services />
          <WhySmilist />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
