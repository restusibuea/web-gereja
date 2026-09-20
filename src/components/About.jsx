const About = () => {
  const values = [
    {
      icon: 'bi-heart-fill',
      title: 'Kasih Tanpa Syarat (Agape)',
      description: 'Mewujudkan kasih Kristus yang rela berkorban, tulus, dan merangkul setiap jiwa tanpa membeda-bedakan.',
    },
    {
      icon: 'bi-compass-fill',
      title: 'Visi Transformatif',
      description: 'Menjadi tiang penopang dan dasar kebenaran yang membawa transformasi rohani bagi masyarakat Laut Dendang.',
    },
    {
      icon: 'bi-people-fill',
      title: 'Keluarga & Komunitas Hangat',
      description: 'Membangun rumah rohani di mana setiap generasi merasa diterima, didengar, dikuatkan, dan bertumbuh bersama.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -left-20 top-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000&auto=format&fit=crop"
                  alt="GPdI Agape Community"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
                
                {/* Image caption inside */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                    Gereja Pentakosta di Indonesia
                  </span>
                  <p className="font-serif italic text-lg sm:text-xl text-gray-100">
                    "Satu hati, satu jiwa, dan satu tujuan dalam memuliakan nama-Nya."
                  </p>
                </div>
              </div>

              {/* Floating Asymmetric Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-2xl shadow-xl shadow-amber-600/30 max-w-[220px] border border-amber-300/40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <i className="bi bi-shield-check text-xl"></i>
                  </div>
                  <span className="text-2xl font-serif font-bold">10+ Thn</span>
                </div>
                <p className="text-xs text-amber-100 font-medium leading-relaxed">
                  Setia melayani dan menjadi garam serta terang di Laut Dendang.
                </p>
              </div>
            </div>
          </div>

          {/* Content Side (Right) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
              <i className="bi bi-book-half text-amber-600 dark:text-amber-400"></i>
              <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Tentang GPdI Agape
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Gereja yang Hidup, Memulihkan, & Mengasihi
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Gereja kami berdiri bukan sekadar sebagai bangunan tempat ibadah, melainkan sebagai sebuah keluarga rohani yang hidup. Kami rindu melihat setiap pribadi mengalami perjumpaan pribadi dengan Tuhan Yesus Kristus dan hidup dalam kepenuhan Roh Kudus.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Di GPdI Agape Laut Dendang, setiap orang berharga di mata Tuhan. Kami menyambut Anda dengan kehangatan persaudaraan untuk berakar, bertumbuh, dan menghasilkan buah bagi Kerajaan Allah.
            </p>

            {/* Values Accordion/List */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/80 hover:border-amber-400/50 dark:hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <i className={`${value.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-serif font-bold text-base sm:text-lg mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#team"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-glow-gold text-sm"
              >
                <i className="bi bi-people"></i>
                Kenali Tim Pelayan Kami
              </a>
              <a
                href="#location"
                className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                <i className="bi bi-geo-alt"></i>
                Kunjungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

