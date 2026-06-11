import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <span>© 2026 HipotecaInSpain</span>
      <Link to="/privacy" id="footer-privacy">Privacy Policy</Link>
      <div id="footer-copy">
        Licensed by Bank of Spain · D727 · Paseo de la Infanta Isabel 27, Madrid
      </div>
    </footer>
  )
}