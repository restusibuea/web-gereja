const Location = () => {
  const mapsUrl = "https://www.google.com/maps?q=3°37'07.9\"N+98°44'12.3\"E"
  const dirUrl = "https://www.google.com/maps/dir/?api=1&destination=3.618861,98.736750"

  return (
    <section id="location" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <i className="bi bi-geo-alt text-amber-600 dark:text-amber-400"></i>
            <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Kunjungi Rumah Tuhan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Lokasi Gereja GPdI Agape
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pintu gereja kami selalu terbuka menyambut kehadiran Anda dan keluarga. Mari bersekutu dalam kehangatan kasih persaudaraan Kristus.
          </p>
        </div>

        {/* Layout: Info kiri + Maps kanan */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Info Panel — kiri */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Alamat */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 transition-colors">
              <div className="w-12 h-12 bg-amber-500/15 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-geo-alt-fill text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 dark:text-white font-serif font-bold text-lg mb-1">
                  Alamat Ibadah
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Gereja GPdI Agape Laut Dendang<br />
                  Kec. Percut Sei Tuan, Kab. Deli Serdang<br />
                  Sumatera Utara
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={dirUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm"
                  >
                    <i className="bi bi-sign-turn-right-fill"></i>
                    Petunjuk Arah Rute
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                  >
                    <i className="bi bi-map"></i>
                    Buka Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Jadwal Ibadah Utama */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 transition-colors">
              <div className="w-12 h-12 bg-blue-500/15 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-clock-fill text-xl"></i>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-serif font-bold text-lg mb-1">
                  Ibadah Raya Mingguan
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Setiap Hari Minggu Pagi
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-amber-700 dark:text-amber-400 font-serif font-bold text-xl">
                    10:00 WIB
                  </span>
                  <span className="text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded font-semibold">
                    Ibadah Umum
                  </span>
                </div>
              </div>
            </div>

            {/* Layanan Konseling & Doa */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/40 transition-colors">
              <div className="w-12 h-12 bg-green-500/15 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="bi bi-telephone-fill text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 dark:text-white font-serif font-bold text-lg mb-1">
                  Pusat Informasi & Pastoral
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                  Perlu informasi jadwal, katekisasi, baptisan air, atau permohonan kunjungan?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-800 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  <i className="bi bi-chat-heart text-amber-400"></i>
                  Layanan Permohonan Doa
                </a>
              </div>
            </div>

          </div>

          {/* Maps — kanan */}
          <div className="lg:col-span-7 bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 min-h-[440px] relative">
            <iframe
              src="https://maps.google.com/maps?q=3°37'07.9%22N+98°44'12.3%22E&hl=id&z=17&output=embed"
              className="w-full h-full min-h-[440px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi GPdI Agape Laut Dendang"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
