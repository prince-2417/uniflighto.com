import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Luggage, AlertTriangle, ShieldCheck, Clock, FileText, CheckCircle2 } from 'lucide-react'

export default function DamageManagementPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Baggage Protection Guidelines"
        title="Damage Management Policy"
        description="Crucial procedures, deadlines, airline liability limits, and assistance protocols for delayed, damaged, or lost luggage."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Luggage className="section-icon text-primary" size={28} />
              <div>
                <h2>Baggage Care & Damage Claims Protocol</h2>
                <p className="subtitle">Know your passenger rights and required procedures when luggage issues occur.</p>
              </div>
            </div>

            <p>
              When traveling, few things are more frustrating than arriving at your destination to discover that your
              checked luggage has been damaged, delayed, or lost.
            </p>
            <p>
              While <strong>Uniflighto (uniflighto.com)</strong> operates as an independent ticketing intermediary and does
              not directly transport or physically handle luggage, we are committed to helping our travelers navigate
              airline claim procedures swiftly and effectively.
            </p>

            <div className="highlight-callout alert-style">
              <AlertTriangle size={24} className="callout-icon" />
              <div>
                <strong>CRITICAL RULE: File a Report Before Leaving the Airport!</strong>
                <p>
                  If your bag is damaged or does not appear on the baggage carousel, <strong>do not leave the airport baggage claim area</strong>.
                  You must immediately report the issue to the <strong>operating airline’s Baggage Service Desk</strong>
                  and obtain a written <strong>Property Irregularity Report (PIR)</strong> with a unique 10-character file reference
                  (e.g., JFKDL12345). Without an official PIR, airlines will reject claims.
                </p>
              </div>
            </div>
          </section>

          {/* Statutory Time Limits */}
          <section className="policy-section">
            <h2>Statutory Deadlines for Baggage Claims</h2>
            <p>
              Under international aviation law (the <strong>Montreal Convention</strong>) and <strong>U.S. Department of Transportation (DOT)</strong> regulations,
              strict filing deadlines apply:
            </p>

            <div className="feature-grid-3">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Clock size={20} />
                </div>
                <h3>Damaged Baggage</h3>
                <p className="highlight-text">Within 7 Days</p>
                <p>
                  You must submit a formal written notice of claim to the operating airline within <strong>7 days</strong> of
                  receiving the damaged luggage, attaching photographs and original purchase receipts.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Clock size={20} />
                </div>
                <h3>Delayed Baggage</h3>
                <p className="highlight-text">Within 21 Days</p>
                <p>
                  For delayed luggage, a written claim for reasonable interim expense reimbursement (toiletries, essential clothing)
                  must be filed within <strong>21 days</strong> of the date the bag was returned to you.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Clock size={20} />
                </div>
                <h3>Lost Baggage</h3>
                <p className="highlight-text">After 21 Days</p>
                <p>
                  If the operating airline cannot locate your bag within <strong>21 consecutive days</strong>, it is officially
                  classified as lost. You may then submit a full claim for the fair market value of contents up to statutory liability limits.
                </p>
              </div>
            </div>
          </section>

          {/* Airline Liability Limits */}
          <section className="policy-section">
            <h2>Statutory Airline Liability Limits</h2>
            <div className="liability-cards-grid">
              <div className="liability-box">
                <span className="liability-badge">Domestic U.S. Flights</span>
                <h3>Up to $3,800 Per Passenger</h3>
                <p>
                  Governed by 14 CFR Part 254 (DOT). Airlines operating domestic U.S. flights are liable for provable losses
                  up to $3,800 per passenger for lost, damaged, or delayed baggage.
                </p>
              </div>

              <div className="liability-box">
                <span className="liability-badge">International Flights</span>
                <h3>Approx. $1,700 (1,288 SDRs)</h3>
                <p>
                  Governed by the Montreal Convention. Airline liability for international carriage is capped at approximately
                  1,288 Special Drawing Rights (SDRs) per traveler, regardless of baggage weight.
                </p>
              </div>
            </div>
          </section>

          {/* Excluded Items */}
          <section className="policy-section">
            <h2>Items Never to Place in Checked Luggage</h2>
            <p>
              Under airline tariffs and standard conditions of carriage, airlines categorically exclude liability for fragile,
              valuable, or perishable items packed in checked baggage. <strong>Always keep the following in your carry-on bag:</strong>
            </p>
            <div className="services-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div><strong>Critical Documents:</strong> Passports, visas, driver’s licenses, birth certificates, and flight itineraries.</div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div><strong>Financial Assets:</strong> Cash, credit cards, traveler's checks, negotiable bonds, and precious metals.</div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div><strong>High-Value Electronics:</strong> Laptops, tablets, smartphones, cameras, and external memory drives.</div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div><strong>Vital Health Items:</strong> Prescription medications, medical devices, inhalers, and eyeglasses.</div>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="text-primary" />
                <div><strong>Jewelry & Heirlooms:</strong> Fine watches, family heirlooms, designer jewelry, and irreplaceable keepsakes.</div>
              </div>
            </div>
          </section>

          {/* How Uniflighto Helps */}
          <section className="policy-section">
            <h2>How Uniflighto Assists with Baggage Disruptions</h2>
            <p>
              If your baggage is mishandled by an airline on an itinerary booked through Uniflighto:
            </p>
            <ol className="number-list">
              <li>File the initial Property Irregularity Report (PIR) at the airport desk and take photos of your claim receipt.</li>
              <li>Contact Uniflighto’s Customer Care desk at <strong>+1 347-777-1900</strong> or email your PIR number to <strong>support@uniflighto.com</strong>.</li>
              <li>Our support team will track your WorldTracer airline status, liaise with carrier lost-and-found coordinators, and guide you through required documentation for interim expense reimbursement.</li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  )
}
