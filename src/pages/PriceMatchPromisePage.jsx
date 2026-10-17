import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { CheckCircle, DollarSign, Clock, ShieldCheck, FileText, AlertCircle, HelpCircle } from 'lucide-react'

export default function PriceMatchPromisePage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Best Value Guarantee"
        title="Price Match Promise"
        description="Book your flights with total peace of mind. If you find a lower qualifying fare within 24 hours of booking, we match it or refund the difference."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <CheckCircle className="section-icon text-primary" size={28} />
              <div>
                <h2>Our Price Match Promise</h2>
                <p className="subtitle">Committed to giving you the most competitive airfares on the market.</p>
              </div>
            </div>

            <p>
              At <strong>Uniflighto (uniflighto.com)</strong>, we want you to book your flights with complete confidence.
              Our <strong>Price Match Promise</strong> ensures that you never have to worry about overpaying for your tickets.
            </p>
            <p>
              If you complete a flight booking on <strong>uniflighto.com</strong> and subsequently find an identical,
              lower qualifying airfare publicly available on an accredited U.S. online travel competitor within
              <strong> 24 hours of your booking confirmation</strong>, Uniflighto will match that lower fare or refund
              the price difference to your original payment method.
            </p>

            <div className="highlight-callout">
              <DollarSign size={24} className="callout-icon" />
              <div>
                <strong>How the Price Match Works</strong>
                <p>
                  Found a cheaper flight within 24 hours of booking? Send us the competitor's live URL and a timestamped
                  screenshot showing the lower price. Our claims desk will verify the fare in real time and promptly issue a refund
                  for the difference.
                </p>
              </div>
            </div>
          </section>

          {/* Qualification Criteria */}
          <section className="policy-section">
            <h2>Qualifying Itinerary Criteria (Exact Match Rule)</h2>
            <p>
              To qualify for the Price Match Promise, the competing lower fare must be an <strong>exact match</strong> to
              the itinerary booked with Uniflighto:
            </p>

            <div className="criteria-grid">
              <div className="criteria-card">
                <h4>✓ Same Airline & Carrier</h4>
                <p>The flight must be operated and ticketed by the exact same operating airline (including codeshare partners).</p>
              </div>

              <div className="criteria-card">
                <h4>✓ Identical Flight Details</h4>
                <p>Same flight numbers, departure dates, arrival dates, layover cities, and exact flight departure/arrival times.</p>
              </div>

              <div className="criteria-card">
                <h4>✓ Same Cabin & Fare Class</h4>
                <p>Same booking code and class of service (e.g., Basic Economy vs. Main Cabin, Premium Economy, Business, or First Class).</p>
              </div>

              <div className="criteria-card">
                <h4>✓ Same Fare Rules & Baggage</h4>
                <p>Identical baggage allowances, change policies, cancellation penalties, and seat selection conditions.</p>
              </div>

              <div className="criteria-card">
                <h4>✓ Quoted in USD</h4>
                <p>The competitor’s price must be quoted, calculated, and billed in United States Dollars (USD) including all mandatory taxes and fees.</p>
              </div>

              <div className="criteria-card">
                <h4>✓ Live & Bookable</h4>
                <p>The fare must be live, unexpired, and immediately available for public booking by any traveler on an accredited major U.S. OTA.</p>
              </div>
            </div>
          </section>

          {/* Exclusions */}
          <section className="policy-section">
            <h2>Exclusions & Non-Qualifying Fares</h2>
            <p>
              The Price Match Promise applies exclusively to standard, publicly available commercial airfares. It does not apply to:
            </p>
            <ul className="bullet-list">
              <li><strong>Private / Membership Rates:</strong> Fares requiring membership in a club, subscription service, closed user group, or loyalty program (e.g., AAA, AARP, Costco, closed employee portals).</li>
              <li><strong>Corporate & Consolidator Bulk Rates:</strong> Wholesale, tour operator, student, youth, military, or government contracted fares.</li>
              <li><strong>Vacation Package Bundles:</strong> Fares sold as part of an inclusive travel package where the airfare is bundled with hotels, cruises, or car rentals.</li>
              <li><strong>Opaque & Auction Fares:</strong> Bookings on websites where the operating airline, flight times, or itinerary are concealed until after payment is completed.</li>
              <li><strong>Promotional Coupon Codes:</strong> Fares discounted via one-time promotional discount codes, cash-back portals, gift cards, or airline voucher credits.</li>
              <li><strong>Fare Errors / Misquotes:</strong> Obvious airline filing errors, decimal point mistakes, or technical glitch fares that airlines refuse to honor.</li>
            </ul>
          </section>

          {/* How to Submit a Claim */}
          <section className="policy-section">
            <h2>Step-by-Step: How to Submit a Price Match Claim</h2>
            <div className="timeline-container">
              <div className="timeline-step">
                <div className="step-badge">1</div>
                <div className="step-content">
                  <h3>Capture Verification Evidence</h3>
                  <p>
                    Take a clear, complete screenshot of the competitor's final checkout screen displaying the lower fare,
                    including the full itinerary breakdown, dates, flight numbers, passenger count, all taxes and fees,
                    and a visible system date and timestamp.
                  </p>
                </div>
              </div>

              <div className="timeline-step">
                <div className="step-badge">2</div>
                <div className="step-content">
                  <h3>Submit Within 24 Hours of Booking</h3>
                  <p>
                    Send an email to <strong>claims@uniflighto.com</strong> or call our 24/7 desk at <strong>+1 347-777-1900</strong>.
                    Include:
                  </p>
                  <ul className="bullet-list">
                    <li>Your Uniflighto Booking Reference / PNR</li>
                    <li>Passenger full legal name</li>
                    <li>Live URL link to the competitor’s bookable fare</li>
                    <li>Attached screenshots showing the exact fare breakdown and timestamp</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-step">
                <div className="step-badge">3</div>
                <div className="step-content">
                  <h3>Prompt Review & Refund</h3>
                  <p>
                    Our claims team will immediately check the competitor's live inventory. Once verified, we will match the
                    fare or credit the exact difference back to your original payment card within 3 to 5 business days!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
