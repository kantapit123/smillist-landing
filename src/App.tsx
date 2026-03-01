import Header from './components/Header'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'
import Hero from './sections/Hero'
import Doctor from './sections/Doctor'
import Services from './sections/Services'
import WhySmilist from './sections/WhySmilist'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

// Color tokens (from src/styles/index.css)
const C = {
  sand: '#D6D0CA',
  espresso: '#7D684F',
  white: '#FDFCFB',
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WaveDivider topColor={C.sand} bottomColor={C.white} />
          <Doctor />
          <WaveDivider topColor={C.white} bottomColor={C.sand} />
          <Services />
          <WaveDivider topColor={C.sand} bottomColor={C.white} />
          <WhySmilist />
          <WaveDivider topColor={C.white} bottomColor={C.sand} />
          <Pricing />
          <WaveDivider topColor={C.sand} bottomColor={C.white} />
          <FAQ />
          <WaveDivider topColor={C.white} bottomColor={C.sand} />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
