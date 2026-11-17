import Header from './sections/Header'
import Hero from './sections/Hero'
import TrustStrip from './sections/TrustStrip'
import Story from './sections/Story'
import Services from './sections/Services'
import AlignerSteps from './sections/AlignerSteps'
import Xray from './sections/Xray'
import About from './sections/About'
import Booking from './sections/Booking'
import Faq from './sections/Faq'
import { Contact, CtaBand } from './sections/Contact'
import { Footer, FloatingLine } from './sections/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Story />
        <Services />
        <AlignerSteps />
        <Xray />
        <About />
        <Booking />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <FloatingLine />
    </div>
  )
}
