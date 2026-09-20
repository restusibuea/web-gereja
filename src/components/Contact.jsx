import { useState } from 'react'

const CATEGORIES = [
  { id: 'keluarga', label: 'Keluarga & Pernikahan', icon: 'bi-house-heart' },
  { id: 'kesehatan', label: 'Pemulihan Kesehatan', icon: 'bi-heart-pulse' },
  { id: 'pekerjaan', label: 'Pekerjaan & Usaha', icon: 'bi-briefcase' },
  { id: 'rohani', label: 'Pertumbuhan Rohani', icon: 'bi-stars' },
  { id: 'syukur', label: 'Ucapan Syukur', icon: 'bi-emoji-smile' },
  { id: 'lainnya', label: 'Pokok Doa Lainnya', icon: 'bi-chat-left-dots' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: 'keluarga',
    isConfidential: false,
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedCategory = CATEGORIES.find((c) => c.id === formData.category)?.label || 'Umum'
    const sifat = formData.isConfidential
      ? 'Rahasia (Hanya Gembala Sidang & Tim Pendoa Inti)'
      : 'Umum (Dapat dibagikan di persekutuan doa)'

    const waMessage = 
`*PERMOHONAN DOA — GPdI AGAPE LAUT DENDANG*
━━━━━━━━━━━━━━━━━━━━
👤 *Nama:* ${formData.name}
📱 *Kontak:* ${formData.contact}
🏷️ *Kategori:* ${selectedCategory}
🔒 *Sifat Doa:* ${sifat}

📜 *Pokok Doa:*
"${formData.message}"
━━━━━━━━━━━━━━━━━━━━
_Mohon dukungan doa dan penguatan dari tim pastoral GPdI Agape. Terima kasih, Tuhan Yesus memberkati._`

    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`
    
    // Open WhatsApp
    window.open(waUrl, '_blank')
    setSubmitted(true)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const resetForm = () => {
    setFormData({
      name: '',
      contact: '',
      category: 'keluarga',
      isConfidential: false,
      message: '',
    })
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-900/40 transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <i className="bi bi-chat-heart text-amber-600 dark:text-amber-400"></i>
            <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Layanan Doa & Konseling Jemaat
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Kirimkan Permohonan Doa Anda
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tidak ada beban yang terlalu berat jika dipikul bersama di hadapan Tuhan. Gembala dan tim doa kami rindu mendoakan dan mendampingi pergumulan Anda.
          </p>
        </div>

        {/* Confirmation Banner if submitted */}
        {submitted && (
          <div className="mb-8 p-6 rounded-2xl bg-green-50 dark:bg-green-950/40 border border-green-300 dark:border-green-600 text-green-800 dark:text-green-300 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                <i className="bi bi-check-lg text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-lg mb-1">
                  Pesan Permohonan Doa Berhasil Diteruskan!
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed mb-4 text-green-700 dark:text-green-400">
                  Pesan Anda telah dibuka di WhatsApp resmi GPdI Agape Laut Dendang. Tim pendoa kami akan membawa pokok doa Anda dalam persekutuan doa syafaat.
                </p>
                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline hover:text-green-900 dark:hover:text-green-200"
                >
                  <i className="bi bi-arrow-repeat"></i>
                  Kirim Permohonan Doa Lain
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-7"
        >
          {/* Category Selector */}
          <div>
            <label className="block text-gray-900 dark:text-white font-serif font-bold text-base mb-3">
              1. Pilih Kategori Pokok Doa
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = formData.category === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: cat.id })}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 text-left ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-amber-800 dark:text-amber-300 ring-2 ring-amber-500/20'
                        : 'bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400/50'
                    }`}
                  >
                    <i className={`bi ${cat.icon} text-base ${isSelected ? 'text-amber-600 dark:text-amber-400' : 'text-gray-400'}`}></i>
                    <span className="truncate">{cat.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Name & Contact (2 Cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium text-sm mb-2">
                Nama Lengkap Anda <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="bi bi-person text-gray-400"></i>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: Samuel Hutapea"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-all"
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-gray-900 dark:text-white font-medium text-sm mb-2">
                Nomor WhatsApp / HP <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="bi bi-whatsapp text-gray-400"></i>
                </div>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: 0812-3456-7890"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-all"
                />
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-gray-900 dark:text-white font-medium text-sm mb-2">
              Tuliskan Pokok Doa atau Cerita Pergumulan Anda <span className="text-amber-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none">
                <i className="bi bi-chat-left-text text-gray-400"></i>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Bagikan apa yang sedang Anda gumulkan, alami, atau syukurkan kepada Tuhan..."
                className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-all resize-none leading-relaxed"
              ></textarea>
            </div>
          </div>

          {/* Confidentiality Checkbox */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-500/20">
            <input
              type="checkbox"
              id="isConfidential"
              name="isConfidential"
              checked={formData.isConfidential}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500"
            />
            <label htmlFor="isConfidential" className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed cursor-pointer select-none">
              <span className="font-bold text-gray-900 dark:text-white block">
                Jaga Kerahasiaan Permohonan Doa
              </span>
              Centang pilihan ini jika Anda ingin pokok doa ini hanya diketahui secara pribadi oleh Gembala Sidang dan Tim Pendoa Khusus.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-glow-gold flex items-center justify-center gap-2 text-base"
          >
            <i className="bi bi-whatsapp text-lg"></i>
            Kirim Permohonan Doa ke WhatsApp Tim Pelayanan
          </button>
        </form>

        {/* Pastoral Hotline Info */}
        <div className="text-center mt-10">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Atau hubungi sekretariat & media sosial resmi kami:
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 dark:bg-green-950/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-sm font-semibold"
            >
              <i className="bi bi-whatsapp text-lg"></i>
              WhatsApp Gembala
            </a>
            <a
              href="https://instagram.com/gpdiagape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-50 dark:bg-pink-950/30 border border-pink-300 dark:border-pink-700 text-pink-700 dark:text-pink-400 rounded-xl hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-colors text-sm font-semibold"
            >
              <i className="bi bi-instagram text-lg"></i>
              Instagram @gpdiagape
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

