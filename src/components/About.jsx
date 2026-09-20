const About = () => {
  const values = [
    {
      icon: 'bi-heart',
      title: 'Kasih',
      description: 'Mewujudkan kasih Kristus dalam setiap tindakan dan pelayanan',
    },
    {
      icon: 'bi-bullseye',
      title: 'Visi',
      description: 'Menjadi gereja yang transformatif dan berdampak bagi komunitas',
    },
    {
      icon: 'bi-people',
      title: 'Komunitas',
      description: 'Membangun keluarga rohani yang saling mendukung dan menguatkan',
    },
  ]

  return (
    <section id="about" className="pt-16 pb-10 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000&auto=format&fit=crop"
                alt="GPdI Agape Community"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Tentang Kami</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Visi & Misi GPdI Agape
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              Gereja kami berdiri dengan kerinduan untuk menjadi terang bagi komunitas ini. Kami percaya bahwa gereja bukan hanya gedung, melainkan sekumpulan orang yang hidupnya diubahkan oleh kasih Kristus.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Kami mengundang Anda untuk bergabung dalam persekutuan dan ibadah bersama. Mari bertumbuh, melayani, dan berdampak sebagai satu keluarga Allah.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${value.icon} text-blue-600 dark:text-blue-400 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#team"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Kenali Tim Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
