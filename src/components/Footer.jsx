const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Navigasi: [
      { name: 'Beranda', href: '#home' },
      { name: 'Jadwal', href: '#schedule' },
      { name: 'Tentang', href: '#about' },
      { name: 'Tim', href: '#team' },
    ],
    Informasi: [
      { name: 'Galeri', href: '#gallery' },
      { name: 'Lokasi', href: '#location' },
      { name: 'Kontak', href: '#contact' },
    ],
  }

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <i className="bi bi-church text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">GPdI Agape</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md leading-relaxed">
              Melayani Tuhan dengan kasih dan sukacita. Hadir untuk komunitas, terbuka untuk semua. Mari bertumbuh bersama dalam iman.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp text-gray-600 dark:text-gray-400"></i>
              </a>
              <a
                href="https://instagram.com/gpdiagape"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-gray-600 dark:text-gray-400"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-900 dark:text-white font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} GPdI Agape Laut Dendang. All Rights Reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Made with <span className="text-red-500">❤</span> for the Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
