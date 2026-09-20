const Schedule = () => {
  const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const todayName = DAYS[new Date().getDay()]
  const schedules = [
    {
      day: 'Minggu',
      name: 'Ibadah Raya',
      time: '10:00 WIB',
      description: 'Ibadah utama jemaat setiap minggu',
      icon: 'bi-building',
      featured: true,
    },
    {
      day: 'Senin',
      name: 'Doa Syafaat',
      time: '17:00 WIB',
      icon: 'bi-stars',
    },
    {
      day: 'Selasa',
      name: 'Ibadah Rayon Soferia',
      time: '19:30 WIB',
      icon: 'bi-people-fill',
    },
    {
      day: 'Rabu',
      name: 'Ibadah Rayon Ekklesia',
      time: '19:30 WIB',
      icon: 'bi-people-fill',
    },
    {
      day: 'Kamis',
      name: 'Doa Pelayan',
      time: '19:30 WIB',
      icon: 'bi-person-badge',
    },
    {
      day: 'Jumat',
      name: 'Ibadah Anak-Anak',
      time: '16:00 WIB',
      icon: 'bi-emoji-smile',
    },
    {
      day: 'Sabtu',
      name: 'Ibadah Pemuda Pemudi & Remaja',
      time: '19:30 WIB',
      icon: 'bi-people',
    },
  ]

  return (
    <section id="schedule" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-4">
            <i className="bi bi-calendar-event text-blue-600 dark:text-blue-400"></i>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Waktu Pelayanan</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Jadwal Ibadah Mingguan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Bergabunglah bersama kami dalam setiap sesi ibadah dan persekutuan yang penuh berkat
          </p>
        </div>

        {/* Featured Card — Minggu */}
        <div className="mb-6">
          <div className={`relative card-minimal rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
            todayName === 'Minggu'
              ? 'border-blue-600 dark:border-blue-500 ring-4 ring-blue-200 dark:ring-blue-900'
              : 'border-blue-600 dark:border-blue-500'
          }`}>

            {/* Floating "Hari Ini" badge — sudut kanan atas */}
            {todayName === 'Minggu' && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  <i className="bi bi-calendar-check text-xs"></i>
                  Hari Ini
                </span>
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-building text-white text-xl sm:text-2xl"></i>
                </div>
                <div className="flex-1 min-w-0">
                  {/* MINGGU + Ibadah Utama sejajar */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest">MINGGU</span>
                    <span className="inline-flex items-center bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                      Ibadah Utama
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Ibadah Raya</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3">Ibadah utama jemaat setiap minggu. Semua kalangan diundang untuk hadir dan beribadah bersama.</p>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <i className="bi bi-clock"></i>
                    <span className="font-semibold">10:00 WIB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedules.slice(1).map((schedule, index) => {
            const isToday = schedule.day === todayName
            return (
            <div
              key={index}
              className={`card-minimal rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${
                isToday ? 'ring-2 ring-green-400 dark:ring-green-600' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  isToday
                    ? 'bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50'
                    : 'bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30'
                }`}>
                  <i className={`${schedule.icon} text-xl ${isToday ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}></i>
                </div>
                <div className="flex items-center gap-2">
                  {isToday && (
                    <span className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 text-xs font-semibold px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block"></span>
                      Hari Ini
                    </span>
                  )}
                  <span className={`font-bold text-sm ${isToday ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                    {schedule.day.toUpperCase()}
                  </span>
                </div>
              </div>

              <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-3">
                {schedule.name}
              </h4>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <i className="bi bi-clock"></i>
                <span className="text-base font-medium">{schedule.time}</span>
              </div>
            </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="#location"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group"
          >
            <i className="bi bi-geo-alt group-hover:scale-110 transition-transform"></i>
            Lihat Lokasi Gereja
          </a>
        </div>
      </div>
    </section>
  )
}

export default Schedule
