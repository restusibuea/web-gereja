import { useState } from 'react'

const VerseBanner = () => {
  const [copied, setCopied] = useState(false)

  const verseData = {
    theme: 'Tema Pekan Ini',
    topic: 'Pengharapan & Kekuatan Baru',
    verse: 'Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya; mereka berlari dan tidak menjadi lesu, mereka berjalan dan tidak menjadi lelah.',
    reference: 'Yesaya 40:31',
  }

  const handleCopy = () => {
    const textToCopy = `"${verseData.verse}" — ${verseData.reference} (GPdI Agape Laut Dendang)`
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-6 lg:px-8">
      <div className="card-sacred rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/10 via-white to-amber-950/5 dark:from-gray-900 dark:via-gray-900/95 dark:to-amber-950/20 shadow-xl border border-amber-300/40 dark:border-amber-500/30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Quote & Verse Text */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-600 dark:text-amber-400">
              <i className="bi bi-quote text-2xl"></i>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full">
                  {verseData.theme}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  • {verseData.topic}
                </span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl">
                "{verseData.verse}"
              </p>
              <p className="font-bold text-sm text-amber-700 dark:text-amber-400 mt-2 tracking-wide">
                — {verseData.reference}
              </p>
            </div>
          </div>

          {/* Copy Button */}
          <div className="flex-shrink-0 self-end md:self-center">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                copied
                  ? 'bg-green-600 text-white border-green-600 shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-sm'
              }`}
            >
              <i className={`bi ${copied ? 'bi-check-lg' : 'bi-clipboard-heart'}`}></i>
              {copied ? 'Ayat Tersalin!' : 'Bagikan Firman'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerseBanner
