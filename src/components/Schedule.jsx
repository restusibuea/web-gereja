const createGoogleCalendarUrl = (title, details, location, targetDay, hour, minute) => {
  const now = new Date()
  const target = new Date(now)
  const currentDay = now.getDay()
  const daysToAdd = (targetDay - currentDay + 7) % 7 || 7
  target.setDate(now.getDate() + (currentDay === targetDay && now.getHours() < hour ? 0 : daysToAdd))
  target.setHours(hour, minute, 0, 0)
  
  const end = new Date(target)
  end.setHours(target.getHours() + 2)
  
  const formatTime = (d) => d.toISOString().replace(/-|:|\.\d+/g, '')
  const startStr = formatTime(target)
  const endStr = formatTime(end)
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startStr}/${endStr}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`
}

const Schedule = () => {
  const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const todayName = DAYS[new Date().getDay()]
  
  const sundayCalendarUrl = createGoogleCalendarUrl(
    'Ibadah Raya GPdI Agape Laut Dendang',
    'Ibadah utama mingguan jemaat GPdI Agape Laut Dendang. Mari beribadah dan memuji Tuhan bersama keluarga.',
    'GPdI Agape Laut Dendang, Percut Sei Tuan, Deli Serdang',
    0, // Sunday
    10, // 10:00 AM
    0
  )

  const schedules = [
    {
      day: 'Minggu',
      dayIdx: 0,
      name: 'Ibadah Raya',
      time: '10:00 WIB',
      description: 'Ibadah raya utama segenap jemaat. Disediakan kelas Sekolah Minggu untuk anak-anak balita hingga remaja.',
      icon: 'bi-building',
      featured: true,
    },
    {
      day: 'Senin',
      dayIdx: 1,
      name: 'Doa Syafaat',
      time: '17:00 WIB',
      description: 'Persekutuan doa untuk bangsa, gereja, keluarga jemaat, dan pokok-pokok doa khusus.',
      icon: 'bi-stars',
    },
    {
      day: 'Selasa',
      dayIdx: 2,
      name: 'Ibadah Rayon Soferia',
      time: '19:30 WIB',
      description: 'Persekutuan rumah tangga rayon Soferia dalam persekutuan akrab dan pendalaman firman.',
      icon: 'bi-house-heart',
    },
    {
      day: 'Rabu',
      dayIdx: 3,
      name: 'Ibadah Rayon Ekklesia',
      time: '19:30 WIB',
      description: 'Ibadah kelompok sel rayon Ekklesia untuk saling membangun, melayani, dan mendoakan.',
      icon: 'bi-people-fill',
    },
    {
      day: 'Kamis',
      dayIdx: 4,
      name: 'Doa Pelayan',
      time: '19:30 WIB',
      description: 'Penguatan rohani dan doa bersama seluruh pelayan altar, tim musik, dan pekerja gereja.',
      icon: 'bi-person-badge',
    },
    {
      day: 'Jumat',
      dayIdx: 5,
      name: 'Ibadah Anak-Anak',
      time: '16:00 WIB',
      description: 'Sekolah Minggu ceria dengan pujian, cerita firman Alkitab bergambar, dan aktivitas rohani.',
      icon: 'bi-emoji-smile',
    },
    {
      day: 'Sabtu',
      dayIdx: 6,
      name: 'Ibadah Pemuda Pemudi & Remaja',
      time: '19:30 WIB',
      description: 'Worship & Fellowship berenergi tinggi untuk generasi muda agar berakar kuat dalam Kristus.',
      icon: 'bi-lightning-charge',
    },
  ]

  return (
    <section id="schedule" className="py-24 bg-gray-50 dark:bg-gray-900/60 transition-colors duration-300 relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-500/30 rounded-full px-4 py-1.5 mb-4">
            <i className="bi bi-calendar-event text-amber-600 dark:text-amber-400"></i>
            <span className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Waktu Pelayanan & Ibadah
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Jadwal Ibadah Mingguan
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pintu rumah Tuhan selalu terbuka lebar. Mari bersekutu bersama kami dalam setiap sesi ibadah yang penuh urapan dan berkat.
          </p>
        </div>

        {/* Featured Card — Minggu (Ibadah Raya) */}
        <div className="mb-8">
          <div
            className={`relative rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl ${
              todayName === 'Minggu'
                ? 'border-amber-400/80 dark:border-amber-500/60 ring-4 ring-amber-400/20'
                : 'border-amber-200 dark:border-amber-500/30'
            } bg-gradient-to-br from-white via-amber-50/20 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/40`}
          >
            {/* Floating "Hari Ini" badge */}
            {todayName === 'Minggu' && (
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                  Hari Ini
                </span>
              </div>
            )}

            <div className="p-6 sm:p-10">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left info */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-bold text-xs tracking-wider px-3 py-1 rounded-md uppercase">
                      Minggu Pagi
                    </span>
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                      Ibadah Utama
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      • Terbuka untuk Umum
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                    Ibadah Raya GPdI Agape
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 max-w-2xl">
                    Ibadah raya persekutuan seluruh jemaat dengan pujian penyembahan yang khidmat, pemberitaan firman yang berkuasa, dan pelayanan doa. Disertai ibadah Sekolah Minggu untuk anak-anak.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 dark:text-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                      <span className="font-bold text-lg text-gray-900 dark:text-white">10:00 WIB</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <span>Gedung Utama GPdI Agape</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                        <i className="bi bi-person-hearts"></i>
                      </div>
                      <span>Sekolah Minggu Tersedia</span>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <a
                    href={sundayCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-glow-gold text-sm"
                  >
                    <i className="bi bi-calendar-plus text-base"></i>
                    Tambah ke Google Calendar
                  </a>
                  <a
                    href="#location"
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
                  >
                    <i className="bi bi-map text-base text-amber-500"></i>
                    Petunjuk Arah Menuju Gereja
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Schedule Grid (Senin - Sabtu) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {schedules.slice(1).map((schedule, index) => {
            const isToday = schedule.day === todayName
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-300 group cursor-pointer border ${
                  isToday
                    ? 'bg-green-50/50 dark:bg-green-950/20 border-green-500/50 ring-2 ring-green-500/20 shadow-md'
                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800/80 hover:border-amber-400/50 dark:hover:border-amber-500/30 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isToday
                        ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400'
                        : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white'
                    }`}
                  >
                    <i className={`${schedule.icon} text-xl`}></i>
                  </div>
                  <div className="flex items-center gap-2">
                    {isToday && (
                      <span className="flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                        Hari Ini
                      </span>
                    )}
                    <span
                      className={`font-bold text-xs tracking-wider uppercase ${
                        isToday ? 'text-green-700 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {schedule.day}
                    </span>
                  </div>
                </div>

                <h4 className="text-gray-900 dark:text-white font-serif font-bold text-lg mb-2">
                  {schedule.name}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {schedule.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold text-sm">
                    <i className="bi bi-clock"></i>
                    {schedule.time}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 group-hover:text-amber-500 transition-colors">
                    Hadir Bersekutu <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Schedule

