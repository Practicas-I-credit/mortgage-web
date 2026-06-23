import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const hostname = window.location.hostname
    const savedLang = localStorage.getItem('i18nextLng')
    if (!savedLang) {
      if (hostname.includes('.es')) i18n.changeLanguage('es')
      else if (hostname.includes('.fr')) i18n.changeLanguage('fr')
      else if (hostname.includes('.de')) i18n.changeLanguage('de')
      else if (hostname.includes('.it')) i18n.changeLanguage('it')
      else if (hostname.includes('.pt')) i18n.changeLanguage('pt')
      else if (hostname.includes('.uk')) i18n.changeLanguage('en')
      else i18n.changeLanguage('en')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  )
}

export default App