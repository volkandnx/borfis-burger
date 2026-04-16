import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'
import { categoryMeta } from '../data/menuData'

const tagColorMap = {
  ozel:    'bg-[#C9A84C]/15 text-[#C9A84C] border-[#C9A84C]/25',
  populer: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  yeni:    'bg-blue-500/10 text-blue-400 border-blue-500/20',
  acili:   'bg-red-500/10 text-red-400 border-red-500/20',
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function ImagePlaceholder({ emoji, categoryId }) {
  const meta = categoryMeta[categoryId] || categoryMeta.burger
  const [from, via, to] = meta.gradient

  return (
    <div
      className="relative h-44 overflow-hidden flex-shrink-0 rounded-t-2xl"
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${via} 55%, ${to} 100%)`,
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-10 -end-10 w-40 h-40 rounded-full opacity-20"
        style={{ background: `radial-gradient(circle, ${via}, transparent)` }}
      />
      <div
        className="absolute -bottom-6 -start-6 w-28 h-28 rounded-full opacity-15"
        style={{ background: `radial-gradient(circle, ${via}, transparent)` }}
      />

      {/* Center glow */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${meta.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Emoji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-7xl select-none"
          style={{
            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
            transform: 'translateY(-4px)',
          }}
        >
          {emoji}
        </span>
      </div>

      {/* Bottom fade into card */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#161616] to-transparent" />
    </div>
  )
}

export default function MenuCard({ name, description, tag, index, itemEmoji, categoryId }) {
  const { t } = useLanguage()

  const tagLabel = tag ? t.tags[tag] : null
  const tagColor = tag ? tagColorMap[tag] : null

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative glass-card rounded-2xl overflow-hidden cursor-default flex flex-col"
    >
      {/* Hover border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      </div>

      {/* Image area */}
      <ImagePlaceholder emoji={itemEmoji} categoryId={categoryId} />

      {/* Content */}
      <div className="relative flex flex-col gap-3 p-5 flex-1">
        {/* Index number (decorative) */}
        <div className="absolute top-3 end-4 font-display text-4xl font-black text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300 select-none leading-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Tag */}
        {tagLabel && (
          <span className={`self-start text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${tagColor}`}>
            {tagLabel}
          </span>
        )}

        {/* Name */}
        <h3 className="font-display text-lg font-bold text-white group-hover:text-[#E8C96A] transition-colors duration-300 leading-tight pe-8">
          {name}
        </h3>

        {/* Gold divider */}
        <div className="w-8 h-px bg-[#C9A84C]/30 group-hover:w-14 transition-all duration-500" />

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
