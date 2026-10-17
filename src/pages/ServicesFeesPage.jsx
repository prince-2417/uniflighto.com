import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Briefcase, DollarSign, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react'

export default function ServicesFeesPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Service Transparency"
        title="Services Fees"
        description="Comprehensive schedule and explanation of all Uniflighto agency booking, consultation, and fulfillment service fees."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Briefcase className="section-icon text-primary" size={28} />
              <div>
                <h2>Our Service Fee Principles</h2>
                <p className="subtitle">Clear, competitive, and always disclosed before you book.</p>
              </div>
            </div>

            <p>
              At <strong>Uniflighto (uniflighto.com)</strong>, we take pride in delivering immense value to travelers.
              Unlike automated ticket machines, we combine high-speed global distribution technology with human travel
              expertise to secure competitive airfares, verify complex flight connections, and support your journey around the clock.
            </p>
            <p>
              Our nominal agency service fees cover the operational, technical, and human costs of searching, reserving,
              securing, and servicing your airline tickets. All agency service fees are fully included in the total price
              displayed prior to payment confirmation.
            </p>
          </section>

          {/* Service Fees Table */}
          <section className="policy-section">
            <h2>Complete Agency Services Fee Schedule</h2>
            <div className="table-responsive-card">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Service Category</th>
                    <th>Fee Range (USD)</th>
                    <th>What Is Covered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Standard Online Flight Booking</strong></td>
                    <td>$0.00 – $35.00 per passenger</td>
                    <td>
                      Automated multi-GDS fare aggregation, direct airline NDC inventory access, 256-bit SSL encrypted
                      payment processing, instant e-ticket issuance, and email confirmation delivery.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Complex Multi-City & Global Itineraries</strong></td>
                    <td>$30.00 – $75.00 per passenger</td>
                    <td>
                      Manual route construction across non-interline partner airlines, stopover coordination,
                      layover viability checks, and split-ticket assembly for complex international routes.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Telephone Assisted Booking Desk</strong></td>
                    <td>$25.00 – $45.00 per passenger</td>
                    <td>
                      Direct phone consultation with a senior travel advisor to explore unpublished consolidator airfares,
                      senior/student specials, and customized flexible fare rules.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Group Travel (10+ Passengers)</strong></td>
                    <td>$15.00 – $30.00 per passenger</td>
                    <td>
                      Direct negotiation with airline group sales desks, blocked group seat inventory, coordinated passenger
                      manifests, and flexible payment schedule administration.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Voluntary Post-Ticketing Flight Change</strong></td>
                    <td>$35.00 (Domestic) / $75.00 (Intl)</td>
                    <td>
                      Tariff rule verification, re-pricing alternative dates, canceling old segments, GDS coupon reissue,
                      and re-validation with operating carriers (+ airline penalty & fare diff).
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Voluntary Cancellation & Future Credit Setup</strong></td>
                    <td>$30.00 (Domestic) / $60.00 (Intl)</td>
                    <td>
                      Canceling flight coupons before departure, locking ticket value, securing airline credit vouchers,
                      and tracking expiration dates for future rebooking.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Airline Involuntary Schedule Change Support</strong></td>
                    <td><strong className="text-success">$0.00 (Complimentary)</strong></td>
                    <td>
                      Proactive airline schedule change alerts, alternative flight re-booking, and waiver processing when
                      an airline delays or cancels flights.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What Your Service Fee Delivers */}
          <section className="policy-section">
            <h2>What Your Service Fee Includes</h2>
            <div className="feature-grid-2">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <h3>24/7 Dedicated Support</h3>
                <p>
                  Access our live customer service desk anytime—day or night. If adverse weather strikes or an airline
                  cancels your flight, you never have to navigate long airline phone queues alone.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <DollarSign size={22} />
                </div>
                <h3>Price Match Guarantee</h3>
                <p>
                  We back every booking with our 24-hour Price Match Promise. If an identical lower fare appears on an
                  accredited competitor within 24 hours, we match it or refund the difference.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <CheckCircle2 size={22} />
                </div>
                <h3>Anti-Fraud Safeguards</h3>
                <p>
                  Multi-layered digital fraud screening shields cardholders from identity theft, unauthorized card usage,
                  and fraudulent ticket cancellations.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Briefcase size={22} />
                </div>
                <h3>Travel Document Verification</h3>
                <p>
                  Our ticketing algorithms inspect passenger names, passport expirations, and TSA Secure Flight records
                  to prevent costly gate rejections.
                </p>
              </div>
            </div>
          </section>

          {/* Non-Refundable Disclosure */}
          <section className="policy-section">
            <h2>Non-Refundable Policy on Service Fees</h2>
            <p>
              Please note that Uniflighto agency service fees cover professional reservation, search, ticketing, and technology
              services that are fully rendered at the time of transaction completion.
            </p>
            <p>
              Consequently, in the event of subsequent voluntary traveler cancellations or modifications, Uniflighto booking
              service fees are <strong>non-refundable</strong>. In instances where an airline initiates an involuntary cancellation
              without alternate accommodation, our team will assist you in obtaining the maximum eligible airfare refund from the airline.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
