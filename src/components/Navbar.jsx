import { useState, useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// SlimePill — satu indikator aktif yang bergerak dengan fisika slime/liquid
//
// Konsep: dua titik (A = ujung awal, B = ujung akhir) bergerak independen.
// - B (ujung tujuan) bergerak CEPAT → terasa seperti "kepala" slime melompat
// - A (ujung asal)   bergerak LAMBAT → tertinggal, meregang, baru menyusul
// - Pill digambar dari min(A,B) ke max(A,B) → terlihat meregang/kontraksi
// - border-radius mengecil proporsional saat meregang → bentuk lonjong organik
//
// Spring: posX += velX; velX = velX * damping + (target - posX) * stiffness
// dibaca dari s.current tiap frame → tidak ada closure stale
// ─────────────────────────────────────────────────────────────────────────────

const NavLinks = ({ links }) => {
  const navRef  = useRef(null)
  const pillRef = useRef(null)
  const rafRef  = useRef(null)
  const s       = useRef({
    // posisi & velocity dua ujung
    ax: 0, av: 0,   // ujung LAMBAT (ekor, tertinggal)
    bx: 0, bv: 0,   // ujung CEPAT (kepala)
    // target masing-masing
    targetA: 0,
    targetB: 0,
    // spring constants — diset tiap moveTo, dibaca tiap tick
    // sehingga perubahan mid-flight langsung efektif
    aK: 0.06, aD: 0.88,   // ekor: stiffness rendah, damping tinggi → lambat & lengket
    bK: 0.18, bD: 0.76,   // kepala: lebih cepat
    visible: false,
    running: false,
  })

  const stopRaf = () => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
  }

  // Gambar pill berdasarkan posisi A dan B saat ini
  const draw = () => {
    const el = pillRef.current
    if (!el) return
    const { ax, bx } = s.current
    const left  = Math.min(ax, bx)
    const right = Math.max(ax, bx)
    const w     = right - left

    // Stretch ratio: 0 = normal, 1+ = sangat meregang
    // referensi lebar "normal" ~55px (rata-rata lebar link)
    const stretch = Math.max(0, (w - 55) / 100)

    // border-radius: makin meregang → makin lonjong (rx besar, ry kecil)
    const rx = Math.min(20, 8 + stretch * 28)   // horizontal membesar
    const ry = Math.max(3,  8 - stretch * 12)   // vertikal mengecil

    el.style.left         = left + 'px'
    el.style.width        = w    + 'px'
    el.style.borderRadius = `${rx}px / ${ry}px`
  }

  const tick = () => {
    const st = s.current

    // Baca spring constants dari s.current tiap frame → tidak ada stale closure
    const fA = (st.targetA - st.ax) * st.aK
    st.av    = st.av * st.aD + fA
    st.ax   += st.av

    const fB = (st.targetB - st.bx) * st.bK
    st.bv    = st.bv * st.bD + fB
    st.bx   += st.bv

    draw()

    // Cek settled
    const eps = 0.12
    if (
      Math.abs(st.ax - st.targetA) < eps && Math.abs(st.av) < eps &&
      Math.abs(st.bx - st.targetB) < eps && Math.abs(st.bv) < eps
    ) {
      st.ax = st.targetA; st.av = 0
      st.bx = st.targetB; st.bv = 0
      draw()
      if (pillRef.current) pillRef.current.style.borderRadius = '8px'
      st.running = false
      rafRef.current = null
      return
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  const moveTo = (el) => {
    const nav = navRef.current
    if (!el || !nav) return

    // prefers-reduced-motion: skip animasi, snap langsung
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const nr      = nav.getBoundingClientRect()
    const r       = el.getBoundingClientRect()
    const newL    = r.left  - nr.left
    const newR    = r.right - nr.left
    const st      = s.current

    // Pertama kali muncul → snap, tidak animasi
    if (!st.visible || reduced) {
      st.ax = st.targetA = newL
      st.bx = st.targetB = newR
      st.av = st.bv = 0
      st.visible = true
      if (pillRef.current) {
        pillRef.current.style.opacity      = '1'
        pillRef.current.style.borderRadius = '8px'
      }
      draw()
      return
    }

    // Hitung jarak center ke center
    const curL   = Math.min(st.ax, st.bx)
    const curR   = Math.max(st.ax, st.bx)
    const dist   = Math.abs((newL + newR) / 2 - (curL + curR) / 2)
    const toRight = newL >= curL

    // A = ujung TETAP/LAMBAT (sisi yang ditinggalkan)
    // B = ujung CEPAT (sisi tujuan)
    // → slime "menarik diri" dari sisi asal, kepala melompat ke tujuan
    st.targetA = toRight ? newL  : newR   // ekor menuju sisi dekat target
    st.targetB = toRight ? newR  : newL   // kepala menuju sisi jauh target

    if (dist < 90) {
      // Bersebelahan — sedikit kenyal, tidak meregang panjang
      // Keduanya bergerak hampir bersamaan, ekor lebih sedikit tertinggal
      st.aK = 0.13; st.aD = 0.78
      st.bK = 0.19; st.bD = 0.74
    } else {
      // Jauh — slime penuh: kepala lari duluan, ekor lengket tertinggal lama
      st.aK = 0.05; st.aD = 0.90
      st.bK = 0.20; st.bD = 0.74
    }

    if (!st.running) {
      st.running = true
      rafRef.current = requestAnimationFrame(tick)
    }
  }

  const hide = () => {
    stopRaf()
    const st = s.current
    st.visible = st.running = false
    st.av = st.bv = 0
    if (pillRef.current) {
      pillRef.current.style.opacity      = '0'
      pillRef.current.style.borderRadius = '8px'
    }
  }

  useEffect(() => () => stopRaf(), [])

  // Warna pill ikut dark mode via CSS variable
  const isDarkNow = () => document.documentElement.classList.contains('dark')

  return (
    <div
      ref={navRef}
      role="list"
      className="relative hidden md:flex items-center space-x-1"
      onMouseLeave={hide}
    >
      {/* Pill slime — dimanipulasi langsung via DOM, 0 React re-render */}
      <span
        ref={pillRef}
        aria-hidden="true"
        style={{
          position:      'absolute',
          top:           4,
          bottom:        4,
          left:          0,
          width:         0,
          opacity:       0,
          borderRadius:  '8px',
          pointerEvents: 'none',
          // transisi hanya opacity — left/width/borderRadius dikontrol RAF
          transition:    'opacity 180ms ease',
        }}
        className="bg-amber-100/80 dark:bg-amber-950/60"
      />

      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          role="listitem"
          className="relative z-10 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-150 font-medium rounded-lg select-none text-sm"
          onMouseEnter={(e) => moveTo(e.currentTarget)}
          onFocus={(e)      => moveTo(e.currentTarget)}   // keyboard nav
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}

// ── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Check saved theme on mount
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Jadwal', href: '#schedule' },
    { name: 'Tentang', href: '#about' },
    { name: 'Tim', href: '#team' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Lokasi', href: '#location' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm'
          : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img
              src="/gpdi.png"
              alt="Logo GPdI Agape"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-xl font-serif font-bold text-gray-900 dark:text-white tracking-wide">GPdI Agape</span>
          </a>

          {/* Desktop Nav — magic hover pill */}
          <NavLinks links={navLinks} />

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'} text-lg text-gray-600 dark:text-gray-300`}></i>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-5 py-2 rounded-xl transition-all shadow-sm hover:shadow-glow-gold text-xs sm:text-sm"
            >
              <i className="bi bi-chat-heart text-xs"></i>
              Layanan Doa
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl text-gray-600 dark:text-gray-300`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:text-amber-600 dark:hover:text-amber-400 rounded-xl transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm shadow-sm"
            >
              <i className="bi bi-chat-heart mr-1.5"></i>
              Layanan Doa & Konseling
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
