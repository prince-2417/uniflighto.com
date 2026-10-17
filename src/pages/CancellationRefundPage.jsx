import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { RefreshCcw, Clock, ShieldCheck, AlertCircle, DollarSign, CheckCircle2 } from 'lucide-react'

export default function CancellationRefundPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="DOT Consumer Protection Compliant"
        title="Cancellation and Refund Policy"
        description="Clear rules for 24-hour penalty-free cancellations, airline involuntary flight cancellations, and voluntary refund processing."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <RefreshCcw className="section-icon text-primary" size={28} />
              <div>
                <h2>Cancellation & Refund Overview</h2>
                <p className="subtitle">Committed to fair, clear, and DOT-compliant cancellation rules.</p>
              </div>
            </div>

            <p>
              Travel plans can change unexpectedly. At <strong>Uniflighto (uniflighto.com)</strong>, we ensure our
              cancellation and refund practices strictly comply with <strong>U.S. Department of Transportation (DOT)</strong> regulations,
              international air transport conventions, and individual airline tariff rules.
            </p>
            <p>
              Below is a comprehensive guide to when refunds are legally guaranteed, how voluntary cancellations are evaluated,
              and the exact timelines for receiving funds.
            </p>
          </section>

          {/* DOT 24-Hour Rule */}
          <section className="policy-section">
            <h2>1. The 24-Hour Penalty-Free Cancellation Rule</h2>
            <div className="highlight-callout">
              <Clock size={24} className="callout-icon" />
              <div>
                <strong>100% Full Refund Within 24 Hours</strong>
                <p>
                  In accordance with U.S. Department of Transportation mandates, qualifying tickets booked through Uniflighto
                  at least <strong>7 days (168 hours)</strong> prior to the scheduled flight departure date may be canceled
                  within <strong>24 hours of booking</strong> for a <strong>100% full cash refund</strong> with zero cancellation penalties.
                </p>
              </div>
            </div>

            <p>
              To execute a 24-hour void, you must contact our 24/7 Ticketing Help Desk at <strong>+1 347-777-1900</strong> or
              submit a written cancellation request to <strong>support@uniflighto.com</strong> prior to the expiration of the
              24-hour window. Once the reservation is voided, all authorization holds or charges are reversed in full.
            </p>
          </section>

          {/* Involuntary Cancellations */}
          <section className="policy-section">
            <h2>2. Involuntary Airline Cancellations & Schedule Changes</h2>
            <p>
              Under federal DOT rules, if the operating airline initiates an involuntary disruption to your travel:
            </p>
            <ul className="bullet-list">
              <li><strong>Flight Cancellation:</strong> The airline cancels your scheduled flight and does not provide an acceptable alternate itinerary.</li>
              <li><strong>Significant Schedule Delay:</strong> The airline changes flight departure or arrival times by more than <strong>3 hours domestically</strong> or <strong>6 hours internationally</strong>.</li>
              <li><strong>Route Modification:</strong> The airline introduces an unscheduled layover or changes connecting airports unacceptable to you.</li>
              <li><strong>Cabin Class Downgrade:</strong> The airline downgrades your cabin class (e.g., from Business to Economy).</li>
            </ul>
            <p>
              In all such circumstances, <strong>you are legally entitled to a 100% full cash refund</strong> for the unused
              portion of your airfare, even if you purchased a "non-refundable" ticket. Uniflighto will advocate directly
              with the carrier to process your refund without delay.
            </p>
          </section>

          {/* Voluntary Cancellations Beyond 24 Hours */}
          <section className="policy-section">
            <h2>3. Voluntary Cancellations Beyond the 24-Hour Window</h2>
            <p>
              If you choose to cancel your flight after the 24-hour grace period has lapsed, eligibility is governed by the
              specific fare rules established by the operating airline:
            </p>
            <div className="fare-rules-grid">
              <div className="fare-rule-box">
                <h4>Refundable Fares</h4>
                <p>Eligible for cash refunds to the original payment method, minus any airline cancellation fee and agency administrative fee.</p>
              </div>

              <div className="fare-rule-box">
                <h4>Non-Refundable Standard Fares</h4>
                <p>Ineligible for cash refunds. The unused value is typically converted into an <strong>Airline Future Travel Credit (E-Credit)</strong> valid for 12 months with the carrier.</p>
              </div>

              <div className="fare-rule-box">
                <h4>Basic Economy / Promotional Fares</h4>
                <p>Most airlines strictly prohibit changes or cancellations on Basic Economy fares after the 24-hour window, resulting in total forfeiture of value.</p>
              </div>
            </div>
            <p className="note-text" style={{ marginTop: '14px' }}>
              For voluntary cancellations, Uniflighto applies a nominal processing fee ($30 domestic / $60 international per passenger)
              to manage credit conversion and tracking.
            </p>
          </section>

          {/* Refund Processing Timelines */}
          <section className="policy-section">
            <h2>4. Refund Processing Timelines & Disbursement</h2>
            <div className="feature-grid-2">
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <DollarSign size={22} />
                </div>
                <h3>Airline Settlement (7–14 Business Days)</h3>
                <p>
                  Upon approval of a cash refund, airlines transmit funds to our merchant acquirer within <strong>7 to 14 business days</strong>
                  for credit card purchases.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <h3>Bank Statement Reflection</h3>
                <p>
                  Depending on your card issuer or banking institution, the refund credit will reflect on your online
                  statement within <strong>1 to 2 subsequent billing cycles</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* How to Cancel */}
          <section className="policy-section">
            <h2>5. How to Request a Cancellation or Refund</h2>
            <p>To ensure your request is recorded prior to departure deadlines:</p>
            <ol className="number-list">
              <li>Locate your 6-character Airline Confirmation Code (PNR) and ticket number from your e-ticket receipt.</li>
              <li>Call our 24/7 Cancellation Desk at <strong>+1 347-777-1900</strong> for immediate assistance, or email <strong>support@uniflighto.com</strong> with the subject line <em>"Cancellation Request - [PNR]"</em>.</li>
              <li>Our agent will calculate your refund or travel credit eligibility and send you a formal confirmation email once processed.</li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  )
}
