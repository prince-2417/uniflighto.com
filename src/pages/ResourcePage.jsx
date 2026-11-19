import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function ResourcePage({ title, subtitle, sections }) {
  return (
    <main className="reference-page resource-page">
      <section className="resource-hero">
        <span className="reference-kicker">Uniflighto travel services</span>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </section>
      <section className="resource-layout">
        <div className="resource-content">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              {section.text && <p>{section.text}</p>}
              {section.items && (
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              )}
            </article>
          ))}
        </div>
        <aside className="resource-sidebar">
          <span>Need help?</span>
          <h3>Talk to a travel specialist</h3>
          <p>Available 24 hours for booking and travel assistance.</p>
          <a href="tel:+13477771900" className="reference-primary"><Phone size={15} /> Call now</a>
          <Link to="/contact" className="resource-link">Send a message <ArrowRight size={14} /></Link>
        </aside>
      </section>
    </main>
  )
}
