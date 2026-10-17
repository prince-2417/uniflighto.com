import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, ChevronDown, Menu, X, Shield, FileText } from 'lucide-react'
import { IMPORTANT_LINKS } from './PolicySidebar'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/faqs"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          FAQs
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact Us
        </NavLink>

        {/* Important Links Dropdown */}
        <div className="nav-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="nav-link dropdown-toggle-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            <span>Important Links</span>
            <ChevronDown size={14} className={`dropdown-arrow ${dropdownOpen ? 'rotate' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu-panel">
              <div className="dropdown-grid">
                {IMPORTANT_LINKS.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="dropdown-item"
                      onClick={() => {
                        setDropdownOpen(false)
                        setMobileMenuOpen(false)
                      }}
                    >
                      <Icon size={14} className="dropdown-icon" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
