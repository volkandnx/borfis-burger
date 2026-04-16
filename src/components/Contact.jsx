import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n'

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const contactItems = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: 'Akyaka, Ula, Muğla',
      href: 'https://maps.google.com/?q=Akyaka,Ula,Mugla',
      cta: t.contact.seeOnMap,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '0546 730 64 77',
      href: 'tel:05467306477',
      cta: t.contact.callNow,
    },
    {
      icon: Clock,
      label: t.contact.hoursLabel,
      value: t.contact.hoursValue,
      href: null,
      cta: null,
    },
    {
      icon: Instagram,
      label: t.contact.instagram,
      value: '@borfisburger',
      href: 'https://www.instagram.com/borfisburger',
      cta: t.contact.follow,
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-medium mb-4">
            {t.contact.sectionLabel}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] font-black text-white leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-white/40 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-[#C9A84C]/25 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[#C9A84C]/15 transition-colors duration-300">
                <item.icon size={18} className="text-[#C9A84C]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/35 text-xs uppercase tracking-widest font-medium mb-1">{item.label}</p>
                <p className="text-white font-medium text-sm leading-snug">{item.value}</p>
                {item.href && item.cta && (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-[#C9A84C] text-xs font-medium mt-2 hover:underline"
                  >
                    {item.cta}
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#111111] h-56 flex items-center justify-center group hover:border-[#C9A84C]/20 transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />

          <a
            href="https://maps.google.com/?q=Akyaka,Ula,Mugla"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex flex-col items-center gap-3 group-hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg shadow-[#C9A84C]/20">
              <MapPin size={22} className="text-black" fill="black" />
            </div>
            <div className="text-center">
              <p className="text-white font-medium text-sm">Akyaka, Ula, Muğla</p>
              <p className="text-white/40 text-xs mt-1">{t.contact.mapCta}</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
