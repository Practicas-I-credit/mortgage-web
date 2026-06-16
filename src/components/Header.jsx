import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { FlagES } from './Flags'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header>
      <Link to="/" id="header-logo-wrap">
        <img src="/images/logo.svg" alt="MortgageInSpain" id="header-logo" />
        <span id="header-name">Mortgage<span className="header-accent">InSpain</span></span>
      </Link>

      <div id="header-right">
        <div id="spain-badge">
          <FlagES />
          <span>{t('header.tagline')}</span>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  )
}