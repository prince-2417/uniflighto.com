import { Plane, ShieldCheck, Clock, BadgeCheck, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const deals = [
  { city: 'New York', code: 'JFK', price: '$399', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=82', path: '/cheap-flights-to-new-york' },
  { city: 'Las Vegas', code: 'LAS', price: '$479', image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=900&q=82', path: '/cheap-flights-to-las-vegas' },
  { city: 'Miami', code: 'MIA', price: '$429', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=900&q=82', path: '/cheap-flights-to-miami' },
  { city: 'Chicago', code: 'ORD', price: '$389', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=82', path: '/cheap-flights-to-chicago' },
  { city: 'San Francisco', code: 'SFO', price: '$519', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=82', path: '/cheap-flights-to-san-francisco' },
  { city: 'Boston', code: 'BOS', price: '$389', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=82', path: '/cheap-flights-to-boston' },
]

const bookingSteps = [
  { title: 'Share your trip', text: 'Tell us your origin, destination, preferred dates, travelers, and cabin class.' },
  { title: 'Compare available fares', text: 'Review airlines, schedules, connections, baggage allowances, and total fare details.' },
  { title: 'Book with support', text: 'Confirm passenger names and complete the reservation securely with a travel specialist.' },
]

const flightFaqs = [
  { question: 'Can I book one-way, round-trip, or multi-city flights?', answer: 'Yes. Our travel specialists can assist with one-way, round-trip, open-jaw, and multi-city itineraries for domestic and international travel.' },
  { question: 'Are baggage and seat fees included?', answer: 'Baggage and seat benefits vary by airline and fare family. We explain included items and optional charges before you confirm a booking.' },
  { question: 'Can you help with a last-minute flight?', answer: 'Yes. Call our 24/7 travel desk to check recently available schedules and same-day or next-day route options.' },
]

export default function FlightsPage() {
  return (
    <main className="reference-page">
      <section className="reference-hero flights-hero">
        <div>
          <span className="reference-kicker">Compare 400+ airlines</span>
          <h1>Find a flight that fits<br />your journey.</h1>
          <p>Compare fares, routes, schedules, and baggage options with personal 24/7 travel support.</p>
          <a href="tel:+13477771900" className="reference-primary"><Phone size={16} /> Call +1 347-777-1900</a>
        </div>
      </section>

      <section className="reference-section">
        <div className="reference-heading">
          <span>Featured fares</span>
          <h2>Popular flight deals</h2>
        </div>
        <div className="deal-grid">
          {deals.map((deal) => (
            <Link key={deal.city} to={deal.path} className="deal-card">
              <img src={deal.image} alt={deal.city} />
              <div>
                <small>{deal.code}</small>
                <h3>{deal.city}</h3>
                <p>From <strong>{deal.price}</strong></p>
              </div>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="reference-section reference-split">
        <div>
          <span className="reference-kicker">Flexible flight support</span>
          <h2>Book domestic and international flights with confidence</h2>
          <p>Whether you need a simple one-way trip or a complex multi-city itinerary, our team helps you compare options clearly.</p>
        </div>
        <div className="reference-feature-grid">
          <article><Plane /><h3>Domestic flights</h3><p>Compare convenient routes across the United States.</p></article>
          <article><GlobeIcon /><h3>International flights</h3><p>Explore options to Europe, Asia, South America, and beyond.</p></article>
          <article><ShieldCheck /><h3>Secure booking</h3><p>Review fare terms and payment details before confirmation.</p></article>
          <article><Clock /><h3>Real-time support</h3><p>Speak with a travel specialist 24 hours a day.</p></article>
        </div>
      </section>

      <section className="reference-section flight-process">
        <div className="reference-heading">
          <span>Simple and personal</span>
          <h2>How flight booking works</h2>
        </div>
        <div className="process-grid">
          {bookingSteps.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reference-section flight-content-grid">
        <article>
          <span className="reference-kicker">Domestic travel</span>
          <h2>Explore the United States</h2>
          <p>Compare nonstop and connecting flights to major business hubs, family destinations, and holiday cities. We can help review alternate airports and flexible dates to find a more convenient option.</p>
        </article>
        <article>
          <span className="reference-kicker">International travel</span>
          <h2>Plan a global itinerary</h2>
          <p>For overseas trips, a specialist can compare connection locations, layover lengths, transit requirements, checked baggage rules, and operating airlines before you travel.</p>
        </article>
      </section>

      <section className="reference-section flight-faq">
        <div className="reference-heading">
          <span>Helpful answers</span>
          <h2>Flight booking questions</h2>
        </div>
        <div className="compact-faq-grid">
          {flightFaqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reference-cta">
        <div>
          <span>Need immediate assistance?</span>
          <h2>Speak with a flight specialist today</h2>
        </div>
        <a href="tel:+13477771900" className="reference-primary"><Phone size={16} /> +1 347-777-1900</a>
      </section>
    </main>
  )
}

function GlobeIcon() {
  return <BadgeCheck />
}
