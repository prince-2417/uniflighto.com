import { Link } from 'react-router-dom'
import { Plane, Clock, MapPin, Phone, ArrowRight } from 'lucide-react'

const destinations = {
  'new-york': { city: 'New York', code: 'JFK', price: '$399', airport: 'John F. Kennedy International Airport', time: 'Around 7 hours 30 minutes', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1800&q=86', areas: 'Manhattan, Brooklyn, Queens, Times Square', arrival: 'JFK offers AirTrain, subway connections, taxis, ride-shares, and rental cars for onward travel across Manhattan and the wider New York area.', tip: 'Compare JFK, Newark, and LaGuardia before booking. The best airport depends on your airline, final neighborhood, and transfer time.' },
  'las-vegas': { city: 'Las Vegas', code: 'LAS', price: '$479', airport: 'Harry Reid International Airport', time: 'Around 10 hours 45 minutes', image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1800&q=86', areas: 'The Strip, Downtown, Summerlin, Henderson', arrival: 'Harry Reid International Airport is close to the Las Vegas Strip, Downtown Las Vegas, and major resorts. Airport taxis, shuttles, buses, ride-shares, and rental cars are available.', tip: 'Midweek travel can be less expensive than peak convention weekends and major event periods.' },
  'miami': { city: 'Miami', code: 'MIA', price: '$429', airport: 'Miami International Airport', time: 'Around 9 hours', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1800&q=86', areas: 'South Beach, Brickell, Wynwood, Coral Gables', arrival: 'Miami International Airport provides rail, taxis, hotel shuttles, buses, ride-shares, and rental cars. Travel time varies by traffic and the neighborhood you are visiting.', tip: 'Compare shoulder-season dates and both nonstop and one-stop routes for a better-value Miami trip.' },
  'chicago': { city: 'Chicago', code: 'ORD', price: '$389', airport: "Chicago O'Hare International Airport", time: 'Around 8 hours', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=86', areas: 'Downtown, River North, Lakeview, The Loop', arrival: 'O’Hare connects to downtown Chicago by CTA rail, airport bus, taxi, ride-share, and rental car. Midway can also be practical depending on the final route.', tip: 'Compare Chicago O’Hare and Midway with attention to winter weather and airport transfer time.' },
  'san-francisco': { city: 'San Francisco', code: 'SFO', price: '$519', airport: 'San Francisco International Airport', time: 'Around 11 hours', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1800&q=86', areas: 'Union Square, Fishermans Wharf, Nob Hill, Marina', arrival: 'SFO offers BART rail, taxis, ride-shares, airport shuttles, and rental cars. Oakland International can sometimes provide a practical alternative.', tip: 'Avoid unusually short connections and review seasonality, especially around major conventions and summer travel.' },
  'boston': { city: 'Boston', code: 'BOS', price: '$389', airport: 'Boston Logan International Airport', time: 'Around 6 hours 30 minutes', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=86', areas: 'Back Bay, Beacon Hill, Cambridge, Seaport', arrival: 'Boston Logan is connected by subway, airport bus, taxis, ride-shares, water taxi, and rental car services for travel throughout Boston and Cambridge.', tip: 'Check weekday and weekend prices; Boston demand can rise during conferences, graduation season, and fall travel.' },
}

export default function DestinationPage({ destination }) {
  const data = destinations[destination] || destinations['new-york']
  return (
    <main className="reference-page">
      <section className="destination-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,42,34,.78), rgba(12,42,34,.12)), url(${data.image})` }}>
        <div>
          <span className="reference-kicker">Flights to {data.city}</span>
          <h1>Smart fares for<br />your {data.city} journey.</h1>
          <p>Compare routes, schedules, luggage options, and available fares.</p>
          <div className="destination-actions">
            <a href="#flight-search-form" className="reference-primary">Search flights <ArrowRight size={16} /></a>
            <a href="tel:+13477771900" className="reference-secondary"><Phone size={15} /> +1 347-777-1900</a>
          </div>
        </div>
      </section>

      <section className="destination-details" id="flight-search-form">
        <div className="destination-guide">
          <span className="reference-kicker">Destination guide</span>
          <h2>{data.city}, {data.code}</h2>
          <div className="destination-facts">
            <div><Plane /><span><small>Airport</small><strong>{data.airport}</strong></span></div>
            <div><Clock /><span><small>Flight time</small><strong>{data.time}</strong></span></div>
            <div><MapPin /><span><small>Popular areas</small><strong>{data.areas}</strong></span></div>
          </div>
        </div>
        <div className="destination-fare">
          <small>Example fare from</small>
          <strong>{data.price}</strong>
          <p>Call for current availability and dates.</p>
          <a href="tel:+13477771900" className="reference-primary">Check live fares</a>
        </div>
      </section>

      <section className="reference-section destination-copy">
        <div>
          <span className="reference-kicker">Travel with ease</span>
          <h2>Why book {data.city} flights with us?</h2>
        </div>
        <div className="destination-tips">
          <article><span>01</span><h3>Compare flexible routes</h3><p>Review nonstop and connecting options to match your schedule.</p></article>
          <article><span>02</span><h3>Review the full fare</h3><p>Check baggage, seats, timing, and change rules before booking.</p></article>
          <article><span>03</span><h3>Get personal support</h3><p>Speak with a specialist for complex or last-minute travel needs.</p></article>
        </div>
      </section>

      <section className="reference-section destination-editorial">
        <article>
          <span className="reference-kicker">Arriving in {data.city}</span>
          <h2>Getting from the airport</h2>
          <p>{data.arrival}</p>
        </article>
        <article>
          <span className="reference-kicker">Smart booking tip</span>
          <h2>Find better-value dates</h2>
          <p>{data.tip}</p>
        </article>
      </section>

      <section className="reference-cta">
        <div><span>Ready to explore {data.city}?</span><h2>Find your best available fare</h2></div>
        <Link to="/flights" className="reference-primary">View all flight deals <ArrowRight size={16} /></Link>
      </section>
    </main>
  )
}
