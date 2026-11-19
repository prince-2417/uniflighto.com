import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <Link to="/" className="brand-wrap text-decoration-none">
        <div className="brand-mark">✈</div>
        <div className="brand-name">
          <span>FLIGHT BOOKING & TRAVEL</span>
          <strong>UNIFLIGHTO</strong>
        </div>
      </Link>

      <a href="tel:+13477771900" className="phone-box">
        <Phone size={15} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
        <span>Call us : +1 347-777-1900</span>
      </a>

      <button
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
        <Link
          to="/flights"
          className="nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Flights
        </Link>
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
