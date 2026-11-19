import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, ShieldCheck, Clock, Headphones, Sparkles, ArrowRight, BadgeCheck, Globe2 } from 'lucide-react'


const destinations = [
  { city: 'Dubai', price: '$120', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=82' },
  { city: 'Bali', price: '$180', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=82' },
  { city: 'New York', price: '$220', image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=900&q=82' },
  { city: 'London', price: '$170', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=82' },
  { city: 'Paris', price: '$190', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=82' },
]

const guideBoxes = [
  { title: 'Need Help Planning Your Trip?', text: 'From route ideas to budget planning, we make every step easier.', price: 'Best Deals', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Explore Europe & Beyond', text: 'Handpicked cities with flexible dates and special seasonal airline fares.', price: 'From $199', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Tropical Beach Getaways', text: 'Warm-weather escapes with easy booking and quick e-ticket departures.', price: 'From $349', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80' },
]

const testimonials = [
  { name: 'Mia Thompson', quote: 'The booking process was smooth and the team found us the best value for our family trip.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
  { name: 'Liam Carter', quote: 'We saved more than expected and the service felt personal from beginning to end.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Ava Nguyen', quote: 'Everything from searching to landing was easy and stress-free. Highly recommended.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80' },
]

const travelTips = [
  'How to book the right flight for your next trip at the lowest available fare',
  'Essential tips for booking domestic and international flights seamlessly',
  'Understanding airline fare rules, baggage policies, and flexible cancellation',
]

export default function HomePage() {
  const [tripType, setTripType] = useState('Round Trip')
  const [fromCity, setFromCity] = useState('New York (JFK)')
  const [toCity, setToCity] = useState('London (LHR)')
  const [departureDate, setDepartureDate] = useState('2026-11-15')
  const [returnDate, setReturnDate] = useState('2026-11-22')
  const [travelers, setTravelers] = useState('1 Adult, Economy')

  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-eyebrow"><Sparkles size={15} /> Curated global flight deals</div>
            <h1>Your journey,<br /><em>beautifully planned.</em></h1>
            <p>
              Discover exceptional fares, handpicked routes, and personal support
              from takeoff to touchdown.
            </p>
          </div>

          <div className="search-box" role="search" aria-label="Flight search">
            <div className="booking-heading">
              <div>
                <span>Find a flight</span>
                <strong>Where would you like to go?</strong>
              </div>
              <div className="trip-selector">
                {['Round Trip', 'One Way', 'Multi City'].map((type) => (
                  <button key={type} type="button" className={`trip-btn ${tripType === type ? 'active' : ''}`} onClick={() => setTripType(type)}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="search-grid">
              <label>
                <span><Plane size={13} /> From</span>
                <input
                  type="text"
                  aria-label="Departure city or airport"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  placeholder="Origin City or Airport"
                />
              </label>
              <label>
                <span><Globe2 size={13} /> To</span>
                <input
                  type="text"
                  aria-label="Destination city or airport"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  placeholder="Destination City or Airport"
                />
              </label>
              <label>
                <span>Departure</span>
                <input
                  type="date"
                  aria-label="Departure date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </label>
              {tripType === 'Round Trip' && (
                <label>
                  <span>Return</span>
                  <input
                    type="date"
                    aria-label="Return date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </label>
              )}
              <label>
                <span>Travelers / Class</span>
                <input
                  type="text"
                  aria-label="Travelers and cabin class"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  placeholder="Travelers"
                />
              </label>
              <a href="tel:+13477771900" className="search-btn text-center" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Search flights
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-row" aria-label="Service highlights">
        <div><ShieldCheck size={22} /><span><strong>Secure bookings</strong><small>Protected reservations</small></span></div>
        <div><Clock size={22} /><span><strong>Always available</strong><small>24/7 travel support</small></span></div>
        <div><BadgeCheck size={22} /><span><strong>Best fare promise</strong><small>Transparent pricing</small></span></div>
        <div><Headphones size={22} /><span><strong>Real people</strong><small>Personal assistance</small></span></div>
      </section>

      <section className="destination-section" id="featured-routes">
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">Featured routes</span>
          <h2>Destinations worth the journey</h2>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <article
              key={destination.city}
              className="destination-card"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="destination-overlay" />
              <div className="destination-body">
                <span>{destination.city}</span>
                <strong>Fares from {destination.price}*</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-section no-image">
        <div className="showcase-copy">
          <span className="eyebrow eyebrow-dark">Travel, thoughtfully</span>
          <h2>Exceptional service.<br />Remarkable value.</h2>
          <p>
            From complex itineraries to last-minute escapes, our specialists find
            the right route at the right fare.
          </p>
          <a href="tel:+13477771900" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Speak with a specialist <ArrowRight size={16} />
          </a>
        </div>
        <div className="showcase-art" aria-hidden="true">
          <div className="showcase-photo" />
          <div className="showcase-stat"><strong>400+</strong><span>airlines to compare</span></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="section-header centered">
          <span className="eyebrow eyebrow-dark">Travelers experiences</span>
          <h2>What Our Travelers Say</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <img src={item.image} alt={item.name} />
              <div className="testimonial-body">
                <p>“{item.quote}”</p>
                <div className="stars">★★★★★</div>
                <strong>{item.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-text">
          <span className="eyebrow eyebrow-light">Your journey starts here</span>
          <h2>Find the Right Flight for Your Next Adventure</h2>
        </div>

        <div className="cta-actions">
          <a href="tel:+13477771900" className="primary-btn light" style={{ textDecoration: 'none' }}>
            Talk to Our Team
          </a>
          <Link to="/price-match-promise" className="secondary-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
            Price Match Promise
          </Link>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans-section">
        <div className="section-header centered narrow">
          <span className="eyebrow eyebrow-dark">More ways to plan</span>
          <h2>More Ways To Plan Your Perfect Trip</h2>
        </div>

        <div className="plan-grid">
          {guideBoxes.map((item) => (
            <article key={item.title} className="plan-card">
              <img src={item.image} alt={item.title} />
              <div className="plan-content">
                <span className="trip-tag">{item.price}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/contact" className="card-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>
                  Inquire Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Insights Block */}
      <section className="insights-block">
        <div className="insight-copy">
          <span className="eyebrow eyebrow-dark">Travel insights</span>
          <h2>Travel smarter with our expert advice</h2>
          <div className="tips-list">
            {travelTips.map((tip) => (
              <div key={tip} className="tip-item">
                <span className="check-mark">✓</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="insight-panel">
          <Link to="/fare-disclosure-policy" className="card-btn insight-btn">
            Read Fare Rules & Guide
          </Link>
          <div className="insight-content">
            <span className="mini-badge">Top pick</span>
            <h3>Essential Tips for Booking International Flights</h3>
            <p>
              Learn how to save more on baggage, timing, and route planning. Our licensed travel agents
              curate route options that minimize layovers while maximizing savings.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps Block */}
      <section className="journey-block no-image">
        <div className="journey-copy">
          <span className="eyebrow eyebrow-dark">Plan your trip</span>
          <h2>Plan Your Trip With Uniflighto</h2>
          <div className="steps-grid">
            <div className="step-card">
              <span>1</span>
              <strong>Search</strong>
              <p>Find flight options that match your trip, schedule, and budget across 400+ airlines.</p>
            </div>
            <div className="step-card">
              <span>2</span>
              <strong>Compare</strong>
              <p>Check transparent fares, luggage inclusions, and schedules in seconds.</p>
            </div>
            <div className="step-card">
              <span>3</span>
              <strong>Book</strong>
              <p>Secure your seats with 256-bit SSL encrypted checkout and 24-hour flexibility.</p>
            </div>
            <div className="step-card">
              <span>4</span>
              <strong>Travel</strong>
              <p>Enjoy a smoother journey from departure to arrival with our 24/7 travel desk.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
