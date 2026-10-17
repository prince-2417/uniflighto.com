import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Headphones, Plane, Lock } from 'lucide-react'

export default function PageBanner({ eyebrow, title, description, updatedDate }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{title}</span>
        </div>

        {eyebrow && <span className="hero-eyebrow-badge">{eyebrow}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {description && <p className="page-hero-desc">{description}</p>}

        <div className="page-hero-badges">
          <div className="hero-mini-badge">
            <Lock size={14} />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="hero-mini-badge">
            <Headphones size={14} />
            <span>24/7 Agent Support: +1 347-777-1900</span>
          </div>
          <div className="hero-mini-badge">
            <ShieldCheck size={14} />
            <span>Independent Travel Agency</span>
          </div>
          {updatedDate && (
            <div className="hero-mini-badge update-badge">
              <span>Updated: {updatedDate}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
