import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { FileText, Plane, ShieldCheck, AlertCircle, CheckCircle2, Info } from 'lucide-react'

export default function FareDisclosurePage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Airfare Transparency"
        title="Fare Disclosure Policy"
        description="Understanding airline fare classes, ticket rules, Basic Economy restrictions, codeshare disclosures, and ancillary charges."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <FileText className="section-icon text-primary" size={28} />
              <div>
                <h2>Understanding Airline Fare Classes & Rules</h2>
                <p className="subtitle">Learn what is included and excluded in your specific ticket tier.</p>
              </div>
            </div>

            <p>
              In modern commercial aviation, airlines divide airplane cabins into distinct tariff classes, each carrying
              unique rules regarding baggage allowances, seat selection, change flexibility, and boarding priority.
            </p>
            <p>
              At <strong>Uniflighto (uniflighto.com)</strong>, we ensure you have complete clarity on what you are purchasing.
              Below is an essential overview of standard commercial airline fare tiers.
            </p>
          </section>

          {/* Cabin Classes Breakdown */}
          <section className="policy-section">
            <h2>Standard Airline Fare Tiers & Restrictions</h2>
            <div className="cabin-classes-grid">
              {/* Basic Economy */}
              <div className="cabin-card basic-tier">
                <div className="cabin-header">
                  <span className="cabin-badge">Entry Level</span>
                  <h3>Basic Economy / Light</h3>
                </div>
                <p className="cabin-summary">Lowest available price with the most restrictive airline conditions.</p>
                <ul className="cabin-features">
                  <li><strong>Baggage:</strong> Personal item only (some carriers prohibit standard overhead carry-on bags).</li>
                  <li><strong>Seat Selection:</strong> Automatically assigned at airport check-in or gate; no advance seat choices.</li>
                  <li><strong>Boarding:</strong> Board in the final boarding group.</li>
                  <li><strong>Changes / Cancellations:</strong> Strictly non-changeable and non-refundable after the 24-hour grace period.</li>
                  <li><strong>Upgrades:</strong> Ineligible for complimentary or paid frequent flyer mileage upgrades.</li>
                </ul>
              </div>

              {/* Main Cabin / Standard Economy */}
              <div className="cabin-card standard-tier">
                <div className="cabin-header">
                  <span className="cabin-badge">Most Popular</span>
                  <h3>Main Cabin / Standard Economy</h3>
                </div>
                <p className="cabin-summary">Traditional full-service economy with flexible options.</p>
                <ul className="cabin-features">
                  <li><strong>Baggage:</strong> 1 personal item + 1 standard overhead carry-on bag included.</li>
                  <li><strong>Seat Selection:</strong> Advance seat selection available (complimentary or nominal fee).</li>
                  <li><strong>Boarding:</strong> Standard general boarding group.</li>
                  <li><strong>Changes:</strong> Flight changes permitted on most major carriers (fare difference applies).</li>
                  <li><strong>Miles:</strong> Earn standard frequent flyer miles and loyalty status credits.</li>
                </ul>
              </div>

              {/* Premium Economy */}
              <div className="cabin-card premium-tier">
                <div className="cabin-header">
                  <span className="cabin-badge">Extra Comfort</span>
                  <h3>Premium Economy / Comfort+</h3>
                </div>
                <p className="cabin-summary">Enhanced legroom, priority boarding, and elevated in-flight service.</p>
                <ul className="cabin-features">
                  <li><strong>Comfort:</strong> 3 to 6 inches of additional legroom, dedicated cabin section, wider seats.</li>
                  <li><strong>Boarding:</strong> Early priority boarding ahead of main cabin travelers.</li>
                  <li><strong>Amenities:</strong> Complimentary premium snacks, alcoholic beverages, and amenity kits on international flights.</li>
                  <li><strong>Checked Baggage:</strong> Often includes 1 or 2 complimentary checked bags on long-haul routes.</li>
                </ul>
              </div>

              {/* Business & First */}
              <div className="cabin-card first-tier">
                <div className="cabin-header">
                  <span className="cabin-badge">Luxury & Flexibility</span>
                  <h3>Business & First Class</h3>
                </div>
                <p className="cabin-summary">The ultimate premium travel experience with full airport VIP privileges.</p>
                <ul className="cabin-features">
                  <li><strong>Airport Perks:</strong> Dedicated check-in counters, expedited security lanes, and airport lounge access.</li>
                  <li><strong>Seating:</strong> Lie-flat beds on long-haul flights or plush wide recliner seats on domestic routes.</li>
                  <li><strong>Baggage:</strong> 2 to 3 complimentary checked bags with priority baggage tagging.</li>
                  <li><strong>Dining:</strong> Multi-course gourmet meals, premium wines, and personalized attendant service.</li>
                  <li><strong>Flexibility:</strong> Maximum ticket flexibility with low or waived change penalties.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Codeshare Disclosure */}
          <section className="policy-section">
            <h2>Codeshare & Operating Carrier Disclosure</h2>
            <div className="highlight-callout">
              <Plane size={24} className="callout-icon" />
              <div>
                <strong>Operating Carrier Transparency (DOT Mandate)</strong>
                <p>
                  Airlines frequently enter into <strong>Codeshare Agreements</strong>, where one airline markets and sells a
                  flight under its own flight number, but the aircraft is physically operated by another partner airline.
                </p>
                <p>
                  <em>Example:</em> A flight purchased as <code>Delta Air Lines DL 8500</code> may be operated by an aircraft and crew
                  from <code>Air France</code> or <code>Virgin Atlantic</code>.
                </p>
                <p>
                  In accordance with U.S. DOT regulations, Uniflighto discloses the exact operating carrier on every flight
                  search result and e-ticket itinerary. In-flight amenities, baggage rules, and check-in counters are governed
                  by the <strong>operating carrier</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Ancillary Services */}
          <section className="policy-section">
            <h2>Optional Ancillary Airline Fees</h2>
            <p>
              In addition to the base airfare, airlines may charge optional fees for ancillary services requested directly by travelers:
            </p>
            <ul className="bullet-list">
              <li><strong>Checked Baggage Fees:</strong> Standard domestic checked bag fees typically range from $35 to $45 for the 1st bag and $45 to $60 for the 2nd bag.</li>
              <li><strong>Preferred Seat Assignments:</strong> Exit row seats, bulkhead seats, or front-of-cabin seats often carry supplemental carrier charges.</li>
              <li><strong>In-Flight Wi-Fi & Entertainment:</strong> Charged separately by the operating carrier on board.</li>
              <li><strong>Unaccompanied Minor Service:</strong> Mandatory airline supervision fees for children traveling alone ($100 – $150 per direction).</li>
              <li><strong>Pet Travel:</strong> In-cabin pet fees ($95 – $150 each way) or checked baggage cargo pet fees.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
