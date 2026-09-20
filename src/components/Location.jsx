const Location = () => {
  const mapsUrl = "https://www.google.com/maps?q=3°37'07.9\"N+98°44'12.3\"E"

  return (
    <section id="location" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-4">
            <i className="bi bi-geo-alt text-blue-600 dark:text-blue-400"></i>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Temukan Kami</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Lokasi Gereja
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Kunjungi kami dan rasakan kehangatan persekutuan bersama
          </p>
        </div>

        {/* Layout: Info kiri + Maps kanan */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* Info Panel — kiri */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Alamat */}
            <div className="card-minimal rounded-xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="bi bi-geo-alt-fill text-blue-600 dark:text-blue-400 text-lg"></i>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Alamat</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  GPdI Agape Laut Dendang<br />
                  Percut Sei Tuan, Deli Serdang<br />
                  Sumatera Utara
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  <i className="bi bi-map text-xs"></i>
                  Buka di Maps
                </a>
              </div>
            </div>

            {/* Jadwal Ibadah */}
            <div className="card-minimal rounded-xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="bi bi-clock-fill text-blue-600 dark:text-blue-400 text-lg"></i>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Ibadah Minggu</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Setiap Minggu</p>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mt-0.5">10:00 WIB</p>
              </div>
            </div>

            {/* Kontak */}
            <div className="card-minimal rounded-xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="bi bi-telephone-fill text-blue-600 dark:text-blue-400 text-lg"></i>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Hubungi Kami</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Ada pertanyaan? Kami siap membantu.</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <i className="bi bi-envelope text-xs"></i>
                  Kirim Pesan
                </a>
              </div>
            </div>

          </div>

          {/* Maps — kanan */}
          <div className="lg:col-span-3 card-minimal rounded-xl overflow-hidden shadow-lg min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=3°37'07.9%22N+98°44'12.3%22E&hl=id&z=17&output=embed"
              className="w-full h-full border-0"
              style={{ minHeight: 400 }}
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
