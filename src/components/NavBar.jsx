import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FlagUS, FlagUK, FlagCA } from './Flags'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const closeMenu = () => setOpen(false)

  const linkClass = ({ isActive }) => isActive ? 'nav-active' : ''

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
        <NavLink to="/" end onClick={closeMenu} className={linkClass}>{t('nav.home')}</NavLink>
        <NavLink to="/services" onClick={closeMenu} className={linkClass}>{t('nav.services')}</NavLink>
        <NavLink to="/about" onClick={closeMenu} className={linkClass}>{t('nav.about')}</NavLink>
        <NavLink to="/contact" id="nav-cta" onClick={closeMenu}>{t('nav.cta')}</NavLink>
      </div>
    </nav>
  )
}