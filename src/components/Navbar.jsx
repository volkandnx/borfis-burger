import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C9A84C]/15 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleLink('#hero')}
            className="flex flex-col leading-none group flex-shrink-0"
          >
            <span className="font-display text-xl font-black tracking-tight text-white group-hover:text-[#C9A84C] transition-colors duration-300">
              BÖRFI'S
            </span>
            <span className="font-display text-[10px] font-normal tracking-[0.35em] text-[#C9A84C] uppercase">
              Burger
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="text-sm font-medium tracking-wide text-white/70 hover:text-[#C9A84C] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 start-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Language + Hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <a
              href="tel:05467306477"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
            >
              {t.nav.call}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/80 hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 end-0 bottom-0 z-40 w-72 bg-[#111111] border-s border-[#C9A84C]/15 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div className="flex flex-col leading-none">
                  <span className="font-display text-lg font-black text-white">BÖRFI'S</span>
                  <span className="font-display text-[9px] tracking-[0.35em] text-[#C9A84C] uppercase">Burger</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/60"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="flex-1 p-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    onClick={() => handleLink(link.href)}
                    className="text-start py-4 px-3 text-lg font-medium text-white/80 hover:text-[#C9A84C] border-b border-white/5 last:border-0 transition-colors duration-200 rounded-lg hover:bg-white/3"
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Language switcher in mobile drawer */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-3 px-3">Dil / Language</p>
                  <LanguageSwitcher />
                </div>
              </nav>

              <div className="p-6 border-t border-white/5">
                <a
                  href="tel:05467306477"
                  className="block w-full py-3 text-center rounded-xl bg-[#C9A84C] text-black font-semibold text-sm tracking-wide"
                >
                  0546 730 64 77
                </a>
                <p className="text-center text-white/30 text-xs mt-3">12:00 – 22:00</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
