import React from 'react'
import PageBanner from '../components/PageBanner'
import PolicySidebar from '../components/PolicySidebar'
import { Scale, FileText, CheckCircle2, Shield, AlertTriangle } from 'lucide-react'

export default function TermsConditionsPage() {
  return (
    <div className="policy-page-wrapper">
      <PageBanner
        eyebrow="User Agreement"
        title="Terms of Conditions"
        description="The legally binding terms and conditions governing your use of uniflighto.com and flight booking services."
        updatedDate="January 2026"
      />

      <div className="policy-container">
        <PolicySidebar />

        <main className="policy-content">
          <section className="policy-section">
            <div className="section-title-wrap">
              <Scale className="section-icon text-primary" size={28} />
              <div>
                <h2>Acceptance of Terms</h2>
                <p className="subtitle">Please read these terms carefully before utilizing our services.</p>
              </div>
            </div>

            <p>
              These Terms and Conditions (“Terms”) constitute a legally binding agreement between you (“User”, “Traveler”,
              or “Customer”) and <strong>Uniflighto Travel LLC</strong> (“Uniflighto”, “we”, “our”, or “us”), governing
              your access to and use of <strong>uniflighto.com</strong>, including all booking services, flight searches,
              and customer support channels.
            </p>
            <p>
              By accessing, browsing, or completing a travel reservation on this website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms, as well as our <a href="/privacy-policy">Privacy Policy</a>,
              <a href="/disclaimer">Disclaimer</a>, and the respective airline’s <em>Conditions of Carriage</em>.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. User Eligibility & Authority</h2>
            <p>
              By using this website, you warrant and represent that:
            </p>
            <ul className="bullet-list">
              <li>You are at least 18 years of age and possess the legal authority to enter into binding agreements.</li>
              <li>You have the legal consent of all persons on whose behalf you submit booking details.</li>
              <li>All information supplied by you on this website is true, accurate, current, and complete.</li>
              <li>You will not make any speculative, false, or fraudulent reservations.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. Accurate Passenger Information & Travel Documents</h2>
            <p>
              The Transportation Security Administration (TSA) and international civil aviation authorities mandate strict
              accuracy for passenger records:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Name Matching:</strong> Passenger names entered at checkout must match government-issued identification
                (passport for international travel; REAL ID or state driver’s license for domestic U.S. travel) exactly.
              </li>
              <li>
                <strong>Non-Transferability:</strong> Airline tickets are strictly non-transferable. You cannot alter the
                primary passenger name or assign the ticket to another individual once issued.
              </li>
              <li>
                <strong>Passports & Visas:</strong> The traveler is solely responsible for obtaining valid passports
                (with at least 6 months remaining validity for international travel), entry visas, transit visas, and health clearances.
                Uniflighto is not responsible for passengers denied boarding due to incomplete documentation.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Fares, Payment Authorization & Billing</h2>
            <p>
              All prices quoted on <strong>uniflighto.com</strong> are in United States Dollars (USD) unless explicitly stated:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>Payment Authorization:</strong> By providing credit or debit card details, you authorize Uniflighto
                and the operating airline to process the full quoted transaction amount.
              </li>
              <li>
                <strong>Split Billing:</strong> You acknowledge that your bank statement may reflect two separate transactions
                (one from the airline for airfare and government taxes, and one from Uniflighto for service fees) totaling the exact authorized sum.
              </li>
              <li>
                <strong>Chargebacks:</strong> In the event of a billing question, you agree to contact Uniflighto customer care
                at +1 347-777-1900 before initiating a chargeback or dispute with your card issuer. Fraudulent chargebacks will be vigorously contested.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Cancellations, Changes & Refunds</h2>
            <p>
              All flight cancellations, date adjustments, and refunds are subject to airline fare rules, DOT regulations,
              and Uniflighto’s <a href="/cancellation-and-refund">Cancellation & Refund Policy</a>:
            </p>
            <ul className="bullet-list">
              <li>
                <strong>24-Hour Cancellation:</strong> Bookings made at least 7 days prior to flight departure may be canceled
                within 24 hours of purchase for a 100% full refund under DOT guidelines.
              </li>
              <li>
                <strong>Voluntary Changes:</strong> Post-ticketing modifications are subject to airline penalties, fare differences,
                and Uniflighto post-ticketing service fees.
              </li>
              <li>
                <strong>Involuntary Cancellations:</strong> If the airline cancels or significantly alters your flight, you are entitled
                to an involuntary re-routing or full cash refund as mandated by DOT rules.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Uniflighto Travel LLC, its officers, employees, and affiliates
              shall not be liable for any indirect, punitive, incidental, special, or consequential damages arising from:
            </p>
            <ul className="bullet-list">
              <li>The actions, errors, omissions, warranties, or breaches of any airline or travel supplier.</li>
              <li>Delays, cancellations, overbookings, strikes, or weather events affecting your journey.</li>
              <li>Loss, delayed delivery, or damage to checked or carry-on baggage.</li>
            </ul>
            <p>
              In all cases, Uniflighto’s total aggregate liability arising out of any booking shall not exceed the service fee
              collected by Uniflighto for that specific transaction.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms and your use of <strong>uniflighto.com</strong> are governed by and construed in accordance with the
              laws of the <strong>State of New York, United States</strong>, without regard to conflict of law principles.
            </p>
            <p>
              Any dispute, controversy, or claim arising out of or relating to these Terms or our services shall be resolved
              through confidential, binding arbitration administered by the American Arbitration Association (AAA) in New York, NY,
              rather than in court, except that you may assert claims in small claims court if eligible.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
