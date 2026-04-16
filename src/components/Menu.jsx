import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { menuCategories } from '../data/menuData'
import MenuCard from './MenuCard'
import { useLanguage } from '../i18n'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export default function Menu() {
  const { t } = useLanguage()
  const [active, setActive] = useState('burger')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const activeCategory = menuCategories.find((c) => c.id === active)

  return (
    <section id="menu" ref={ref} className="relative py-24 md:py-32 bg-[#0A0A0A]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      <div className="absolute top-32 end-0 w-96 h-96 rounded-full bg-[#C9A84C]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium mb-4">
            {t.menu.sectionLabel}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] font-black text-white leading-tight">
            {t.menu.title}
          </h2>
          <p className="text-white/40 text-sm mt-4 max-w-sm mx-auto leading-relaxed">
            {t.menu.subtitle}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-2 overflow-x-auto pb-3 mb-10 -mx-5 px-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                active === cat.id
                  ? 'bg-[#C9A84C] text-black font-semibold'
                  : 'bg-white/5 text-white/50 hover:bg-white/8 hover:text-white/80 border border-white/8'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{t.menu.tabs[cat.labelKey]}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategory?.items.map((item, i) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                tag={item.tag}
                index={i}
                itemEmoji={item.itemEmoji}
                categoryId={activeCategory.id}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Allergy note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-white/25 text-xs mt-12 max-w-md mx-auto leading-relaxed"
        >
          {t.menu.allergyNote}
        </motion.p>
      </div>
    </section>
  )
}
