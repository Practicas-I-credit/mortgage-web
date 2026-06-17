import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FlagUS, FlagUK, FlagCA } from './Flags'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const closeMenu = () => setOpen(false)

  return (
    <nav>
      <div id="nav-flags">
        <span id="nav-flags-label">{t('nav.buyersFrom')}</span>
        <FlagUS />
        <FlagUK />
        <FlagCA />
      </div>

      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>

      <div id="nav-links" className={open ? 'open' : ''}>
        <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
        <Link to="/services" onClick={closeMenu}>{t('nav.services')}</Link>
        <Link to="/about" onClick={closeMenu}>{t('nav.about')}</Link>
        <Link to="/contact" id="nav-cta" onClick={closeMenu}>{t('nav.cta')}</Link>
      </div>
    </nav>
  )
}