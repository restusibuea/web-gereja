import { useState } from 'react'

const Gallery = () => {
  const galleryItems = [
    { title: 'Kegiatan Ibadah Raya', image: '/kegiatanibadah.jpg' },
    { title: 'Kegiatan Pemuda Pemudi', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Kegiatan Sekolah Minggu', image: '/kids.jpg' },
    { title: 'Kegiatan Doa Bersama', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Pendalaman Alkitab', image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Latihan Tim Musik', image: '/timmusik.jpg' },
  ]

  const [active, setActive] = useState(0)
  const total = galleryItems.length
  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-4">
            <i className="bi bi-images text-blue-600 dark:text-blue-400"></i>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Dokumentasi</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Galeri Kegiatan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Momen-momen berkesan dalam perjalanan iman bersama
          </p>
        </div>

        {/* Gallery Grid — hover overlay caption */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay — muncul saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption — muncul saat hover */}
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-base leading-tight">
                  {item.title}
                </h3>
                <p className="text-blue-300 text-xs mt-1 font-medium">GPdI Agape Laut Dendang</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi: panah + dots */}
        <div className="flex items-center justify-center gap-6">
          {/* Panah kiri */}
          <button
            onClick={prev}
            aria-label="Sebelumnya"
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
          >
            <i className="bi bi-chevron-left text-sm"></i>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Foto ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === active
                    ? 'w-6 h-2.5 bg-blue-600'
                    : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

          {/* Panah kanan */}
          <button
            onClick={next}
            aria-label="Berikutnya"
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
          >
            <i className="bi bi-chevron-right text-sm"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
