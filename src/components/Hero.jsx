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

const getNextSundayService = () => {
  const now = new Date()
  const target = new Date(now)
  const day = now.getDay() // 0 = Sunday
  const hour = now.getHours()

  if (day === 0 && hour < 10) {
    target.setHours(10, 0, 0, 0)
  } else if (day === 0 && hour >= 10 && hour < 12) {
    return { isOngoing: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  } else {
    const daysUntilSunday = (7 - day) % 7 || 7
    target.setDate(now.getDate() + daysUntilSunday)
    target.setHours(10, 0, 0, 0)
  }

  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { isOngoing: false, days, hours, minutes, seconds }
}

const Hero = () => {
  const typed = useTypewriter(PHRASES)
  const [countdown, setCountdown] = useState(getNextSundayService())

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getNextSundayService())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2400&auto=format&fit=crop"
          alt="Church Background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Deep cinematic overlay with warm tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-950/80 to-blue-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline Side */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-white/10 backdrop-blur-md border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-amber-200 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Gereja Pentakosta di Indonesia
              </span>
            </div>

            {/* Headline with Playfair Display Serif */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-[1.15] text-white">
              Tempat Bertumbuh,
              <span className="block relative text-gradient-gold">
                {/* Ghost — kunci tinggi container ke frasa terpanjang, tidak terlihat */}
                <span aria-hidden="true" className="invisible select-none">
                  {LONGEST}
                </span>
                {/* Teks aktif */}
                <span className="absolute top-0 left-0 whitespace-nowrap flex items-center text-amber-300">
                  <span>{typed}</span>
                  <span className="inline-block w-0.5 h-[0.85em] bg-amber-400 ml-1.5 animate-pulse flex-shrink-0" />
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Komunitas yang memulihkan, menguatkan, dan menyatukan dalam kasih Kristus. Mari bersekutu dan menemukan tujuan hidup yang sejati bersama kami di Laut Dendang.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#schedule"
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-600/25 hover:shadow-glow-gold group"
              >
                <i className="bi bi-calendar-check mr-2"></i>
                Lihat Jadwal Ibadah
                <i className="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300"
              >
                <i className="bi bi-chat-heart mr-2 text-amber-300"></i>
                Permohonan Doa
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">500+</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-0.5">Jiwa Bertumbuh</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-white">7 Sesi</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-0.5">Ibadah Sepekan</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">10+ Thn</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-0.5">Melayani Komunitas</div>
              </div>
            </div>
          </div>

          {/* Right Floating Countdown & Worship Card */}
          <div className="lg:col-span-5">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <i className="bi bi-broadcast text-lg"></i>
                  </div>
                  <div>
                    <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                      Ibadah Berikutnya
                    </span>
                    <h2 className="text-white font-bold text-lg leading-tight">
                      Ibadah Raya Minggu
                    </h2>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium">
                  10:00 WIB
                </span>
              </div>

              {/* Countdown Display */}
              {countdown.isOngoing ? (
                <div className="p-5 rounded-xl bg-green-950/40 border border-green-500/30 text-center mb-6">
                  <div className="inline-flex items-center gap-2 text-green-400 font-semibold mb-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                    Sedang Berlangsung
                  </div>
                  <p className="text-xs text-gray-300">
                    Ibadah Raya sedang berlangsung sekarang. Pintu rumah Tuhan selalu terbuka untuk Anda!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mb-6 text-center">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="block text-2xl sm:text-3xl font-bold font-serif text-white">
                      {countdown.days}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Hari
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="block text-2xl sm:text-3xl font-bold font-serif text-white">
                      {countdown.hours}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Jam
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="block text-2xl sm:text-3xl font-bold font-serif text-white">
                      {countdown.minutes}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Menit
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <span className="block text-2xl sm:text-3xl font-bold font-serif text-amber-400">
                      {countdown.seconds}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                      Detik
                    </span>
                  </div>
                </div>
              )}

              {/* Service Info Snippet */}
              <div className="space-y-2.5 text-xs sm:text-sm text-gray-300 mb-6 bg-white/5 rounded-xl p-3.5 border border-white/5">
                <div className="flex items-center gap-2.5">
                  <i className="bi bi-geo-alt text-amber-400"></i>
                  <span>Laut Dendang, Percut Sei Tuan, Deli Serdang</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="bi bi-people text-blue-400"></i>
                  <span>Tersedia Sekolah Minggu untuk Anak-anak</span>
                </div>
              </div>

              {/* Action */}
              <a
                href="#schedule"
                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl transition-colors text-sm border border-white/15"
              >
                <i className="bi bi-calendar3"></i>
                Jadwal Lengkap Sepekan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
