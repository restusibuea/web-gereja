const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Pelayanan: [
      { name: 'Beranda', href: '#home' },
      { name: 'Jadwal Ibadah', href: '#schedule' },
      { name: 'Tentang GPdI Agape', href: '#about' },
      { name: 'Tim Pelayan', href: '#team' },
    ],
    Informasi: [
      { name: 'Galeri Jemaat', href: '#gallery' },
      { name: 'Lokasi & Rute', href: '#location' },
      { name: 'Permohonan Doa', href: '#contact' },
    ],
  }

  return (
    <footer className="relative bg-gray-950 text-gray-300 border-t border-gray-800 transition-colors duration-300">
      {/* Top golden accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-3 group mb-4">
              <img
                src="/gpdi.png"
                alt="Logo GPdI Agape"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                GPdI Agape
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Gereja Pentakosta di Indonesia — Jemaat Agape Laut Dendang. Komunitas yang memulihkan, menguatkan, dan melayani dengan kasih Kristus. Pintu rumah Tuhan selalu terbuka untuk Anda.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all text-gray-300"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com/gpdiagape"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all text-gray-300"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#location"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all text-gray-300"
                aria-label="Google Maps"
              >
                <i className="bi bi-geo-alt"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-1.5"
                    >
                      <i className="bi bi-chevron-right text-[10px] text-amber-500/70"></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} GPdI Agape Laut Dendang. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p className="flex items-center gap-1">
            Melayani untuk kemuliaan Kerajaan Allah <span className="text-amber-500">✨</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
