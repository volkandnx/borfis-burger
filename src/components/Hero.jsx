import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n'

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Radial glow background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#E8C96A]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Floating decorative emojis */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/2 end-8 -translate-y-1/2 text-8xl opacity-[0.07] pointer-events-none hidden lg:block select-none"
      >
        🍔
      </motion.div>
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/3 start-8 text-6xl opacity-[0.05] pointer-events-none hidden lg:block select-none"
      >
        🔥
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center gap-5">

          {/* Location pill */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/8 backdrop-blur-sm">
              <MapPin size={12} className="text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
                {t.hero.location}
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] font-black leading-[0.88] tracking-tight text-white">
              BÖRFI'S
            </h1>
            <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] font-black leading-[0.88] tracking-tight gold-shimmer">
              BURGER
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="font-display italic text-[clamp(1rem,4vw,1.4rem)] text-white/60 max-w-md leading-relaxed"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Hours */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-white/40 text-sm">
            <Clock size={13} className="text-[#C9A84C]/60" />
            <span>{t.hero.hours}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full max-w-sm">
            <button
              onClick={scrollToMenu}
              className="w-full sm:w-auto flex-1 py-4 px-8 rounded-xl bg-[#C9A84C] text-black font-semibold text-sm tracking-wide hover:bg-[#E8C96A] active:scale-[0.97] transition-all duration-200"
            >
              {t.hero.viewMenu}
            </button>
            <a
              href="tel:05467306477"
              className="w-full sm:w-auto flex-1 py-4 px-8 rounded-xl border border-white/15 text-white text-sm font-medium tracking-wide text-center hover:border-[#C9A84C]/40 hover:text-[#C9A84C] active:scale-[0.97] transition-all duration-200"
            >
              {t.hero.reservation}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#C9A84C]/60 transition-colors duration-300"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">{t.hero.discover}</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
