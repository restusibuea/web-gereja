import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Terima kasih! Pesan Anda telah diterima.')
    setFormData({ name: '', contact: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-4">
            <i className="bi bi-envelope text-blue-600 dark:text-blue-400"></i>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Hubungi Kami</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Kirimkan Pesan atau Permohonan Doa
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Kami siap mendengar dan mendoakan Anda. Jangan ragu untuk berbagi
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-minimal rounded-xl p-8 space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-900 dark:text-white font-semibold mb-2">
              Nama Lengkap
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
                placeholder="Masukkan nama Anda"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Contact Input */}
          <div>
            <label htmlFor="contact" className="block text-gray-900 dark:text-white font-semibold mb-2">
              Email / No. WhatsApp
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="bi bi-envelope text-gray-400"></i>
              </div>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder="Email atau nomor WhatsApp Anda"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-gray-900 dark:text-white font-semibold mb-2">
              Pesan / Pokok Doa
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
                placeholder="Tuliskan pesan atau pokok doa Anda di sini..."
                className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <i className="bi bi-send"></i>
            Kirim Pesan
          </button>
        </form>

        {/* Alternative Contact */}
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Atau hubungi kami melalui:</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp text-green-600 dark:text-green-400 text-xl"></i>
            </a>
            <a
              href="https://instagram.com/gpdiagape"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 border border-pink-300 dark:border-pink-700 rounded-lg flex items-center justify-center hover:bg-pink-200 dark:hover:bg-pink-900/30 transition-colors"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram text-pink-600 dark:text-pink-400 text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
