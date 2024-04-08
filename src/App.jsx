import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import AIToolsSection from './components/AIToolsSection'
import AIFeatures from './components/AIFeatures'
import FeaturesShowcaseSection1 from './components/FeaturesShowcaseSection1'
import Reviews from './components/Reviews'
import Testimonial2 from './components/Testimonial2'
import Testimonial3 from './components/Testimonial3'
import FeaturesShowcaseSection2 from './components/FeaturesShowcaseSection2'
import SecurityShowcaseSection from './components/SecurityShowcaseSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import Testimonial1 from './components/Testimonial1'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Testimonial1 />
      <AIToolsSection />
      <AIFeatures />
      <FeaturesShowcaseSection1 />
      <Reviews />
      <Testimonial2 />
      <FeaturesShowcaseSection2 />
      <Testimonial3 />
      <SecurityShowcaseSection />
      <PricingSection />
      <Footer />
    </>
  )
}
export default App
