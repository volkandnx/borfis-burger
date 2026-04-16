import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage, languages } from '../i18n'

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = languages.find((l) => l.code === lang)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-xl border transition-all duration-300 ${
          open
            ? 'border-[#C9A84C]/50 bg-[#C9A84C]/10 text-[#C9A84C]'
            : 'border-white/10 bg-white/5 text-white/70 hover:border-[#C9A84C]/30 hover:text-white'
        } ${compact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-sm'}`}
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current?.flag}</span>
        <span className="font-medium tracking-wide">{current?.native}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={12} className="opacity-60" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full mt-2 end-0 min-w-[148px] bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60"
          >
            {languages.map((l, i) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false) }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  lang === l.code
                    ? 'bg-[#C9A84C]/15 text-[#C9A84C]'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                } ${i !== 0 ? 'border-t border-white/5' : ''}`}
              >
                <span className="text-lg leading-none">{l.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium text-xs leading-none mb-0.5">{l.native}</span>
                  <span className="text-[10px] opacity-60 leading-none">{l.label}</span>
                </div>
                {lang === l.code && (
                  <div className="ms-auto w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
