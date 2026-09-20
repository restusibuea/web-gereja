import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VerseBanner from './components/VerseBanner'
import Schedule from './components/Schedule'
import About from './components/About'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <VerseBanner />
      <Schedule />
      <About />
      <Team />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
