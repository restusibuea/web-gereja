import { useState, useEffect } from 'react'

// ─── TeamCard ────────────────────────────────────────────────────────────────
const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false)
  const [isDark,  setIsDark]  = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'))
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  const overlay = {
    position:   'absolute',
    inset:      0,
    background: isDark
      ? 'linear-gradient(to top, rgba(5,5,15,0.95) 0%, rgba(5,5,15,0.70) 50%, transparent 100%)'
      : 'linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.75) 50%, transparent 100%)',
    opacity:    hovered ? 1 : 0,
    transition: 'opacity 0.32s ease',
    display:    'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding:    '1.2rem',
    pointerEvents: 'none',
  }

  // card: foto area = total height - 64px info bar
  // wrapper div di grid beri height eksplisit, card ambil 100%

  return (
    <div
      style={{ position: 'relative', borderRadius: '1.25rem', width: '100%', height: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
      className="shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Leader badge */}
      {member.isLeader && (
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 30 }}
          className="w-8 h-8 bg-gradient-to-tr from-amber-500 to-amber-400 rounded-full flex items-center justify-center shadow-lg text-white">
          <i className="bi bi-star-fill text-xs"></i>
        </div>
      )}

      {/* Image area — flex-grow mengisi ruang sisa */}
      <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Hover overlay — ayat firman dengan font serif */}
        <div style={overlay}>
          <div className="mb-2">
            <i className={`bi bi-quote text-lg ${isDark ? 'text-amber-400' : 'text-amber-600'}`}></i>
          </div>
          <p style={{
            color: isDark ? '#f1f5f9' : '#0f172a',
            fontSize: '0.78rem',
            fontStyle: 'italic',
            fontFamily: '"Playfair Display", Georgia, serif',
            lineHeight: 1.6,
            marginBottom: '0.5rem',
          }}>
            "{member.verse}"
          </p>
          <span style={{
            color: isDark ? '#fbbf24' : '#b45309',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            — {member.reference}
          </span>
        </div>
      </div>

      {/* Info bar — terpisah di bawah foto, tinggi tetap */}
      <div
        style={{ flexShrink: 0, height: 68 }}
        className="flex flex-col justify-center px-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      >
        <p className="text-gray-900 dark:text-white font-serif font-bold text-base leading-tight truncate">
          {member.name}
        </p>
        <p className="text-amber-700 dark:text-amber-400 font-medium text-xs sm:text-sm mt-0.5 truncate">
          {member.role}
        </p>
      </div>
    </div>
  )
}

// ─── Team section ─────────────────────────────────────────────────────────────
const Team = () => {
  const [showAll, setShowAll] = useState(false)

  const teamMembers = [
    {
      name: 'Pdt. N.Br.Sipahutar', role: 'Gembala Sidang',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
      verse: 'Akulah gembala yang baik. Gembala yang baik memberikan nyawanya bagi domba-dombanya.',
      reference: 'Yohanes 10:11', isLeader: true,
    },
    {
      name: 'Pdt. Yosua Hutabarat', role: 'Gembala Muda Mudi',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
      verse: 'Jangan seorangpun menganggap engkau rendah karena engkau muda.',
      reference: '1 Timotius 4:12', isLeader: true,
    },
    {
      name: 'Pdt. Ribka', role: 'Kepala Diakonia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
      verse: 'Hendaklah kamu saling mengasihi, seperti Aku telah mengasihi kamu.',
      reference: 'Yohanes 15:12', isLeader: true,
    },
    {
      name: 'Satoru Gojo', role: 'Penatua',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
      verse: 'Sebab itu haruslah seorang penilik jemaat tidak bercacat.',
      reference: '1 Timotius 3:2',
    },
    {
      name: 'Maki Zenin', role: 'Pelayanan Wanita',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
      verse: 'Ia membuka mulutnya dengan hikmat, pengajaran tentang kasih setia ada di lidahnya.',
      reference: 'Amsal 31:26',
    },
    {
      name: 'Toge Inumaki', role: 'Pemimpin Pujian',
      image: '/timmusik.jpg',
      verse: 'Nyanyikanlah nyanyian baru bagi TUHAN, sebab Ia telah melakukan perbuatan-perbuatan yang ajaib.',
      reference: 'Mazmur 98:1',
    },
    {
      name: 'Nobara Kugisaki', role: 'Guru Sekolah Minggu',
      image: '/kids.jpg',
      verse: 'Didiklah orang muda menurut jalan yang patut baginya.',
      reference: 'Amsal 22:6',
    },
    {
      name: 'Kento Nanami', role: 'Tim Keamanan',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
      verse: 'TUHAN adalah gembalaku, takkan kekurangan aku.',
      reference: 'Mazmur 23:1-2',
    },
    {
      name: 'Mei Mei', role: 'Bendahara Gereja',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop',
      verse: 'Karena di mana hartamu berada, di situ juga hatimu berada.',
      reference: 'Matius 6:21',
    },
    {
      name: 'Yuta Okkotsu', role: 'Media & Kreatif',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop',
      verse: 'Langit menceritakan kemuliaan Allah, dan cakrawala memberitakan pekerjaan tangan-Nya.',
      reference: 'Mazmur 19:2',
    },
    {
      name: 'Megumi Fushiguro', role: 'Penginjilan',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop',
      verse: 'Karena itu pergilah, jadikanlah semua bangsa murid-Ku.',
      reference: 'Matius 28:19',
    },
    {
      name: 'Yuji Itadori', role: 'Tim Musik',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
      verse: 'Pujilah Dia dengan bunyi nafiri, pujilah Dia dengan gambus dan kecapi!',
      reference: 'Mazmur 150:3',
    },
    {
      name: 'Shoko Ieiri', role: 'Sekretariat',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
      verse: 'Segala sesuatu harus berlangsung dengan sopan dan teratur.',
      reference: '1 Korintus 14:40',
    },
    {
      name: 'Panda', role: 'Koordinator Usaha',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
      verse: 'Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu.',
      reference: 'Kolose 3:23',
    },
    {
      name: 'Utahime Iori', role: 'Pelayanan Diakonia',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
      verse: 'Berbahagialah orang yang murah hatinya, karena mereka akan beroleh kemurahan.',
      reference: 'Matius 5:7',
    },
    {
      name: 'Restu', role: 'Pemuda & Remaja',
      image: '/choso.jpg',
      verse: 'Segala Perkara dapat kutanggung didalam dia yang memberi kekuatan padaku.',
      reference: 'Filipi 4:13',
    },
    {
      name: 'Kasumi Miwa', role: 'Tim Singer',
      image: '/yuki.jpg',
      verse: 'Biarlah terangmu bercahaya di depan orang, supaya mereka melihat perbuatanmu yang baik.',
      reference: 'Matius 5:16',
    },
    {
      name: 'Aoi Todo', role: 'Divisi Perlengkapan',
      image: '/kegiatanibadah.jpg',
      verse: 'Tetapi carilah dahulu Kerajaan Allah dan kebenarannya, maka semuanya itu akan ditambahkan kepadamu.',
      reference: 'Matius 6:33',
    },
  ]

  const displayed = showAll ? teamMembers : teamMembers.slice(0, 6)

  return (
    <section id="team" className="pt-12 pb-24 bg-gray-50/50 dark:bg-gray-900/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <i className="bi bi-people text-amber-600 dark:text-amber-400"></i>
            <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Gembala, Pemimpin & Pelayan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-3">
            Tim Pelayanan Kami
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hamba-hamba Tuhan yang berdedikasi melayani jemaat dengan kasih, ketulusan, dan integritas.
          </p>
        </div>

        {/* Grid seragam 3 kolom — semua card sama tinggi */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayed.map((member, index) => (
            <div key={index} style={{ height: 360 }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Toggle */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            {showAll ? 'Lihat Lebih Sedikit' : 'Lihat Semua Tim'}
            <i className={`bi ${showAll ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team
