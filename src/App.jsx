import { LanguageProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Site() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
