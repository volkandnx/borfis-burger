import { createContext, useContext, useState, useEffect } from 'react'
import tr from './translations/tr'
import en from './translations/en'
import ru from './translations/ru'
import ar from './translations/ar'

const translations = { tr, en, ru, ar }

export const languages = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', native: 'TR' },
  { code: 'en', label: 'English', flag: '🇬🇧', native: 'EN' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', native: 'RU' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', native: 'AR' },
]

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('borfis-lang') || 'tr'
  })

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('borfis-lang', lang)
  }, [lang, dir])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
