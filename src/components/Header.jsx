import { Link } from 'react-router-dom'
import { FlagES } from './Flags'

export default function Header() {
  return (
    <header>
      <div id="header-logo-wrap">
        <img src="/images/logo.svg" alt="HipotecaInSpain" id="header-logo" />
        <span id="header-name">Hipoteca<span className="header-accent">InSpain</span></span>
      </div>

      <Link to="/" id="lang-es" aria-label="Versión en español">
        <FlagES />
        <span>Property in Spain</span>
      </Link>
    </header>
  )
}