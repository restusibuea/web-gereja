import { useState, useEffect } from 'react'

const PHRASES = [
  'Melayani, & Berdampak',
  'Bersekutu, & Bertumbuh',
  'Berdoa, & Dipulihkan',
  'Memuji, & Bersyukur',
]

// Frasa terpanjang — dipakai sebagai "ghost" untuk kunci tinggi container
const LONGEST = PHRASES.reduce((a, b) => (b.length > a.length ? b : a), '')

const useTypewriter = (phrases) => {
  // phase: 'typing' | 'pausing' | 'deleting'
  const [state, setState] = useState({ idx: 0, text: '', phase: 'typing' })

  useEffect(() => {
    const { idx, text, phase } = state
    const current = phrases[idx]

    let delay
    if (phase === 'typing')   delay = 110
    if (phase === 'pausing')  delay = 3000   // jeda 3 detik setelah penuh
    if (phase === 'deleting') delay = 60

    const t = setTimeout(() => {
      if (phase === 'typing') {
        const next = current.slice(0, text.length + 1)
        if (next === current) {
          // selesai mengetik → masuk fase pause
          setState({ idx, text: next, phase: 'pausing' })
        } else {
          setState({ idx, text: next, phase: 'typing' })
        }
      } else if (phase === 'pausing') {
        // selesai jeda → mulai hapus
        setState({ idx, text, phase: 'deleting' })
      } else {
        // deleting
        const next = text.slice(0, -1)
        if (next === '') {
          // selesai hapus → frasa berikutnya
          setState({ idx: (idx + 1) % phrases.length, text: '', phase: 'typing' })
        } else {
          setState({ idx, text: next, phase: 'deleting' })
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [state])

  return state.text
}

const Hero = () => {
  const typed = useTypewriter(PHRASES)

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop"
          alt="Church Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200 text-sm font-medium">Komunitas yang Transformatif</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1 leading-tight text-white">
            Tempat Bertumbuh,
            <span className="block relative text-blue-400">
              {/* Ghost — kunci tinggi container ke frasa terpanjang, tidak terlihat */}
              <span aria-hidden="true" className="invisible select-none">
                {LONGEST}
              </span>
              {/* Teks aktif — ditumpuk di atas ghost via absolute, tapi container sudah punya tinggi */}
              <span className="absolute top-0 left-0 whitespace-nowrap flex items-center">
                <span>{typed}</span>
                <span className="inline-block w-0.5 h-[0.85em] bg-blue-400 ml-1 animate-pulse flex-shrink-0" />
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Komunitas yang memulihkan, menguatkan, dan menyatukan dalam kasih Kristus. Mari menemukan tujuan hidup bersama-sama.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 group"
            >
              Lihat Jadwal Ibadah
              <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              <i className="bi bi-play-circle-fill mr-2"></i>
              Tentang Kami
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Jemaat Aktif</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-300 text-sm">Program Pelayanan</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10 Tahun</div>
              <div className="text-gray-300 text-sm">Melayani Komunitas</div>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Hero
