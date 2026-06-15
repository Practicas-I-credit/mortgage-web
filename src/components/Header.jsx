import { Link } from 'react-router-dom'
import { FlagES } from './Flags'

export default function Header() {
  return (
    <header>
      <Link to="/" id="header-logo-wrap">
        <img src="/images/logo.svg" alt="MortgageInSpain" id="header-logo" />
        <span id="header-name">Mortgage<span className="header-accent">InSpain</span></span>
      </Link>

      <Link to="/" id="lang-es" aria-label="Versión en español">
        <FlagES />
        <span>Property in Spain</span>
      </Link>
    </header>
  )
}