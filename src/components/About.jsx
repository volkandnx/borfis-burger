import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, Leaf, Star, Users } from 'lucide-react'
import { useLanguage } from '../i18n'

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { icon: Flame, value: '130g', label: t.about.stats.patty },
    { icon: Leaf, value: '100%', label: t.about.stats.fresh },
    { icon: Star, value: '#1', label: t.about.stats.rank },
    { icon: Users, value: '10:00', label: t.about.stats.hours },
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium mb-4">
                {t.about.sectionLabel}
              </p>
              <h2 className="font-display text-[clamp(2rem,7vw,4rem)] font-black text-white leading-tight">
                {t.about.title}<br />
                <span className="gold-shimmer">{t.about.titleHighlight}</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/50 text-base leading-relaxed"
            >
              {t.about.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/40 text-sm leading-relaxed"
            >
              {t.about.p2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-[#C9A84C]/40" />
              <p className="font-display italic text-[#C9A84C]/70 text-sm">{t.about.quote}</p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://www.instagram.com/borfisburger"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start flex items-center gap-2 px-5 py-3 rounded-xl border border-[#C9A84C]/25 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C]/10 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {t.about.followUs}
            </motion.a>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="glass-card rounded-2xl p-6 flex flex-col gap-3 group hover:border-[#C9A84C]/25 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/15 transition-colors duration-300">
                  <stat.icon size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-white/40 text-xs mt-1 leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
