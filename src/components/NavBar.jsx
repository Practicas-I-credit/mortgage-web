import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <div id="nav-links" className={open ? 'open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Calculator</Link>
        <Link to="/contact" id="nav-cta">Free consultation</Link>
      </div>
    </nav>
  )
}