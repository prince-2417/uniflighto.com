import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { AlertOctagon, ShieldAlert, FileText, ExternalLink, Plane, CheckCircle2 } from 'lucide-react'

export default function DisclaimerPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Legal Notices"
        title="Disclaimer"
        description="Important legal disclaimers regarding our independent agency status, third-party carrier operations, trademarks, and pricing."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <AlertOctagon className="section-icon text-primary" size={28} />
              <div>
                <h2>Independent Online Travel Agency Status</h2>
                <p className="subtitle">Clarification of our role as an intermediary booking service.</p>
              </div>
            </div>

            <p>
              <strong>Uniflighto (uniflighto.com)</strong>, operated by Uniflighto Travel LLC, is an
              <strong> independent travel agency</strong>. We are not an airline, carrier, or direct transportation
              provider. We do not own, manage, operate, or control any aircraft, ground transportation, hotels, or
              other travel suppliers featured on our website.
            </p>
            <p>
              Our role is strictly that of an intermediary: we provide search, comparison, and booking fulfillment
              services that connect travelers with licensed third-party airlines and suppliers. When you make a booking,
              the ultimate contract of carriage is established directly between you (the traveler) and the operating airline.
            </p>
          </section>

          <section className="policy-section">
            <h2>Trademarks & Nominative Fair Use</h2>
            <div className="highlight-callout">
              <ShieldAlert size={24} className="callout-icon" />
              <div>
                <strong>Third-Party Intellectual Property</strong>
                <p>
                  All brand names, registered trademarks, logos, service marks, and trade dress belonging to airlines
                  (including but not limited to American Airlines, Delta Air Lines, United Airlines, Southwest, British Airways,
                  Emirates, Lufthansa, Air Canada, and others) displayed on <strong>uniflighto.com</strong> are the property
                  of their respective legal owners.
                </p>
                <p>
                  Their use on this website is solely for descriptive and identification purposes under the doctrine of
                  nominative fair use. The display of these marks does not imply or constitute an endorsement, official
                  partnership, or direct operational relationship between Uniflighto and the respective airlines.
                </p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>Fares, Seat Availability & Rate Fluctuations</h2>
            <p>
              Airfares, seat inventory, and flight schedules are dynamically controlled by airlines through central
              reservation databases. While Uniflighto makes every effort to provide real-time, accurate pricing:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Fares Are Not Guaranteed Until Ticketed:</strong> Fares quoted during search or displayed in
                advertisements are subject to real-time seat inventory availability and may change without prior notice
                until payment is authorized and official 13-digit electronic tickets have been successfully issued by the airline.
              </li>
              <li>
                <strong>Price Adjustments Prior to Issuance:</strong> In the rare event that an airline updates a fare
                or withdraws seat inventory between the moment your booking is submitted and ticket issuance, we will
                notify you immediately. You will have the option to accept the updated fare or cancel the reservation with a 100% full refund.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Operational Disruptions & Airline Liability</h2>
            <p>
              Uniflighto Travel LLC is not liable for any personal injury, property damage, financial loss, delay,
              inconvenience, or irregularity caused by:
            </p>
            <ul className="bullet-list">
              <li>Airline cancellations, technical groundings, mechanical delays, or schedule modifications.</li>
              <li>Acts of God, adverse weather conditions, natural disasters, or volcanic activity.</li>
              <li>Strikes, labor disputes, airport closures, or civil unrest.</li>
              <li>Government travel restrictions, border closures, quarantine mandates, or visa denials.</li>
              <li>Denied boarding due to insufficient travel documentation or failure to arrive at the departure gate on time.</li>
            </ul>
            <p>
              In the event of such disruptions, your rights and compensation remedies are governed by the operating
              airline’s formal <em>Conditions of Carriage</em>, applicable United States Department of Transportation (DOT) rules,
              and international treaties (such as the Montreal Convention). Uniflighto’s travel specialists will actively
              assist you in securing re-routing or eligible refunds from the carrier.
            </p>
          </section>

          <section className="policy-section">
            <h2>External Links & Third-Party Content</h2>
            <p>
              Our website may contain hyperlinks to third-party web portals, airport authorities, or travel service
              vendors. Uniflighto does not control, endorse, or assume responsibility for the content, privacy practices,
              or operational reliability of external third-party websites.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
