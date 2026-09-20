import { useState, useEffect } from 'react'

const Gallery = () => {
  const galleryItems = [
    {
      title: 'Kegiatan Ibadah Raya',
      category: 'Ibadah Minggu',
      image: '/kegiatanibadah.jpg',
      desc: 'Suasana sukacita dan hadirat Tuhan dalam ibadah raya jemaat GPdI Agape Laut Dendang.',
    },
    {
      title: 'Persekutuan Pemuda Pemudi',
      category: 'Youth & Teens',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop',
      desc: 'Generasi muda yang berakar, bertumbuh, dan berkarya bagi kemuliaan nama Tuhan.',
    },
    {
      title: 'Ibadah Sekolah Minggu',
      category: 'Kids Ministry',
      image: '/kids.jpg',
      desc: 'Anak-anak dididik dan diperkenalkan kepada kasih Kristus sejak usia dini.',
    },
    {
      title: 'Persekutuan Doa Syafaat',
      category: 'Doa Bersama',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop',
      desc: 'Bersehati dalam doa, syafaat, dan permohonan di hadapan hadirat Tuhan.',
    },
    {
      title: 'Pendalaman Alkitab & Firman',
      category: 'Pemuridan',
      image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2000&auto=format&fit=crop',
      desc: 'Menggali kebenaran firman Allah untuk diaplikasikan dalam kehidupan sehari-hari.',
    },
    {
      title: 'Latihan & Pelayanan Tim Musik',
      category: 'Praise & Worship',
      image: '/timmusik.jpg',
      desc: 'Pemusik dan singer mempersembahkan talenta terbaik dalam melayani jemaat.',
    },
  ]

  const [active, setActive] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const total = galleryItems.length

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevLightbox = (e) => {
    e?.stopPropagation()
    setLightboxIndex((i) => (i - 1 + total) % total)
  }

  const nextLightbox = (e) => {
    e?.stopPropagation()
    setLightboxIndex((i) => (i + 1) % total)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
      if (e.key === 'ArrowRight') nextLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <i className="bi bi-images text-amber-600 dark:text-amber-400"></i>
            <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Dokumentasi & Momen
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Galeri Kegiatan Jemaat
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Momen-momen berkesan dalam perjalanan iman, persekutuan yang hangat, dan sukacita melayani bersama di GPdI Agape Laut Dendang.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag di sudut atas */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Zoom icon hint */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="bi bi-arrows-fullscreen text-xs"></i>
              </div>

              {/* Caption di bawah */}
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-serif font-bold text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold mt-2">
                  <span>Klik untuk perbesar</span>
                  <i className="bi bi-arrow-right text-[10px]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Sebelumnya"
            className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-200 shadow-sm"
          >
            <i className="bi bi-chevron-left text-sm"></i>
          </button>

          <div className="flex items-center gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i)
                  openLightbox(i)
                }}
                aria-label={`Foto ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-7 h-2.5 bg-amber-500'
                    : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-amber-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Berikutnya"
            className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-200 shadow-sm"
          >
            <i className="bi bi-chevron-right text-sm"></i>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Tutup"
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <i className="bi bi-x-lg text-lg"></i>
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevLightbox}
            aria-label="Foto Sebelumnya"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <i className="bi bi-chevron-left text-xl"></i>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextLightbox}
            aria-label="Foto Berikutnya"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[72vh] flex items-center justify-center bg-gray-900 border border-white/10">
              <img
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center text-white px-4 max-w-2xl">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block mb-1">
                {galleryItems[lightboxIndex].category} • {lightboxIndex + 1} dari {total}
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl mb-1">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {galleryItems[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
