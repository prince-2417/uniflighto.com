import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Receipt, DollarSign, ShieldCheck, AlertCircle, FileText } from 'lucide-react'

export default function TaxesAndFeesPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="Regulatory Fee Schedule"
        title="Taxes and Fees"
        description="Comprehensive schedule of government taxes, airport passenger facility charges, security fees, and agency service fees."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Receipt className="section-icon text-primary" size={28} />
              <div>
                <h2>Overview of Airfare Taxes & Fees</h2>
                <p className="subtitle">Understanding every component of your flight ticket price.</p>
              </div>
            </div>

            <p>
              In accordance with United States Department of Transportation (DOT) regulations (14 CFR Part 399),
              <strong> Uniflighto (uniflighto.com)</strong> provides full disclosure of all taxes, government levies,
              airport facility charges, and agency fulfillment fees applicable to commercial airline tickets.
            </p>
            <p>
              When you search for flights on Uniflighto, the total price displayed on your search results and checkout page
              always includes the base airfare plus all mandatory government and airport charges. Below is an itemized guide
              explaining standard fees commonly applied to domestic and international itineraries.
            </p>
          </section>

          {/* Government Taxes Table */}
          <section className="policy-section">
            <h2>Government & Airport-Imposed Taxes and Surcharges</h2>
            <div className="table-responsive-card">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Fee Name / Code</th>
                    <th>Applies To</th>
                    <th>Standard Amount (USD)</th>
                    <th>Description / Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>U.S. September 11th Security Fee (AY)</strong></td>
                    <td>All commercial passengers originating at U.S. airports</td>
                    <td>$5.60 per one-way enplanement</td>
                    <td>Collected by the TSA to fund airport checkpoint security and passenger screening operations.</td>
                  </tr>
                  <tr>
                    <td><strong>U.S. Domestic Flight Segment Fee (ZP)</strong></td>
                    <td>Each domestic flight segment (takeoff & landing)</td>
                    <td>$5.00 per segment</td>
                    <td>Assessed for each individual takeoff and landing segment within the United States.</td>
                  </tr>
                  <tr>
                    <td><strong>Passenger Facility Charge (PFC / XF)</strong></td>
                    <td>Passengers departing participating U.S. airports</td>
                    <td>Up to $4.50 per flight leg (Max $18.00 per round-trip)</td>
                    <td>Levied directly by local municipal airport authorities for airport terminal and runway modernization.</td>
                  </tr>
                  <tr>
                    <td><strong>U.S. Transportation Excise Tax (US)</strong></td>
                    <td>Domestic U.S. mainland travel and eligible buffer zones</td>
                    <td>7.5% of base ticket price</td>
                    <td>Federal excise tax supporting the Airport and Airway Trust Fund (FAA air traffic management).</td>
                  </tr>
                  <tr>
                    <td><strong>Alaska / Hawaii Facilities Tax (US)</strong></td>
                    <td>Flights arriving in or departing from Alaska or Hawaii</td>
                    <td>$11.10 each way</td>
                    <td>Mandated federal facility fee for flights to and from non-contiguous U.S. states.</td>
                  </tr>
                  <tr>
                    <td><strong>U.S. International Transportation Tax</strong></td>
                    <td>International flights arriving in or departing from the U.S.</td>
                    <td>$22.20 per departure / arrival</td>
                    <td>Federal international travel tax applied to cross-border journeys entering or leaving U.S. airspace.</td>
                  </tr>
                  <tr>
                    <td><strong>Customs User Fee (YC)</strong></td>
                    <td>International arrivals into the United States</td>
                    <td>$6.97 per passenger</td>
                    <td>Assessed by U.S. Customs and Border Protection (CBP) for passenger and customs clearance.</td>
                  </tr>
                  <tr>
                    <td><strong>Immigration Inspection Fee (XY)</strong></td>
                    <td>International arrivals into the United States</td>
                    <td>$7.00 per passenger</td>
                    <td>Supports federal border security and immigration document inspection.</td>
                  </tr>
                  <tr>
                    <td><strong>APHIS Agricultural Inspection Fee (XA)</strong></td>
                    <td>International arrivals into the United States</td>
                    <td>$3.83 per passenger</td>
                    <td>Collected for USDA Animal and Plant Health Inspection Service biosecurity screening.</td>
                  </tr>
                  <tr>
                    <td><strong>Foreign Government & Airport Taxes</strong></td>
                    <td>International departure, transit, and arrival airports</td>
                    <td>Varies by country ($15 – $180)</td>
                    <td>Includes international airport user fees, foreign departure taxes, security charges, and local VAT/GST.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Carrier Surcharges & Agency Fees */}
          <section className="policy-section">
            <h2>Carrier Surcharges & Agency Service Fees</h2>
            <div className="table-responsive-card">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Fee Type</th>
                    <th>Standard Rate (USD)</th>
                    <th>Applicability & Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Airline Fuel / Carrier Surcharges (YQ / YR)</strong></td>
                    <td>Determined by carrier ($20 – $400+)</td>
                    <td>
                      Carrier-imposed charges levied directly by airlines to offset volatile jet fuel expenses.
                      These charges are mandated by the operating carrier and are non-negotiable.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Standard Online Booking Service Fee</strong></td>
                    <td>$0.00 – $35.00 per passenger</td>
                    <td>
                      Covers technology infrastructure, multi-GDS live inventory aggregation, automated ticket issuance,
                      and 24/7 travel desk customer care. Fully included in the final displayed total at checkout.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Telephone Assisted Booking Fee</strong></td>
                    <td>$25.00 – $45.00 per passenger</td>
                    <td>
                      Applies to reservations booked over the phone with a live travel agent specialist requiring custom routing,
                      multi-airline consolidator fares, or complex multi-city scheduling.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Important Disclosures */}
          <section className="policy-section">
            <h2>Important Notes Regarding Fee Refunds</h2>
            <div className="highlight-callout">
              <AlertCircle size={24} className="callout-icon" />
              <div>
                <strong>Fee Refundability Standards</strong>
                <p>
                  Government-imposed taxes and airport fees are subject to government statutory adjustments without prior notice.
                  In the event of a flight cancellation, government taxes are typically refundable upon request if the ticket was unused,
                  subject to airline processing rules. Agency service fees cover booking and consultation services rendered at the time
                  of purchase and are non-refundable once tickets have been successfully issued.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
