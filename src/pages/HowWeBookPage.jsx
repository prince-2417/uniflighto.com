import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import {
  Sparkles,
  Search,
  UserCheck,
  CreditCard,
  FileCheck,
  MailCheck,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Clock
} from 'lucide-react'

export default function HowWeBookPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Ticketing Transparency"
        title="How We Book and Issue Airline Tickets"
        description="A transparent step-by-step breakdown of how Uniflighto searches, reserves, verifies, and issues your electronic airline tickets."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Sparkles className="section-icon text-primary" size={28} />
              <div>
                <h2>The Uniflighto Ticketing Process</h2>
                <p className="subtitle">Demystifying how online travel agencies interact with airline inventory systems.</p>
              </div>
            </div>

            <p>
              When you purchase a flight through <strong>Uniflighto (uniflighto.com)</strong>, your reservation moves
              through a highly secure, regulated, and automated global distribution network. As an accredited independent
              travel portal, we operate directly with major airline reservation systems.
            </p>
            <p>
              Here is an exact chronological look at what happens behind the scenes from the moment you click “Book”
              until you board your aircraft.
            </p>
          </section>

          {/* Steps Timeline */}
          <section className="policy-section">
            <div className="timeline-container">
              {/* Step 1 */}
              <div className="timeline-step">
                <div className="step-badge">1</div>
                <div className="step-content">
                  <div className="step-header">
                    <Search size={20} className="step-icon text-primary" />
                    <h3>Live Flight Search & Multi-GDS Aggregation</h3>
                  </div>
                  <p>
                    When you enter your origin, destination, and travel dates, our proprietary search engine queries
                    major <strong>Global Distribution Systems (GDS)</strong>—such as Amadeus, Sabre, and Travelport—as
                    well as direct airline NDC (New Distribution Capability) APIs.
                  </p>
                  <p>
                    Within seconds, we scan over 400 airlines, comparing real-time seat availability, fare classes,
                    layover durations, and baggage inclusions to present the most competitive flight combinations.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="timeline-step">
                <div className="step-badge">2</div>
                <div className="step-content">
                  <div className="step-header">
                    <UserCheck size={20} className="step-icon text-primary" />
                    <h3>Passenger Information & TSA Secure Flight Verification</h3>
                  </div>
                  <p>
                    You enter the passenger details: full legal name (exactly as shown on government-issued passport or REAL ID),
                    date of birth, gender, and contact details.
                  </p>
                  <p>
                    In compliance with the <strong>Transportation Security Administration (TSA) Secure Flight Program</strong>,
                    this information is required to match your travel documents for pre-flight security screening.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="timeline-step">
                <div className="step-badge">3</div>
                <div className="step-content">
                  <div className="step-header">
                    <CreditCard size={20} className="step-icon text-primary" />
                    <h3>Payment Pre-Authorization & Fraud Screening</h3>
                  </div>
                  <p>
                    Your payment details are transmitted through bank-grade <strong>256-bit SSL encryption</strong> to our
                    PCI-compliant payment processor.
                  </p>
                  <p>
                    At this stage, an authorization hold is placed on your card. Our automated anti-fraud monitoring
                    algorithms verify the transaction to protect cardholders from unauthorized charges and identity theft.
                    If any discrepancy arises, a ticketing specialist may contact you for quick verification.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="timeline-step">
                <div className="step-badge">4</div>
                <div className="step-content">
                  <div className="step-header">
                    <FileCheck size={20} className="step-icon text-primary" />
                    <h3>PNR Generation & Airline Reservation Lock</h3>
                  </div>
                  <p>
                    Upon successful payment authorization, our system communicates directly with the operating airline’s
                    central reservation database to generate a unique 6-alphanumeric character code known as the
                    <strong> PNR (Passenger Name Record)</strong> or Airline Booking Reference.
                  </p>
                  <p>
                    This immediately locks your seat inventory on the aircraft under your name, preventing seat loss
                    while the formal electronic ticket is formatted and queued for issuance.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="timeline-step">
                <div className="step-badge">5</div>
                <div className="step-content">
                  <div className="step-header">
                    <ShieldCheck size={20} className="step-icon text-primary" />
                    <h3>Official Electronic Ticket (E-Ticket) Issuance</h3>
                  </div>
                  <p>
                    Once the PNR is confirmed, the airline's automated ticketing server transmits official
                    <strong> 13-digit Electronic Ticket Numbers</strong> (for example: 001-1234567890 for American Airlines,
                    006 for Delta, 016 for United).
                  </p>
                  <p>
                    Each passenger on your reservation receives their individual e-ticket number linked directly to the
                    airline's electronic manifest. At this exact moment, your ticket is fully confirmed and active.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="timeline-step">
                <div className="step-badge">6</div>
                <div className="step-content">
                  <div className="step-header">
                    <MailCheck size={20} className="step-icon text-primary" />
                    <h3>E-Ticket Dispatch & Post-Ticketing Support</h3>
                  </div>
                  <p>
                    We immediately send a comprehensive <strong>E-Ticket Confirmation Email</strong> containing:
                  </p>
                  <ul className="bullet-list">
                    <li>Your 6-character Airline Confirmation Code (PNR)</li>
                    <li>Individual 13-digit E-Ticket Number(s)</li>
                    <li>Full flight breakdown (flight numbers, terminal, baggage allowance, times)</li>
                    <li>Payment invoice showing base fare, taxes, and service fees</li>
                    <li>Direct links to the airline's website for online check-in and seat selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How to Verify on Airline Website */}
          <section className="policy-section">
            <h2>How to Verify Your Reservation on the Airline's Website</h2>
            <p>
              We encourage all travelers to verify their booking directly on the operating airline’s official website:
            </p>
            <ol className="number-list">
              <li>Visit the operating airline's official website (e.g., aa.com, delta.com, united.com, emirates.com).</li>
              <li>Navigate to the <strong>“Manage Booking”</strong>, <strong>“My Trips”</strong>, or <strong>“Check-In”</strong> tab.</li>
              <li>Enter your <strong>6-character Airline Confirmation Code (PNR)</strong> and the passenger's <strong>Last Name</strong>.</li>
              <li>Your complete flight status, assigned seats, and e-ticket status will be displayed directly on the airline's portal.</li>
            </ol>
          </section>

          {/* Exceptions & Delays */}
          <section className="policy-section">
            <h2>What Happens If Ticketing Takes Longer Than Usual?</h2>
            <div className="highlight-callout">
              <Clock size={24} className="callout-icon" />
              <div>
                <strong>Ticketing Timeline Expectations</strong>
                <p>
                  Over 95% of e-tickets are issued within 15 to 60 minutes of booking. In rare circumstances—such as
                  complex multi-carrier international itineraries, codeshare coordination, or routine credit card fraud
                  safety checks—issuance may take up to 4 hours.
                </p>
                <p>
                  If you have not received your e-ticket receipt within 4 hours, or if you are departing within 24 hours,
                  please call our 24/7 Ticketing Help Desk immediately at <strong>+1 347-777-1900</strong>.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
