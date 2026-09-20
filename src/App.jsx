import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import About from './components/About'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
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
