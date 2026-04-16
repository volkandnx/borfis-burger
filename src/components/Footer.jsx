import { useLanguage } from '../i18n'

export default function Footer() {
  const { t } = useLanguage()

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: t.footer.links.home, href: '#hero' },
    { label: t.footer.links.menu, href: '#menu' },
    { label: t.footer.links.about, href: '#about' },
    { label: t.footer.links.contact, href: '#contact' },
  ]

  return (
    <footer className="relative bg-[#080808] border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-black text-white">BÖRFI'S</span>
              <span className="font-display text-xs tracking-[0.35em] text-[#C9A84C] uppercase">Burger</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[220px]">
              {t.footer.tagline}
            </p>
            <a
              href="https://www.instagram.com/borfisburger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A84C]/70 text-sm hover:text-[#C9A84C] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @borfisburger
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/50 text-xs tracking-[0.3em] uppercase font-medium">{t.footer.navTitle}</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-start text-white/40 text-sm hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/50 text-xs tracking-[0.3em] uppercase font-medium">{t.footer.contactTitle}</h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <p>{t.footer.location}</p>
              <a href="tel:05467306477" className="hover:text-[#C9A84C] transition-colors duration-300">
                0546 730 64 77
              </a>
              <p>12:00 – 22:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">{t.footer.rights}</p>
          <p className="text-white/15 text-xs">Akyaka, Ula, Muğla</p>
        </div>
      </div>
    </footer>
  )
}
