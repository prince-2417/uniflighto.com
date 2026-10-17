import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { DollarSign, FileCheck, RefreshCw, AlertCircle, Headphones, Clock, CheckCircle } from 'lucide-react'

export default function PostTicketingFeePage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Service Fee Transparency"
        title="Post-Ticketing Fee"
        description="Clear breakdown of administrative and handling fees applied to post-booking modifications, cancellations, and special travel requests."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <DollarSign className="section-icon text-primary" size={28} />
              <div>
                <h2>What Are Post-Ticketing Fees?</h2>
                <p className="subtitle">Understanding administrative service costs after ticket issuance.</p>
              </div>
            </div>

            <p>
              Once your electronic airline ticket has been successfully validated, issued, and registered in the airline's
              global inventory system, any subsequent voluntary adjustments—such as date changes, routing modifications,
              name corrections, or voluntary cancellations—require specialized manual processing by our certified ticketing agents.
            </p>
            <p>
              <strong>Uniflighto (uniflighto.com)</strong> charges modest administrative handling fees for these post-issuance services.
              These fees compensate for the manual labor, GDS re-issuance software transactions, and continuous communication
              with airline tariff desks on your behalf.
            </p>

            <div className="highlight-callout">
              <AlertCircle size={24} className="callout-icon" />
              <div>
                <strong>Agency Fees vs. Airline Penalties</strong>
                <p>
                  Uniflighto post-ticketing fees are <strong>separate and distinct</strong> from any penalties, reissue fees,
                  or fare differences imposed directly by the operating airline. The total cost of any voluntary change
                  equals: <em>Airline Penalty + Airfare Difference (if any) + Uniflighto Post-Ticketing Handling Fee</em>.
                </p>
              </div>
            </div>
          </section>

          {/* Post-Ticketing Fee Schedule */}
          <section className="policy-section">
            <h2>Post-Ticketing Service Fee Schedule</h2>
            <div className="table-responsive-card">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Service Request</th>
                    <th>Domestic U.S. Flights</th>
                    <th>International Flights</th>
                    <th>Description & Scope</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Voluntary Flight Date / Time Change</strong></td>
                    <td>$35.00 per passenger</td>
                    <td>$75.00 per passenger</td>
                    <td>
                      Reviewing airline tariff rules, re-pricing alternative flights, canceling old segments,
                      and re-issuing new e-tickets in the GDS (+ airline fee and fare difference).
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Voluntary Ticket Cancellation & Airline Credit</strong></td>
                    <td>$30.00 per passenger</td>
                    <td>$60.00 per passenger</td>
                    <td>
                      Canceling active flight segments before departure to preserve ticket value, securing airline
                      future travel credits, and tracking credit expiration dates for future rebooking.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Refund Processing Assistance (Eligible Fares)</strong></td>
                    <td>$35.00 per passenger</td>
                    <td>$50.00 per passenger</td>
                    <td>
                      Auditing ticket coupons, submitting formal electronic refund applications to airline accounting,
                      and tracking settlement to original payment card.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Name Correction (Typographical Errors)</strong></td>
                    <td>$25.00 per passenger</td>
                    <td>$50.00 per passenger</td>
                    <td>
                      Coordinating minor spelling corrections (up to 3 characters) with airline security and waiver desks
                      to ensure TSA boarding pass compliance without canceling the ticket.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Special Service Requests (SSR)</strong></td>
                    <td>$15.00 per request</td>
                    <td>$25.00 per request</td>
                    <td>
                      Manual entry and airline confirmation for wheelchair assistance, oxygen/medical equipment,
                      unaccompanied minor escort, bassinet requests, or special dietary meals.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Pet-In-Cabin Coordination</strong></td>
                    <td>$20.00 per request</td>
                    <td>$35.00 per request</td>
                    <td>
                      Checking carrier pet quota on specific aircraft, confirming crate dimensions, and reserving space
                      (airline pet charges apply separately).
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Involuntary Airline Schedule Disruption Re-accommodation</strong></td>
                    <td><strong className="text-success">$0.00 (FREE)</strong></td>
                    <td><strong className="text-success">$0.00 (FREE)</strong></td>
                    <td>
                      If the operating airline cancels your flight or changes schedules by more than 3 hours, our
                      re-accommodation assistance and waiver claims are 100% complimentary.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Important Rules */}
          <section className="policy-section">
            <h2>Important Terms Governing Post-Ticketing Services</h2>
            <ul className="bullet-list">
              <li>
                <strong>Non-Refundability of Post-Ticketing Fees:</strong> Once our ticketing agents have executed the change,
                cancellation, or SSR request in the reservation system, the post-ticketing service fee is earned and non-refundable.
              </li>
              <li>
                <strong>No-Show Deadlines:</strong> Flight changes or cancellations must be requested at least 4 to 24 hours
                prior to scheduled departure (depending on carrier rules). Failing to cancel before flight departure is deemed a
                “No-Show”, resulting in total forfeiture of ticket value by the airline.
              </li>
              <li>
                <strong>Full Disclosure Before Processing:</strong> You will always be provided with a complete, transparent
                quote showing all airline fees, fare differences, and Uniflighto fees before any changes are confirmed.
              </li>
            </ul>

            <div className="contact-box-simple" style={{ marginTop: '20px' }}>
              <p><strong>Need to request a flight change or cancellation?</strong></p>
              <p>Call our 24/7 Ticketing Desk immediately at <strong>+1 347-777-1900</strong> or email <a href="mailto:support@uniflighto.com">support@uniflighto.com</a>.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
