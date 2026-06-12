import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FlagUS, FlagUK, FlagCA } from './Flags'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div id="nav-flags">
        <span id="nav-flags-label">We help buyers from</span>
        <FlagUS />
        <FlagUK />
        <FlagCA />
      </div>

      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>

      <div id="nav-links" className={open ? 'open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact" id="nav-cta">Free consultation</Link>
      </div>
    </nav>
  )
}